import {cn} from "@/lib/utils";

type SectionProps = {
    children: React.ReactNode;
    variant?: "base" | "alt";
};

export default function Section({
                                    children,
                                    variant = "base",
                                }: SectionProps) {
    return (
        <section
            className={cn(
                "py-12 md:py-16",
                variant === "base" && "bg-bg-base",
                variant === "alt" && "bg-bg-alt"
            )}
        >
            {children}
        </section>
    );
}
