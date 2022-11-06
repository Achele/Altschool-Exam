import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Repositories from "./pages/Repositories.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"
import Repo from "./pages/Repo.jsx";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBound from "./Components/ErrorBound.jsx";
import ErrorPageTest from "./pages/ErrorPageTest.jsx";


export default function App() {


  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorBound}>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='repositories' element={<Repositories />}>
              <Route path='repo' element={<Repo />} />
           </Route>
            <Route path='errorPageTest' element={<ErrorPageTest />} />
             <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>

      </ErrorBoundary>
    </BrowserRouter>

  )
}
