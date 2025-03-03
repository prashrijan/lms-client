import React, { useCallback, useEffect, useState } from "react";
import { validatePassword } from "../utils/validatePassword";

const handleOnChange = <T>(
    e: React.ChangeEvent<HTMLInputElement>,
    form: T,
    setForm: React.Dispatch<React.SetStateAction<T>>
) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
    }));
};

export const useForm = <T extends Record<string, any>>(initialState: T) => {
    const [form, setForm] = useState(initialState);
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [passwordTouched, setPasswordTouched] = useState<boolean>(false);

    // only when password and confirm password is changed, validate the password
    useEffect(() => {
        if (passwordTouched) {
            const errors = validatePassword(
                form.password,
                form.confirmPassword
            );
            setPasswordErrors(errors);
        }
    }, [form.password, form.confirmPassword, passwordTouched]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (
                e.target.name == "password" ||
                e.target.name == "confirmPassword"
            ) {
                setPasswordTouched(true);
            }
            handleOnChange(e, form, setForm);
        },
        [form]
    );

    const resetForm = useCallback(() => {
        console.log("I am called");
        setForm({ ...initialState });
        setPasswordTouched(false);
        setPasswordErrors([]);
    }, [initialState]);

    return { form, setForm, resetForm, handleChange, passwordErrors };
};
