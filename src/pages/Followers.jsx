import { useState, useEffect } from "react";
import { useErrorHandler } from "react-error-boundary"
import useFetch from "../hooks/useFetch.js"

export default function followers(){
  const [timeline, setTimeline] = useState([])
  const url = "https://api.github.com/users/Achele/followers"
  const { loading, data } = useFetch(url)
  // console.log(data)

  return (
    <>
      <section className="followers-wrapper" >
    <h1>Followers</h1>
       <div className="followers-card">
       {data && data.map(info=> <li key={info.id} className="followers-info">
         <img className="followers-avatar" src={info.avatar_url}/>
      
          <h1>{info.login}</h1>
         <a className="followers-btn" href={info.html_url} target="_blank">Visit</a>
       
        </li>
                         
          )}
        </div>
        </section>
    </>
  )
}

 // {data && data.map(info=><li key={info.id}>
 //         <img  src={info.avatar_url}/>
 //          <h1>{info.login}</h1>
 //         <a href={info.html_url} target="_blank">Visit</a>
 //         <p>{info.html_url}</p>
        
 //        </li>
                         
 //          )}