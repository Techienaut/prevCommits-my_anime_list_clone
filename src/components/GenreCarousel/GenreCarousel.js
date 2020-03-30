import React, { useState, useEffect } from "react";
import "./GenreCarousel.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function GenreCarousel(props) {
  const [actionData, setActionData] = useState("");
  const [currPageNum, setCurrPageNum] = useState(1);
  const [carouselVal, setCarouselVal] = useState(0);
  useEffect(() => {
    const makeApiCall = async () => {
      const url = `https://api.jikan.moe/v3/genre/${props.type}/${props.genre}/${currPageNum}`;
      const res = await fetch(url);
      const json = await res.json();
      setActionData(json.anime);
      console.log("anime:", json.anime);
      console.log("anime type:", Array.isArray(json.anime));
    };
    makeApiCall();
  }, [currPageNum]);
  const renderAnimeItems = () => {
    let render = actionData.map(anime => {
      return (
        <div className="animeItem">
          <img style={{ height: "160px" }} src={anime.image_url} alt="" />
        </div>
      );
    });
    return render;
  };
  const onChange = value => {
    if (value >= actionData.length) {
      setCurrPageNum(currPageNum + 1);
      setCarouselVal(0);
    } else {
      setCarouselVal(value);
    }
  };
  return (
    <div className="GenreCarousel">
      <Carousel
        slidesPerScroll={10}
        slidesPerPage={10}
        value={carouselVal}
        onChange={onChange}
        infinite
        arrows
      >
        {actionData ? renderAnimeItems() : ""}
      </Carousel>
    </div>
  );
}
export default GenreCarousel;
