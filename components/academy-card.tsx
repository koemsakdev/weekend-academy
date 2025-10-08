import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Section } from "./section";
import { cn } from "@/lib/utils";

interface AcademyCardProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  imageUrl?: string;
  imageAlt?: string;
}

export function AcademyCard({
  title,
  description,
  badgeText,
  badgeVariant = "default",
}: AcademyCardProps) {
  const GradientBorderWrapperClass = cn(
    "absolute top-0 right-0 z-10",
    "transform translate-x-1/2 -translate-y-1/2",
    "relative p-[2px]",
    "rounded-full",
    "before:content-[''] before:absolute before:inset-0",
    "before:rounded-full",
    "before:bg-[conic-gradient(from_var(--tw-gradient-angle),_#0000_270deg,_#3B82F6_0deg,_#EC4899_360deg)]",
    "before:bg-[length:200%_200%]",
    "before:animate-gradient-border-anim",
    "before:z-[-1]",
    "before:[--tw-gradient-angle:0deg] hover:before:[--tw-gradient-angle:360deg] before:transition-all before:duration-500",
    "overflow-hidden"
  );
  const badgeColors =
    badgeVariant === "default"
      ? "bg-blue-600 text-white ring-1 ring-blue-200 moving-border-text"
      : badgeVariant === "secondary"
      ? "bg-gray-600 text-white ring-1 ring-gray-200 moving-border-text"
      : badgeVariant === "destructive"
      ? "bg-red-600 text-white ring-1 ring-red-200 moving-border-text"
      : badgeVariant === "outline"
      ? "bg-white text-green-500 ring-1 ring-green-200 moving-border-text"
      : "bg-white text-gray-600 ring-1 ring-gray-200 moving-border-text";
  return (
    <Card className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-3xl transition-shadow duration-300 gap-2">
      {badgeText && (
        <Badge
          variant={badgeVariant}
          className={cn(
            "absolute -top-2 right-0 px-4 py-1 text-sm font-extrabold rounded-full transform rotate-8 tracking-wider uppercase",
            badgeColors
          )}
        >
          {badgeText}
        </Badge>
      )}

      <CardHeader className="relative p-0">
        <CardTitle className="mt-5">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <CardDescription className="text-gray-600 dark:text-gray-400 p-0">
          <Section content={description} />
        </CardDescription>
      </CardContent>

      <CardFooter></CardFooter>
    </Card>
  );
}
