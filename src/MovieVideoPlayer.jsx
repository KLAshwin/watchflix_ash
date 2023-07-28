import * as React from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Layout from "./Layout.jsx";
import Card from "./Card.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieVideoPlayer() {
  const navigate = useNavigate();
  const { idx } = useParams();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/movie",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  const options1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${idx}/videos`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
    },
  };

  const [post, setPost] = React.useState();
  const [video, setVideo] = React.useState([{}]);
  // const [content, setContent] = React.useState();
  const [currentMovie, setCurrentMovie] = React.useState([{}]);

  React.useEffect(() => {
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.results));
      setPost(response.data.results);
      console.log("idx ", idx);
      let arr = response.data.results?.filter((item, id) => {
        return item?.id == idx;
      });
      arr[0].release_date = arr[0].release_date.slice(0, 4);
      setCurrentMovie(arr);
    });

    axios.request(options1).then(function (response) {
      console.log("Videos", JSON.stringify(response.data.results));
      setVideo(response.data.results);
    });
  }, [idx]);

  console.log("currentMovie", currentMovie);

  return (
    <>
      <Layout>
        <div
          style={{
            marginLeft: "48px",
            marginTop: "83px",
            position: "relative",
          }}
        >
          <ReactPlayer
            url={
              `https://www.youtube.com/watch?v=${video[0]?.key}`
            }
            controls={true}
            width="1344px"
            height="716px"
          />
        </div>

        <div
          style={{
            height: "139px",
            color: "#FFF",
            fontFamily: "Oswald",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginLeft: "48px",
          }}
        >
          {currentMovie[0].original_title}
        </div>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clip-path="url(#clip0_2_1305)">
            <path
              d="M13.75 13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75V16.25H6.25V13.75H13.75Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_1305">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div
          style={{
            color: "#FFF",
            fontFamily: "Overpass",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0.45px",
          }}
        >
          WATCHLIST
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <g clip-path="url(#clip0_2_1311)">
              <path
                d="M17.9908 20.8255L12.3433 17.7453C11.8012 18.2834 11.1119 18.649 10.3623 18.7959C9.61274 18.9429 8.83644 18.8646 8.13129 18.571C7.42614 18.2774 6.8237 17.7816 6.39992 17.1461C5.97614 16.5106 5.75 15.7638 5.75 15C5.75 14.2362 5.97614 13.4894 6.39992 12.8539C6.8237 12.2184 7.42614 11.7226 8.13129 11.429C8.83644 11.1354 9.61274 11.0571 10.3623 11.2041C11.1119 11.351 11.8012 11.7166 12.3433 12.2547L17.9908 9.17453C17.7971 8.26576 17.937 7.31765 18.3849 6.50355C18.8328 5.68946 19.5588 5.06379 20.4301 4.74097C21.3014 4.41814 22.2598 4.41973 23.13 4.74545C24.0002 5.07116 24.7241 5.69923 25.1693 6.51481C25.6145 7.33038 25.7512 8.27896 25.5545 9.18707C25.3578 10.0952 24.8408 10.9022 24.098 11.4604C23.3552 12.0186 22.4363 12.2909 21.5093 12.2273C20.5823 12.1637 19.7092 11.7686 19.0496 11.1141L13.402 14.1943C13.5147 14.7255 13.5147 15.2745 13.402 15.8057L19.0496 18.8859C19.7092 18.2314 20.5823 17.8363 21.5093 17.7727C22.4363 17.7091 23.3552 17.9814 24.098 18.5396C24.8408 19.0978 25.3578 19.9048 25.5545 20.8129C25.7512 21.721 25.6145 22.6696 25.1693 23.4852C24.7241 24.3008 24.0002 24.9288 23.13 25.2546C22.2598 25.5803 21.3014 25.5819 20.4301 25.259C19.5588 24.9362 18.8328 24.3105 18.3849 23.4964C17.937 22.6824 17.7971 21.7342 17.9908 20.8255Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1311">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div
            style={{
              color: "#FFF",
              fontFamily: "Overpass",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0.45px",
            }}
          >
            SHARE
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="151"
            viewBox="0 0 140 151"
            fill="none"
          >
            <g clip-path="url(#clip0_2_1274)">
              <path
                d="M54.7026 101.067V50.9321L92.0675 75.9997L54.7026 101.067Z"
                fill="white"
              />
              <path
                d="M67 134.333C34.7825 134.333 8.66663 108.217 8.66663 75.9997C8.66663 43.7822 34.7825 17.6664 67 17.6664C99.2175 17.6664 125.333 43.7822 125.333 75.9997C125.333 108.217 99.2175 134.333 67 134.333ZM58.9616 55.0872C58.6106 54.853 58.2025 54.7184 57.781 54.6977C57.3595 54.677 56.9402 54.771 56.5679 54.9698C56.1956 55.1685 55.8842 55.4645 55.6667 55.8262C55.4493 56.1879 55.3341 56.6019 55.3333 57.0239V94.9756C55.3341 95.3976 55.4493 95.8115 55.6667 96.1733C55.8842 96.535 56.1956 96.831 56.5679 97.0297C56.9402 97.2285 57.3595 97.3225 57.781 97.3018C58.2025 97.2811 58.6106 97.1465 58.9616 96.9122L87.4225 77.9422C87.7426 77.7292 88.005 77.4405 88.1866 77.1016C88.3681 76.7627 88.4631 76.3842 88.4631 75.9997C88.4631 75.6153 88.3681 75.2368 88.1866 74.8979C88.005 74.559 87.7426 74.2702 87.4225 74.0572L58.9616 55.0872Z"
                fill="#DA3714"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1274">
                <rect
                  width="140"
                  height="150.075"
                  fill="white"
                  transform="translate(-0.000488281 0.54541)"
                />
              </clipPath>
            </defs>
          </svg>
        </div> */}
        <div style={{ display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="31"
            viewBox="0 0 61 31"
            fill="none"
            style={{ marginLeft: "48px", marginTop: "28px" }}
          >
            <path
              d="M1.176 26.115V4.77722C2.21154 4.55188 3.07744 4.27746 3.74133 3.64382C4.43223 2.98439 4.8379 2.00506 5.13428 0.535982H56.1017C56.2538 1.78185 56.6625 2.78459 57.3652 3.51934C58.0613 4.24732 58.9943 4.65819 60.104 4.82059V26.1268C59.0914 26.3639 58.1815 26.8351 57.4768 27.5509C56.7654 28.2735 56.2859 29.2226 56.111 30.3723H5.19694C5.08591 29.1823 4.67055 28.2207 3.95977 27.4976C3.25042 26.7759 2.29229 26.3381 1.176 26.115Z"
              stroke="#727171"
              stroke-width="1.07196"
            />
            <path
              d="M14.0396 6.37793H9.72296V24.1547H14.0396V6.37793Z"
              fill="#727171"
            />
            <path
              d="M29.0734 6.37793V24.1547H25.3067L25.29 12.1487L23.79 24.1547H21.1067L19.54 12.4167L19.5234 24.1547H15.7567V6.37793H21.34C21.49 7.44989 21.6567 8.71838 21.8567 10.1655L22.4734 14.6857L23.4734 6.37793H29.0734Z"
              fill="#727171"
            />
            <path
              d="M35.1067 9.41516V21.1353C35.7234 21.1353 36.1067 21.0102 36.24 20.7244C36.3734 20.4564 36.4567 19.7239 36.4567 18.5447V11.6306C36.4567 10.8266 36.44 10.3085 36.39 10.0762C36.34 9.84395 36.24 9.68315 36.0734 9.57596C35.89 9.46876 35.5734 9.41516 35.1067 9.41516ZM30.79 6.37793H34.0067C36.09 6.37793 37.49 6.48513 38.2234 6.68165C38.9567 6.89605 39.5067 7.21764 39.89 7.70002C40.2734 8.16454 40.5067 8.68265 40.6067 9.27223C40.7067 9.84395 40.7567 10.9695 40.7567 12.6668V18.902C40.7567 20.4921 40.69 21.5641 40.54 22.1001C40.4067 22.6361 40.1567 23.0648 39.8067 23.3686C39.4567 23.6723 39.0234 23.8867 38.5234 24.0117C38.0067 24.1368 37.24 24.1904 36.2067 24.1904H30.7734L30.79 6.37793Z"
              fill="#727171"
            />
            <path
              d="M47.6568 13.7387C47.6568 12.9884 47.6068 12.506 47.5234 12.2737C47.4401 12.0415 47.2568 11.9343 46.9901 11.9343C46.7401 11.9343 46.5734 12.0415 46.4901 12.238C46.4068 12.4345 46.3734 12.9526 46.3734 13.7566V20.0276C46.3734 20.8137 46.4234 21.314 46.5068 21.5284C46.5901 21.7427 46.7568 21.8499 47.0234 21.8499C47.2901 21.8499 47.4568 21.7427 47.5401 21.5105C47.6234 21.2782 47.6568 20.7422 47.6568 19.8847V13.7387ZM46.3901 6.37793V10.6122C46.7401 10.1834 47.1068 9.86181 47.5401 9.64742C47.9568 9.43303 48.4234 9.32583 48.9068 9.32583C49.4734 9.32583 49.9734 9.41516 50.3901 9.61169C50.8068 9.80822 51.1234 10.0762 51.3401 10.4157C51.5568 10.7551 51.6901 11.0946 51.7401 11.434C51.7901 11.7556 51.8068 12.4703 51.8068 13.5422V20.0991C51.8068 21.171 51.7401 21.9571 51.6068 22.4931C51.4734 23.0112 51.1568 23.4758 50.6734 23.8509C50.1734 24.2261 49.5901 24.4227 48.9234 24.4227C48.4401 24.4227 47.9734 24.3155 47.5568 24.0832C47.1401 23.8509 46.7401 23.5115 46.4068 23.047L46.1401 24.1547H42.2734V6.37793H46.3901Z"
              fill="#727171"
            />
            <path
              d="M53.3898 8.4142H53.5564C53.7397 8.4142 53.9063 8.34276 53.9063 8.16416C53.9063 8.03915 53.823 7.89627 53.5564 7.89627C53.4897 7.89627 53.4398 7.89627 53.3898 7.91413V8.4142ZM53.3898 9.25361H53.1732V7.75339C53.2898 7.73553 53.4064 7.71767 53.573 7.71767C53.7896 7.71767 53.9229 7.77125 54.0062 7.82483C54.0895 7.89627 54.1395 7.98557 54.1395 8.12844C54.1395 8.3249 54.0229 8.44992 53.8729 8.48564V8.5035C53.9896 8.52136 54.0729 8.64637 54.1062 8.87855C54.1395 9.11073 54.1728 9.20003 54.1895 9.25361H53.9562C53.9229 9.20003 53.8896 9.07501 53.8563 8.87855C53.823 8.68209 53.7397 8.61066 53.5564 8.61066H53.4064L53.3898 9.25361ZM53.623 7.32476C53.0732 7.32476 52.6234 7.84269 52.6234 8.46778C52.6234 9.11073 53.0732 9.6108 53.6397 9.6108C54.2062 9.6108 54.6393 9.11073 54.6393 8.46778C54.6393 7.82483 54.1895 7.32476 53.623 7.32476ZM53.623 7.11044C54.3061 7.11044 54.8559 7.71767 54.8559 8.46778C54.8559 9.23574 54.3061 9.82511 53.6064 9.82511C52.9233 9.82511 52.3568 9.23574 52.3568 8.46778C52.3735 7.71767 52.9399 7.11044 53.623 7.11044Z"
              fill="#727171"
            />
          </svg>
          <span
            style={{
              marginLeft: "10px",
              marginTop: "26px",
              display: "flex",
              height: "34.303px",
              width: "390px",
              justifyContent: "space-between",
              flexShrink: "0",
              color: "#727171",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {currentMovie[0]?.vote_average}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              2h 30min
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {currentMovie[0]?.release_date}
            </div>
          </span>
        </div>

        <div
          style={{ marginLeft: "48px", marginTop: "25.7px", display: "flex" }}
        >
          {currentMovie[0]?.genre_ids?.map((item, idg) => {
            return (
              <div
                style={{
                  borderRadius: "22.511px",
                  border: "1.072px solid #DA3714",
                  backgroundColor: "rgba(72, 13, 13, 0.00)",
                  width: "154.526px",
                  height: "39.62px",
                  padding: "7.204px 46.823px",
                  gap: "28.814px",
                  flexShrink: "0",
                  marginRight: "20px"
                }}
              >
                <div
                  style={{
                    color: "#DA3714",
                    fontFamily: "Montserrat",
                    fontSize: "21.611px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal"
                  }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: "1179px",
            flexShrink: "0",
            color: "#FFF",
            fontFamily: "Overpass",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "0.96px",
            marginTop: "69.99px",
            marginLeft: "48px",
          }}
        >
          {currentMovie[0]?.overview}
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
          <div style={{ width: "169px", height: "36px" }}>More Like This</div>
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
