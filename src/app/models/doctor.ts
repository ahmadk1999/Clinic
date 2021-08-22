export class doctor {
  
    key:string;
    email: string;
    gender: string;
    
  

    constructor(public id: number, public firstName: string, public lastName: string, public age: number,public specialization:string) { }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}