import React from 'react'
import { useLocation } from 'react-router-dom'
import {dummyProfileData} from '../assets/assets'
import { MenuIcon } from 'lucide-react'

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
    
    </>
    )
}

export default Sidebar