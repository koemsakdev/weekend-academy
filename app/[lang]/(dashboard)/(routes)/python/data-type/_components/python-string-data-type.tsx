import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import {
  accessingString,
  concatenationString,
  creatingString,
  immutabilityString,
  lengthString,
  membershipTestString,
  repetitionString,
  slicingString,
  stringFunction,
} from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

export const PythonStringDataTypes = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div className="flex flex-col gap-4">
      <Section
        title={dataType.title[4][0]}
        content={dataType.description[4][0]}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][1]}
            content={dataType.description[4][1]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={creatingString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][2]}
            content={dataType.description[4][2]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={accessingString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][3]}
            content={dataType.description[4][3]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={slicingString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][4]}
            content={dataType.description[4][4]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={concatenationString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][5]}
            content={dataType.description[4][5]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={lengthString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][6]}
            content={dataType.description[4][6]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={immutabilityString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][7]}
            content={dataType.description[4][7]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={repetitionString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][8]}
            content={dataType.description[4][8]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={membershipTestString}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[4][9]}
            content={dataType.description[4][9]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={stringFunction}
            language="python"
            mode="vs-dark"
          />
        </div>
      </div>
      <FooterSection
        prev={{
          url: `data-type?type=data-type-tuple`,
          title: dict.footer["previouse"],
        }}
        next={{
          url: `data-type?type=data-type-set`,
          title: dict.footer["next"],
        }}
      />
    </div>
  );
};
