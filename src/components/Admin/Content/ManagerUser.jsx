import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers, getUsersPageginate } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalShowView from "./ModalShowView";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPageginate from "./TableUserPageginate";
const ManagerUser = (props) => {
    const LIMIT_USER = 3;
    const [show, setShow] = useState(false)
    const [pageCount, setPageCount] = useState(0);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [userUpdate, setUserUpdate] = useState({})
    const [listUsers, setListUsers] = useState([
    ]);
    const [detailUser, setDetailUser] = useState();
    const [showView, setShowView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [userDelete, setUserDelete] = useState();
    const handleClickBtnUpdate = (user) => {
        setShowUpdateModal(true);
        setUserUpdate(user);
    }
    const displayListUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const displayListUserPageginate = async (page) => {
        let res = await getUsersPageginate(page, LIMIT_USER);
        if (res.EC === 0) {
            console.log(res.DT.users)
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages)
        }
    }
    const handleClickBtnDelete = (user) => {
        setShowDelete(true);
        setUserDelete(user)
    }
    const handleClickBtnView = function (user) {
        setShowView(true);
        setDetailUser(user);
    }
    useEffect(() => {
        displayListUserPageginate(1);

    }, [])
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
                    {/* <TableUser listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPageginate
                        listUsers={listUsers}
                        pageCount={pageCount}
                        displayListUserPageginate={displayListUserPageginate}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                <ModalCreateUser show={show} setShow={setShow} displayListUserPageginate={displayListUserPageginate} />
                <ModalUpdateUser
                    show={showUpdateModal}
                    setShow={setShowUpdateModal}
                    userUpdate={userUpdate}
                    displayListUserPageginate={displayListUserPageginate}
                    setUserUpdate={setUserUpdate}
                />
                <ModalShowView show={showView}
                    setShow={setShowView}
                    detailUser={detailUser}
                />
                <ModalDeleteUser
                    show={showDelete}
                    setShow={setShowDelete}
                    displayListUserPageginate={displayListUserPageginate}
                    userDelete={userDelete}
                />
            </div>
        </div>
    )
}
export default ManagerUser