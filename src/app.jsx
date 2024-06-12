import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Router from "preact-router";
import Continent from "./pages/Continent";
import Countries from "./pages/Countries";
import { QueryClientProvider, QueryClient } from "@preact-signals/query";

const queryClient = new QueryClient();

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Countries path="/" />
          <Continent path="/:continent" />
        </Router>
      </QueryClientProvider>
    </>
  );
}
