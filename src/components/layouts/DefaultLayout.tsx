import { Outlet } from "react-router-dom";
import { Footer, Header } from "../index";
function DefaultLayout() {
    return (
        <div>
            {/* header */}
            <Header />

            {/* main page */}
            <main className="main">
                <Outlet />
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
