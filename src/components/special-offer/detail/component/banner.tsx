import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ISpecialOffer } from "@/types/type";

export function BannerOffer({ offer }: { offer: ISpecialOffer }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {offer && (
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
          <img
            src={offer.image}
            alt={`car-${offer.id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-60 p-5 lg:p-10 bg-gradient-to-b to-gray-900 from-gray-100/0 flex items-end justify-between">
            <div>
              <p className="text-gray-100 text-xl lg:text-2xl xl:text-3xl">
                {offer.name[i18n.language]}
              </p>
              <p className="text-gray-100 text-sm xl:text-lg sm:max-w-[400px] xl:max-w-[600px] mt-2">
                {offer.description[i18n.language].slice(0, 90)}{" "}
                {offer.description[i18n.language].length > 90 && "..."}
              </p>
              <Button
                variant="outline"
                className="mt-4 h-auto px-15 py-4"
                onClick={() => navigate("/contact-us")}
              >
                {t("contact-us")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
