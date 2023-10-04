import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Taches from "./Pages/Taches";
import Connexion from "./Pages/Connexion";
import Nav from "./Composants/Nav";
import NotFound from "./Pages/NotFound";
import ContentTache from "./Pages/ContentTache";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/home"} element={<Home/>}></Route>
            <Route path={"/contact"} element={<Contact/>}></Route>
            <Route path={"/taches"} element={<Taches/>}></Route>
            <Route path={"/"} element={<Connexion/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/taches/:slug" element={<ContentTache/>}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
