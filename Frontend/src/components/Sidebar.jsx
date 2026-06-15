import React from 'react'
import { useLocation } from 'react-router-dom'
import {dummyProfileData} from '../assets/assets'
import { MenuIcon, UserIcon } from 'lucide-react'

const Sidebar = () => {

    const {pathname}= useLocation()
    const [username, setUsername]= useState('')
    const [mobileOpen,setmobileOpen]=useState(false)

    useEffect(()=>{
        setUsername( dummyProfileData.firstName + " " + dummyProfileData.lastName )
    },[])

    //close mobile sidebar when route changes
    useEffect(()=>{
        setmobileOpen(false)

    },
    
    [pathname])

    const sidebarContent= (
      <>
      {/*Brand Header*/ }
      <div className='text-2xl font-bold mb-6 text-center border-b border-white/10 pb-4'>
      <div className='flex items-center justify-center'>
        <div className='flex items-center gap-3'>
          <UserIcon classname='text-white size-7' />
        </div>
        <div>
          <p>Employee MS</p>
        </div>

      </div>
      </div>
      {/*User Profile Card*/ }

      {/*Section Labels*/ }

      {/*Navigation Links*/ }

      {/*Logout Button*/ }



      </>
    )


  return (
    <>
    //mobile button

    <button onClick={()=>setmobileOpen(true)} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10' >
      <MenuIcon size={20} />
    </button>
    {/*mobile overlay*/ }
    {mobileOpen && 
      <div className='lg:hidden fixed inset-0 z-40 bg-black/50' blackdrop-blur-sm onClick={()=>setmobileOpen(false)}>

      </div>
    }

    {/*sidebar-desktop*/ }
    <aside className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white p-4 z-50 transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0 $ {mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
      {sidebarContent}
    </aside>    
    </>
    )
}

export default Sidebar