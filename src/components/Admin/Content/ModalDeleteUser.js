import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../../services/apiServices';
function ModalDeleteUser(props) {
    const { show, setShow, userDelete } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteUser = async () => {
        let data = await deleteUser(userDelete.id)
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delele User</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are preparing to delete the user with email: {userDelete && userDelete.email ? userDelete.email : ""}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;