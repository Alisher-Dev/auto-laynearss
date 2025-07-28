import { useTranslation } from "react-i18next";
import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import { CartModel } from "./component/cart";
import { model } from "@/data/data";

export function Model() {
  const { t } = useTranslation();

  const cars = model;

  return (
    <div className="mt-18 py-5">
      <Controller>
        <p className="font-medium text-xl lg:text-3xl text-start">
          {t("all-models")} Avto-Layner Xorazm
        </p>
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5"
          )}
        >
          {cars?.map((car, index) => (
            <CartModel car={car} key={index} />
          ))}
        </div>
      </Controller>
    </div>
  );
}
