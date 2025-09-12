"use client";
import EditorPanel from "@/app/(root)/_components/EditorPanel";
import {useDictionary} from "@/lib/dictionary-context";
import ReactMarkdown from "react-markdown";

const PYTHON_DOWNLOADS_URL = "https://www.python.org/downloads";

type ListItemProps = {
    content: string;
    isFirstItem?: boolean;
};

const ListItem = ({ content, isFirstItem = false }: ListItemProps) => {
    return (
        <li>
            <div className={"flex items-center gap-1.5"}>
                <ReactMarkdown>{content}</ReactMarkdown>
                {isFirstItem && (
                    <a
                        href={PYTHON_DOWNLOADS_URL}
                        target="_blank"
                        className="text-blue-500"
                    >
                        {PYTHON_DOWNLOADS_URL}
                    </a>
                )}
            </div>
        </li>
    );
};


export default function Home() {
    const {dict} = useDictionary();
    return (
        <div className={"w-full h-full flex flex-col gap-1.5"}>
            <h1 className={"text-2xl font-semibold"}>
                {dict.contents["python.overview"].title[0]}
            </h1>

            <ReactMarkdown>
                {dict.contents["python.overview"].description[0]}
            </ReactMarkdown>

            <h2 className={"text-xl font-semibold"}>
                {dict.contents["python.overview"].title[1]}
            </h2>

            <ReactMarkdown>
                {dict.contents["python.overview"].description[1]}
            </ReactMarkdown>

            <h2 className={"text-xl font-semibold"}>
                {dict.contents["python.overview"].title[2]}
            </h2>

            <ul className="list-disc ml-12">
                {dict.contents["python.overview"].description[2].map((item: string, index: number) => (
                    <ListItem
                        key={item}
                        content={item}
                        isFirstItem={index === 0}
                    />
                ))}
            </ul>

            <h2 className={"text-xl font-semibold"}>
                {dict.contents["python.overview"].title[3]}
            </h2>
            <p className="text-base">
                {dict.contents["python.overview"].description[3]}
            </p>
            <div className="grid grid-cols-1 gap-4">
                <EditorPanel />
            </div>
        </div>
    );
}
