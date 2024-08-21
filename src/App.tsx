import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/ProfilePage";
import Layout from "./layout/layout";
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
          element={isLoggedIn ? <Home /> : <Navigate to="/getting-started" />}
        />

        <Route path="search" element={<SearchPage />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="profile" element={<Profile />} />

        <Route path="getting-started" element={<GettingStarted />} />
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
