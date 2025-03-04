import { Button, Form } from "react-bootstrap";
import Input from "../../components/input/Input";
import { customInputs } from "../../assets/customInput/userSignUpInput";
import { useForm } from "../../hooks/useForm";
import { signUpUserAPI } from "../../services/authApi";

import { useState } from "react";
import { HashLoader } from "react-spinners";

function SignUp() {
    const { form, handleChange, resetForm, passwordErrors } = useForm({
        fName: "",
        lName: "",
        email: "",
        phone: null,
        password: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();

        if (form.confirmPassword != form.password)
            return alert("Passwords do not match");

        setLoading(true);

        try {
            const res = await signUpUserAPI(form);
            setLoading(false);
            // if we get the success data then only reset the form
            res && resetForm();
        } catch (error) {
            setLoading(false);
            return;
        }
    };

    return (
        <div>
            {loading ? (
                <HashLoader />
            ) : (
                <Form
                    style={{ width: "450px" }}
                    className="card p-3 m-5 shadow-lg"
                    onSubmit={handleOnSubmit}
                >
                    <h2 className="text-center">
                        Join Readify. Your one stop Library
                    </h2>
                    <hr />
                    {customInputs.map((input) => (
                        <Input
                            key={input.name}
                            {...input}
                            value={form[input.name] || ""}
                            onChange={handleChange}
                        />
                    ))}

                    <div
                        className={`${
                            passwordErrors.length > 0 ? "p-3" : "p-0"
                        }`}
                    >
                        <ul>
                            {passwordErrors.length > 0 &&
                                passwordErrors.map((error) => (
                                    <li key={error} className="text-danger">
                                        {error}
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        // disable the form if there are errors or form is empty
                        disabled={
                            passwordErrors.length > 0 ||
                            Object.values(form).some((value) => !value)
                        }
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </div>
    );
}

export default SignUp;
