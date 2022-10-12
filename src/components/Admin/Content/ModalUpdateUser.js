import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiServices';
import _ from 'lodash'
const ModalUpdateUser = (props) => {
    const { show, setShow, userUpdate } = props;
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
        props.setUserUpdate();
    };

    useEffect(() => {
        if (!_.isEmpty(userUpdate)) {
            setEmail(userUpdate.email);
            setUsername(userUpdate.username)
            setRole(userUpdate.role)
            userUpdate.image && setPreviewimage(`data:image/jpeg;base64,${userUpdate.image}`)
        }
    }, [props.userUpdate]);
    const handleShow = () => setShow(true);
    const handleUpdateImage = (event) => {
        if (event.target && event.target.files[0]) {
            setImage(event.target.files[0]);
            setPreviewimage(URL.createObjectURL(event.target.files[0]));
        } else {
            setPreviewimage("");
        }

    }

    const handleSubmitUser = async () => {
        let data = await putUpdateUser(userUpdate.id, username, role, image)
        console.log(data)
        handleClose();
        if (data && data.EC == 0) {
            toast.success(data.EM)
            handleClose();
            await props.displayListUserPageginate(1);
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
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} disabled />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} disabled />
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
export default ModalUpdateUser;

