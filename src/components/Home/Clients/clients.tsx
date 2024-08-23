import Image from "next/image";
import React from "react";

const clients = [
  { name: "Amazon", image: "amazon.svg" },
  { name: "Google", image: "google.svg" },
  { name: "Lenovo", image: "lenovo.svg" },
  { name: "PayPal", image: "paypal.svg" },
  { name: "Shopify", image: "shopify.svg" },
  { name: "Spotify", image: "spotify.svg" },
];

const Clients = () => {
  return (
    <section className="w-full py-6 border-b border-gray-100 dark:border-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
          {clients.map((client) => (
            <div key={client.name} className="mx-auto py-4">
              <Image
              height={34} width={150}
                src={`assets/images/client/${client.image}`}
                className="h-6"
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
