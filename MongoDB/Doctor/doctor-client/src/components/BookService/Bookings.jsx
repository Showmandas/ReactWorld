/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

export default function Bookings() {
  const [booking, setBooking] = useState([]);
  console.log(booking);
  const { user } = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = booking.filter(
                (bookdata) => bookdata._id !== id
              );
              setBooking(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user]);

  const handlePay = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Paid" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = booking.filter((book) => book._id !== id);
          const updated = booking.find((book) => book._id === id);
          updated.status = "Paid";
          const newBooking = [updated, ...remaining];
          Swal.fire({
            title: 'Payment Successful',
            text:'Doctor will call you and give a serial number for appointment.Please wait',
            icon: 'success',
          })
          // alert("sffsfdsf");
          setBooking(newBooking);
        }
      });
  };

  return (
    <div className="container">
      <table className="table">
        <tbody>
          {booking.map((book, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{book.name}</td>
                <td>{book.age}</td>
                <td>{book.phone}</td>
                <td>{book.gender}</td>
                <td>{book.msg}</td>
                <td>{book.date}</td>
                <td>
                  <button
                    className="btn bg-danger text-white"
                    onClick={() => handleDelete(book._id)}
                  >
                    delete
                  </button>
                </td>
                <td>
                  {book.status === "Paid" ? (
                    <span className="text-dark font-bold">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePay(book._id)}
                      className="btn bg-dark text-white"
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
