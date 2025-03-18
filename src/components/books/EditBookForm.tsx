import { Button, Form } from "react-bootstrap";
import { bookInputs } from "../../assets/customInput/booksEditInput";
import Input from "../input/Input";
import { useForm } from "../../hooks/useForm";
import { BookInputs, Books } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { updateBookAction } from "../../features/books/bookAction";
import { getOriginalFileName } from "../../utils/getOriginalFileName";

function EditBookForm() {
    const { form, setForm, handleChange } = useForm({
        title: "",
        author: "",
        thumbnail: "",
        publishedYear: "",
        genre: "",
        isbn: "",
        isAvailable: "Not Available",
        description: "",
        slug: "",
    });

    const { id, slug } = useParams();

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const booksObj = useSelector((state: RootState) => state.booksInfo) as {
        books: Books[];
    };
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [bookToEdit] = booksObj?.books.filter((book) => book._id == id);

    // populate form when bookToEdit is available
    useEffect(() => {
        if (bookToEdit) {
            setForm({
                ...bookToEdit,
                publishedYear: bookToEdit.publishedYear as any,
                thumbnail:
                    typeof bookToEdit.thumbnail === "string"
                        ? bookToEdit.thumbnail
                        : "",
                isAvailable:
                    bookToEdit.isAvailable === "Active"
                        ? "Active"
                        : "Not Available",
            });
        }
    }, [bookToEdit]);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData();

        for (let key in form) {
            if (
                form[key as keyof typeof form] !== null &&
                form[key as keyof typeof form] !== ""
            ) {
                formData.append(key, form[key as keyof typeof form]);
            }
        }
        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }

        dispatch(updateBookAction(formData, id));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // if form.slug is available and form.slug != slug navigate to the updated slug
    useEffect(() => {
        if (form.slug && form.slug !== slug) {
            navigate(`/user/edit-book/${form.slug}/${id}`, { replace: true });
        }
    }, [form.slug, id, navigate]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setThumbnail(e.target.files[0]);
        }
    };

    if (!bookToEdit) {
        return <p>Loading book data...</p>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Check
                name="isAvailable"
                onChange={handleChange}
                checked={form?.isAvailable == "Active"}
                type="switch"
                id="custom-switch"
                label={form?.isAvailable}
                className={
                    form?.isAvailable === "Active"
                        ? "mb-3 text-success"
                        : "mb-3 text-danger"
                }
            />
            {bookInputs.map((input: BookInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    {...(input.type === "file"
                        ? {}
                        : { value: form[input.name] })}
                    disabled={input.name === "isbn"}
                />
            ))}
            <div className="my-3">
                <img
                    src={
                        import.meta.env.VITE_BASE_API_URL + "/" + form.thumbnail
                    }
                    alt="thumbnail"
                    width={"200px"}
                    className="img-thumbnail"
                />
                <p className="text-danger py-1">
                    {getOriginalFileName(form.thumbnail)}
                </p>
            </div>
            <Form.Group className="my-2">
                <Form.Label>Change Thumbnail</Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleImageChange}
                    name="thumbnail"
                    accept="image/*"
                    ref={fileInputRef}
                />
            </Form.Group>

            <Button variant="success" className="w-100" type="submit">
                Save
            </Button>
        </Form>
    );
}

export default EditBookForm;
