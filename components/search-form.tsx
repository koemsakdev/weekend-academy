import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"
import { useDictionary } from "@/lib/dictionary-context";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const { dict } = useDictionary();
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            {dict.sidebar["search_placeholder"]}
          </Label>
          <SidebarInput
            id="search"
            placeholder={dict.sidebar["search_placeholder"]}
            className="pl-8 rounded-xs shadow-none focus:shadow-none focus-visible:ring-0 focus-visible:outline-0"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
