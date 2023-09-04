import './App.css';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner';
import Nav from './component/Nav';
function App() {

  return (
    <div className="App">
      <Nav/>
<Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Orginals"
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated"
      fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending"
      fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
      <Row title=" Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies "
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies "
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="  Documentry"
      fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
