import { useQuery } from "@tanstack/react-query";
import ApplicationInfo from "../../Componants/ApplicationInfo";

const EmployeeApplication = () => {
    const { refetch, data: application = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API}/allea`)
            return res.json()
        }
    })
    return (
        <>
            <div className="w-full flex flex-wrap justify-center items-center gap-6 p-10">
                {
                    application.length > 0 ? (
                        application.map((singcard, i) => <div key={i}>

                            {/* <div className="card-actions justify-center">
                        <button className='btn btn-sm btn-ghost'>{singcard.condition}</button>
                    </div> */}

                            <ApplicationInfo name={singcard.fullname} role={singcard.applyingrole} email={singcard.email} phone={singcard.phone} street={singcard.streetaddress} adress={singcard.currentaddress} exp={singcard.sendamessage} cv={singcard.img} />
                        </div>)) : (
                        <p className='text-2xl text-blue-700 text-center '>No Application</p>
                    )
                }

            </div>
        </>
    );
};

export default EmployeeApplication;
