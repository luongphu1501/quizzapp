import ModalCreateUser from "./ModalCreateUser"

const ManagerUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    Table user
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManagerUser