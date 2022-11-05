import {useLocation} from "react-router-dom"
import { format } from "date-fns"
import {HelmetProvider, Helmet} from "react-helmet-async"

export default function Repo(){
  const myRepos = useLocation()
  const{details}= myRepos.state
  console.log(details)
return(
  <HelmetProvider>
    <Helmet>
      <title>Achez Repository details</title>
      <meta name="description" content="Repository details"/>
    </Helmet>
<article className="repo-container">
    <div className="repo-top">
  <img src={details.owner.avatar_url} alt={details.owner.login} className="repo-img"/>
      <div className="repoT">
          <h2>{details.owner.login}</h2>
          <p>{details.name}</p>
          {details.private ? (<h4> Private</h4>) : (<h4> Public</h4> )}
      </div>
    </div>

          <p className="repo-date">
            This repository was created on{" "}
            {format(new Date(details.created_at), "dd MMMM yyyy")} by{" "} {details.owner.login}
          </p>
  

        <div className="repo-links">
          <a
            className="underline text-sm"
            href={details.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
          <div>
            <p>{details.stargazers_count.toLocaleString()} stars</p>
            <p>{details.watchers_count.toLocaleString()} Watchers</p>
          </div>
        </div>

        <div className="repo-bottom">
          
            <h4>{details.language}</h4>
           
          <p>{details.open_issues} issues</p>
        </div>
  </article>
  </HelmetProvider>
)
  
}