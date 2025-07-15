import { useState } from "react";
import type { IWeather } from "../components/Weather";

const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const apikey = "e62df3d9d148a5ffd687c7b37fb856e3";

export const useWeather = () => {
  const [city, setCity] = useState<string>("");
  const [info, setInfo] = useState<IWeather>();

  const getData = async () => {
    try {
      const res = await fetch(`${urlBase}?q=${city}&appid=${apikey}`);
      const data = await res.json();

      if (!data.name) return;

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCity = (newCity: string) => {
    setCity(newCity);
  };
  return {
    city,
    updateCity,
    info,
    getData,
  };
};
