import { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch.js"


export default function GithubPortfolio() {
  // const [repos, setRepos] = useState([]);
  const [page, setPage] = useState()
  // const handleError = useErrorHandler();
  // const total = 6
  const url = "https://api.github.com/users/achele"
  const { loading, data } = useFetch(url)
  console.log(data)

  // useEffect(() => {
  //   async function fetchProfile() {
  //     try {
  //       const res = await fetch("https://api.github.com/users/achele");
  //       console.log(res)
  //       const data = await res.json();
  //       console.log(data)
  //       setRepos(data.results);
  //     } catch (err) {
  //       console.log(err);
  //       handleError(err);
  //     }
  //   }

  //   fetchProfile();

  // }, [page]);


  return (
    <>
      {loading && <p className="loading">loading</p>}
      <main className="profile-card">
        <img src={data.avatar_url} alt={data.login} className="profile-avatar" />

        <h2>{data.name}</h2>
        <p>{data.login}</p>
        <h4>{data.bio}</h4>
        <div className="profile-info">
          <img src="src/assets/users.png" alt="followers icon" className="icon" />
          <p>
            <span>{data.followers}</span> <span>Followers.</span>
            <span>{data.following} </span> <span>Following</span>
          </p>
        </div>
        <div className="profile-info">
          <img src="../assets/location.png" alt="location icon" className="icon" />
          <p>{data.location}</p>
        </div>
        <div className="profile-info">
          <img src="src/assets/twitter.png" alt="twitter icon" className="icon" />
          <p>
            <a href="https://twitter.com/ojoachele"> {data.twitter_username}</a>
          </p>
        </div>
        <p>{data.gravatar_id}</p>

      </main>
    </>
  )
}