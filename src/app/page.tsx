import React from "react";
import Courses from "../components/Home/BlogCards/BlogCards";
import ClientLogos from "../components/Home/ClientGallery/client";
import ControlsCarousel from "../components/Home/SubHeading/subHeading";
import Features from "../components/Home/Card/card";
import data from "../components/Home/home.json";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {

  return (
    <>
      <ControlsCarousel data={data.items} />
      <Features
        heading={data.cards.heading}
        description={data.cards.desciption}
        cards={data.cards.features}
      />
      <Courses
        heading={data.miniCards.heading}
        description={data.miniCards.desciption}
        cards={data.miniCards.cards}
      />
      <Testimonial />
      <ClientLogos clientLogos={data.clientLogos} />
    </>
  );
}
