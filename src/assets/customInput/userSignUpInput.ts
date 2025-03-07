import { SignUpInput, SignInInput } from "../../types/types";

export const signUpInputs: SignUpInput[] = [
    {
        label: "First Name*",
        name: "fName",
        placeholder: "John",
        required: true,
        type: "text",
    },
    {
        label: "Last Name*",
        name: "lName",
        placeholder: "Doe",
        required: true,
        type: "text",
    },
    {
        label: "Email*",
        name: "email",
        placeholder: "johndoe@example.com",
        required: true,
        type: "text",
    },
    {
        label: "Phone Number",
        name: "phone",
        placeholder: "04XXXXXXXX",
        type: "number",
    },
    {
        label: "Password*",
        name: "password",
        placeholder: "Enter a password",
        type: "password",
        required: true,
    },
    {
        label: "Confirm Password*",
        name: "confirmPassword",
        placeholder: "Confirm your passowrd",
        type: "password",
        required: true,
    },
];

export const signInInputs: SignInInput[] = [
    {
        label: "Email",
        name: "email",
        type: "text",
        required: true,
        placeholder: "johndoe@example.com",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Enter your password",
    },
];
