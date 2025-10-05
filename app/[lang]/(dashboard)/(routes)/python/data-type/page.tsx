"use client";
import CodeSnippet from "@/components/code-snippet";
import { Section } from "@/components/section";
import TableHeader from "@/components/table-header";
import TableRow from "@/components/table-row";
import { useDictionary } from "@/lib/dictionary-context";
import {
  accessingDictionary,
  accessingElement,
  accessingString,
  addingElementInSet,
  addingNewKeyValuePair,
  checkKeyExist,
  concatenationString,
  creatingDictionary,
  creatingSet,
  creatingString,
  creatingTuple,
  immutabilityString,
  immutabilityTuple,
  lengthDictionary,
  lengthOfSet,
  lengthString,
  loopDictionaryKeys,
  loopDictionaryKeysAndValues,
  loopDictionaryValues,
  membershipTestString,
  mixedDataTypeSet,
  nestedDictionary,
  nestedTuple,
  noDuplicateAllowOfSet,
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
  pythonFirstDataType,
  pythonListDataType,
  pythonNumericeDataType,
  removeElementDiscardInSet,
  removeElementRemoveInSet,
  removeKeyValuePairPop,
  removeLastInsertItem,
  repetitionString,
  setCheckingMembership,
  setDifference,
  setIntersection,
  setSymmetricDifference,
  setUnion,
  slicingString,
  stringFunction,
  tupleFunction,
  tupleOpertion,
  tupleWithOneElement,
  unpackingTuple,
  updateElementInSet,
  updateKeyValuePair,
} from "@/store/codeSnippet";
import Table from "@/components/table";
import FooterSection from "@/components/footer-section";

const headers: string[] = ["Data Type", "Classes", "Description"];
interface Row {
  type: string;
  class: string;
  description: string;
}

const DataType = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  const rows: Row[] = dataType.description[0][2];
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <Section title={dataType.title[0]} content={dataType.description[0][0]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={pythonFirstDataType}
        language="python"
        mode="vs-dark"
      />
      <Section content={dataType.description[0][1]} />

      {/* Set up table to display the data type */}
      <Table>
        <TableHeader headers={headers} />
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.type, row.class, row.description]}
            />
          ))}
        </tbody>
      </Table>

      <Section title={dataType.title[1]} content={dataType.description[1][0]} />
      <Section content={dataType.description[1][1]} type="list" />
      <Section content={dataType.description[1][2]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={pythonNumericeDataType}
        language="python"
        mode="vs-dark"
      />
      <Section content={dataType.description[1][3]} />
      <Section content={dataType.description[1][4]} />
      <Section content={dataType.description[1][5]} type="list" />
      <Section
        title={dataType.title[2][0]}
        content={dataType.description[2][0][0]}
      />
      <Section content={dataType.description[2][0][1]} type="list" />

      {/* List Data Type */}
      <div className="ml-8 flex flex-col gap-2">
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
        <div className="p-4 border-2 border-blue-300 rounded-md shadow-md mb-4">
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
        <div className="p-4 border-2 border-blue-300 rounded-md shadow-md mb-4">
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

      {/* Tuple Data Type */}
      <Section
        title={dataType.title[3][0]}
        content={dataType.description[3][0]}
      />
      <div className="ml-8 flex flex-col gap-4">
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

      {/* String Data Type */}
      <Section
        title={dataType.title[4][0]}
        content={dataType.description[4][0]}
      />
      <div className="ml-8 flex flex-col gap-4">
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

      {/* Dictionary Data Type */}
      <Section
        title={dataType.title[6][0]}
        content={dataType.description[6][0][0]}
      />
      <Section content={dataType.description[6][0][1]} type="list" />
      <div className="ml-8 flex flex-col gap-4">
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
          url: `variable`,
          title: dict.footer["previouse"] + " - " + dict.sidebar["python.variable"],
        }}
        next={{
          url: `operator`,
          title: dict.footer["next"] + " - " + dict.sidebar["python.operator"],
        }}
      />
    </div>
  );
};

export default DataType;
