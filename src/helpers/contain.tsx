import React from "react";

import { cn } from "@/lib/utils";

export function Controller({ children, className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("max-w-[1600px] mx-auto px-5", className)} {...props}>
			{children}
		</div>
	);
}
