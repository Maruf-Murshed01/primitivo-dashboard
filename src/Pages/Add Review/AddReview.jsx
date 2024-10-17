// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

// const AddReview = () => {
//     const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = data => {

//         const review = {
//             name: data.name,
//             review: data.review,
//             restaurantname: 'little-italy',
//             restaurantid: 'a51$#little%&ITALY'
//         }

//         fetch(`${import.meta.env.VITE_API}/addreview`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(review)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 // console.log('console from post', data)
//                 if (data.acknowledged) {
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: 'Review added successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 }
//                 reset();
//             })
//     }



//     // const onSubmit = data => console.log(data);

//     // console.log(watch("example")); // watch input value by passing the name of it
//     return (
//         <div className="w-full flex flex-col justify-center items-center mt-32 md:mt-0">
//             <h1 className="text-gray-900 dark:text-white font-bold pb-8 text-xl">Add Review</h1>
//             <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] md:w-[50%]">
//                 <div>
//                     <div className="mb-6">
//                         <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                             Name:
//                         </label>
//                         <input
//                             type="text"
//                             {...register("name", { required: true })}
//                             name="name"
//                             placeholder="Name"
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         />
//                         {errors.name && (
//                             <span className="text-red-600">Name is required</span>
//                         )}
//                     </div>

//                     <div className="mb-6">
//                         <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                             Review :
//                         </label>
//                         <input
//                             type="text"
//                             {...register("review", { required: true })}
//                             name="review"
//                             placeholder="Review"
//                             className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         />
//                         {errors.review && (
//                             <span className="text-red-600">Review is required</span>
//                         )}
//                     </div>
//                     <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Review</button>

//                 </div>
//             </form>
//         </div>

//     );
// };

// export default AddReview;