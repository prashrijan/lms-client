import { Form, FormControlProps } from "react-bootstrap";
import { memo } from "react";
interface IInput extends FormControlProps {
    label: string;
}

function Input({ label, ...rest }: IInput) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control as="input" {...rest} />
        </Form.Group>
    );
}

export default memo(Input);
