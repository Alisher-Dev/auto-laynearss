import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import instagramIcon from "../../assets/Instagram_icon.png";
import telegramIcon from "../../assets/Telegram_logo.svg.webp";
import { model } from "@/data/data";

export function DrowMenu({ isActive }: { isActive: boolean }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const cars = model;
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{t("selection")}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "w-screen rounded-none",
          isActive
            ? "bg-gray-600/10 backdrop-blur-sm text-white border-0"
            : "bg-gray-100"
        )}
      >
        <Controller className="min-h-[200px] p-4">
          <div className="flex justify-between">
            <div className="flex flex-col items-start">
              <Button variant="ghost" onClick={() => navigate("/model")}>
                {t("models")}
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/special-offer")}
              >
                {t("offers")}
              </Button>
            </div>
            <div className="flex gap-5">
              {
                <div
                  className="relative cursor-pointer max-w-[400px] max-h-[300px] min-h-[200px] min-w-[300px] group overflow-hidden"
                  onClick={() => navigate(`/model/${cars[0]?.id}`)}
                >
                  <img
                    src={cars?.[0]?.banner}
                    alt="mini-avto"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all"
                  />
                  <span className="absolute bottom-0 bg-gradient-to-b from-gray-50/0 to-gray-900/80 w-full h-[50%] flex items-end p-4">
                    <p className="font-medium text-lg text-gray-100">
                      {cars?.[0]?.name.uz}
                    </p>
                  </span>
                </div>
              }
              <div className="flex flex-col justify-between">
                <p>
                  {t("hot-line")} Avto-Layner Xorazm <br />
                  <a
                    href="tel:622260336"
                    className="text-sm font-bold block mt-2 hover:underline"
                  >
                    +998 (62) 226-03-36
                  </a>
                  <a
                    href="tel:622260337"
                    className="text-sm font-bold block hover:underline"
                  >
                    +998 (62) 226-03-37
                  </a>
                  <a
                    href="tel:622260338"
                    className="text-sm font-bold block hover:underline"
                  >
                    +998 (62) 226-03-38
                  </a>
                  <a
                    href="tel:622260334"
                    className="text-sm font-bold block hover:underline"
                  >
                    +998 (62) 226-03-34
                  </a>
                </p>
                <span>
                  <p>Avto-Layner Xorazm {t("in-networks")}</p>
                  <span className="flex items-center gap-3 mt-3">
                    <a href="https://instagram.com" target="_blank">
                      <img
                        src={instagramIcon}
                        alt="instagram"
                        className="w-[32px] h-[32px]"
                      />
                    </a>
                    <a href="https://telegram.com" target="_blank">
                      <img
                        src={telegramIcon}
                        alt="telegram"
                        className="w-[32px] h-[32px]"
                      />
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Controller>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
