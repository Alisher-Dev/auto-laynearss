import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import { Controller } from "./contain";
import { NotFoundComponent } from "./notFoundComponent";

interface VerifiedProps {
	isError: boolean;
	isLoading: boolean;
	children: React.ReactNode;
	loadVariant?: "grid" | "flex" | "screen" | "text";
}

export function Verified({ isError, isLoading, children, loadVariant = "flex" }: VerifiedProps) {
	if (isLoading) {
		if (loadVariant === "grid") {
			return (
				<Controller className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 w-full min-h-[400px] my-3">
					{Array.from({ length: 5 }).map((_, index) => (
						<Skeleton key={index} className="w-full h-[250px]" />
					))}
				</Controller>
			);
		} else if (loadVariant === "flex") {
			return (
				<Controller>
					<Skeleton className="h-[600px] bg-gray-200 my-3" />
				</Controller>
			);
		} else if (loadVariant === "text") {
			return (
				<Controller className="h-[600px] w-full flex flex-col gap-5 my-3">
					{Array.from({ length: 5 }).map((_, index) => (
						<Skeleton key={index} className={cn(index === 0 ? "w-full h-16" : "w-full h-10")} />
					))}
				</Controller>
			);
		} else {
			return <Skeleton className="h-[600px] w-full bg-gray-200" />;
		}
	}

	if (isError) {
		return <NotFoundComponent />;
	}

	return <>{children}</>;
}
