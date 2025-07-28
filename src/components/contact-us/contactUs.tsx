import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Controller } from "@/helpers/contain";
import { Button } from "../ui/button";
import { managersList } from "@/data/data";

export function ContactUs() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [content, setContent] = useState("");

  const onSucces = () => {
    if (name && phone && content) {
      toast(t("success"));
      setName("");
      setPhone("+998");
      setContent("");
      return console.log({ name, phone, content });
    }
    toast(t("failed"));
  };

  return (
    <div className="mt-22">
      <Controller>
        <h1 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl border-b-1 border-b-gray-500 pb-7">
          {t("feedback")}
        </h1>

        {/* contact */}
        <div className="max-w-[600px] mx-auto my-10 flex flex-col gap-5">
          <p className="text-lg font-medium">
            {t("hot-line")} Avto-Layner Xorazm <br />
            <a href="tel:622260336" className="font-bold block hover:underline">
              +998 (62) 226-03-36
            </a>
          </p>

          <p className="text-xs sm:text-[16px] font-normal border-t-1 border-t-gray-400 mt-2- pt-5">
            {t("contact-info")}
          </p>

          <div className="flex flex-col gap-10">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder={t("name")}
              className="outline-none h-[40px] border-1 border-gray-400 pl-2 rounded-lg"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              placeholder={t("phone")}
              className="outline-none h-[40px] border-1 border-gray-400 pl-2 rounded-lg"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder={t("comment")}
              className="border-1 border-gray-400 p-2 rounded-lg min-h-[200px]"
            />
            <Button variant="outline" type="submit" onClick={onSucces}>
              {t("send")}
            </Button>
          </div>
        </div>

        {/* meneger */}
        <h1 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl border-b-1 border-b-gray-500 pb-7">
          {t("contact-meneger")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
          {managersList.map((el, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 border border-gray-200 dark:border-gray-800 transition hover:scale-[102%] hover:shadow-xl"
            >
              <h3 className="text-sm md:text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {el.fullName}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {el.position}
              </p>
              <p className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium mt-2">
                {el.phone}
              </p>
            </div>
          ))}
        </div>
      </Controller>
    </div>
  );
}
