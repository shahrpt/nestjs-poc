export class Product {
    constructor(id:Number,name:string, desc:string, price:Number){
        this.Id = id;
        this.Name = name;
        this.Desc = desc;
        this.Price = price;

    }
    public Id : Number;
    public Name: string;
    public Desc:string;
    public Price:Number;
}
