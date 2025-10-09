import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import { useDictionary } from "@/lib/dictionary-context";
import { pythonNumericeDataType } from "@/store/codeSnippet";
import FooterSection from "@/components/footer-section";

export const PythonNumericDataType = () => {
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  return (
    <div className="flex flex-col gap-4">
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

      <FooterSection
        prev={{
          url: `data-type?type=data-type`,
          title: dict.footer["previouse"],
        }}
        next={{
          url: `data-type?type=data-type-list`,
          title: dict.footer["next"],
        }}
      />
    </div>
  );
};
