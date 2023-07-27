import * as React from "react";
import axios from "axios";
import Layout from "./Layout.jsx";
import Carousel from "./Carousl.jsx";
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

  const [post, setPost] = React.useState();

  React.useEffect(() => {
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.results));
      setPost(response.data.results);
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
            {post?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{cursor: "pointer"}}
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
            {post?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{cursor: "pointer"}}
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
            {post?.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/movies/${item?.id}`);
                  }}
                  style={{cursor: "pointer"}}
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
