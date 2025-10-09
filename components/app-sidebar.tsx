"use client";
import * as React from "react";
import { ChevronDown, ChevronRight, GraduationCap } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { useDictionary } from "@/lib/dictionary-context";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { lang, dict } = useDictionary();
  const pathname = usePathname();

  const data = {
    navMain: [
      {
        title: dict.sidebar.python,
        url: `/${lang}/python`,
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

  const computeIsActive = (itemUrl: string) => {
    return pathname.endsWith(itemUrl.split("/").pop() || "/python");
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={`/${lang}/python`}>
                <div className="bg-blue-100 text-blue-500 flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GraduationCap className="size-6" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">{dict.sidebar.title}</span>
                  <span className="">{dict.sidebar.version}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 0}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <ChevronRight className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <ChevronDown className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={computeIsActive(item.url)}
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
