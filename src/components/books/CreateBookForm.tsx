import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import Input from "../input/Input";
import { BookInputs } from "../../types/types";
import { bookInputs } from "../../assets/customInput/booksEditInput";

import { createBookAction } from "../../features/books/bookAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

function CreateBookForm() {
    const formInitialState = {
        title: "",
        author: "",
        thumbnail: "",
        publishedYear: "",
        genre: "",
        isbn: "",
        description: "",
    };
    const { form, setForm, handleChange } = useForm(formInitialState);

    console.log(form);
    const dispatch = useDispatch<any>();

    // works as encType = multi/part form data
    const formData = new FormData();

    for (let key in form) {
        formData.append(key, form[key as keyof typeof form]);
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        dispatch(createBookAction(formData));
        setForm(formInitialState);
    };
    return (
        <Form onSubmit={handleSubmit}>
            {bookInputs.map((input: BookInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    {...(input.type === "file"
                        ? {}
                        : { value: form[input.name] })}
                />
            ))}
            <Button variant="success" className="w-100" type="submit">
                Create Book
            </Button>
        </Form>
    );
}

export default CreateBookForm;
