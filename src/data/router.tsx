import { JSX } from "react";
import { ContactUs } from "@/components/contact-us/contactUs";
import { Home } from "@/components/home/home";
import { DetailModel } from "@/components/model/detail/detail";
import { Model } from "@/components/model/model";
import NotFoundPage from "@/components/not-found/notFound";
import { DetailOffer } from "@/components/special-offer/detail/detail";
import { SpecialOffer } from "@/components/special-offer/specialOffer";
import { Variant } from "@/components/variants/variant";
import { Location } from "@/components/location/location";

interface IRoute {
  path: string;
  element: JSX.Element;
}

export const route: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "model", element: <Model /> },
  { path: "model/:id", element: <DetailModel /> },
  { path: "model/:id/variant", element: <Variant /> },
  { path: "special-offer", element: <SpecialOffer /> },
  { path: "special-offer/:id", element: <DetailOffer /> },
  { path: "location", element: <Location /> },
  { path: "contact-us", element: <ContactUs /> },
  { path: "*", element: <NotFoundPage /> },
];
