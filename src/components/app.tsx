import "@/i18n";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";

import { route } from "@/data/router";

import { Footer } from "./footer/footer";
import { Header } from "./hearder/header";
import { Toaster } from "./ui/sonner";

export function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Toaster />
      <Routes>
        {route.map((el, index) => (
          <Route key={index} {...el} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
