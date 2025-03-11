import { Form, FormControlProps } from "react-bootstrap";
import { memo } from "react";

import { forwardRef } from "react";
interface IInput extends FormControlProps {
    label?: string;
}
const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const { label, ...rest } = props;
    return (
        <Form.Group className="mb-3">
            {label ? <Form.Label>{label}</Form.Label> : ""}

            <Form.Control as="input" ref={ref} {...rest} />
        </Form.Group>
    );
});

export default memo(Input);
