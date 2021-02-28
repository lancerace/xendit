import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany} from "typeorm";
import Product from "./product";

@Entity({name:"category"})
export default class Category{

    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    /*@OneToMany(type => Product, product=>product.category_id)
    @JoinColumn({ name: "category_id" })
    Product:Product[];
*/
}


