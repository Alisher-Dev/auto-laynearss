import { LucideLocationEdit, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import instagramIcon from "../../assets/Instagram_icon.png";
import telegramIcon from "../../assets/Telegram_logo.svg.webp";
import { useTranslation } from "react-i18next";

export function SheetMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [location.pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-3 px-4">
          <Button variant="ghost" onClick={() => navigate("/model")}>
            Модели
          </Button>
          <Button variant="ghost" onClick={() => navigate("/special-offer")}>
            Спецпредложения
          </Button>
        </div>
        <SheetFooter>
          <div className="flex flex-col items-start gap-6 p-3">
            <Button
              variant="outline"
              className="h-fit p-[10px]"
              onClick={() => navigate("/location")}
            >
              <LucideLocationEdit />
              {t("location")}
            </Button>
            <p>
              Горячая линия Avto-Layner <br />{" "}
              <a href="tel:1333" className="font-bold">
                1333
              </a>
            </p>
            <p>
              Информационная линия Avto-Layner <br />{" "}
              <a href="tel:1333" className="font-bold">
                +998 71 215-70-07
              </a>
            </p>
            <span>
              <p>Avto-Layner в соцсетях</p>
              <span className="flex items-center gap-3">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
