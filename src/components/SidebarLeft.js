import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

function SidebarLeft() {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const data = await Axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US"
    ).then((res) => res.data);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="sidebars">
      <h3 className="titles">Genres</h3>
      {genres.map((item) => (
        <Link to={`/genre/${item.id}`} key={item.id} className="genres-links">
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
export default SidebarLeft;
