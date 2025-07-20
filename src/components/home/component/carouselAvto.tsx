import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import { IModel } from "@/types/type";

export function CarouselAvto({ cars }: { cars: IModel[] }) {
  const [activeCar, setActiveCar] = useState<IModel | null>(null);
  const [isImgLoading, setImgLoading] = useState(true);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleColor = (car: IModel) => {
    if (car.id !== activeCar.id) {
      setActiveCar(car);
      setImgLoading(true);
    }
  };

  useEffect(() => {
    if (cars && cars.length > 0) {
      setActiveCar(cars[0]);
    }
  }, [cars]);

  return (
    <div className="bg-gray-100 py-14">
      <Controller>
        <p className="font-bold text-2xl lg:text-4xl text-center">
          {t("models")} Avto-Layner
        </p>
        <div className="w-full my-5">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full relative px-10"
          >
            <CarouselContent className="h-[130px] m-auto">
              {cars?.map((car, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 sm:basis-1/3 md:basis-1/5 xl:basis-1/9 p-0 relative"
                >
                  <div
                    onClick={() => handleColor(car)}
                    className={cn(
                      "p-1 rounded-2xl hover:bg-gray-200 transition-all cursor-pointer",
                      activeCar?.id === car.id && "bg-gray-200"
                    )}
                  >
                    <img
                      src={car.colors?.[0].image?.[0]}
                      alt={`car-${index}`}
                      loading="lazy"
                      className="w-full h-[100px] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
        <div className="transition-all">
          {!!activeCar && (
            <div className="relative py-2">
              {isImgLoading && (
                <div className="absolute inset-0 z-10 flex justify-center items-center bg-gray-100/20 backdrop-blur-xs">
                  <span className="animate-spin w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full"></span>
                </div>
              )}
              <img
                src={activeCar.colors?.[0].image?.[0]}
                alt="active-car"
                loading="lazy"
                className="w-full h-[350px] lg:h-[500px] object-contain px-5"
                onLoad={(pred) => setImgLoading(!pred)}
              />
              <p className="text-2xl font-medium text-gray-800 text-center">
                {activeCar.name[i18n.language]}
              </p>
              <p className="text-lg font-medium text-gray-800 text-center">
                {activeCar.variants[0].price.toLocaleString() + " " + t("usz")}
              </p>
              <Button
                className="block mx-auto mt-5 font-medium text-lg h-auto"
                variant="default"
                onClick={() => navigate(`/model/${activeCar.id}`)}
              >
                {t("more-in-models")}
              </Button>
            </div>
          )}
        </div>
      </Controller>
    </div>
  );
}
