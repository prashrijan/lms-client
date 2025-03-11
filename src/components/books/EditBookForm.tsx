import { Button, Form } from "react-bootstrap";
import { editSignUpInputs } from "../../assets/customInput/booksEditInput";
import Input from "../input/Input";
import { useForm } from "../../hooks/useForm";
import { Books, EditSignUpInputs } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

function EditBookForm() {
    const { form, handleChange, resetForm } = useForm({
        title: "",
        author: "",
        thumbnail: "",
        publishedYear: "",
        isbn: "",
    });

    const booksObj = useSelector((state: RootState) => state.booksInfo);

    const books: Books[] = booksObj.books;
    return (
        <Form>
            {editSignUpInputs.map((input: EditSignUpInputs) => (
                <Input
                    key={input.name}
                    {...input}
                    onChange={handleChange}
                    value={form[input.name] || ""}
                />
            ))}
            <Button variant="success" className="w-100">
                Save
            </Button>
        </Form>
    );
}

export default EditBookForm;
