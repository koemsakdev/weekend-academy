"use client";
import React, { useMemo } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
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
import { getNavMain } from "@/lib/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang, dict } = useDictionary();
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const navMain = getNavMain(lang, dict);
    const currentItem = navMain
      .flatMap((main) => main.items || [])
      .find((item) => item.url === pathname);

    if (currentItem) {
      return currentItem.title;
    }

    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length < 2) return "";

    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [pathname, lang, dict]);
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
              <BreadcrumbItem>
                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
              </BreadcrumbItem>
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
