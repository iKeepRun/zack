export type ResponseType={
    success:boolean,
    data:{
        location:{
            id:string,
            address:string
        }
        banner:Array<{id:string,url:string}>
    }
}