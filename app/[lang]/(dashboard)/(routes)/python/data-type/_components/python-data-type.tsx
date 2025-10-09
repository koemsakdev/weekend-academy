import Table from "@/components/table";
import TableRow from "@/components/table-row";
import { Section } from "@/components/section";
import TableHeader from "@/components/table-header";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import { pythonFirstDataType } from "@/store/codeSnippet";

const headers: string[] = ["Data Type", "Classes", "Description"];
interface Row {
  type: string;
  class: string;
  description: string;
}

export const PythonDataType = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  const rows: Row[] = dataType.description[0][2];
  return (
    <div>
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
    </div>
  );
};
