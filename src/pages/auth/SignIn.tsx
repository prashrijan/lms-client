import { Button, Form } from "react-bootstrap";
import Input from "../../components/input/Input";
import { signInInputs } from "../../assets/customInput/userSignUpInput";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { signInUserApi } from "../../services/authApi";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { autoLoginUser, fetchUserAction } from "../../features/user/userAction";
import { User } from "../../types/types";

function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.userData) as {
        user: User;
    };

    // if the user exists navigate to the user page
    useEffect(() => {
        console.log(user);
        user?._id ? navigate("/user") : dispatch(autoLoginUser());
    }, [user?._id, navigate, dispatch]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            const form = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

            setLoading(true);
            try {
                const { data } = await signInUserApi(form);

                if (data?.accessToken && data?.refreshAccessToken) {
                    sessionStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem(
                        "refreshToken",
                        data.refreshAccessToken
                    );
                }

                setLoading(false);

                // dispatch a callback action
                dispatch(fetchUserAction());

                // get user and redirecting to dashboard
            } catch (error) {
                console.error(error);
                setLoading(false);
                return;
            }
        } else {
            alert("Please enter both fields");
        }
    };

    return loading ? (
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
