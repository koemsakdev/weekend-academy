"use client";
import React from "react";
import { useDictionary } from "@/lib/dictionary-context";
import { Section } from "@/components/section";
import CodeSnippet from "@/components/code-snippet";
import {
  arithemetic,
  assigmentOperator,
  comparationOperator,
  firstArithemeticOperator,
  firstAssgimentOperator,
  firstComparationOperator,
  firstExampleOperator,
  firstLogicalOperator,
  identityOperator,
  logicalOperator,
  membershipOperator,
} from "@/store/operatorCodeSnippet";
import Table from "@/components/table";
import TableHeader from "@/components/table-header";
import TableRow from "@/components/table-row";
import {
  arithmeticHeaders,
  arithmeticRows,
  assigmentHeaders,
  assigmentRows,
  bitwiseHeaders,
  bitwiseRows,
  comparationHeaders,
  comparationRows,
  logicalHeaders,
  logicalRows,
  memberShipHeader,
  memberShipRows,
  specialHeader,
  specialRows,
} from "@/types/operator-type";
import FooterSection from "@/components/footer-section";

const OperatorPage = () => {
  const { dict } = useDictionary();
  const operator = dict.contents["python.operator"];
  const arithmeticRows: arithmeticRows[] = operator.description[2][1];
  const assigmentRows: assigmentRows[] = operator.description[3][0][3];
  const comparationRows: comparationRows[] = operator.description[4][0][2];
  const logicalRows: logicalRows[] = operator.description[5][0][2];
  const bitwiseRows: bitwiseRows[] = operator.description[6][0][3];
  const specialRows: specialRows[] = operator.description[7][0][4];
  const memberShipRows: memberShipRows[] = operator.description[7][3][3];
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <Section title={operator.title[0]} content={operator.description[0][0]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={firstExampleOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[0][1]} />

      <Section title={operator.title[1]} content={operator.description[1][0]} />
      <Section content={operator.description[1][1]} type="list" />

      {/* Arithmetic Operators */}
      <Section
        title={operator.title[2]}
        content={operator.description[2][0][0]}
      />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={firstArithemeticOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[2][0][1]} />

      <Table>
        <TableHeader headers={arithmeticHeaders} />
        <tbody>
          {arithmeticRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.opertion, row.example, row.description]}
            />
          ))}
        </tbody>
      </Table>

      <Section content={operator.description[2][2][0]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={arithemetic}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[2][2][1]} />
      <Section content={operator.description[2][2][2]} type="list" />

      {/* Assignment Operators */}
      <Section
        title={operator.title[3]}
        content={operator.description[3][0][0]}
      />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={firstAssgimentOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[3][0][1]} />
      <Section content={operator.description[3][0][2]} />

      <Table>
        <TableHeader headers={assigmentHeaders} />
        <tbody>
          {assigmentRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.opertion, row.example]}
            />
          ))}
        </tbody>
      </Table>

      <Section content={operator.description[3][0][4]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={assigmentOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[3][0][5]} />

      {/* Comparation Operator */}
      <Section
        title={operator.title[4]}
        content={operator.description[4][0][0]}
      />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={firstComparationOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[4][0][1]} />
      <Table>
        <TableHeader headers={comparationHeaders} />
        <tbody>
          {comparationRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.meaning, row.example]}
            />
          ))}
        </tbody>
      </Table>
      <Section content={operator.description[4][0][3]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={comparationOperator}
        language="python"
        mode="vs-dark"
      />

      {/* Logical Operators */}
      <Section
        title={operator.title[5]}
        content={operator.description[5][0][0]}
      />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={firstLogicalOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[5][0][1]} />

      <Table>
        <TableHeader headers={logicalHeaders} />
        <tbody>
          {logicalRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.example, row.meaning]}
            />
          ))}
        </tbody>
      </Table>

      <Section content={operator.description[5][1]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={logicalOperator}
        language="python"
        mode="vs-dark"
      />

      {/* Bitwise Operators */}
      <Section
        title={operator.title[6]}
        content={operator.description[6][0][0]}
      />
      <Section content={operator.description[6][0][1]} />
      <Section content={operator.description[6][0][2]} />

      <Table>
        <TableHeader headers={bitwiseHeaders} />
        <tbody>
          {bitwiseRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.meaning, row.example, row.description]}
            />
          ))}
        </tbody>
      </Table>

      {/* Special Operators */}
      <Section
        title={operator.title[7]}
        content={operator.description[7][0][0]}
      />

      {/* Identity Operators */}
      <Section title={operator.description[7][0][1]} content={""} />
      <Section content={operator.description[7][0][2]} />
      <Section content={operator.description[7][0][3]} />

      <Table>
        <TableHeader headers={specialHeader} />
        <tbody>
          {specialRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.meaning, row.example]}
            />
          ))}
        </tbody>
      </Table>

      <Section content={operator.description[7][1]} />
      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={identityOperator}
        language="python"
        mode="vs-dark"
      />
      <Section content={operator.description[7][2][0]} />
      <Section content={operator.description[7][2][1]} />

      {/* Membership Operators */}
      <Section title={operator.description[7][3][0]} content={""} />
      <Section content={operator.description[7][3][1]} />
      <Section content={operator.description[7][3][2]} />

      <Table>
        <TableHeader headers={memberShipHeader} />
        <tbody>
          {memberShipRows.map((row, index) => (
            <TableRow
              key={index}
              data={[row.operator, row.meaning, row.example]}
            />
          ))}
        </tbody>
      </Table>

      <Section content={operator.description[7][3][4]} />

      <CodeSnippet
        isShell={false}
        showLineNumbers={true}
        editorValue={membershipOperator}
        language="python"
        mode="vs-dark"
      />

      <Section content={operator.description[7][3][5]} />
      <Section content={operator.description[7][3][6]} />

      <FooterSection
        prev={{
          url: `data-type`,
          title:
            dict.footer["previouse"] + " - " + dict.sidebar["python.data-type"],
        }}
        next={{
          url: `input-output`,
          title:
            dict.footer["next"] + " - " + dict.sidebar["python.input-output"],
        }}
      />
    </div>
  );
};

export default OperatorPage;
