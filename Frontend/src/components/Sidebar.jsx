import React from 'react'
import { useLocation } from 'react-router-dom'
import {dummyProfileData} from '../assets/assets'

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
    <div>Sidebar</div>
  )
}

export default Sidebar