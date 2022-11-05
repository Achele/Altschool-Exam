import React from "react";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import { Link } from "react-router-dom";


export default function ErrorPage() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>404 page</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <div>
        <Link to='/'>home</Link>
      </div>
    </HelmetProvider>
    
  )
}