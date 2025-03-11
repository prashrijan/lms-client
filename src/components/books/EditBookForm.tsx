import { Button, Form } from "react-bootstrap";
import { editSignUpInputs } from "../../assets/customInput/booksEditInput";
import Input from "../input/Input";
import { useForm } from "../../hooks/useForm";
import { Books, EditSignUpInputs } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EditBookForm() {
    const { form, setForm, handleChange } = useForm({
        title: "",
        author: "",
        thumbnail: "",
        publishedYear: "",
        isbn: "",
    });

    const { id } = useParams();

    const booksObj = useSelector((state: RootState) => state.booksInfo);

    const books: Books[] = booksObj.books;

    const [bookToEdit] = books.filter((book) => book._id == id);

    // populate form when bookToEdit is available
    useEffect(() => {
        setForm({
            title: bookToEdit.title,
            author: bookToEdit.author,
            thumbnail: bookToEdit.thumbnail,
            publishedYear: bookToEdit.publishedYear as any,
            isbn: bookToEdit.isbn,
        });
    }, [bookToEdit, setForm]);

    return (
        <Form>
            {editSignUpInputs.map((input: EditSignUpInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    value={form[input.name]}
                    disabled={input.name === "isbn"}
                />
            ))}
            <Button variant="success" className="w-100">
                Save
            </Button>
        </Form>
    );
}

export default EditBookForm;
