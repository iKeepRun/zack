export type ResponseType={
    success:boolean,
    data:{
        id:string;
        imgUrl:string;
        title:string;
        subtitle:string;
        price:number;
        sales:number;
        origin:string;
        specification:string;
        detail:string;
    }
}


export type CartCountResponseType ={
    success:boolean,
    data:{
        count:number
    }
}


export type UpdateCartResponseType ={
    success:boolean,
    data:boolean
}
