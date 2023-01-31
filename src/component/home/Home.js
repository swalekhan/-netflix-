
import Navbar from "../nav/navBar";
import Banner from "../banner/banner";
import Row from "../row/row";
import userrequests from "../../axiosMain/request";

const Home = () => {
    return (
       <>
       <Navbar/>
       <Banner/>

       <Row title="Netflix trending" isLarge url={userrequests.fetchTrending}/>
       <Row title="Comedy Movies"  url={userrequests.fetchComedyMovies} />
       <Row title="Horror Movies" isLarge url={userrequests.fetchHorrorMovies} />
       <Row title="Comedy Movies"  url={userrequests.fetchRomanceMovies} />
       <Row title="Documentaries"  url={userrequests.fetchDocumentaries} />
      
       </>
    )
}

export default Home;