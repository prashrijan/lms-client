import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../components/layouts/DefaultLayout";
import UserLayout from "../components/layouts/UserLayout";
import {
    BookLandingPage,
    Books,
    BorrowPage,
    DashboardPage,
    EditBookPage,
    ForgotPassword,
    HomePage,
    NewBookPage,
    Profile,
    ReviewsPage,
    SignIn,
    SignUp,
    VerifyUser,
    UserPage,
    AllBooks,
} from "../pages";

export default function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<SignIn />} />
                <Route path="activate-user" element={<VerifyUser />} />
                <Route path="forget-password" element={<ForgotPassword />} />
                <Route path="book/:slug" element={<BookLandingPage />} />
                <Route path="all-books" element={<AllBooks />} />
            </Route>

            {/* private routes */}
            <Route path="/user" element={<UserLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="books" element={<Books />} />
                <Route path="new-book" element={<NewBookPage />} />
                <Route path="edit-book/:slug/:id/" element={<EditBookPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
                <Route path="user-list" element={<UserPage />} />
                <Route path="borrow" element={<BorrowPage />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
}
