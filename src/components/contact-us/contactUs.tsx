import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Controller } from "@/helpers/contain";
import { Button } from "../ui/button";

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
        <div className="max-w-[600px] mx-auto my-10 flex flex-col gap-5">
          <p className="text-lg font-medium">
            {t("hot-line")} Avto-Layner <br />{" "}
            <a href="tel:1333" className="font-bold">
              1333
            </a>
          </p>

          <p className="text-md font-normal border-t-1 border-t-gray-400 mt-2- pt-5">
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
      </Controller>
    </div>
  );
}
