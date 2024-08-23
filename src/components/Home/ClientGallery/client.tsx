import Image from "next/image";
import React from "react";

type ClientLogo = {
  src: string;
  alt: string;
};

type Props = {
  clientLogos: ClientLogo[];
};

const ClientLogos: React.FC<Props> = ({ clientLogos }) => {
  return (
    <section className="py-6 bg-gray-50">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          {clientLogos.map((clientLogo) => (
            <div className="py-4 md:w-auto w-6/12 flex justify-center" key={clientLogo.src}>
              <img  src={clientLogo.src} className="h-6" alt={clientLogo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
