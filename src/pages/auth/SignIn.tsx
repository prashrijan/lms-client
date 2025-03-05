import { Button, Form } from "react-bootstrap";
import Input from "../../components/input/Input";
import { signInInputs } from "../../assets/customInput/userSignUpInput";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { signInUserApi } from "../../services/authApi";
import { HashLoader } from "react-spinners";

function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

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
                console.log(data);
                setLoading(false);
                sessionStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshAccessToken);

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
