'use server';

import { cookies } from "next/headers"

export const getSessionToken = () => {
    if(cookies().has("token")){
        return cookies().get("token").value
    }else{
        return false
    }
}