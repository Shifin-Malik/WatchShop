
  import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import SearchPage from './pages/SearchPage';
import Profile from './pages/ProfilePage'
import Layout from './layout/layout'
import "./App.css";
import WatchList from "./pages/WatchList";
import NotFound from "./pages/NotFound";
import GettingStarted from "./pages/GettingStarted";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = true;

  return (
    <Routes>
      <Route element={<Layout />} path="/">
      
        <Route
          index
          element={isLoggedIn ? <Home/> : <Navigate to="/getting-started" /> }
        />
       
         <Route
          path="search"
          element={
            isLoggedIn ? <SearchPage/> : <Navigate to="/getting-started" />
          }
        />
           <Route
          path="watchlist"
          element={
            isLoggedIn ? <WatchList /> : <Navigate to="/getting-started" />
          }
        />
        <Route
          path="profile"
          element={
            isLoggedIn ? <Profile /> : <Navigate to="/getting-started" />
          }
        />
         
        <Route
          path="getting-started"
          element={isLoggedIn ? <GettingStarted /> : <Navigate to="/getting-started" />}
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
