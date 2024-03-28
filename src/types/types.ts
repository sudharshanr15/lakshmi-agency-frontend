export interface ApiResponse {
    status: Boolean,
    data: any,
    statusCode: Number,
    nextPage?: number
}

export interface CategoryItemServerResponse {
    name: string,
    item_name: string,
    item_code: string,
    description: string
}

export interface CategoryItemResponse extends ApiResponse{
    data: CategoryItemServerResponse[]
}

export interface CategoryItemStateResponse {
    value: {
        data: CategoryItemServerResponse[]
    }
}