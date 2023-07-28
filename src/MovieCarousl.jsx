import * as React from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

export default function Carousl( {config}) {
  const navigate = useNavigate();
  const [post, setPost] = React.useState();

  //console.log("Config", config);

  React.useEffect(() => {
    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.results));
      setPost(response.data.results);
    });
  }, []);

  return (
    <div
      style={{
        width: "1342.5px",
        height: "668.25px",
        flexShrink: "0",
        marginLeft: "49.5px",
        marginTop: "21px",
        overflow: "hidden",
      }}
    >
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {post?.map((item, idx) => {
          return (
            <>
              <div style={{ position: "relative", display: "flex" }}>
                <img
                  alt=""
                  src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  style={{ borderRadius: "15px", opacity: "60%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    textAlign: "left",
                    marginLeft: "48px",
                    marginTop: "42px",
                    color: "#FFF",
                    fontFamily: "Oswald",
                    fontSize: "96px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item?.original_title}
                </div>
                <div
                  style={{
                    textAlign: "left",
                    position: "absolute",
                    width: "567px",
                    height: "141px",
                    flexShrink: "0",
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px",
                    letterSpacing: "0.54px",
                    marginLeft: "52.5px",
                    marginTop: "196px",
                  }}
                >
                  {item?.overview}
                </div>
                <Rating
                  name="read-only"
                  value={item?.vote_average / 2}
                  readOnly
                  style={{
                    position: "absolute",
                    width: "140.5px",
                    height: "26.25px",
                    flexShrink: "0",
                    marginLeft: "51px",
                    marginTop: "358.5px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    marginLeft: "51px",
                    marginTop: "424.5px",
                    width: "176.25px",
                    height: "45px",
                    flexShrink: "0",
                    borderRadius: "27px",
                    backgroundColor: "#DA3714",
                    cursor: "pointer"
                  }}
                  onClick={() => {navigate(`/movies/${item?.id}`)}}
                ></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  style={{
                    position: "absolute",
                    width: "22.5px",
                    height: "22.5px",
                    flexShrink: "0",
                    fill: "#FFF",
                    marginLeft: "66px",
                    marginTop: "435.75px",
                    cursor: "pointer"
                  }}
                  onClick={() => {navigate(`/movies/${item?.id}`)}}
                >
                  <path
                    d="M14.75 7.70096C15.75 8.27831 15.75 9.72169 14.75 10.299L2.375 17.4438C1.375 18.0211 0.125 17.2994 0.125 16.1447L0.125 1.85529C0.125 0.700587 1.375 -0.0210977 2.375 0.556252L14.75 7.70096Z"
                    fill="white"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    display: "flex",
                    width: "101.25px",
                    height: "18px",
                    flexDirection: "column",
                    justifyContent: "center",
                    flexShrink: "0",
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    letterSpacing: "0.54px",
                    marginLeft: "102px",
                    marginTop: "439.35px",
                    cursor: "pointer"
                  }}
                  onClick={() => {navigate(`/movies/${item?.id}`)}}
                >
                  Watch Now
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  style={{
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    flexShrink: "0",
                    marginLeft: "290.25px",
                    marginTop: "415.5px",
                  }}
                >
                  <g clip-path="url(#clip0_1_170)">
                    <path
                      d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_170">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.75 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  style={{
                    position: "absolute",
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.45px",
                    marginLeft: "263.25px",
                    marginTop: "451.5px",
                  }}
                >
                  WATCHLIST
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  style={{
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    flexShrink: "0",
                    marginLeft: "393.75px",
                    marginTop: "415.5px",
                  }}
                >
                  <g clip-path="url(#clip0_1_176)">
                    <path
                      d="M17.7408 21.3255L12.0933 18.2453C11.5512 18.7834 10.8619 19.149 10.1123 19.2959C9.36274 19.4429 8.58644 19.3646 7.88129 19.071C7.17614 18.7774 6.5737 18.2816 6.14992 17.6461C5.72614 17.0106 5.5 16.2638 5.5 15.5C5.5 14.7362 5.72614 13.9894 6.14992 13.3539C6.5737 12.7184 7.17614 12.2226 7.88129 11.929C8.58644 11.6354 9.36274 11.5571 10.1123 11.7041C10.8619 11.851 11.5512 12.2166 12.0933 12.7547L17.7408 9.67453C17.5471 8.76576 17.687 7.81765 18.1349 7.00355C18.5828 6.18946 19.3088 5.56379 20.1801 5.24097C21.0514 4.91814 22.0098 4.91973 22.88 5.24545C23.7502 5.57116 24.4741 6.19923 24.9193 7.01481C25.3645 7.83038 25.5012 8.77896 25.3045 9.68707C25.1078 10.5952 24.5908 11.4022 23.848 11.9604C23.1052 12.5186 22.1863 12.7909 21.2593 12.7273C20.3323 12.6637 19.4592 12.2686 18.7996 11.6141L13.152 14.6943C13.2647 15.2255 13.2647 15.7745 13.152 16.3057L18.7996 19.3859C19.4592 18.7314 20.3323 18.3363 21.2593 18.2727C22.1863 18.2091 23.1052 18.4814 23.848 19.0396C24.5908 19.5978 25.1078 20.4048 25.3045 21.3129C25.5012 22.221 25.3645 23.1696 24.9193 23.9852C24.4741 24.8008 23.7502 25.4288 22.88 25.7546C22.0098 26.0803 21.0514 26.0819 20.1801 25.759C19.3088 25.4362 18.5828 24.8105 18.1349 23.9964C17.687 23.1824 17.5471 22.2342 17.7408 21.3255Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_176">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.25 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  style={{
                    position: "absolute",
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0.45px",
                    marginLeft: "383.25px",
                    marginTop: "451.5px",
                  }}
                >
                  SHARE
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}
