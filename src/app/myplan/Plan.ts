// plan.model.ts (You can name the file as per your preference)

export interface Plan {
  userPlanId:number
    userId: number
    planId: number
    username:string
    email:string
    phone:string
    planName:string
    activationDate: Date
    expiryDate: Date
    price: string
    paid:string
  }
  