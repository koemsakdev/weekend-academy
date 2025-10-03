"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

type ListItemProps = {
  content: string;
  isFirstItem?: boolean;
  downloadUrl?: string;
};

const ListItem = ({
  content,
  isFirstItem = false,
  downloadUrl,
}: ListItemProps) => (
  <li>
    <div className="flex items-center gap-1.5">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
      {isFirstItem && downloadUrl && (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {downloadUrl}
        </a>
      )}
    </div>
  </li>
);

export type SectionProps = {
  title?: string;
  content?: string | string[];
  type?: "markdown" | "list" | "text";
  downloadUrl?: string; // <- pass from parent
};

export const Section = ({
  title,
  content,
  type = "markdown",
  downloadUrl,
}: SectionProps) => (
  <div className="space-y-1.5">
    {title && <h2 className="text-xl font-semibold">{title}</h2>}

    {type === "markdown" && <ReactMarkdown>{content as string}</ReactMarkdown>}

    {type === "text" && <p className="text-base">{content as string}</p>}

    {type === "list" && (
      <ul className="list-disc ml-12 space-y-[2px]">
        {(content as string[]).map((item, index) => (
          <ListItem
            key={item}
            content={item}
            isFirstItem={index === 0}
            downloadUrl={downloadUrl} // pass down
          />
        ))}
      </ul>
    )}
  </div>
);
