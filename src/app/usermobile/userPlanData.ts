export class UserPlanData {
    userId: number;
    planId: number;
    planName:string;
    price: string;
    public constructor(userId:number,planId:number,planName:string,price:string)
    {
        this.userId = userId
        this.planId = planId
        this.planName=planName
        this.price = price
    }
  }