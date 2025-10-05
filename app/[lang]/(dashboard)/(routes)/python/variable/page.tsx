"use client";

import {useDictionary} from "@/lib/dictionary-context";
import React from "react";
import {Section} from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import {
    creatingVariable, pythonGlobalVariable,
    pythonLocalVariable,
    pythonMultipleValueToVariable,
    pythonNamingVariable
} from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

const Course = () => {
    const {dict} = useDictionary();
    const variable = dict.contents["python.variable"];
    const {lang} = useDictionary();

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <Section title={variable.title[0]} content={variable.description[0]}/>
            <Section title={variable.title[1]} content={variable.description[1]}/>
            <CodeSnippet
                isShell={false}
                showLineNumbers={true}
                editorValue={creatingVariable}
                language={"python"}
                mode={"vs-dark"}
            />
            <h2 className="text-xl font-semibold">{variable.title[2]}</h2>
            <Section content={variable.description[2][0]}/>
            <Section content={variable.description[2][1]} type={"list"}/>
            <CodeSnippet
                isShell={true}
                showLineNumbers={true}
                editorValue={pythonNamingVariable}
                language={"python"}
                mode={"vs-dark"}
            />
            <Section title={variable.title[3]} content={variable.description[3]}/>
            <CodeSnippet
                isShell={false}
                showLineNumbers={true}
                editorValue={pythonMultipleValueToVariable}
                language={"python"}
                mode={"vs-dark"}
            />
            <Section title={variable.title[4]} content={variable.description[4][0]}/>
            <Section content={variable.description[4][1]}/>
            <CodeSnippet
                isShell={false}
                showLineNumbers={true}
                editorValue={pythonLocalVariable}
                language={"python"}
                mode={"vs-dark"}
            />
            <Section content={variable.description[4][2]}/>
            <CodeSnippet
                isShell={false}
                showLineNumbers={true}
                editorValue={pythonGlobalVariable}
                language={"python"}
                mode={"vs-dark"}
            />

            <FooterSection
                prev={{
                    url: `/${lang}`,
                    title: dict.footer["previouse"] + " - " + dict.sidebar["python.overview"],
                }}
                next={{
                    url: `data-type`,
                    title: dict.footer["next"] + " - " + dict.sidebar["python.data-type"],
                }}
            />
        </div>
    )
}

export default Course;
