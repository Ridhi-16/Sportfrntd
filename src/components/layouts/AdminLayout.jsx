import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import ChatWidget from "../Coach/Chat/ChatWidget";
// import CropBubble from "../pages/CropBubble";


export default function AdminLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!="admin"){
            toast.error("Please login to access this page")
            nav("/login")
        }
    },[isLogin])


   
    return(
        <>
                <AdminHeader />

               <Outlet/>
                {/* <CropBubble/> */}
                <ChatWidget/>

                {/* <Footer /> */}
           
        </>
    )
}


