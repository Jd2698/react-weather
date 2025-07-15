import { type FormEvent } from "react";
import { useWeather } from "../hooks/useWeather";
const difKelvin: number = 273.15;

export interface IWeather {
  name: string;
  weather: [{ description: string; icon: string }];
  main: { temp: number };
}

export const Weather = () => {
  const { city, updateCity, info, getData } = useWeather();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => updateCity(e.target.value)}
            placeholder="search city"
            autoFocus
          />

          <input type="submit" value="search" />
        </form>

        {info && (
          <section className="container-weather">
            <span className="item green">{info.name}</span>
            <span className="item blue">
              {Math.floor(info.main.temp - difKelvin)} °C
            </span>

            <span>{info.weather[0].description}</span>
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
            ></img>
          </section>
        )}
      </section>
    </>
  );
};
