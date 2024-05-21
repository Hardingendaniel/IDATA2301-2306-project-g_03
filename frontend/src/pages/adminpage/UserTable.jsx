import React from "react";
import EditUserButton from "../../components/buttons/EditUserButton";

function UserTable( {users} ) {



    return (
        <table className="table table-lg">
            <caption
                className="p-5 text-2xl font-semibold text-left rtl:text-right text-font">
                Users
                <p className="mt-1 text-sm font-normal text-font">Manage your users
                    and view their details.</p>
            </caption>
            {/* head */}
            <thead className="uppercase">
            <tr>
                <th></th>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Role</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr className="hover:bg-tableHover">
                    <th>
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="font-bold">{user.id}</div>
                        </div>
                    </td>
                    <td>
                        {user.firstName} {user.lastName}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        +47 {user.phoneNumber}
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-md">{user.roles}</span>
                    </td>
                    <td>
                        <EditUserButton userId={user.id}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default UserTable;