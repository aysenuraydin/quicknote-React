import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar bgcolor="gray" color= "white" title="Quick Notes" />
            <div className='bg-gray-100 h-screen pt-10'>
                <Header /> 
                <div className='max-w-[40rem] mx-auto bg-gray-200 p-10 py-16
                rounded-4xl shadow-xl border border-gray-300'>
                {<Outlet/>  /* children} */}
                </div>
            </div>
        </>
    );
}