export type User = {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    phone: number;
    role: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
};

export type SinUpFormKeys =
    | "fName"
    | "lName"
    | "email"
    | "phone"
    | "password"
    | "confirmPassword";

export type SignInFormKeys = "email" | "password";

export type SignUpInput = {
    label: string;
    name: SinUpFormKeys;
    type: "text" | "number" | "password";
    required?: boolean;
    placeholder: string;
};

export type SignInInput = {
    label: string;
    name: SignInFormKeys;
    type: "text" | "password";
    required?: boolean;
    placeholder: string;
};
