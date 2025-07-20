import { useParams } from "react-router";
import { BannerOffer } from "./component/banner";
import { ContactOffer } from "./component/contact";
import { useEffect, useState } from "react";
import { ISpecialOffer } from "@/types/type";
import { specialOffers } from "@/data/data";

export function DetailOffer() {
  const { id } = useParams();
  const [offer, setOffer] = useState<ISpecialOffer>();

  useEffect(() => {
    if (id) {
      const found = specialOffers.find((off) => off.id === +id);
      setOffer(found);
    }
  }, [id]);

  return (
    <>
      <BannerOffer offer={offer} />
      <ContactOffer content={offer?.content} />
    </>
  );
}
