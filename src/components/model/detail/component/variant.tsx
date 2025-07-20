import { ChevronRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Controller } from "@/helpers/contain";
import { IModel } from "@/types/type";

export function VariantDetail({ car }: { car: IModel }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {car && (
        <div className="py-10">
          <Controller>
            <span>
              <p className="text-green-900 text-center font-medium">
                {t("configurations")}
              </p>
              <p className="text-gray-800 text-center font-medium text-2xl">
                {t("variant")} {car?.name[i18n.language]}
              </p>
              <p className="text-gray-800 text-center font-sans mt-5">
                {car?.variants.length} {t("available-configurations")}
              </p>
            </span>
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="mt-2 ml-0 gap-5">
                {car?.variants?.map((variant, index) => (
                  <CarouselItem
                    key={index}
                    className="p-0 h-fit bg-gray-100 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <div className="bg-gray-900 p-2">
                      <p className="text-gray-100 font-medium">
                        {variant?.title[i18n.language]}
                      </p>
                      <p className="text-gray-100 font-medium">
                        {variant?.price.toLocaleString()} {t("usz")}
                      </p>
                    </div>

                    <div className="p-3 py-5 max-h-[300px] h-full overflow-auto">
                      <p className="text-gray-900 text-md font-bold mb-2">
                        {t("main-options")}
                      </p>
                      {variant?.values.map((value, index) => (
                        <p
                          key={index}
                          className="text-gray-900 text-md font-sans"
                        >
                          {value?.title.uz}
                        </p>
                      ))}
                    </div>

                    <Button
                      variant="link"
                      className="flex items-center gap-2 border-t-1 border-t-gray-500 rounded-none h-auto p-5 w-full bg-gray-200"
                      onClick={() => navigate("variant")}
                    >
                      <p>{t("equipment-and-prices")}</p>
                      <ChevronRightIcon size={20} />
                    </Button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Controller>
        </div>
      )}
    </>
  );
}
