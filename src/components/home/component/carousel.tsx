import Autoplay from "embla-carousel-autoplay";
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
import { IModel } from "@/types/type";

export function Carousels({ cars }: { cars: IModel[] }) {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="xl:h-screen">
          {cars?.map((item, index) => (
            <CarouselItem key={index} className="h-full relative bg-gray-700">
              <img
                src={item?.banner}
                alt={`img-${index}`}
                className="w-full min-h-[600px] max-h-screen xl:h-screen object-cover rounded-md"
              />

              <span className="absolute bottom-0 left-4 right-0 m-5 xl:m-10 min-h-[200px] bg-gray-800/20 backdrop-blur-md flex flex-col items-start justify-between p-4 rounded-xl">
                <span className="grid gap-2">
                  <p className="text-white font-semibold text-xl sm:text-2xl">
                    {item?.name[i18n.language]}
                  </p>
                  <p className="text-white text-base sm:text-lg">
                    {item?.description[i18n.language]?.slice(0, 250) +
                      (item?.description[i18n.language]?.length > 250
                        ? "..."
                        : "")}
                  </p>
                </span>
                <Button
                  className="mt-3 bg-transparent border-1 border-gray-100"
                  onClick={() => navigate(`/model/${item?.id}`)}
                >
                  {t("more")}
                </Button>
              </span>

              <span className="flex items-center">
                <CarouselPrevious className="bg-white/70 hover:bg-white text-black rounded-full shadow-md absolute top-1/2 -translate-y-1/2 left-8 sm:left-10" />
                <CarouselNext className="bg-white/70 hover:bg-white text-black rounded-full shadow-md absolute top-1/2 -translate-y-1/2 right-4 sm:right-6" />
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
