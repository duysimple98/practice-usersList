import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postCreateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { handleClose, show, handleUpdateTable } = props;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSaveUser = async () => {
    if (email === "" || firstName === "" || lastName === "") {
      return toast.error("Vui lòng nhập đầy đủ các trường");
    }
    let res = await postCreateUser(email, firstName, lastName);
    if (res && res.id) {
      handleClose();
      toast.success("Thêm user thành công!");
      setEmail("");
      setFirstName("");
      setLastName("");
      handleUpdateTable({
        email,
        first_name: firstName,
        last_name: lastName,
        id: res.id,
      });
    } else {
      toast.error("An error...");
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
          <Modal.Title>Add new user</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
