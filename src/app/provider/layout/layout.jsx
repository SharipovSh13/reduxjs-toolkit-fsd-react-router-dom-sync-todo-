import { Outlet } from "react-router-dom";
import Header from "@/features/header/header";
import Footer from "@/features/footer/footer";

export default function Layout() {
    return <>
        <Header/>
        <main>
            
        <Outlet />
        </main>
        <Footer/>

    </>
}