import CodeSnippet from "@/components/code-snippet";
import FooterSection from "@/components/footer-section";
import { Section } from "@/components/section";
import { useDictionary } from "@/lib/dictionary-context";
import {
  accessingDictionary,
  addingNewKeyValuePair,
  checkKeyExist,
  creatingDictionary,
  lengthDictionary,
  loopDictionaryKeys,
  loopDictionaryKeysAndValues,
  loopDictionaryValues,
  nestedDictionary,
  removeKeyValuePairPop,
  removeLastInsertItem,
  updateKeyValuePair,
} from "@/store/codeSnippet";

export const PythonDictionaryDataTypes = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div className="flex flex-col gap-4">
      {/* Dictionary Data Type */}
      <Section
        title={dataType.title[6][0]}
        content={dataType.description[6][0][0]}
      />
      <Section content={dataType.description[6][0][1]} type="list" />
      <div className="flex flex-col gap-4">
        {/* Create Dictionary Data Type*/}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][1]}
            content={dataType.description[6][1]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={creatingDictionary}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Accessing Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][2]}
            content={dataType.description[6][2]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={accessingDictionary}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Adding New Key-Value Pair In Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][3]}
            content={dataType.description[6][3]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={addingNewKeyValuePair}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Update Key-Value Pair In Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][4]}
            content={dataType.description[6][4]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={updateKeyValuePair}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Remove Key-Value Pair In Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][5]}
            content={dataType.description[6][5]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={removeKeyValuePairPop}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Remove Last Insert Item In Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][6]}
            content={dataType.description[6][6]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={removeLastInsertItem}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Check Key Exist In Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][7]}
            content={dataType.description[6][7]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={checkKeyExist}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Loop Dictionary Values Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][8]}
            content={dataType.description[6][8]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={loopDictionaryValues}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Loop Dictionary Keys Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][9]}
            content={dataType.description[6][9]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={loopDictionaryKeys}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Loop Dictionary Keys And Values Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][10]}
            content={dataType.description[6][10]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={loopDictionaryKeysAndValues}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Length Of Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][11]}
            content={dataType.description[6][11]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={lengthDictionary}
            language="python"
            mode="vs-dark"
          />
        </div>

        {/* Nested Dictionary Data Type */}
        <div className="flex flex-col gap-2">
          <Section
            title={dataType.title[6][12]}
            content={dataType.description[6][12]}
          />
          <CodeSnippet
            isShell={false}
            showLineNumbers={true}
            editorValue={nestedDictionary}
            language="python"
            mode="vs-dark"
          />
        </div>
      </div>

      <FooterSection
        prev={{
          url: `data-type?type=data-type-set`,
          title: dict.footer["previouse"],
        }}
        next={{
          url: `operator`,
          title: dict.footer["next"] + " - " + dict.sidebar["python.operator"],
        }}
      />
    </div>
  );
};
