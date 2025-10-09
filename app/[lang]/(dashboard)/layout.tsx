"use client";
import React, { useMemo } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import LanguageButton from "@/components/language-button";
import { useDictionary } from "@/lib/dictionary-context";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useDictionary();
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const pathSegments = pathname
      .split("/")
      .filter(
        (segment) =>
          segment &&
          segment !== lang &&
          segment !== "(dashboard)" &&
          segment !== "(routes)"
      );

    const items = pathSegments.map((segment, index) => {
      const href =
        "/" + lang + "/" + pathSegments.slice(0, index + 1).join("/");
      const title = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { href, title };
    });

    return items;
  }, [pathname, lang]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white sticky top-0 z-50">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {/* <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/${lang}/python`}>Python</BreadcrumbLink>
              </BreadcrumbItem> */}
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                  {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                  <BreadcrumbItem key={item.href}>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{item.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={item.href}>
                        {item.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-1 items-center justify-end">
            <LanguageButton />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
