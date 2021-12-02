import React from "react";
import { Content } from "./pages/content/Content";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:id' element={<Content/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
