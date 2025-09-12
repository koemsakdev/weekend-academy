"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  CircleCheck,
  Copy,
  Loader2,
  Play,
  Terminal,
} from "lucide-react";
import useMounted from "@/hooks/useMounted";
import { Editor } from "@monaco-editor/react";
import { JSX, useEffect, useState } from "react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { cn } from "@/lib/utils";
import RunningCodeSkeleton from "@/app/(root)/_components/running-code-skeleton";

interface CodeSnippetProps {
  isShell: boolean;
  showLineNumbers: boolean;
  editorValue: string;
  language: string;
  mode: string;
}

const IconButton = ({
  onClick,
  icon,
  label,
  color = "text-white",
  classStyle,
  boxShadow = "0 0 10px #2ecc71",
  disabled = false,
}: {
  onClick?: () => void;
  icon: JSX.Element;
  label?: string;
  color?: string;
  classStyle?: string;
  boxShadow?: string;
  disabled?: boolean;
}) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: boxShadow }}
    whileTap={{ scale: 0.95, boxShadow: boxShadow }}
    onClick={onClick}
    className={cn(
      "p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-sm ring-1 ring-white/5 transition-colors flex items-center",
      classStyle
    )}
  >
    {icon}
    <span className={`text-sm font-medium ${color}`}>{label}</span>
  </motion.button>
);

