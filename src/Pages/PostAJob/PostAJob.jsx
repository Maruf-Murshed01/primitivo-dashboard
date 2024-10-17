// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PostAJob = () => {
    const dati = new Date()
    const imgHostKey = 'bd1f74ef4256c79a347bb85c64516903';
    const { register, reset, handleSubmit, formState: { errors } } = useForm();


    // start
    const onSubmit = data => {

        //start
        const image = data.image[0]
        console.log(data.image)

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)

                    const jobpost = {
                        applydate: dati,
                        img: imgData.data.url,
                        jobtitle: data.jobtitle,
                        jobdescription: data.jobdescription,
                        aplstart: data.aplstart,
                        aplend: data.aplend,
                        restaurantname: 'little-italy',
                        restaurantid: 'a51$#little%&ITALY'
                    }


                    fetch(`${import.meta.env.VITE_API}/jobpost`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(jobpost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                        })
                }

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your application saved on server successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
            })
    }
    // end here



    return (
        <div className="w-full flex flex-col justify-center items-center mt-32 md:mt-0">
            <h1 className="text-gray-900 dark:text-white font-bold pb-8 text-xl">Post A JOB</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] md:w-[50%]">
                <div>
                    <div className="mb-6">
                        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Job Title
                        </label>
                        <input
                            type="text"
                            {...register("jobtitle", { required: true })}
                            name="jobtitle"
                            placeholder="job title"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.title && (
                            <span className="text-red-600">Title is requred</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Job  Description
                        </label>
                        <input
                            type="text"
                            {...register("jobdescription", { required: true })}
                            name="jobdescription"
                            placeholder="job description"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.description && (
                            <span className="text-red-600">Description is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Application Start
                        </label>
                        <input
                            type="text"
                            {...register("aplstart", { required: true })}
                            name="aplstart"
                            placeholder="6th September, 2023"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.description && (
                            <span className="text-red-600">Description is required</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Application Finish
                        </label>
                        <input
                            type="text"
                            {...register("aplend", { required: true })}
                            name="aplend"
                            placeholder="27th September, 2023"
                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {errors.description && (
                            <span className="text-red-600">Description is required</span>
                        )}
                    </div>

                    <div>
                        <ul className="mb-4">
                            <li className="application-form">

                                <label className="label"> <span className="label-text text-bg-creame text-sm font-bold mb-2 mr-16">Upload Image</span></label>

                                <div className="input-style">
                                    <input type="file" {...register("image", {
                                        required: "image is Required"
                                    })} id="fileInput5" className="input input-bordered w-full max-w-xs reservationInput" />
                                    {errors.image && <p className='text-red-500'>{errors.name.image}</p>}
                                </div>
                            </li>
                        </ul>
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Blog</button>

                </div>
            </form>
        </div>
    );
};

export default PostAJob;