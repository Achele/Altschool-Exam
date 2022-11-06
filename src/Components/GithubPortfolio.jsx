import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js"
import { GoMarkGithub, GoStar, GoRepo, GoRepoForked, GoOrganization, GoLocation, GoMention } from "react-icons/go"
import{FaTwitter} from "react-icons/fa"

export default function GithubPortfolio() {
  const [page, setPage] = useState()
  const url = "https://api.github.com/users/achele"
  const { loading, data } = useFetch(url)
  console.log(data)

  return (
    <>
      {loading && <p className="loading">loading</p>}
      <main className="profile-card">
        <img src={data.avatar_url} alt={data.login} className="profile-avatar" />

        <h2>{data.name}</h2>
        <p>{data.login}</p>
        <h4>{data.bio}</h4>
        <div className="profile-info">
        </div>
        <div className="profile-info">
          <GoOrganization className="repo-icon"/>
          <p>
            <span>{data.followers}</span> <span>Followers.</span>
            <span>{data.following} </span> <span>Following</span>
          </p>
        </div>
        <div className="profile-info">
          <GoLocation className="repo-icon" />
          <p>{data.location}</p>
        </div>
        <div className="profile-info">
        <FaTwitter className="repo-icon"/>
          <p>
            <a href="https://twitter.com/ojoachele"> 
              <GoMention/>   {data.twitter_username}</a>
          </p>
        </div>
        <p>{data.gravatar_id}</p>

      </main>
    </>
  )
}