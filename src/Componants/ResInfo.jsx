/* eslint-disable react/prop-types */
import moment from "moment";
import { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineCheck,
  AiOutlineClockCircle,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFieldTime,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

function ResInfo({
  singcard,
  handleDeleteReservation,
  handleUpdateReservation,
}) {
  const {
    _id,
    name,
    person,
    date,
    slot,
    phone,
    email,
    orderdate,
    specialnotes,
  } = singcard || {};

  const handleConfirmUpdate = () => {
    const updatedData = { ...singcard, condition: "confirmed" };
    handleUpdateReservation(updatedData);
    // console.log(updatedData, _id);
  };

  const [editModal, setEditModal] = useState(false);
  const [formName, setFormName] = useState(name);
  const [formPerson, setFormPerson] = useState(person);
  const [formDate, setFormDate] = useState(date);
  const [formSlot, setFormSlot] = useState(slot);
  const [formPhone, setFormPhone] = useState(phone);
  const [formSpecialNotes, setFormSpecialNotes] = useState(specialnotes);
  const [formEmail, setFormEmail] = useState(email);

  const handleUpdateReservationData = () => {
    const updatedData = {
      ...singcard,
      name: formName,
      person: formPerson,
      date: formDate,
      slot: formSlot,
      phone: formPhone,
      specialnotes: formSpecialNotes,
      email: formEmail,
    };

    handleUpdateReservation(updatedData);
    setEditModal(false);
  };

  return (
    <>
      <div className="py-3 sm:py-4">
        <div className="flex flex-col md:flex-row items-center space-x-4 justify-between">
          <div className="w-full md:w-1/3">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineUser className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm font-medium text-gray-900 truncate dark:text-white">
                {" "}
                {name}
              </span>
            </div>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineUsergroupAdd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">
                {" "}
                {person} Persons
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineCalendar className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">
                {" "}
                {date}
              </span>
            </div>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineClockCircle className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">
                {slot}
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlinePhone className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">
                {" "}
                {phone}
              </span>
            </div>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineMail className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-sm text-gray-500 truncate dark:text-gray-400">
                {email}
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div
              onClick={() => setEditModal((e) => !e)}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group bg-gray-600 justify-center mb-1 cursor-pointer"
            >
              <AiOutlineEdit className="w-5 h-5 text-blue-500 transition duration-75 dark:text-blue-500 " />
              <span className="ml-3 text-sm text-gray-100 truncate dark:text-gray-100">
                Update
              </span>
            </div>
            <div
              onClick={() => handleDeleteReservation(_id)}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group bg-gray-600 justify-center mb-1 cursor-pointer"
            >
              <AiOutlineDelete className="w-5 h-5 text-red-500 transition duration-75 dark:text-red-500" />
              <span className="ml-3 text-sm text-gray-100 truncate dark:text-gray-100">
                Delete
              </span>
            </div>
            <div
              onClick={handleConfirmUpdate}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group bg-gray-600 justify-center cursor-pointer"
            >
              <AiOutlineCheck
                className={`w-5 h-5 text-green-500 transition duration-75 ${
                  singcard?.condition === "confirmed"
                    ? "dark:text-green-500"
                    : "dark:text-gray-200"
                }`}
              />
              <span className="ml-3 text-sm text-gray-100 truncate dark:text-gray-100">
                {singcard?.condition === "confirmed" ? "Confirmed" : "Confirm"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between max-w-screen-md">
          <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
            <AiOutlineBook className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
            <span className="ml-3 text-xs text-gray-500 truncate dark:text-gray-300">
              {" "}
              <span className="text-white">Notes :</span> {specialnotes}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-md">
          <div className="flex items-center justify-between md:w-1/3">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
              <AiOutlineFieldTime className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
              <span className="ml-3 text-xs text-gray-500 truncate dark:text-gray-300">
                {" "}
                <span className="text-white">Order Placed :</span>{" "}
                {moment(orderdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              </span>
            </div>
          </div>
        </div>
        <hr />
      </div>
      {editModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setEditModal(false)}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg p-8 mx-auto bg-gray-800 rounded-md shadow-lg">
              <div className="sm:flex">
                <div className="w-full items-center mt-2 text-center sm:text-left">
                  <h4 className="text-lg font-medium text-gray-100">
                    Reservation update
                  </h4>
                  <form className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    <div>
                      <legend>Name</legend>
                      <input
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Date</legend>
                      <input
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Phone</legend>
                      <input
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Person</legend>
                      <input
                        value={formPerson}
                        onChange={(e) => setFormPerson(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Slot</legend>
                      <input
                        value={formSlot}
                        onChange={(e) => setFormSlot(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Email</legend>
                      <input
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                    <div>
                      <legend>Notes</legend>
                      <input
                        value={formSpecialNotes}
                        onChange={(e) => setFormSpecialNotes(e.target.value)}
                        type="text"
                        className="w-full bg-gray-600 text-gray-100 rounded-sm outline-none ring-offset-0 ring-blue-500 focus:ring-2 pl-2"
                      />
                    </div>
                  </form>
                  <div className="w-full items-center gap-2 mt-3 sm:flex">
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-blue-600 focus:ring-2"
                      onClick={handleUpdateReservationData}
                    >
                      Update
                    </button>
                    <button
                      className="w-full mt-2 p-2.5 flex-1 text-gray-100 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setEditModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResInfo;
