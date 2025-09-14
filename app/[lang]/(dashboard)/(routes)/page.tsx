"use client";
import React from "react";
import {Section} from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import {useDictionary} from "@/lib/dictionary-context";
import {firstPython, multiComment, singleComment} from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

const PYTHON_DOWNLOADS_URL = "https://www.python.org/downloads";

export default function Home() {
    const {dict} = useDictionary();
    const overview = dict.contents["python.overview"];
    const {lang} = useDictionary();

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <Section title={overview.title[0]} content={overview.description[0]}/>
            <Section title={overview.title[1]} content={overview.description[1]}/>
            <Section
                title={overview.title[2]}
                content={overview.description[2]}
                type="list"
                downloadUrl={PYTHON_DOWNLOADS_URL}
            />
            <Section
                title={overview.title[3]}
                content={overview.description[3]}
                type="text"
            />

            <CodeSnippet
                isShell={true}
                showLineNumbers={false}
                editorValue={`python --version`}
                language="terminal"
                mode="vs-dark"
            />
            <Section title={overview.title[4]} content={overview.description[4]}/>
            <CodeSnippet
                isShell={false}
                showLineNumbers={true}
                editorValue={firstPython}
                language="python"
                mode="vs-dark"
            />
            <h2 className="text-xl font-semibold">{overview.title[5]}</h2>
            <Section content={overview.description[5][0]} type="text"/>
            <ul className="list-decimal">
                <li className={"ml-5 mb-2"}>
                    <Section content={overview.description[5][1]} type="markdown"/>
                </li>
                <CodeSnippet
                    isShell={true}
                    showLineNumbers={false}
                    editorValue={singleComment}
                    language="terminal"
                    mode="vs-dark"
                />
                <li className={"ml-5 mb-2 mt-2"}>
                    <Section content={overview.description[5][2]} type="markdown"/>
                </li>
                <CodeSnippet
                    isShell={true}
                    showLineNumbers={false}
                    editorValue={multiComment}
                    language="terminal"
                    mode="vs-dark"
                />
            </ul>

            <FooterSection
                prev={{
                    url: `/`,
                    title: "Previous",
                }}
                next={{
                    url: `${lang}/python/variable`,
                    title: "Variable",
                }}
            />
        </div>
    );
}
