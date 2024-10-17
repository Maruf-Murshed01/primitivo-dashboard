import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment, AiOutlineSolution, AiOutlineCalendar, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';

function ApplicationInfo({ name, role, email, phone, street, adress, exp, cv }) {
    return (
        <div className="w-[250px] md:w-[300px] min-h-[450px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            {/* <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Applicant Info</h5> */}
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-bold tracking-tight">{name}</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                    <AiOutlineMail className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{email}</span>
                </li>
                <li className="flex space-x-3">
                    <AiOutlinePhone className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{phone}</span>
                </li>
                <li className="flex space-x-3">
                    <AiOutlineEnvironment className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{street}, {street}</span>
                </li>
                <li className="flex space-x-3">
                    <AiOutlineSolution className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 " />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{role}</span>
                </li>
                <li className="flex space-x-3">
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Experience :</span>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{exp}</span>
                </li>
                <li className="flex space-x-3">
                    {/* <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">view CV</span> */}
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> <button style={{border: '1px solid black', padding: '5px', borderRadius: '10%'}}><a href={cv} target="_blank"  >Open CV</a></button> </span>
                    
                </li>
            </ul>
        </div>
    )
}

export default ApplicationInfo