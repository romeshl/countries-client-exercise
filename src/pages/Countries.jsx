import { useEffect, useState } from "preact/hooks";
import { Suspense } from "preact/compat";
import { useQuery$ } from "@preact-signals/query";

const Countries = () => {
  const fetchCountries = async () => {
    const results = await fetch("https://world-api-backend.azurewebsites.net/oceania");
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
          {data.map((country, index) => (
            <li key={index}>{country.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Countries;
