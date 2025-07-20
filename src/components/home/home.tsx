import { model } from "@/data/data";
import { SpecialOfferCarousel } from "../special-offer/specialOfferCarousel";
import { Carousels } from "./component/carousel";
import { CarouselAvto } from "./component/carouselAvto";

export function Home() {
  const cars = model;
  return (
    <>
      <Carousels cars={cars} />
      <CarouselAvto cars={cars} />
      <SpecialOfferCarousel />
    </>
  );
}
