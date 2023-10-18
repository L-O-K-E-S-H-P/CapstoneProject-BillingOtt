export class MyUser{
    constructor(public profileImageUrl:string|undefined,public username:string,public phone:number,public email:string,public address:string){}
}   

export class MyCsv
{
    constructor(public user_plan_id:string,public user_id:string,public plan_id:string,public username:string,
        public email:string,public phone:string,public plan_name:string,public  price:string,public activation_date:Date,public expiry_date:Date){}
}