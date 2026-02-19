import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import SportSuggestion from "../pages/SportSuggestion";
// import SportSuggestion from "../pages/SportSuggestion";
// import { MoonLoader } from "react-spinners";
// import CropBubble from "../pages/CropBubble";

export default function Layout(){
     
    
    return(
        <>
        
        <Header/>
        <Outlet/>
        <SportSuggestion/>
        
        {/* <CropBubble/> */}
        {/* <Footer/> */}
        </>
    )
}