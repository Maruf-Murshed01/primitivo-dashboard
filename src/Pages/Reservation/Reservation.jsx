/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ResInfo from "../../Componants/ResInfo";

const Reservation = () => {
  const [sortMethod, setSortMethod] = useState("default");

  const { refetch, data: reserv = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/reservations`);
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

  const alreadySeen = (id) => {
    fetch(`${import.meta.env.VITE_API}/bookingseen/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const handleSelectInputChange = (e) => {
    setSortMethod(e.target.value);
  };

  const sortFunc = (a, b) => {
    if (sortMethod === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  };

  return (
    <div className="w-full mt-14 md:mt-0 m-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex items-center justify-center py-8">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white ">
          Total Reservations
        </h5>
      </div>
      <div className="flex items-center justify-end mb-4">
        <select
          onChange={handleSelectInputChange}
          className="text-gray-900 dark:text-gray-900"
        >
          <option value="default">default</option>
          <option value="newest">newest orders first</option>
        </select>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {reserv.length > 0 ? (
            reserv.sort(sortFunc).map((singcard) => (
              <div key={singcard._id}>
                <ResInfo
                  singcard={singcard}
                  handleDeleteReservation={handleDeleteReservation}
                  handleUpdateReservation={handleUpdateReservation}
                />
              </div>
            ))
          ) : (
            <p className="text-2xl text-red-800 text-center ">
              &quot; No Reservation &quot;
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Reservation;
