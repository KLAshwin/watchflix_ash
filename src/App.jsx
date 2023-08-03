import * as React from "react";
import axios from "axios";
import Layout from "./Layout.jsx";
import Carousel from "./MovieCarousl.jsx";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function App() {
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
    url: "https://api.themoviedb.org/3/trending/tv/day",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=99",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const [post, setPost] = React.useState();
  const [trendM, setTrendM] = React.useState();
  const [trendS, setTrendS] = React.useState();
  const [trendD, setTrendD] = React.useState();

  React.useEffect(() => {
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.results));
      setPost(response.data.results);
    });

    axios.request(options1).then(function (response) {
      console.log("Trending", JSON.stringify(response.data.results));
      setTrendM(response.data.results);
    });

    axios.request(options2).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setTrendS(response.data.results);
    });

    axios.request(options3).then(function (response) {
      console.log("Horror", JSON.stringify(response.data.results));
      setTrendD(response.data.results);
    });
  }, []);

  return (
    <>
      <Layout>
        <Carousel config={config} />
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "220px", height: "36px" }}>Movies</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  color: "#DA3714",
                  marginRight: "130px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500"
                }}
                onClick={() => {navigate('/movies')}}
              >
                More &#62;
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {trendM?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}/${item?.original_title}`);
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "220px", height: "36px" }}>Series</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  color: "#DA3714",
                  marginRight: "130px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500"
                }}
                onClick={() => {navigate('/tvseries')}}
              >
                More &#62;
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {trendS?.map((item, idx) => {
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "220px", height: "36px" }}>Documentaries</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  color: "#DA3714",
                  marginRight: "130px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500"
                }}
                onClick={() => {navigate('/documentaries')}}
              >
                More &#62;
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "12.23px",
              gap: "22.407px",
              width: "1342.5px",
              overflow: "scroll",
            }}
          >
            {trendD?.map((item, idx) => {
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
