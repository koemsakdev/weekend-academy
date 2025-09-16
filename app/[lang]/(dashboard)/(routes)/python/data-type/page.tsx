"use client";
import CodeSnippet from "@/components/code-snippet";
import { Section } from "@/components/section";
import TableHeader from "@/components/table-header";
import TableRow from "@/components/table-row";
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
  pythonFirstDataType,
  pythonListDataType,
  pythonNumericeDataType,
} from "@/store/codeSnippet";
import Table from "@/components/table";

const headers: string[] = ["Data Type", "Classes", "Description"];
interface Row {
  type: string;
  class: string;
  description: string;
}

const DataType = () => {
  const { lang, dict } = useDictionary();
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
      <div className="ml-8 flex flex-col gap-2">
        <CodeSnippet
          isShell={false}
          showLineNumbers={true}
          editorValue={pythonListDataType}
          language="python"
          mode="vs-dark"
        />
        <Section
          title={dataType.title[2][1]}
          content={dataType.description[2][1][0]}
        />
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

        {/* Access List */}
        <Section
          title={dataType.title[2][2]}
          content={dataType.description[2][2][0]}
        />
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
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
    </div>
  );
};

export default DataType;
