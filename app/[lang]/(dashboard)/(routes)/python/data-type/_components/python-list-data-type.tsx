import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import {
  pythonAccessElementNegativeIndex,
  pythonAccessElementPositiveIndex,
  pythonAccessListRangBasicSlicing,
  pythonAccessListRangBeginningSlicing,
  pythonAccessListRangEndSlicing,
  pythonAccessListRangeOfNegativeIndex,
  pythonCheckItemExist,
  pythonCreatingListUsingBracket,
  pythonCreatingListUsingListConstructor,
  pythonCreatingListUsingStar,
  pythonListDataType,
} from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

export const PythonListDataTypes = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div className="flex flex-col gap-4">
      {/* Python List Data Type */}
      <Section
        title={dataType.title[2][0]}
        content={dataType.description[2][0][0]}
      />
      <Section content={dataType.description[2][0][1]} type="list" />

      {/* List Data Type */}
      <div className="flex flex-col gap-2">
        <CodeSnippet
          isShell={false}
          showLineNumbers={true}
          editorValue={pythonListDataType}
          language="python"
          mode="vs-dark"
        />

        {/* Creating List */}
        <Section
          title={dataType.title[2][1]}
          content={dataType.description[2][1][0]}
        />
        <div className="p-4 rounded-sm border-t-2 shadow-md mb-4">
          <Section content={dataType.description[2][1][1][0]} />
          <Section content={dataType.description[2][1][1][1]} />
          <Section content={dataType.description[2][1][1][2]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonCreatingListUsingBracket}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][1][2][0]} />
          <Section content={dataType.description[2][1][2][1]} />
          <Section content={dataType.description[2][1][2][2]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonCreatingListUsingListConstructor}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][1][3][0]} />
          <Section content={dataType.description[2][1][3][1]} />
          <Section content={dataType.description[2][1][3][2]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonCreatingListUsingStar}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Access List */}
        <Section
          title={dataType.title[2][2]}
          content={dataType.description[2][2][0]}
        />
        <div className="p-4 rounded-sm border-t-2 shadow-md mb-4">
          <Section content={dataType.description[2][2][1][0]} />
          <Section content={dataType.description[2][2][1][1]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessElementPositiveIndex}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][2][0]} />
          <Section content={dataType.description[2][2][2][1]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessElementNegativeIndex}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][3][0]} />
          <Section content={dataType.description[2][2][3][1]} />

          <Section content={dataType.description[2][2][3][2][0]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessListRangBasicSlicing}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][3][2][1]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessListRangBeginningSlicing}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][3][2][2]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessListRangEndSlicing}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][4][0]} />
          <Section content={dataType.description[2][2][4][1]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonAccessListRangeOfNegativeIndex}
            language="python"
            mode="vs-dark"
          />

          <Section content={dataType.description[2][2][5][0]} />
          <Section content={dataType.description[2][2][5][1]} />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={pythonCheckItemExist}
            language="python"
            mode="vs-dark"
          />
        </div>
      </div>

      <FooterSection
        prev={{
          url: `data-type?type=data-type-numeric`,
          title: dict.footer["previouse"],
        }}
        next={{
          url: `data-type?type=data-type-tuple`,
          title: dict.footer["next"],
        }}
      />
    </div>
  );
};
