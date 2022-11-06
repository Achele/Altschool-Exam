import { Link, Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async"
import { useState, useEffect } from "react";
import { useErrorHandler } from "react-error-boundary"
import useFetch from "../hooks/useFetch.js"
import NavBar from "../Components/NavBar.jsx"
import Footer from "../Components/Footer.jsx"
import { format, formatDistance, subDays } from "date-fns"
import "./Repositories.css"
import { GoMarkGithub, GoStar, GoRepo, GoRepoForked, GoOrganization, GoLocation } from "react-icons/go"

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState()
  // const handleError = useErrorHandler();
  const total = 6
  const url = `https://api.github.com/users/achele/repos?page=${page}&per_page=5`
  const { loading, data } = useFetch(url)
  console.log(data)
  // formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
  //=> "3 days ago"

  return (
    <HelmetProvider>
      <Helmet>
        <title>Achez Github Repositories</title>
        <meta name="description" content="list of Achez Repositories" />
      </Helmet>


      <NavBar />
      <main>
        <div className="flex repos">
          <GoRepo className="repo-icon"/>
        <h4>Repositories</h4>
          </div>
        {loading && <p className="loading">loading</p>}
        {data && data.map(details => <li key={details.id} className="repoList-card ">
          <section className="flex star">
                <div>
            <div className="flex">
              <h3>{details.full_name}</h3>
              {details.private ? (<h4> Private</h4>) : (<h4> Public</h4>)}
            </div>

            <div className="repo-info">
              {details.language ? <p>🟢{details.language}</p> : (<p>🟢null</p>)}
              <p> Updated {" "}
                {formatDistance(subDays(new Date(details.updated_at), 3), new Date(), { addSuffix: true })}
              </p>
            </div>
          </div>



            {details.stargazers_count > 0 && (
              <div className="flex">
                <GoStar/>
                <p>Starred</p>
              </div>
            )}
            {details.stargazers_count === 0 && (
              <div className="flex">
                <GoStar/>
                <p>Star</p>
              </div>
            )}
          </section>

          <Link to="repo" state={{ details: details }}>See more...</Link>
          <hr />
        </li>

        )}
      <div className="btn-container">
        <button disabled={page <= 1} onClick={() => setPage(prev => prev - 1)}>prev</button>
        <p>{page}</p>


        {Array.from({ length: total }, (value, index) => index + 1).map((doc) =>
          <button onClick={() => setPage(doc)} key={doc}>{doc}</button>
        )}
        <button disabled={page >= 6} onClick={() => setPage(prev => prev + 1)}>next</button>
</div>


        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

// <p>forks: {details.forks}</p>
            // <p>stars: {details.stargazers_count}</p>