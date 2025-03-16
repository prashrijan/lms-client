import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import Input from "../input/Input";
import { BookInputs } from "../../types/types";
import { bookInputs } from "../../assets/customInput/booksEditInput";

import { createBookAction } from "../../features/books/bookAction";
import { useDispatch } from "react-redux";

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

    const dispatch = useDispatch<any>();

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        dispatch(createBookAction(form));
        setForm(formInitialState);
    };
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
            <Button variant="success" className="w-100" type="submit">
                Create Book
            </Button>
        </Form>
    );
}

export default CreateBookForm;
