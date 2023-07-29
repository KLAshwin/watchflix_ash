import * as React from "react";
import axios from "axios";
import Layout from "./Layout.jsx";
import Carousel from "./TVSeriesCarousl.jsx";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function TVSeries() {
  const navigate = useNavigate();

  let config = {
    route: "movies",
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10759",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  const options1 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/tv/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10759",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=16",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options4 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=35",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options5 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=80",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options6 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=99",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options7 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=18",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options8 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10751",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options9 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10762",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options10 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=9648",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options11 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10763",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options12 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10764",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options13 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10765",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options14 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10766",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options15 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10767",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options16 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=10768",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options17 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?api_key=XXXXX&with_genres=37",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const [post, setPost] = React.useState();
  const [trend, setTrend] = React.useState();
  const [actadven, setActAdven] = React.useState();
  const [anime, setAnime] = React.useState();
  const [comedy, setComedy] = React.useState();
  const [crime, setCrime] = React.useState();
  const [docu, setDocu] = React.useState();
  const [drama, setDrama] = React.useState();
  const [fam, setFam] = React.useState();
  const [kids, setKids] = React.useState();
  const [myst, setMyst] = React.useState();
  const [news, setNews] = React.useState();
  const [real, setReal] = React.useState();
  const [scifi, setSciFi] = React.useState();
  const [soap, setSoap] = React.useState();
  const [talk, setTalk] = React.useState();
  const [warpolit, setWarPolit] = React.useState();
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
      console.log("Horror", JSON.stringify(response.data.results));
      setActAdven(response.data.results);
    });

    axios.request(options3).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setAnime(response.data.results);
    });

    axios.request(options4).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setComedy(response.data.results);
    });

    axios.request(options5).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setCrime(response.data.results);
    });

    axios.request(options6).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setDocu(response.data.results);
    });

    axios.request(options7).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setDrama(response.data.results);
    });

    axios.request(options8).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setFam(response.data.results);
    });

    axios.request(options9).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setKids(response.data.results);
    });

    axios.request(options10).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setMyst(response.data.results);
    });

    axios.request(options11).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setNews(response.data.results);
    });

    axios.request(options12).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setReal(response.data.results);
    });

    axios.request(options13).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setSciFi(response.data.results);
    });

    axios.request(options14).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setSoap(response.data.results);
    });

    axios.request(options15).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setTalk(response.data.results);
    });

    axios.request(options16).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setWarPolit(response.data.results);
    });

    axios.request(options17).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setWest(response.data.results);
    });
  }, []);

  return (
    <>
      <Layout>
        <Carousel config={config}/>
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
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Crime</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {crime?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>War & Politics</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {warpolit?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Action & Adventure</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {actadven?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Kids</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {kids?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Mystery</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {myst?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Reality</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {real?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Soap</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {soap?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>Talk</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {talk?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
          <div style={{ width: "169px", height: "36px" }}>News</div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {news?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/tvseries/${item?.id}`);
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
