import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
const ManagerUser = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="add-new-user">

                    <button className="btn-add-user" onClick={() => setShow(!show)}><FcPlus /> Add new user</button>
                </div>
                <div className="table-content">
                    <TableUser />
                </div>
                <ModalCreateUser show={show} setShow={setShow} />
            </div>
        </div>
    )
}
export default ManagerUser