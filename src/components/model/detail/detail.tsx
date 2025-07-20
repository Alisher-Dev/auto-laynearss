import { useParams } from "react-router";
import { SpecialOfferCarousel } from "@/components/special-offer/specialOfferCarousel";
import { BannerDetail } from "./component/banner";
import { ColorDetail } from "./component/color";
import { ContentDetail } from "./component/content";
import { VariantDetail } from "./component/variant";
import { model } from "@/data/data";
import { IModel } from "@/types/type";
import { useEffect, useState } from "react";

export function DetailModel() {
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
      <BannerDetail car={car} />
      <SpecialOfferCarousel />
      <ColorDetail car={car} />
      <VariantDetail car={car} />
      <ContentDetail content={car?.content} />
    </>
  );
}
