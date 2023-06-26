"use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  console.log("all cars values", allCars);
  const [loding, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState<string | number>("");
  const [year, setYear] = useState<string| number>(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, model, manufacturer, limit]);

  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl  font-extrabold">Car Catalogue</h1>
          <p>Explore the Car you might Like</p>
          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
            <div className="home__filter-container">
              <CustomFilter
                setFilter={setFuel}
                title="fuel"
                options={fuels ? fuels : []}
              />
              <CustomFilter
                setFilter={setYear}
                title="year"
                options={yearsOfProduction ? yearsOfProduction : []}
              />
            </div>
          </div>
          {allCars && allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
              {loding && (
                <div className="w-full mt-16 flex-center">
                  <Image
                    src="/loader.svg"
                    alt="laoder"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}
              <ShowMore
                pageNumber={limit / 10}
                isNextPage={limit > allCars.length}
                setLimit={setLimit}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h1 className="text-black text-xl font-bold">Oops, no result</h1>
              {/* <p>{allCars?.message}</p> */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
