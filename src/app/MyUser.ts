export class MyUser{
    constructor(public profileImageUrl:string|undefined,public username:string,public phone:number,public email:string,public address:string){}
}   

export class MyCsv
{
    constructor(public invoiceId:string,public customerfname:string,public customerlname:string,public customerEmail:string,public customerPhone:string,public invoiceDate:String,public paymentdueDate:String,public payment:string){}
}