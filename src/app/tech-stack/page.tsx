import React from "react";
import SubHeader from "@/components/ContactUs/SubHeader/startingView";
import TechStack from "@/components/TechStack/TechStack";

export default function TechStackPage() {
  const data = {
    image: "../../assets/images/portfolio/bg-inner.jpg",
    title: "Technology Stack",
    description: "Showcase of Our hands in different technologies",
    list: [
      { title: "Home", link: "/" },
      { title: "Tech Stack", link: "" },
    ],
  };


  return (
    <>
      <SubHeader data={data} />
      <TechStack />
    </>
  );
}
