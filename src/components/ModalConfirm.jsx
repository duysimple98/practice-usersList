/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { deleteUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
  const { handleClose, show, dataUserDelete, handleDeleteUserFromModal } =
    props;
  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success(`Đã xóa thành công user "${dataUserDelete.email}"`);
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else {
      toast.error("error delete user");
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-danger">This action can't be undone!</h6>
          <p>
            Do you want to delete this user with email ={" "}
            <b>'{dataUserDelete.email}'</b> ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
