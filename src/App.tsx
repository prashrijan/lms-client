import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooksPublicAction } from "./features/books/bookAction";
import { AppDispatch } from "./redux/store/store";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBooksPublicAction());
    }, [dispatch]);
    return (
        <>
            <AppRoutes />
            <ToastContainer />
        </>
    );
}

export default App;
