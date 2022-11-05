import NavBar from"../Components/NavBar.jsx"
import {Helmet, HelmetProvider} from "react-helmet-async"
import GithubPortfolio from "../Components/GithubPortfolio.jsx"
import Followers from "../pages/Followers.jsx"
import Footer from "../Components/Footer.jsx"
import "./Home.css"
export default function Home(){

  return(
      <HelmetProvider>
        <Helmet>
          <title>Achez Github profile</title>
          <meta name="description" content="Github profile and followers" />
        </Helmet>
   <NavBar/>
        <GithubPortfolio />
          <Followers />
      <Footer />
      </HelmetProvider>
  )
}