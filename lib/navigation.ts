export const getNavMain = (lang: string, dict: any) => [
    {
        title: dict.sidebar.python,
        url: `/${lang}/python`,
        items: [
            {
                title: dict.sidebar["python.overview"],
                url: `/${lang}/python`,
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
        items: [],
    },
    {
        title: "Laravel",
        url: "#",
        items: [],
    },
    {
        title: "Frontend Framework",
        url: "#",
        items: [],
    },
];