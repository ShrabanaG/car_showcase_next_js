import axios, { AxiosRequestConfig } from "axios";
import { FilterProps } from "@/types";

// const options = {
//   method: "GET",
//   url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
//   params: { model: "corolla" },
//   headers: {
//     "X-RapidAPI-Key": "c961491420mshe60dfb3911b139ap182021jsn513342c0f9e7",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

const baseURL = "https://cars-by-api-ninjas.p.rapidapi.com/v1";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, model, fuel, year, limit } = filters;

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${baseURL}/cars`,
    headers: {
      "X-RapidAPI-Key": "c961491420mshe60dfb3911b139ap182021jsn513342c0f9e7",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
    params: {
      make: manufacturer,
      year: year,
      model: model,
      fuel_type: fuel,
      limit: limit,
    },
  };

  try {
    const response = await axios.request(options);
    const result = response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
