'use server';

import axios from "axios";
import { cookies } from "next/headers";

export async function loginAction(prev, formdata){
    const phone = formdata.get("phone")?.toString()

    return await axios({
        method: "post",
        url: "http://64.227.146.248/api/method/lakshmiagency.api.v1.otp.send_otp?mobile_no=" + phone,
        // url: "http://64.227.146.248//api/method/frappe.auth.get_logged_user",
        // headers: {
        //     "Authorization": 'Bearer 15b7267d5f0599bbe0d9edba80d1f5'
        // }
    }).then((res) => {
        return {
            status: true,
            message: JSON.stringify(res.data)
        }
    }).catch((err) => {
        let error_message = "Something went wrong. Please try again!"

        if(err.response){
            error_message = JSON.stringify(err.response.data)
        }

        return {
            status: false,
            message: error_message
        }
    })
}

export async function validateOTP(prev, formdata){
    const otp = formdata.get("otp")?.toString()
    const phone = formdata.get("phone")?.toString()

    return await axios({
        method: "post",
        url: `http://64.227.146.248/api/method/lakshmiagency.api.v1.auth.authenticate?mobile_no=${phone}&otp=${otp}`,
    }).then((res) => {
        cookies().set("token", res.data.message.access_token?.toString(), {httpOnly: true})

        return {
            status: true,
            message: JSON.stringify(res.data)
        }
    }).catch((err) => {
        let error_message = "Something went wrong. Please try again!"

        if(err.response){
            error_message = JSON.parse(JSON.stringify(err.response.data))
            if(error_message.message){
                error_message = error_message.message
            }
        }

        return {
            status: false,
            message: error_message
        }
    })
}