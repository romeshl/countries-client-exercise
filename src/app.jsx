import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Router from "preact-router";
import Continent from "./pages/Continent";
import Countries from "./pages/Countries";

export function App() {
  return (
    <>
      <Router>
        <Countries path="/" />
        <Continent path="/:continent" />
      </Router>
    </>
  );
}
