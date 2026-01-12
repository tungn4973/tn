import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>

            <main className="flex-1 pb-5 pt-[90px]">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}
