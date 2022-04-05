import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      image={item.img}
      name={item.title}
      rating={item.rating}
    />
  );
});

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

    const film = movies.map((item)=>{
        return(
            <Card
                key = {item.id}
                image = {IMG_API + item.poster_path}
                name = {item.title}
                rating = {item.vote_average}
                description = {item.overview}
            />
        );
    })

  return (
    <div className="App">
      <Navbar />
      <div className="movies">{film}</div>
    </div>
  );
}

export default App;
