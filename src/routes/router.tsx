import {Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePageWrapper from "../pages/home.page.wrapper";
import PersonPageWrapper from "../pages/person.page.wrapper";

const RouterWrapper:React.FC = props => {
    return(
        <Routes>
            <Route path={'/'} element={<HomePageWrapper/>}/>
            <Route path={'/person/:id'} element={<PersonPageWrapper/>}/>
        </Routes>
    );
}

export default RouterWrapper