import { getSessionToken } from "@/utils/Auth";
import axios from "axios";

type ApiResponse = {
    status: Boolean,
    data: any,
    statusCode: Number
}

export async function category(): Promise<ApiResponse>{
    console.log("Session: " + (getSessionToken()))
    return await axios({
        method: "get",
        url: 'http://64.227.146.248//api/resource/Item Group/?filters={"parent_item_group":"Lakshmi Agency"}',
        headers: {
            "Authorization": "Bearer " + (await getSessionToken())
        },
        validateStatus: (status) => {
            return status == 200
        }
    }).then((res) => {
        return {
            status: true,
            data: res.data,
            statusCode: res.status
        }
    }).catch(err => {
        console.log(err)
        return {
            status: false,
            data: [],
            statusCode: err.request.status
        }
    })
}