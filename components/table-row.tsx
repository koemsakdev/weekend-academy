import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface TableRowProps {
  data: string[];
}

const TableRow = ({ data }: TableRowProps) => {
  return (
    <tr className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:even:bg-gray-500 dark:hover:bg-gray-500 transition-colors duration-200 ease-in-out">
      {data.map((item, index) => (
        <td
          key={index}
          className="px-6 py-2 text-sm text-gray-900 dark:text-gray-300"
        >
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {item}
          </ReactMarkdown>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
