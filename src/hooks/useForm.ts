import React, { useCallback, useEffect, useState } from "react";
import { validatePassword } from "../utils/validatePassword";

const handleOnChange = <T>(
    e: React.ChangeEvent<HTMLInputElement>,

    setForm: React.Dispatch<React.SetStateAction<T>>
) => {
    let { name, value, checked, files } = e.target;
    console.log(name, value, files);

    setForm((prevForm) => ({
        ...prevForm,
        [name]:
            name === "isAvailable"
                ? checked
                    ? "Active"
                    : "Not Available"
                : name === "thumbnail"
                ? files?.[0] ?? null
                : value,
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
            handleOnChange(e, setForm);
        },
        [form]
    );

    const resetForm = useCallback(() => {
        setForm({ ...initialState });
        setPasswordTouched(false);
        setPasswordErrors([]);
    }, [initialState]);

    return { form, setForm, resetForm, handleChange, passwordErrors };
};
