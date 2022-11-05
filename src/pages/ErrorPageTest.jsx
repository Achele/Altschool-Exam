import {useState} from "react"
import NavBar from "../Components/NavBar.jsx"
import {ErrorBoundary} from "react-error-boundary"
import ErrorBound from "../Components/ErrorBound.jsx"
import {HelmetProvider, Helmet} from "react-helmet-async"
import Footer from "../Components/Footer.jsx"
import "./ErrorPageTest.css"

export default function ErrorPageTest(){
   const [name, setName] = useState("") 

   const handleChange = (e) => {
     setName(e.target.value)
   }

  const CheckName = ({name}) => {
    if (name === "Achez") {
      throw new Error("Fear God!")
    } else {
      return `Hello ${name}`
    }
  }
   return(
     <HelmetProvider>
       <Helmet>
        <title>Testing ErrorBoundary</title>
         <meta name="description" content="A page for testing react error boundary"/>
       </Helmet>
       <NavBar />
        <section className="errorTestPage">
        <h2 className="errorTitle">Test Error Boundary</h2>
     <input type="text" placeholder="Do not enter Achez!" onChange={handleChange} value={name}/>
    <ErrorBoundary FallbackComponent={ErrorBound} onReset={() =>{
       setName('')
    }} resetKeys={[name]}>
      <CheckName name={name}/>
    </ErrorBoundary>
          </section>
       <Footer />
     </HelmetProvider>
   )
 }