export default function CodeSnippet({
  isShell,
  showLineNumbers,
  editorValue,
  language,
  mode,
}: CodeSnippetProps) {
  const [autoHeight, setAutoHeight] = useState("55");
  const [isCopied, setIsCopied] = useState(false);
  const [isOutputCopied, setIsOutputCopied] = useState(false);
  const [localEditor, setLocalEditor] = useState<any>(null); // local editor
  // Local ouput
  const [localOutput, setLocalOutput] = useState("");
  const [localError, setLocalError] = useState("");
  const [isLocalOutputRunning, setIsLocalOutputRunning] = useState(false);

  const {
    fontSize,
    theme,
    setTheme,
    runCode,
    isRunning,
    setEditor,
    error,
    output,
  } = useCodeEditorStore();
  const mounted = useMounted();
  const hasContent = error || output;

  useEffect(() => {
    setTheme(mode);
    if (localEditor) {
      localEditor.setValue(editorValue);
      setAutoHeight(localEditor.getContentHeight().toString());
    }
  }, [mode, localEditor, editorValue, setTheme]);

  useEffect(() => {
    if (isRunning) {
      setIsLocalOutputRunning(true);
    }

    if (output) {
      setLocalOutput(output);
    }

    if (error) {
      setLocalError(error);
    }
  }, [isRunning, output, error])

  const copyCode = async () => {
    const code = localEditor?.getValue() || editorValue;
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleRun = async () => {
    if (!localEditor) return;
    setEditor(localEditor);
    await runCode();
  };

  const handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(error || output);
    setIsOutputCopied(true);

    setTimeout(() => setIsOutputCopied(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="relative">
        <div className="bg-[#12121a]/90 backdrop-blur rounded-md border border-white/[0.05] p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
                <Image
                  src={`/${language}.png`}
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h2 className="text-sm font-medium text-white capitalize">
                  {language}
                </h2>
                <p className="text-xs text-gray-500 hidden md:block">
                  Copy and execute the snippet code here.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IconButton
                onClick={copyCode}
                boxShadow="0 0 10px #2ecc71"
                icon={
                  isCopied ? (
                    <CircleCheck className="size-3.5 text-green-500" />
                  ) : (
                    <Copy className="size-3.5 text-green-500" />
                  )
                }
                color={isCopied ? "text-green-300" : "text-green-500"}
              />
              {!isShell && (
                <IconButton
                  boxShadow="0 0 10px #006eff"
                  onClick={handleRun}
                  disabled={isRunning}
                  icon={
                    isRunning ? (
                      <div className="relative">
                        <Loader2 className="w-4 h-4 animate-spin text-white/70" />
                        <div className="absolute inset-0 blur animate-pulse" />
                      </div>
                    ) : (
                      <Play
                        className="size-3.5 text-blue-500"
                        strokeWidth={4}
                      />
                    )
                  }
                  color="text-blue-500 font-bold"
                />
                // <motion.button
                //   onClick={handleRun}
                //   disabled={isRunning}
                //   whileHover={{ scale: 1.02 }}
                //   whileTap={{ scale: 0.98 }}
                //   className={`
                //     group relative inline-flex items-center gap-2.5 px-5 py-2.5
                //     disabled:cursor-not-allowed
                //     focus:outline-none
                //   `}
                // >
                //   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90" />

                //   <div className="relative flex items-center gap-2.5">
                //     {isRunning ? (
                //       <>
                //         <div className="relative">
                //           <Loader2 className="w-4 h-4 animate-spin text-white/70" />
                //           <div className="absolute inset-0 blur animate-pulse" />
                //         </div>
                //         <span className="text-sm font-medium text-white/90">
                //           Executing...
                //         </span>
                //       </>
                //     ) : (
                //       <>
                //         <div className="relative flex items-center justify-center w-4 h-4">
                //           <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
                //         </div>
                //         <span className="text-sm font-medium text-white/90 group-hover:text-white">
                //           Run Code
                //         </span>
                //       </>
                //     )}
                //   </div>
                // </motion.button>
              )}
            </div>
          </div>

          <div className="relative group rounded-sm overflow-hidden ring-1 ring-white/[0.05]">
            <Editor
              height={`${autoHeight}px`}
              language={LANGUAGE_CONFIG[language].monacoLanguage}
              theme={theme}
              beforeMount={defineMonacoThemes}
              onMount={(editor) => setLocalEditor(editor)}
              options={{
                readOnly: true,
                domReadOnly: true,
                overviewRulerLanes: 0,
                lineNumbers: showLineNumbers ? "on" : "off",
                selectionHighlight: false,
                occurrencesHighlight: "off",
                minimap: { enabled: false },
                fontSize,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderWhitespace: "none",
                fontFamily: '"Ubuntu Mono", Consolas',
                fontLigatures: true,
                cursorBlinking: "solid",
                smoothScrolling: true,
                contextmenu: true,
                renderLineHighlight: "none",
                lineHeight: 1.6,
                letterSpacing: 0.5,
                roundedSelection: true,
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8,
                },
              }}
            />
          </div>
          {/* Output Panel */}
        </div>
      </div>
      {(localOutput || localError) && (
        <div className="relative bg-[#181825] rounded-md p-4 ring-1 ring-gray-800/50">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
                <Terminal className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-gray-300">Output</span>
            </div>

            {hasContent && (
              <IconButton
                onClick={handleCopy}
                boxShadow="0 0 10px #2ecc71"
                icon={
                  isOutputCopied ? (
                    <CircleCheck className="size-3.5 text-green-500" />
                  ) : (
                    <Copy className="size-3.5 text-green-500" />
                  )
                }
                color={isOutputCopied ? "text-green-300" : "text-green-500"}
              />
            )}
          </div>

          {/* Output */}
          <div className="relative">
            <div className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] rounded-sm p-4 h-auto overflow-auto font-mono text-sm">
              {isLocalOutputRunning ? (
                <RunningCodeSkeleton />
              ) : localError ? (
                <div className="flex items-start gap-2 text-red-400">
                  <AlertTriangle className="size-3.5 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-medium">Execution Error</div>
                    <pre className="whitespace-pre-wrap text-red-400/80">
                      {error}
                    </pre>
                  </div>
                </div>
              ) : (
                localOutput && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 mb-3">
                      <CheckCircle className="size-3.5" />
                      <span className="font-medium">Execution Successful</span>
                    </div>
                    <pre className="whitespace-pre-wrap text-gray-300">
                      {output}
                    </pre>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
