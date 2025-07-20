import { useTranslation } from "react-i18next";
import { IModel } from "@/types/type";

export function BannerDetail({ car }: { car: IModel }) {
  const { i18n } = useTranslation();

  return (
    <div className="relative max-h-screen min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full">
      <img
        src={car?.banner}
        alt={`car-${car?.id}`}
        className="w-full h-full max-h-screen min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-60 p-10 bg-gradient-to-b to-gray-900 from-gray-100/0 flex items-end justify-between">
        <div>
          <p className="text-gray-100 text-xl lg:text-2xl xl:text-3xl">
            {car?.name[i18n.language]}
          </p>
          <p className="text-gray-100 text-sm xl:text-lg sm:max-w-[400px] xl:max-w-[600px] mt-3">
            {car?.description?.[i18n.language].slice(0, 90)}{" "}
            {car?.description?.[i18n.language].length > 90 && "..."}
          </p>
        </div>
        <div className="hidden gap-5 sm:flex">
          {car?.variants?.[0]?.values?.slice(0, 3)?.map((value, index) => (
            <div key={index} className="flex flex-col gap-2">
              <img
                key={index}
                src={value?.attribute?.icon}
                alt={`attribute-${index}`}
                className="w-[42px] h-[42px]"
              />
              <p className="text-xs text-gray-100 max-w-[200px]">
                {value?.attribute?.name[i18n.language].slice(0, 50)}
                {value?.attribute?.name[i18n.language].length > 50 && "..."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
