import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function Users() {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);
  // const[users,setUsers]=useState(loadUsers)
  console.log(loadUsers);
  // const{name,status,_id,gender,email}=loadUsers;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = users.filter(
                (userdata) => userdata._id !== _id
              );
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="container m-auto mt-5">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col" className="colspan=2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {loadUsers.map((user) => {
            {
              /* let count=1; */
            }
            return (
              <tr>
                <td></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)} className="btn bg-danger-subtle">X</button>
                </td>
                <td>
                  <Link to={`/update/${user._id}`}>
                    <button className="btn bg-warning-subtle">Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
