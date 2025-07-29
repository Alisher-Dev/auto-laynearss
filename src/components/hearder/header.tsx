import { LucideLocationEdit, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router";
import { Controller } from "@/helpers/contain";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DrowMenu } from "./drowMenu";
import { SheetMenu } from "./sheetMenu";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  const { t, i18n } = useTranslation();

  const pathParts = location.pathname;
  const isHomePage = location.pathname === "/";

  const isActive =
    (isHomePage ||
      (pathParts.startsWith("/model/") && pathParts.split("/").length === 3) ||
      pathParts.startsWith("/special-offer/")) &&
    !scrollY;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "bg-gray-100 fixed top-0 left-0 right-0 hover:text-gray-900 transition-all z-50",
        isActive &&
          "bg-gray-600/10 backdrop-blur-sm text-white hover:bg-gray-600/20 hover:text-white"
      )}
    >
      <Controller className="flex items-center justify-between py-4">
        <span className="w-[35%] hidden items-center gap-2 xl:flex">
          <Button variant="ghost" onClick={() => navigate("/model")}>
            {t("models")}
          </Button>
          <DrowMenu isActive={isActive} />
          <Button variant="ghost" onClick={() => navigate("/special-offer")}>
            {t("offers")}
          </Button>
        </span>
        <span className="p-2 w-20 xl:hidden">
          <SheetMenu />
        </span>
        <Link to="/">
          <p>Avto-Layner Xorazm</p>
        </Link>
        <span className="flex items-center justify-end xl:w-[35%] gap-2">
          <span className="hidden xl:flex gap-2">
            <Button variant="ghost" onClick={() => navigate("/location")}>
              <LucideLocationEdit />
            </Button>
            <Button variant="ghost" onClick={() => navigate("/contact-us")}>
              <Phone />
            </Button>
          </span>
          <Select
            defaultValue={i18n.language ?? "uz"}
            onValueChange={(item) => i18n.changeLanguage(item ?? "uz")}
          >
            <SelectTrigger>
              <SelectValue placeholder="language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="uz">UZ</SelectItem>
                <SelectItem value="ru">RU</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </span>
      </Controller>
    </div>
  );
}
