"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){ 
    cookies().set("usuario", "eduardo", {
        maxAge: 60 * 60 * 24 * 7 
    })
}

export async function serverLogout(){
    cookies().delete("usuario")
}