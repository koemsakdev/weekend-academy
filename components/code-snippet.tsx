"use client";

import Image from "next/image";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import * as monaco from "monaco-editor";
import {Editor} from "@monaco-editor/react";
import useMounted from "@/hooks/useMounted";
import {JSX, useEffect, useState} from "react";
import {useCodeEditorStore} from "@/store/useCodeEditorStore";
import {defineMonacoThemes, LANGUAGE_CONFIG} from "@/app/(root)/_constants";
import CodeSkeleton from "@/app/(root)/_components/code-skeleton";

import {
    AlertTriangle,
    CheckCircle,
    CircleCheck,
    Copy,
    Loader2,
    Play, Terminal,
} from "lucide-react";

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
        whileHover={{scale: 1.05, boxShadow: boxShadow}}
        whileTap={{scale: 0.95, boxShadow: boxShadow}}
        onClick={onClick}
        disabled={disabled}
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
    const [localEditor, setLocalEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

    const [isRunning, setIsRunning] = useState(false);
    const [output, setOutput] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isOutputCopied, setIsOutputCopied] = useState(false);

    const hasContent = error || output;

    const {
        fontSize,
        theme,
        setTheme
    } = useCodeEditorStore();
    const mounted = useMounted();

    useEffect(() => {
        setTheme(mode);
        if (localEditor) {
            localEditor.setValue(editorValue);
            setAutoHeight(localEditor.getContentHeight().toString());
        }
    }, [mode, localEditor, editorValue, setTheme]);

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
        const code = localEditor.getValue();

        if (!code) {
            setError("Please enter some code");
            return;
        }

        setIsRunning(true);
        setError(null);
        setOutput("");

        try {
            const runtime = LANGUAGE_CONFIG[language].pistonRuntime;
            const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    language: runtime.language,
                    version: runtime.version,
                    files: [{content: code}],
                }),
            });

            const data = await response.json();

            if (data.run?.output) setOutput(data.run.output.trim());
            if (data.run?.stderr) setError(data.run.stderr);
        } catch (err) {
            if (err instanceof TypeError && err.message.includes('fetch')) {
                setError("Network error: Unable to connect to the code execution service");
            } else if (err instanceof Error) {
                setError(`Error running code: ${err.message}`);
            } else {
                setError("An unexpected error occurred while running the code");
            }
        } finally {
            setIsRunning(false);
        }
    };

    const handleCopy = async () => {
        if (!hasContent) return;
        await navigator.clipboard.writeText(error || output);
        setIsOutputCopied(true);

        setTimeout(() => setIsOutputCopied(false), 2000);
    }

    if (!mounted) return null;

    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="relative">
                <div className="bg-[#12121a]/90 backdrop-blur rounded-md border border-white/[0.05] p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
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
                                        <CircleCheck className="size-3.5 text-green-500"/>
                                    ) : (
                                        <Copy className="size-3.5 text-green-500"/>
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
                                                <Loader2 className="w-4 h-4 animate-spin text-white/70"/>
                                                <div className="absolute inset-0 blur animate-pulse"/>
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
                            )}
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="relative group rounded-sm overflow-hidden ring-1 ring-white/[0.05]">
                        <Editor
                            height={`${autoHeight}px`}
                            language={LANGUAGE_CONFIG[language].monacoLanguage}
                            theme={theme}
                            beforeMount={defineMonacoThemes}
                            onMount={(editor) => setLocalEditor(editor)}
                            loading={<CodeSkeleton/>}
                            options={{
                                readOnly: true,
                                domReadOnly: true,
                                overviewRulerLanes: 0,
                                lineNumbers: showLineNumbers ? "on" : "off",
                                selectionHighlight: false,
                                occurrencesHighlight: "off",
                                minimap: {enabled: false},
                                fontSize,
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                padding: {top: 16, bottom: 16},
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
                        <div className="absolute inset-0"/>
                    </div>
                </div>
            </div>

            {(hasContent || isRunning) && (
                <div className="relative bg-[#181825] rounded-md p-4 ring-1 ring-gray-800/50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
                                <Terminal className="w-4 h-4 text-blue-400"/>
                            </div>
                            <span className="text-sm font-medium text-gray-300">Output</span>
                        </div>
                        {hasContent && (
                            <IconButton
                                onClick={handleCopy}
                                boxShadow="0 0 10px #2ecc71"
                                icon={
                                    isOutputCopied ? (
                                        <CircleCheck className="size-3.5 text-green-500"/>
                                    ) : (
                                        <Copy className="size-3.5 text-green-500"/>
                                    )
                                }
                                color={isOutputCopied ? "text-green-300" : "text-green-500"}
                            />
                        )}
                    </div>

                    {/* Output */}
                    <div className="relative">
                        <div
                            className="relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] rounded-sm p-4 h-auto overflow-auto font-mono text-sm">
                            {isRunning ? (
                                <CodeSkeleton/>
                            ) : error ? (
                                <div className="flex items-start gap-2 text-red-400">
                                    <AlertTriangle className="size-3.5 flex-shrink-0 mt-0.5"/>
                                    <div className="space-y-1">
                                        <div className="font-medium">Execution Error</div>
                                        <pre className="whitespace-pre-wrap text-red-400/80">
                                          {error}
                                        </pre>
                                    </div>
                                </div>
                            ) : (
                                output && (
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                            <CheckCircle className="size-3.5"/>
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
