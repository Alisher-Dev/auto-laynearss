import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import { IColors, IModel } from "@/types/type";

export function ColorDetail({ car }: { car: IModel }) {
  const [activeColor, setActiveColor] = useState<IColors | undefined>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!activeColor && car) {
      setActiveColor(car.colors?.[0]);
    }
  }, [car]);

  const { i18n, t } = useTranslation();

  const handleColor = (color: IColors) => {
    if (color.id !== activeColor.id) {
      setActiveColor(color);
      setLoading(true);
    }
  };

  return (
    <>
      {car && (
        <div className="bg-gray-100 py-10">
          <Controller>
            <p className="font-medium text-2xl">{car.name[i18n.language]}</p>

            <Carousel opts={{ loop: true }}>
              <CarouselContent className="m-0">
                {activeColor?.image?.map((img, index) => (
                  <CarouselItem key={index} className="p-0 min-h-[300px]">
                    {isLoading && (
                      <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-100/20 backdrop-blur-xs">
                        <span className="animate-spin w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full"></span>
                      </div>
                    )}
                    <img
                      src={img}
                      alt={`car-color-img-${index}`}
                      loading="lazy"
                      className="h-full sm:h-[450px] mx-auto object-contain p-5"
                      onLoad={(pred) => setLoading(!pred)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div>
              <p className="text-center font-medium text-gray-900 text-lg">
                <span className="text-gray-600">{t("color")}</span>{" "}
                {activeColor?.name[i18n.language]}
              </p>
              <div className="flex items-center gap-4 mt-4 justify-center">
                {car.colors?.map((color, index) => (
                  <div key={index}>
                    <div
                      onClick={() => handleColor(color)}
                      key={index}
                      style={{ background: color?.value }}
                      className={cn(
                        "w-10 h-10 cursor-pointer border-2 border-gray-700 rounded-full",
                        activeColor?.value === color?.value &&
                          "ring-2 ring-blue-500"
                      )}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </Controller>
        </div>
      )}
    </>
  );
}
