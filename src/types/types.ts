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

type EditFormKeys = "title" | "author" | "publishedYear" | "thumbnail" | "isbn";

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

export type token = string | null;

export type HeadingsProps = {
    pageTitle: string;
};

export type Books = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
    isbn: string;
    thumbnail: string;
    description: string;
    isAvailable: boolean;
    expectedAvailable: Date | null;
    averageRating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export type EditSignUpInputs = {
    label: string;
    name: EditFormKeys;
    type: "text" | "number" | "password";
    required?: boolean;
    placeholder?: string;
};
