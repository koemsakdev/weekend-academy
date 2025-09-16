import Link from "next/link";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type NavigationLink = {
    url: string;
    title: string;
};

interface FooterSectionProps {
    prev?: NavigationLink;
    next?: NavigationLink;
}

const FOOTER_STYLES = {
    container: "py-4",
    wrapper: "flex justify-between items-center w-full mx-auto"
} as const;

export default function FooterSection({prev, next}: FooterSectionProps) {
    return (
        <footer className={FOOTER_STYLES.container}>
            <div className={FOOTER_STYLES.wrapper}>
                {prev && (
                    prev.url === "/" ? (
                        <Button variant="secondary" disabled>
                            <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                                <ChevronLeft size={20}/>
                                <span>{prev.title}</span>
                            </div>
                        </Button>
                    ) : (
                        <Button asChild variant="secondary">
                            <Link
                                href={prev.url}
                                aria-label={`Navigate to ${prev.title}`}
                                className="flex items-center gap-2"
                            >
                                <ChevronLeft size={20}/>
                                <span>{prev.title}</span>
                            </Link>
                        </Button>
                    )
                )}
                {next && (
                    next.url === "/" ? (
                        <Button variant="secondary" disabled>
                            <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                                <span>{next.title}</span>
                                <ChevronRight size={20}/>
                            </div>
                        </Button>
                    ) : (
                        <Button
                            asChild
                            variant={"secondary"}
                            disabled={next.title === "Next"}
                        >
                            <Link
                                href={next.url}
                                aria-label={`Navigate to ${next.title}`}
                                className={"flex flex-col gap-1"}
                            >
                                <div className={"flex items-center gap-2"}>
                                    <span>{next.title}</span>
                                    <ChevronRight size={20}/>
                                </div>
                            </Link>
                        </Button>
                    )
                )}
            </div>
        </footer>
    );
}