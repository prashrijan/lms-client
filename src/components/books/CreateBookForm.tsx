import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import Input from "../input/Input";
import { BookInputs } from "../../types/types";
import { bookInputs } from "../../assets/customInput/booksEditInput";

import { createBookAction } from "../../features/books/bookAction";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

function CreateBookForm() {
    const formInitialState = {
        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        isbn: "",
        description: "",
    };
    const { form, resetForm, handleChange } = useForm(formInitialState);
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files[0]);
            setThumbnail(e.target.files[0]);
        }
    };

    const dispatch = useDispatch<any>();

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        // works as encType = multi/part form data
        const formData = new FormData();

        for (let key in form) {
            formData.append(key, form[key as keyof typeof form]);
        }
        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }

        dispatch(createBookAction(formData));
        resetForm();
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    console.log(thumbnail);
    return (
        <Form onSubmit={handleSubmit}>
            {bookInputs.map((input: BookInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    value={form[input.name]}
                />
            ))}
            <Form.Group className="my-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleImageChange}
                    name="thumbnail"
                    required
                    accept="image/*"
                    ref={fileInputRef}
                />
            </Form.Group>
            <Button variant="success" className="w-100" type="submit">
                Create Book
            </Button>
        </Form>
    );
}

export default CreateBookForm;
