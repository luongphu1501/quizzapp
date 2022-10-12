import { set } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
const ModalShowView = (props) => {
    const { show, setShow, detailUser } = props;
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [preview_image, setPreviewImage] = useState("");


    const handleClose = () => {
        setShow(false)
    }
    useEffect(() => {
        if (detailUser) {
            setEmail(detailUser.email)
            setUsername(detailUser.username);
            setPassword(detailUser.password)
            setRole(detailUser.role);
            detailUser && detailUser.image && setPreviewImage(`data:image/jpeg;base64,${detailUser.image}`)
        }
    }, [detailUser])

    return (

        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal show={show} onHide={handleClose} className="modal-create-user">
                <Modal.Header closeButton>
                    <Modal.Title>Show detail user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select" value={role} >
                                <option>User</option>
                                <option>Admin</option>
                            </select>
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

                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalShowView;