import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import {
  accessingElement,
  creatingTuple,
  immutabilityTuple,
  nestedTuple,
  tupleFunction,
  tupleOpertion,
  tupleWithOneElement,
  unpackingTuple,
} from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

export const PythonTupleDataTypes = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div className="flex flex-col gap-4">
      {/* Tuple Data Type */}
      <Section
        title={dataType.title[3][0]}
        content={dataType.description[3][0]}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][1]}
            content={dataType.description[3][1]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={creatingTuple}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][2]}
            content={dataType.description[3][2]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={accessingElement}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][3]}
            content={dataType.description[3][3]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={immutabilityTuple}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][4]}
            content={dataType.description[3][4]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={unpackingTuple}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][5]}
            content={dataType.description[3][5]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={nestedTuple}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][6]}
            content={dataType.description[3][6]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={tupleWithOneElement}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][7]}
            content={dataType.description[3][7]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={tupleOpertion}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[3][8]}
            content={dataType.description[3][8]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={tupleFunction}
            language="python"
            mode="vs-dark"
          />
        </div>
      </div>
      <FooterSection
        prev={{
          url: `data-type?type=data-type-list`,
          title: dict.footer["previouse"],
        }}
        next={{
          url: `data-type?type=data-type-string`,
          title: dict.footer["next"],
        }}
      />
    </div>
  );
};
