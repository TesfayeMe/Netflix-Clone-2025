import React from 'react'
import './rowlist.css';
import Row from '../Row/Row';
import requests from '../../../utils/requests';
const RowList = () => {
  return (
    <>
    <Row 
    title="Netflix Originals"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Commedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Tv Shows" fetchUrl={requests.fetchTVShow}/>
    </>
  )
}

export default RowList