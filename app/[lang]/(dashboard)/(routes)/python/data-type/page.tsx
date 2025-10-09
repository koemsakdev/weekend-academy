"use client";
import { Section } from "@/components/section";
import { useSearchParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer-section";
import { AcademyCard } from "@/components/academy-card";
import { useDictionary } from "@/lib/dictionary-context";
import { PythonDataType } from "./_components/python-data-type";
import { PythonSetDataTypes } from "./_components/python-set-data-type";
import { PythonListDataTypes } from "./_components/python-list-data-type";
import { PythonTupleDataTypes } from "./_components/python-tuple-data-type";
import { PythonStringDataTypes } from "./_components/python-string-data-type";
import { PythonNumericDataType } from "./_components/python-numeric-data-type";
import { PythonDictionaryDataTypes } from "./_components/python-dictionary-data-type";

interface cardListInterface {
  title: string;
  description: string;
  badgeText?: string;
  param: string;
}

const DataType = () => {
  const searchParams = useSearchParams();
  const { dict } = useDictionary();
  const dataType = dict.contents["python.data-type"];
  const cardList = dataType.description[8];
  const type = searchParams.get("type");

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {type === null ? (
        <div>
          <h1 className="text-xl md:text-3xl font-bold">{dataType.title[7]}</h1>
          <Section content={dataType.description[7]} />

          <Separator className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {cardList.map((card: cardListInterface, index: number) => (
              <AcademyCard
                key={index}
                title={card.title}
                description={card.description}
                badgeText={card.badgeText}
                badgeVariant="outline"
                paramName={card.param}
              />
            ))}
          </div>

          <FooterSection
            prev={{
              url: `variable`,
              title:
                dict.footer["previouse"] +
                " - " +
                dict.sidebar["python.variable"],
            }}
            next={{
              url: `operator`,
              title:
                dict.footer["next"] + " - " + dict.sidebar["python.operator"],
            }}
          />
        </div>
      ) : (
        <>
          {type === "data-type" ? (
            <PythonDataType />
          ) : type === "data-type-numeric" ? (
            <PythonNumericDataType />
          ) : type === "data-type-set" ? (
            <PythonSetDataTypes />
          ) : type === "data-type-list" ? (
            <PythonListDataTypes />
          ) : type === "data-type-tuple" ? (
            <PythonTupleDataTypes />
          ) : type === "data-type-string" ? (
            <PythonStringDataTypes />
          ) : type === "data-type-dictionary" ? (
            <PythonDictionaryDataTypes />
          ) : (
            <div>Not found</div>
          )}
        </>
      )}
    </div>
  );
};

export default DataType;
