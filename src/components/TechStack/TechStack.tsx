"use client"
import Link from "next/link";
import React, { useState } from "react";
import data from "./data.json";

export default function TechStack() {
  const [filterOptions, setFilterOptions] = useState("All");
  const [listing, setListing] = useState(data.imageItems);

  const handleFilter = (item: string) => {
    console.log(data.imageItems);
    if (item === "All") {
      setListing(data.imageItems); // Reset to all items when "All" is selected
    } else {
      const tempArr = data.imageItems.filter((listingItem: any) =>
        listingItem.group.includes(item)
      );

      setListing(tempArr);
    }
  };

  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-[30px]">
          <div className="filters-group-wrap text-center">
            <div className="filters-group">
              <ul className="container-filter-border-bottom filter-options flex justify-between flex-wrap">
                <li
                  className={`${
                    filterOptions === "All" && "text-black"
                  } inline-block font-medium text-small mx-2 cursor-pointer relative text-gray-800 transition duration-500 `}
                  onClick={() => {
                    handleFilter("All");
                    setFilterOptions("All");
                  }}
                >
                  All
                </li>
                {data.filterOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      filterOptions === option.name && "text-black"
                    } inline-block font-medium text-small mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`}
                    data-group={option.group}
                    onClick={() => {
                      handleFilter(option.group);
                      setFilterOptions(option.name);
                    }}
                  >
                    {option.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative mt-8">
        <div
          className="flex flex-wrap h-fit cubic-bezier(0.4, 0, 0.2, 1) 0s;"
        >
          {listing.map((item, index) => (
            <div
              key={index}
              className="xl:w-1/6 md:w-1/6 lg:w-1/6 w-1/3 img-container-height p-4 picture-item shuffle-item shuffle-item--visible"
              data-groups={JSON.stringify(item.group)}
            >
              <div className="group relative block overflow-hidden rounded-md h-20 flex justify-center items-center transition-all duration-150">
                <img
                  src={item.image}
                  className="h-22 img-size cover group-hover:origin-center img-size group-hover:scale-110 group-hover:rotate-3 transition duration-500 md:p-[35px] p-[10px]"
                  alt={item.title}
                />
                
              </div>
            </div>
          ))}
        </div>
        <div className="container mt-12">
          <div className="grid grid-cols-1 text-center">
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Business problems? Technology challenges?
            </h3>
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
              >
                <i className="uil uil-phone"></i> Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
