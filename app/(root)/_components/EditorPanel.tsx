"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {Copy, Play} from "lucide-react";
import {useEffect, useState} from "react";
import useMounted from "@/hooks/useMounted";
import { Editor } from "@monaco-editor/react";
import {useCodeEditorStore} from "@/store/useCodeEditorStore";
import {defineMonacoThemes, LANGUAGE_CONFIG} from "@/app/(root)/_constants";

export default function EditorPanel() {
    const [autoHeight, setAutoHeight] = useState("100");
    const {language, theme, fontSize, editor, setFontSize, setEditor} = useCodeEditorStore();
    const mounted = useMounted();

    useEffect(() => {
        const savedCode = localStorage.getItem(`editor-code-${language}`);
        const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
        if (editor) editor.setValue(newCode);
    }, [language, editor]);

    useEffect(() => {
        const savedFontSize = localStorage.getItem("editor-font-size");
        if (savedFontSize) setFontSize(parseInt(savedFontSize));
    }, [setFontSize]);

    const handleRefresh = () => {
        const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
        if (editor) editor.setValue(defaultCode);
        localStorage.removeItem(`editor-code-${language}`);
    };

    const handleEditorChange = (value: string | undefined) => {
        if (value) localStorage.setItem(`editor-code-${language}`, value);
    };
    
    // Set height based on the text in the editor
    useEffect(() => {
        if (editor) {
            const height = editor.getContentHeight();
            setAutoHeight(height.toString());
        }
    }, [editor]);


    if (!mounted) return null;
    return (
        <div className="relative">
            <div className="relative bg-[#12121a]/90 backdrop-blur rounded-md border border-white/[0.05] p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
                            <Image src={`/${language}.png`} alt="Logo" width={24} height={24} />
                        </div>
                        <div>
                            <h2 className="text-sm font-medium text-white capitalize">{language}</h2>
                            <p className="text-xs text-gray-500">Copy and execute your script/code here</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRefresh}
                            className="p-1 px-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-sm ring-1 ring-white/5 transition-colors flex items-center gap-2"
                            aria-label="Reset to default code"
                        >
                            <Copy className="size-3.5 text-gray-200" />
                            <span className={"text-gray-200 text-sm"}>Copy</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleRefresh}
                            className="p-1 px-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-sm ring-1 ring-white/5 transition-colors flex items-center gap-2"
                            aria-label="Reset to default code"
                        >
                            <Play className="size-3.5 text-yellow-500" strokeWidth={4} />
                            <span className={"text-yellow-500 text-sm font-bold"}>Execute</span>
                        </motion.button>
                    </div>
                </div>

                {/* Editor */}
                <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
                    <Editor
                        height={`${autoHeight}px`}
                        language={LANGUAGE_CONFIG[language].monacoLanguage}
                        onChange={handleEditorChange}
                        theme={theme}
                        beforeMount={defineMonacoThemes}
                        onMount={(editor) => setEditor(editor)}
                        options={{
                            readOnly: true,
                            lineNumbers: "off",
                            selectionHighlight: false,
                            occurrencesHighlight: "off",
                            links: false,
                            wordWrap: "on",
                            minimap: { enabled: false },
                            fontSize,
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                            padding: { top: 16, bottom: 16 },
                            renderWhitespace: "none",
                            fontFamily: '"Ubuntu Mono", Consolas',
                            fontLigatures: true,
                            cursorBlinking: "smooth",
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
            </div>
        </div>
    )
}