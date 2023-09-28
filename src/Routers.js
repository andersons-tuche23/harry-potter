import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackHome from "./componente/BackHome";
import Personagens from "./componente/Personagens";


const AppRouters = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<BackHome/>}></Route>
                <Route path="/personagens" element={<Personagens/>}></Route>
            </Routes>

        </Router>

    )
}


export default AppRouters;