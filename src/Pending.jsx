import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Pending = () => {
  return (
    <div>

    
    <div className='flex flex-row justify-start gap-3'>
        <div className="max-w-[370px] mt-[3px]  mr-[3px] bg-gray-200 rounded-md flex   justify-between ">
           <input type='search' className='py-2 pl-2 pr-1 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-gray-800 ' placeholder='Search' />
         </div>

         <div className="relative w-[150px] lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Trigger Reason</option>
                <option>Hard Flag</option>
                <option>Temp Flag</option>
                <option>Restricted Unflag</option>
                <option> Unflag</option>
                <option>Reviewed</option>
            </select>
        </div>
        <div className="relative w-[150px] lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                
                <option>Risk level <IoIosArrowDropdown className='bg-black' /></option>
                <option className='bg-green-300 text-green-800'>Low</option>
                <option className='bg-yellow-300'>Medium</option>
                <option className='bg-red-200'>High</option>
            </select>
            

        </div>


    </div>
    <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        User
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Risk Level
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Trigger Reason
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        In Queue for
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Date added on
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Previously Reviewed
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Aryash </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        Aryash@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        High
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        FIFO
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            4 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                                Yes
                                            </h1>
                                            <p className='text-gray-500'>
                                                23-10-2023
                                            </p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Dipanshu </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        dipanshu@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-yellow-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        Medium
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        IP Change
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            4 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                                No
                                            </h1>
                                            <p className='text-gray-500'>
                                                
                                            </p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Sam </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        Noone@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        High
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        IP Change
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            5 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                             Yes
                                            </h1>
                                            <p className='text-gray-500'>
                                                23-09-202
                                            </p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Himanshu </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        dipan@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        Low
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        FIFO
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            5 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                                No
                                            </h1>
                                            <p className='text-gray-500'>
                                                
                                            </p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Dipanshu </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        dipanshu@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-yellow-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        Medium
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        IP Change
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            4 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                                No
                                            </h1>
                                            <p className='text-gray-500'>
                                                
                                            </p>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                       <div className='flex flex-row justify-between'> <h1 className=' text-gray-800 font-extrabold'>Dipanshu </h1> <FaExternalLinkAlt/></div>
                                        <p className='text-gray-500'>
                                        dipanshu@gmail.com
                                        </p>
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-600 font-extrabold whitespace-nowrap">
                                        <div className='flex flex-row gap-2'>
                                            <GoDotFill/>
                                        low
                                        </div>
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-extrabold whitespace-nowrap">
                                        IP Change
                                    </td>
                                    <td className="px-6 py-4 text-sm font-extrabold text-gray-800 text-right whitespace-nowrap">
                                       
                                            4 Days
                                    
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-500 text-right whitespace-nowrap">
                                       
                                            23-10-2023
                                        
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                       
                                            <h1 className='text-gray-800 font-extrabold'>
                                                No
                                            </h1>
                                            <p className='text-gray-500'>
                                                
                                            </p>
                                        
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pending