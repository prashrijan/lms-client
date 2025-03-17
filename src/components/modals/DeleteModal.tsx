import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteBookAction } from "../../features/books/bookAction";
type Props = {
    id: string;
    show: boolean;
    onHide: () => void;
};

function DeleteModal({ id, show, onHide }: Props) {
    const dispatch = useDispatch<any>();
    const handleOnDelete = () => {
        dispatch(deleteBookAction(id));
        onHide();
    };
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >
            <div className="p-3">
                <Modal.Dialog className="w-100">
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Book?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure want to delete this book?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleOnDelete}>
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={() => onHide()}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </Modal>
    );
}

export default DeleteModal;
