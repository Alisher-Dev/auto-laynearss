import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { IVariants } from "@/types/type";

export function VariantValue({ data: variant }: { data: IVariants[] }) {
  const { i18n, t } = useTranslation();

  const [activeVariant, setActiveVariant] = useState<IVariants | undefined>();

  useEffect(() => {
    if (!activeVariant && variant) {
      setActiveVariant(variant?.[0]);
    }
  }, [variant]);

  return (
    <>
      <div className="w-full sm:w-[70%] sm:min-h-[500px] border-l-0 sm:border-l-1">
        <Carousel opts={{ loop: true }} className="w-full h-full">
          <CarouselContent className="m-0 my-3 sm:my-0">
            {variant?.map((ivarina, index) => (
              <CarouselItem
                key={index}
                className="h-full basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 relative px-20 sm:px-0"
              >
                <div
                  className={cn(
                    "p-3 bg-gray-100 hover:scale-95 transition-all cursor-pointer",
                    activeVariant?.id === ivarina.id &&
                      "bg-blue-50 border-1 border-blue-400"
                  )}
                  onClick={() => setActiveVariant(ivarina)}
                >
                  <p className="font-medium">{ivarina.title[i18n.language]}</p>
                  <p className="mt-3">
                    {ivarina.price.toLocaleString() + " " + t("usz")}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="flex items-center sm:hidden">
            <CarouselPrevious className="bg-white/70 hover:bg-white text-black rounded-full shadow-md absolute top-1/2 -translate-y-1/2 left-4 sm:left-6" />
            <CarouselNext className="bg-white/70 hover:bg-white text-black rounded-full shadow-md absolute top-1/2 -translate-y-1/2 right-4 sm:right-6" />
          </span>
        </Carousel>
        <div className="p-5">
          <p className="font-medium text-gray-900 text-lg lg:text-xl xl:text-2xl">
            {t("equipment")} {activeVariant?.title[i18n.language]}
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
            {activeVariant?.values?.map((value, index) => (
              <li className="font-normal" key={index}>
                {value?.title?.[i18n.language]}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
