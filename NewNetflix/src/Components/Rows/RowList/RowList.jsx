// RowList.jsx
import React from "react";
import "./RowList.css";
import Row from "../Row/Row";
import request from "../../../utils/Request";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />{" "}
      {/* Fixed from fetchTopRatedMovies */}
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={request.fetchTvShows} />{" "}
      {/* Fixed from fetchTvShow */}
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </>
  );
};

export default RowList;
