"use client"

import { serverLogout } from '@/actions/user';
import { useRouter } from 'next/navigation';


export default function navBar(){

    const {push} = useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <>
        <button onClick={handleLogout}>Logout</button>
      </>

    )
}