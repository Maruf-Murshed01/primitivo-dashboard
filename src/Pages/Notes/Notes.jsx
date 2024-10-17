import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import './Note.css'

function Notes() {
    const { register, reset, refetch, handleSubmit, watch, formState: { errors } } = useForm();
    const [allnotes, setAllnotes] = useState([])
    const [change, setChange] = useState('')

    const handlesubmit = event => {
        event.preventDefault()
        const newcomment = event.target.updatingtext.value
        setChange(newcomment)
    }

    // allnotes
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}/allnotes`)
            .then(res => res.json())
            .then(data => {
                setAllnotes(data)
            })
    }, [])

    console.log('all notes from here', allnotes)

    const onSubmit = data => {

        const note = {
            title: data.title,
            note: data.note,
            restaurantname: 'little-italy',
            restaurantid: 'a51$#little%&ITALY'
        }


        fetch(`${import.meta.env.VITE_API}/addnote`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('console from post', data)
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Note added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                reset();

                allnotes.push(note);
                setAllnotes(allnotes);
            })
    }

    const handleDleteNote = _id => {
        fetch(`${import.meta.env.VITE_API}/allnotes/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remaining = allnotes.filter(mors => mors._id !== _id);
                setAllnotes(remaining)
                alert(`${data}deleted successfully`)
            })
    }

    const handleUpdateNote = (_id) => {
        fetch(`${import.meta.env.VITE_API}/allnotes/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ change })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-32 md:mt-0">
            <h1 className="text-gray-900 dark:text-white font-bold pb-8 text-xl">Add Note</h1>

            <div className="flex flex-col md:flex-row">
                <div className="m-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div>
                            <div className="mb-6">
                                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    {...register("title", { required: true })}
                                    name="title"
                                    placeholder="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.title && (
                                    <span className="text-red-600">Name is required</span>
                                )}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Note :
                                </label>
                                <input
                                    type="text"
                                    {...register("note", { required: true })}
                                    name="note"
                                    placeholder="Note"
                                    className="block w-full h-64 p-12 text-gray-900 border border-gray-300 
                    rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.note && (
                                    <span className="text-red-600">Note is Optional</span>
                                )}
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Note</button>
                        </div>
                    </form>
                </div>


                <div className='m-8 items-center md:mt-0' style={{overflow: "none"}}>
                    <iframe style={{overflow: "none"}} src="https://larbibaraka.github.io/reactualtor/" height="500px" width="350px"></iframe>
                </div>
            </div>

            <h1 className="text-gray-900 mt-16 dark:text-white font-bold pb-8 text-xl">All Notes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allnotes.map((note) =>
                        <>
                            <div key={note._id}  className=" p-12 card w-96 bg-neutral text-neutral-content">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{note.title}</h2>

                                    <form onSubmit={handlesubmit}>
                                        <textarea id="updateinputid" type="text" name='updatingtext' defaultValue={note?.note} />
                                        <br />
                                        <input className='btn btn-primary' style={{cursor: "progress"}} type="submit" value="ok" />
                                    </form>

                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleUpdateNote(note._id)}

                                            className="btn btn-primary">Edit</button>
                                        <button onClick={() => handleDleteNote(note._id)} className="btn btn-ghost ml-12">Delete</button>
                                    </div>
                                </div>
                            </div>

                        </>

                    )
                }
            </div>

        </div>
    )
}

export default Notes