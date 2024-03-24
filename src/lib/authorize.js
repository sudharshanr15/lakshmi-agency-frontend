'use server'

import { cookies } from "next/headers"

export async function authorize_user(){
    if (!cookies().has("token")) return false

    const session_token = cookies().get("token").value

    const response = await fetch("http://64.227.146.248/api/method/frappe.auth.get_logged_user", {
        method: "get",
        headers: {
            "Authorization": `Bearer ${session_token}`
        },
    })

    if(response.ok){
        return true
    }else{
        return false
    }
}