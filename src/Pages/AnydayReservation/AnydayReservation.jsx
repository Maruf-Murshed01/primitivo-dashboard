/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ResInfo from "../../Componants/ResInfo";

export default function AnydayReservation() {
  const [value, setValue] = useState(new Date());

  const day = moment(value).format("MMM D, YYYY");

  function onChange(nextValue) {
    setValue(nextValue);
  }

  const { refetch, data: anydayreserv = [] } = useQuery({
    queryKey: ["anydays", day],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API}/reservations/anydays?day=${day}`
      );
      return res.json();
    },
  });

  // delete reservation
  const deleteReservation = useMutation(
    async (reservationId) => {
      await fetch(`${import.meta.env.VITE_API}/reservations/${reservationId}`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleDeleteReservation = async (reservationId) => {
    if (confirm("Do you want to delete this reservation ?")) {
      try {
        await deleteReservation.mutateAsync(reservationId);
        console.log("Reservation deleted successfully.");
      } catch (error) {
        console.error("Error deleting reservation:", error);
      }
    }
    // console.log(reservationId);
  };

  // update reservation
  const updateReservation = useMutation(
    async (updatedReservation) => {
      await fetch(
        `${import.meta.env.VITE_API}/reservations/${updatedReservation._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedReservation),
        }
      );
    },
    {
      onSuccess: () => {
        alert("Reservation Updated successfully");
        refetch();
      },
    }
  );

  const handleUpdateReservation = async (updatedReservation) => {
    try {
      await updateReservation.mutateAsync(updatedReservation);
      console.log("Reservation updated successfully.");
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  return (
    <>
      <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className=" flex items-center justify-center py-8">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">
            Reservations By Date
          </h5>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="flow-root">
          {anydayreserv.length > 0 ? (
            anydayreserv.map((singcard) => (
              <div key={singcard._id}>
                <ResInfo
                  singcard={singcard}
                  handleDeleteReservation={handleDeleteReservation}
                  handleUpdateReservation={handleUpdateReservation}
                ></ResInfo>
              </div>
            ))
          ) : (
            <p className="text-xl text-blue-700 text-center ">
              No reservations on {day}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
