/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { putUpdateUSer } from "../services/UserService";
import { toast } from "react-toastify";

const ModalEditUser = (props) => {
  const { handleClose, show, dataUserEdit, handleEditUserFromModal } = props;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEditUser = async () => {
    let res = await putUpdateUSer(dataUserEdit.id, email, firstName, lastName);
    if (res && res.updatedAt) {
      handleEditUserFromModal({
        email,
        first_name: firstName,
        last_name: lastName,
        id: dataUserEdit.id,
      });
      handleClose();
      toast.success("Cập nhật thành công!");
    }
  };

  useEffect(() => {
    if (show) {
      setEmail(dataUserEdit.email);
      setFirstName(dataUserEdit.first_name);
      setLastName(dataUserEdit.last_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUserEdit]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div className="form-group mb-3">
              <label htmlFor="inputEmail" className="mb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputFirstName" className="mb-2">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="inputLastName" className="mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditUser;
