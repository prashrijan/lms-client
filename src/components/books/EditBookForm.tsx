import { Button, Form } from "react-bootstrap";
import { editSignUpInputs } from "../../assets/customInput/booksEditInput";
import Input from "../input/Input";
import { useForm } from "../../hooks/useForm";
import { Books, EditSignUpInputs } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { updateBookAction } from "../../features/books/bookAction";

function EditBookForm() {
    const { form, setForm, handleChange } = useForm({
        title: "",
        author: "",
        thumbnail: "",
        publishedYear: "",
        genre: "",
        isbn: "",
        isAvailable: false,
    });

    const { id } = useParams();
    const dispatch: AppDispatch = useDispatch();

    const booksObj = useSelector((state: RootState) => state.booksInfo) as {
        books: Books[];
    };

    const [bookToEdit] = booksObj?.books.filter((book) => book._id == id);

    // populate form when bookToEdit is available
    useEffect(() => {
        if (bookToEdit) {
            setForm({
                title: bookToEdit.title,
                author: bookToEdit.author,
                thumbnail: bookToEdit.thumbnail,
                publishedYear: bookToEdit.publishedYear as any,
                genre: bookToEdit.genre,
                isbn: bookToEdit.isbn,
                isAvailable: bookToEdit.isAvailable,
            });
        }
    }, [bookToEdit, setForm]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        dispatch(updateBookAction(form, id));
    };

    if (!bookToEdit) {
        return <p>Loading book data...</p>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Check
                name="isAvailable"
                onChange={handleChange}
                checked={form?.isAvailable}
                type="switch"
                id="custom-switch"
                label={form?.isAvailable ? "Active" : "Not Available"}
                className={
                    form?.isAvailable ? "mb-3 text-success" : "mb-3 text-danger"
                }
            />
            {editSignUpInputs.map((input: EditSignUpInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    value={form[input.name]}
                    disabled={input.name === "isbn"}
                />
            ))}
            <Button variant="success" className="w-100" type="submit">
                Save
            </Button>
        </Form>
    );
}

export default EditBookForm;
