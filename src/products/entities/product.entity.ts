import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";
@Entity({name:"products"})
export class Product {
    constructor(id:number,name:string, desc:string, price:DoubleRange){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;

    }
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    desc:string;
    @Column()
    public price:DoubleRange;
}
