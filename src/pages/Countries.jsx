import { useEffect, useState } from "preact/hooks";
import { Suspense } from "preact/compat";
import { useQuery$ } from "@preact-signals/query";

const Countries = () => {
  const fetchCountries = async () => {
    const results = await fetch("https://af-countries-api.azurewebsites.net");
    const resultsJson = results.json();
    console.log("fetch", resultsJson);
    return resultsJson;
  };

  const { data, isLoading, error } = useQuery$(() => ({
    queryKey: ["key"],
    queryFn: fetchCountries,
  }));

  return (
    <>
      <h1>Countries</h1>

      {isLoading ? (
        <b> Loading .. </b>
      ) : error ? (
        <b>There's an error: {error.message}</b>
      ) : data ? (
        <ul>
          {data.map((country) => (
            <li key={country.Code}>{country.Name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Countries;
