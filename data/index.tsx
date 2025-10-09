"use client";
import { useDictionary } from "@/lib/dictionary-context";
const { lang, dict } = useDictionary();

export const sidebarMenus = {
    navMain: [
        {
            title: dict.sidebar.python,
            url: `/${lang}`,
            items: [
                {
                    title: dict.sidebar["python.overview"],
                    url: `/${lang}`,
                },
                {
                    title: dict.sidebar["python.variable"],
                    url: `/${lang}/python/variable`,
                },
                {
                    title: dict.sidebar["python.data-type"],
                    url: `/${lang}/python/data-type`,
                },
                {
                    title: dict.sidebar["python.operator"],
                    url: `/${lang}/python/operator`,
                },
                {
                    title: dict.sidebar["python.input-output"],
                    url: `/${lang}/python/input-output`,
                },
                {
                    title: dict.sidebar["python.control-flow"],
                    url: `/${lang}/python/control-flow`,
                },
                { title: dict.sidebar["python.loop"], url: `/${lang}/python/loop` },
                {
                    title: dict.sidebar["python.function"],
                    url: `/${lang}/python/function`,
                },
                {
                    title: dict.sidebar["python.quiz"],
                    url: `/${lang}/python/quiz`,
                },
            ],
        },
        {
            title: "PHP",
            url: "#",
            items: [
                // {
                //   title: "Components",
                //   url: "#",
                // },
                // {
                //   title: "File Conventions",
                //   url: "#",
                // },
                // {
                //   title: "Functions",
                //   url: "#",
                // },
                // {
                //   title: "next.config.js Options",
                //   url: "#",
                // },
                // {
                //   title: "CLI",
                //   url: "#",
                // },
                // {
                //   title: "Edge Runtime",
                //   url: "#",
                // },
            ],
        },
        {
            title: "Laravel",
            url: "#",
            items: [
                // {
                //   title: "Accessibility",
                //   url: "#",
                // },
                // {
                //   title: "Fast Refresh",
                //   url: "#",
                // },
                // {
                //   title: "Next.js Compiler",
                //   url: "#",
                // },
                // {
                //   title: "Supported Browsers",
                //   url: "#",
                // },
                // {
                //   title: "Turbopack",
                //   url: "#",
                // },
            ],
        },
        {
            title: "Frontend Framework",
            url: "#",
            items: [
                // {
                //   title: "Contribution Guide",
                //   url: "#",
                // },
            ],
        },
    ],
};