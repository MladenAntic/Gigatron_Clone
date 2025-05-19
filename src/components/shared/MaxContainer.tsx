import { cn } from "@/lib/utils";
import { MaxContainerProps } from "@/types";

export const MaxContainer = ({ className, children }: MaxContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-[71.875rem]", className)}>{children}</div>
  );
};
