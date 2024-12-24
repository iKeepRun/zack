export type LocationType = {

    id: string,
    address: string

}

export type BannersType = Array<{ id: string, url: string }>

export type CategoriesType = Array<{ id: string, name: string, imgUrl: string }>

export type FreshesType = Array<{ id: string, name: string, imgUrl: string, price: string }>

export type ResponseType = {
    success: boolean,
    data: {
        location: LocationType;
        banner: BannersType;
        categories: CategoriesType;
        freshes: FreshesType
    }
}