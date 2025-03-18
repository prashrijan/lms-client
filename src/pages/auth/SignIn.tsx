import { Button, Form } from "react-bootstrap";
import Input from "../../components/input/Input";
import { signInInputs } from "../../assets/customInput/userSignUpInput";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { signInUserApi } from "../../services/authApi";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { autoLoginUser, fetchUserAction } from "../../features/user/userAction";
import { User } from "../../types/types";

function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const loadingRef = useRef<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.userData) as {
        user: User;
    };

    // if the user exists navigate to the user page else autoLogin
    useEffect(() => {
        loadingRef.current = true;
        user._id ? navigate("/user") : dispatch(autoLoginUser());
        if (
            sessionStorage.getItem("accessToken") ||
            localStorage.getItem("refreshToken")
        ) {
            setTimeout(() => {
                loadingRef.current = false;
            }, 2000);
        } else {
            loadingRef.current = false;
        }
    }, [user?._id, navigate, dispatch]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            const form = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

            try {
                const { data } = await signInUserApi(form);

                if (data?.accessToken && data?.refreshAccessToken) {
                    sessionStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem(
                        "refreshToken",
                        data.refreshAccessToken
                    );
                }

                // dispatch a callback action
                dispatch(fetchUserAction());

                // get user and redirecting to dashboard
            } catch (error) {
                console.error(error);

                return;
            }
        } else {
            alert("Please enter both fields");
        }
    };

    return loadingRef.current ? (
        <HashLoader />
    ) : (
        <Form
            style={{ width: "450px" }}
            className="card p-3 m-5 shadow-lg"
            onSubmit={handleSubmit}
        >
            <h2 className="text-center">Welcome Back</h2>
            <hr />
            {signInInputs.map((input) => (
                <Input
                    key={input.name}
                    {...input}
                    ref={input.name === "email" ? emailRef : passwordRef}
                />
            ))}

            <Button
                variant="primary"
                type="submit"
                // disable the form if there are errors or form is empty
            >
                Login
            </Button>

            <div className="text-center my-3">
                Forgot Password?{" "}
                <Link to="/forget-password">
                    <span className="text-primary">Reset Now</span>
                </Link>
            </div>
        </Form>
    );
}

export default SignIn;
