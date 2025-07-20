import { Controller } from "@/helpers/contain";
import { useTranslation } from "react-i18next";

export function Location() {
  const { t } = useTranslation();

  return (
    <div className="mt-22">
      <Controller>
        <h1 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl border-b-1 border-b-gray-500 pb-7">
          {t("location")}
        </h1>
      </Controller>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.636125532674!2d60.601916!3d41.533822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc976dca6d277%3A0x35d81054b2fe904a!2z0JDQstGC0L7Qu9Cw0LnQvSDQkNCy0YLQviDQodCw0LvQvtC9!5e0!3m2!1sru!2s!4v1752828039754!5m2!1sru!2s"
        className="w-full h-[400px] md:h-[550px] xl:h-[650px]"
        loading="lazy"
      ></iframe>
    </div>
  );
}
