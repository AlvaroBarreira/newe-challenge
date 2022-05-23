import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import PokemonDataProvider from "../Contexts/PokemonDataProvider";
import {Home, Login, Detail} from "../Views";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexRoutes = () => {
  function PrivateHome() {
    const auth = useAuth();

    return auth ? <Home /> : <Navigate to="/login" />;
  }

  function PrivateDetail() {
    const auth = useAuth();

    return auth ? <Detail /> : <Navigate to="/login" />;
  }

  function useAuth() {
    return true;
  }

  return (
    <PokemonDataProvider>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<PrivateHome />} path="/">
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<PrivateDetail />} path="/:pokemon-detail">
            <Route element={<Detail />} path="/:pokemon-detail" />
          </Route>
        </Routes>
      </Router>
    </PokemonDataProvider>
  );
};

export default IndexRoutes;
