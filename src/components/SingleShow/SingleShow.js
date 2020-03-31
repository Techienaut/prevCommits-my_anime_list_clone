import React, { useState, useEffect } from "react";

function SingleShow(props) {
  const [actionData, setActionData] = useState("");
  useEffect(() => {
    const makeApiCall = async () => {
      const url = `https://api.jikan.moe/v3/${props.type}/${props.match.params.id}`;
      console.log("url:", url);
      const res = await fetch(url);
      const json = await res.json();
      console.log("json-anime:", json);
      setActionData(json);
    };
    makeApiCall();
  }, []);
  return (
    <div className="SingleShow">
      <h1>{actionData.title}</h1>
      <img src={actionData.image_url} alt="None" />
    </div>
  );
}

export default SingleShow;
