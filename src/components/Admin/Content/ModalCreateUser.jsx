import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiServices';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("User");
    const [image, setImage] = useState();
    const [preview_image, setPreviewimage] = useState()

    const handleClose = () => {
        setEmail("");
        setUsername("")
        setPassword("")
        setRole("User")
        setImage();
        setPreviewimage("")
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleUpdateImage = (event) => {
        if (event.target && event.target.files[0]) {
            setImage(event.target.files[0]);
            setPreviewimage(URL.createObjectURL(event.target.files[0]));
        } else {
            setPreviewimage("");
        }


    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitUser = async () => {
        const isValidate = validateEmail(email)
        if (!isValidate) {
            toast.error("Email khong hop le")
            return;
        }
        if (!password) {
            toast.error("Vui long nhap mat khau")
        }

        let data = await postCreateNewUser(email, password, username, role, image)
        console.log(data)
        handleClose();
        if (data.EC == 0) {
            toast.success(data.EM)
        }
        if (data.EC != 0) {
            toast.error(data.EM)
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={event => setUsername(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select" value={role} onChange={event => setRole(event.target.value)}>
                                <option>User</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-update' htmlFor='upload-file'>
                                <FcPlus />
                                Add new image
                            </label>
                            <input type={"file"} hidden id="upload-file" onChange={(event) => { handleUpdateImage(event) }} />
                        </div>
                        <div className='col-md-12 preview-image'>
                            {
                                preview_image ?
                                    <img src={preview_image} />
                                    : <span >Preview Imgae</span>
                            }


                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;

