import React from "react";
import { Counter } from "./redux/features/counter/Counter";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FilterPage from "./views/FilterPage/FilterPage";

function App() {
  return (
    <>
      <div className="">
        <FilterPage />
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
