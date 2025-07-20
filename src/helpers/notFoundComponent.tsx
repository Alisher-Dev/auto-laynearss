import { AlertTriangle } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

export function NotFoundComponent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("h-[500px] flex flex-col items-center justify-center text-center px-4", className)} {...props}>
			<AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
			<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Ничего не найдено</h2>
			<p className="text-gray-600 dark:text-gray-300 mt-2 text-base sm:text-lg max-w-md">
				Проверьте подключение к интернету или попробуйте позже.
			</p>
		</div>
	);
}
