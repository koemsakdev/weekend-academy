"use client";
import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import { calCulateSumOfJavaScript, firstPython } from "@/store/codeSnippet";
import OutputPanel from "@/components/output-pannel";

const PYTHON_DOWNLOADS_URL = "https://www.python.org/downloads";

export default function Home() {
  const { dict } = useDictionary();
  const overview = dict.contents["python.overview"];

  return (
    <div className="w-full h-full flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">{overview.title[0]}</h1>

      <Section content={overview.description[0]} />
      <Section title={overview.title[1]} content={overview.description[1]} />
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

      <div className="grid grid-cols-1 gap-4">
        <CodeSnippet
          isShell={true}
          showLineNumbers={false}
          editorValue={`python --version`}
          language="terminal"
          mode="vs-dark"
        />
      </div>
      <Section title={overview.title[4]} content={overview.description[4]} />
      <div className="grid grid-cols-1 gap-4">
        <CodeSnippet
          isShell={false}
          showLineNumbers={true}
          editorValue={firstPython}
          language="python"
          mode="vs-dark"
        />
      </div>

      <h2>Tesing JavaScript Code</h2>
      <div className="grid grid-cols-1 gap-4">
        <CodeSnippet
          isShell={false}
          showLineNumbers={true}
          editorValue={calCulateSumOfJavaScript}
          language="javascript"
          mode="vs-dark"
        />

        <OutputPanel />
      </div>
    </div>
  );
}
