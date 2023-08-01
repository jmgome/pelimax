import React from'react'
import PageHome from '../../pages/PageHome'
import {Route,Routes  } from "react-router-dom";
import { Navbar } from '../../components/ui/Navbar';

export const RoutesDashboard = () => {
  return (
    <>
    {/* <Navbar/> */}
     <div className="container">
        <Routes>
                <Route path="/*" element={<PageHome/>} />
            </Routes>
        </div>
    </>
  )
}
