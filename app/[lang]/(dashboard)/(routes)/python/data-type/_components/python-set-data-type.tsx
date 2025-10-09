import CodeSnippet from "@/components/code-snippet";
import { Section } from "@/components/section";
import { useDictionary } from "@/lib/dictionary-context";
import { addingElementInSet, creatingSet, lengthOfSet, mixedDataTypeSet, noDuplicateAllowOfSet, removeElementDiscardInSet, removeElementRemoveInSet, setCheckingMembership, setDifference, setIntersection, setSymmetricDifference, setUnion, updateElementInSet } from "@/store/codeSnippet";

export const PythonSetDataTypes = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div>
      {/* Set Data Type */}
      <Section
        title={dataType.title[5][0]}
        content={dataType.description[5][0][0]}
      />
      <Section content={dataType.description[5][0][1]} type="list" />
      <div className="ml-8 flex flex-col gap-4">
        {/* Create Set Data type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][1]}
            content={dataType.description[5][1]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={creatingSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* No Duplicate Allow Of Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][2]}
            content={dataType.description[5][2]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={noDuplicateAllowOfSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Mixed Data Type Of Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][3]}
            content={dataType.description[5][3]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={mixedDataTypeSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Adding Element In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][4]}
            content={dataType.description[5][4]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={addingElementInSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Update Element In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][5]}
            content={dataType.description[5][5]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={updateElementInSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Remove Element using discard In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][6]}
            content={dataType.description[5][6]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={removeElementDiscardInSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Remove Element using remove In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][7]}
            content={dataType.description[5][7]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={removeElementRemoveInSet}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Set Union In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][8]}
            content={dataType.description[5][8]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={setUnion}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Set Intersection In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][9]}
            content={dataType.description[5][9]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={setIntersection}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Set Difference In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][10]}
            content={dataType.description[5][10]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={setDifference}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Set Symmetric Difference In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][11]}
            content={dataType.description[5][11]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={setSymmetricDifference}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Set Checking Membership In Set Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][12]}
            content={dataType.description[5][12]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={setCheckingMembership}
            language="python"
            mode="vs-dark"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[5][13]}
            content={dataType.description[5][13]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={lengthOfSet}
            language="python"
            mode="vs-dark"
          />
        </div>
      </div>
    </div>
  );
};
