import * as React from "react";
import axios from "axios";
import Layout from "./Layout";
import Card from "./Card.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [input, setInput] = React.useState();
  const [movie, setMovie] = React.useState();
  const [series, setSeries] = React.useState();

  const options1 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query: `${input}` },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/tv",
    params: { query: `${input}` },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  React.useEffect(() => {
    axios.request(options1).then(function (response) {
      console.log("Search Data", JSON.stringify(response.data.results));
      setMovie(response.data.results);
    });

    axios.request(options2).then(function (response) {
      console.log("Search Data", JSON.stringify(response.data.results));
      setSeries(response.data.results);
    });
  }, [input]);

  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            style={{
              width: "60%",
              height: "35px",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          />
        </div>

        <div style={{display: "flex"}}>
        <div
            style={{
              color: "#FFF",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              textAlign: "center",
              width: "50%"
            }}
          >
            Movies
          </div>
          <div
            style={{
              color: "#FFF",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              textAlign: "center",
              width: "50%"
            }}
          >
            Series
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "50%",
              flexWrap: "wrap",
              marginLeft: "49px",
            }}
          >
            {movie?.map((item, idx) => {
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

          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "50%",
              flexWrap: "wrap",
              marginLeft: "49px",
            }}
          >
            {series?.map((item, idx) => {
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
