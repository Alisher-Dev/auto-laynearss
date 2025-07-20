import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { IModel } from "@/types/type";

export function CartModel({ car }: { car: IModel }) {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  return (
    <div
      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer group border border-gray-200"
      onClick={() => navigate(`/model/${car.id}`)}
    >
      <div className="relative">
        <img
          src={car.colors[0].image[0]}
          alt="car"
          className="w-full max-w-[300px] mx-auto h-[220px] object-contain transition-transform duration-300 group-hover:scale-95"
        />

        {/* Если есть скидка — показываем бейдж */}
        {car.variants[0]?.discount ? (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            –{car.variants[0].discount}%
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="mt-4 space-y-1 text-center">
        <p className="text-lg font-semibold text-gray-800">
          {car.name[i18n.language]}
        </p>

        {/* Цена с учетом скидки */}
        {car.variants[0]?.discount ? (
          <div className="flex flex-col items-center justify-center gap-2 text-sm">
            <p className="line-through text-gray-400">
              {car.variants[0].price.toLocaleString()} {t("usz")}
            </p>
            <p className="text-red-600 font-semibold">
              {Math.floor(
                car.variants[0].price * (1 - car.variants[0].discount / 100)
              ).toLocaleString()}{" "}
              {t("usz")}
            </p>
          </div>
        ) : (
          <p className="text-gray-600 text-sm">
            {car.variants[0]?.price.toLocaleString()} {t("usz")}
          </p>
        )}
      </div>
    </div>
  );
}
