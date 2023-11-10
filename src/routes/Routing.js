import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";

import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

import Home from "../Pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />
        <Route path="auth">
          <Route
            path="login"
            element={
              <Public>
                <Login />
              </Public>
            }
          />
          <Route
            path="register"
            element={
              <Public>
                <Registration />
              </Public>
            }
          />
        </Route>
        <Route path="dashboard">
          <Route
            path="home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
