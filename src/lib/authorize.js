'use server'

import { cookies } from "next/headers"

export async function authorize_user(){
    if (!cookies().has("token")) return {
        status: false,
        message: "token not found"
    }

    const session_token = cookies().get("token").value

    try{
        const response = await fetch("http://64.227.146.248/api/method/frappe.auth.get_logged_user", {
            method: "get",
            headers: {
                "Authorization": `Bearer ${session_token}`
            },
        })

        if(response.ok){
            return {
                status: true,
                message: "success"
            }
        }else{
            return {
                status: false,
                message: await response.text()
            }
        }
    }catch(e){
        return {
            status: false,
            message: e
        }
    }
}