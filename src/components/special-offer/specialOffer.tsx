import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import { CartSpecialOffer } from "./component/cart";
import { specialOffers } from "@/data/data";

export function SpecialOffer() {
  const offers = specialOffers;

  return (
    <div className="mt-18 py-5">
      <>
        <Controller>
          <p className="font-medium text-xl lg:text-3xl text-start">
            Спецпредложения
          </p>
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5"
            )}
          >
            {offers?.map((offer, index) => (
              <CartSpecialOffer key={index} offer={offer} />
            ))}
          </div>
        </Controller>
      </>
    </div>
  );
}
