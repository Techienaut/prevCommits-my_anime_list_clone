import React, { useState, useEffect } from "react";
import "./Main.css";
import "../GenreCarousel/GenreCarousel";
import GenreCarousel from "../GenreCarousel/GenreCarousel";
import { animeGenreList, mangaGenreList } from "../../data/GenreData";

function Main() {
  return (
    <div className="Main">
      <GenreCarousel genre={1} type="anime" />
    </div>
  );
}
export default Main;
