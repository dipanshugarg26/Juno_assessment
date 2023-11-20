import React , {useState} from 'react'
import SideBar from './Navbar'
import Pending from './Pending'
import Completed from './Completed'
import { IoIosCloseCircleOutline } from "react-icons/io";
import MyModal from './MyModal';




const Home = () => {
    const [tab,setTab]=useState('pending')
    const [showMyModal,setShowMyModal]=useState(false)
    

    return (
        <div class='flex flex-row bg-white'>
            <MyModal visible={showMyModal}/>
          
            <div class='w-1/6'>
                <SideBar />
            </div>

            <div class='w-5/6 text-black'>
                <div class=' h-28 flex items-center justify-between'>
                    <div class='ml-10'>
                        <div class='font-extrabold text-xl'>
                            MONITORING
                        </div>
                        
                    </div>
                  

                    

                    
                </div>
                <div class='flex flex-col '>
                <div className="mt-[20px] border-b border-solid flex flex-row border-[#0066ff34] ">
        <button  onClick={()=> setTab('pending')}  className={`${tab=='about' && 'border-b border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold  focus:border-indigo-600 `}>
          Pending
        </button>
        <button 
        onClick={()=> setTab('completed')}
        className={`${tab=='feedback' && 'border-b border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px]  focus:border-indigo-600 leading-7 text-headingColor font-semibold `}>
          Completed
        </button>
        <button className=" w-[250px] bg-red-100 py-[5px] px-[15px] rounded-[50px] text-red-500 ml-[700px] mb-1 font-[600] " onClick={()=> setShowMyModal(true)}>
            
        Close Account
      </button>
      
       </div>

       <div className='mt-[50px]'>
       {tab=="pending" && <Pending/>}
       {tab=="completed" && <Completed/>}
       </div>
                </div>



                <div class='flex justify-around'>
                    
                    <div class='flex justify-center'>
                       
                    </div>
                </div>

                <div class='rounded-2xl bg-[white] p-4 m-3'>
                   
                </div>
            </div>
        </div>
    )
}

export default Home