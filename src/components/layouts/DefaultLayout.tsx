import { Outlet } from "react-router-dom";
import { Footer, Header } from "../index";
function DefaultLayout() {
    return (
        <div>
            {/* header */}
            <Header />

            {/* main page */}
            <main className="main d-flex align-items-center justify-content-center">
                <Outlet />
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
