export type TagResponseType={
   success:boolean,
   data:{
    category:Array<{id:string ;name:string}>,
    tag:Array<string>
   }
   
}

export type CategorySearchListType={
    success:boolean;
    data:Array<{
        id:string;
        imgUrl:string;
        title:string;
        price:number;
        sales:number;
    }>
}