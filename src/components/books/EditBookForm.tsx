import { Button, Form } from "react-bootstrap";
import { bookInputs } from "../../assets/customInput/booksEditInput";
import Input from "../input/Input";
import { useForm } from "../../hooks/useForm";
import { BookInputs, Books } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { useNavigate, useParams } from "react-router-dom";
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
        description: "",
        slug: "",
    });
    console.log(form);

    const { id, slug } = useParams();

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const booksObj = useSelector((state: RootState) => state.booksInfo) as {
        books: Books[];
    };

    const [bookToEdit] = booksObj?.books.filter((book) => book._id == id);

    // populate form when bookToEdit is available
    useEffect(() => {
        if (bookToEdit) {
            setForm({
                ...bookToEdit,
                publishedYear: bookToEdit.publishedYear as any,
            });
        }
    }, [bookToEdit, setForm]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        dispatch(updateBookAction(form, id));
    };

    // if form.slug is available and form.slug != slug navigate to the updated slug
    useEffect(() => {
        if (form.slug && form.slug !== slug) {
            navigate(`/user/edit-book/${form.slug}/${id}`, { replace: true });
        }
    }, [form.slug, id, navigate]);

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
            {bookInputs.map((input: BookInputs) => (
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
