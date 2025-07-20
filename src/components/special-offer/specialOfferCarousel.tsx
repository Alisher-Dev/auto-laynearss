import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Controller } from "@/helpers/contain";
import { Verified } from "@/helpers/verifide";
import { cn } from "@/lib/utils";
import { specialOffers } from "@/data/data";

export function SpecialOfferCarousel() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const offers = specialOffers;

  return (
    <div className="my-14">
      <p className="font-bold text-2xl lg:text-4xl text-center">
        {t("offers")}
      </p>
      <Controller>
        <div>
          <Carousel
            opts={{
              loop: true,
            }}
            className={cn("w-full relative px-10 mt-10")}
          >
            <CarouselContent>
              {offers?.map((offer, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                  onClick={() => navigate(`/special-offer/${offer?.id}`)}
                >
                  <div
                    className={cn(
                      "p-2 rounded-2xl hover:bg-gray-200 transition-all cursor-pointer min-h-[300px]"
                    )}
                  >
                    <img
                      src={offer?.image}
                      alt={`car-${index}`}
                      className="w-full h-[200px] object-contain"
                    />
                    <p className="font-medium text-gray-800 text-center mt-5">
                      {offer?.name[i18n.language]?.slice(0, 25) +
                        (offer?.name[i18n.language]?.length > 25 ? "..." : "")}
                    </p>
                    <p className="text-sm font-sans text-gray-600 text-center">
                      {offer?.description[i18n.language]?.slice(0, 60) +
                        (offer?.description[i18n.language]?.length > 60
                          ? "..."
                          : "")}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute right-0" />
          </Carousel>
        </div>
      </Controller>
    </div>
  );
}
