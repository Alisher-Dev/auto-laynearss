import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Controller } from "@/helpers/contain";
import { model } from "@/data/data";
import { IModel } from "@/types/type";
import { useEffect, useState } from "react";

export function HeaderVariant() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState<IModel | null>(null);

  useEffect(() => {
    if (id) {
      const found = model.find((m) => m.id === +id);
      setCar(found ?? null);
    }
  }, [id]);

  return (
    <>
      <Controller>
        {car && (
          <div>
            <span className="flex flex-col sm:flex-row gap-3 items-start justify-between">
              <span>
                <h1 className="font-medium text-xl lg:text-3xl text-gray-900">
                  {t("equipment-and-prices")} {car.name[i18n.language]}
                </h1>
                <p className="font-medium text-md lg:text-xl text-gray-500 mt-4">
                  {t("prices")}
                </p>
                <p className="font-medium text-md lg:text-xl text-gray-900">
                  {car.variants?.[0].price.toLocaleString() + " " + t("usz")}
                </p>
              </span>
              <Button
                variant="outline"
                className="h-auto p-5"
                onClick={() => navigate("/contact-us")}
              >
                {t("contact-us")}
              </Button>
            </span>
            <img
              src={car.colors?.[0].image[0]}
              alt="car-variant"
              loading="lazy"
              className="w-full h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] object-contain mt-5"
            />
          </div>
        )}
      </Controller>
    </>
  );
}
