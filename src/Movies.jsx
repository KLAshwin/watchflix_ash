import * as React from "react";
import axios from "axios";
import Layout from "./Layout.jsx";
import Carousel from "./MovieCarousl.jsx";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const navigate = useNavigate();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  const options1 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=28",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=12",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options4 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=16",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options5 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=35",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options6 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=80",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options7 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=99",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options8 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=18",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options9 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=10751",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options10 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=14",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options11 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=36",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options12 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options13 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=10402",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options14 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=9648",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options15 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=10749",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options16 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=878",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options17 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=10770",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options18 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=53",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options19 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=10752",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options20 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=37",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const [post, setPost] = React.useState();
  const [trend, setTrend] = React.useState();
  const [action, setAction] = React.useState();
  const [adven, setAdven] = React.useState();
  const [anime, setAnime] = React.useState();
  const [comedy, setComedy] = React.useState();
  const [crime, setCrime] = React.useState();
  const [docu, setDocu] = React.useState();
  const [drama, setDrama] = React.useState();
  const [fam, setFam] = React.useState();
  const [fant, setFant] = React.useState();
  const [hist, setHist] = React.useState();
  const [horror, setHorror] = React.useState();
  const [music, setMusic] = React.useState();
  const [myst, setMyst] = React.useState();
  const [rom, setRom] = React.useState();
  const [scifi, setSciFi] = React.useState();
  const [tvm, setTVM] = React.useState();
  const [thrill, setThrill] = React.useState();
  const [war, setWar] = React.useState();
  const [west, setWest] = React.useState();

  React.useEffect(() => {
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.results));
      setPost(response.data.results);
    });

    axios.request(options1).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setTrend(response.data.results);
    });

    axios.request(options2).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setAction(response.data.results);
    });

    axios.request(options3).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setAdven(response.data.results);
    });

    axios.request(options4).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setAnime(response.data.results);
    });

    axios.request(options5).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setComedy(response.data.results);
    });

    axios.request(options6).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setCrime(response.data.results);
    });

    axios.request(options7).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setDocu(response.data.results);
    });

    axios.request(options8).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setDrama(response.data.results);
    });

    axios.request(options9).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setFam(response.data.results);
    });

    axios.request(options10).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setFant(response.data.results);
    });

    axios.request(options11).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setHist(response.data.results);
    });

    axios.request(options12).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setHorror(response.data.results);
    });

    axios.request(options13).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setMusic(response.data.results);
    });

    axios.request(options14).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setMyst(response.data.results);
    });

    axios.request(options15).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setRom(response.data.results);
    });

    axios.request(options16).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setSciFi(response.data.results);
    });

    axios.request(options17).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setTVM(response.data.results);
    });

    axios.request(options18).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setThrill(response.data.results);
    });

    axios.request(options19).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setWar(response.data.results);
    });

    axios.request(options20).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setWest(response.data.results);
    });
  }, []);

  return (
    <>
      <Layout>
        <Carousel config={config} route={"movies"}/>
        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Trending Now</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {trend?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Action</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {action?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Adventure</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {adven?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>War</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {war?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Thriller</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {thrill?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Sci-Fi</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {scifi?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Horror</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {horror?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Romance</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {rom?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Fantasy</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {fant?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Family</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {fam?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Animation</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {anime?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Comedy</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {comedy?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Documentary</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {docu?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Drama</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {drama?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>History</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {hist?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Music</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {music?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>TV Movie</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {tvm?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginLeft: "48px",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "169px", height: "36px" }}>Western</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {west?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{ cursor: "pointer" }}
                  className="card"
                >
                  <Card
                    img={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    width="146.293px"
                    height="216.796px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
