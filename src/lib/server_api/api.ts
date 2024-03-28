import { getSessionToken } from "@/utils/Auth";
import axios from "axios";
import type { ApiResponse, CategoryItemResponse } from "@/types/types";

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
            data: res.data?.data,
            statusCode: res.status
        }
    }).catch(err => {
        // console.log(err)
        return {
            status: false,
            data: [],
            statusCode: err.request.status
        }
    })
}

export async function get_category_items(category: string, pageParam: number): Promise<CategoryItemResponse>{
    const page_limit = 10;
    let next_page = null;

    return await axios({
        method: "get",
        url: `http://64.227.146.248/api/resource/Item?filters={"item_group":["descendants of (inclusive)","${category}"]}&fields=["name", "item_name", "item_code", "description"]&limit_start=${pageParam}&limit_page_length=${page_limit}`,
        headers: {
            "Authorization": "Bearer " + (await getSessionToken())
        },
        validateStatus: (status) => {
            return status == 200
        }
    }).then((res) => {
        if(res.data?.data.length == page_limit){
            next_page = pageParam + page_limit
        }
        return {
            status: true,
            data: res.data?.data,
            statusCode: res.status,
            nextPage: next_page
        }
    }).catch(err => {
        // console.log(err)
        return {
            status: false,
            data: [],
            statusCode: err.request.status,
            nextPage: next_page
        }
    })
}