import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from "typeorm";
import Product from "./product";

@Entity({name:"shoppingcart"})
export default class ShoppingCart {

    @PrimaryGeneratedColumn()
    shoppingcart_id: number;

    @Column()
    name: string;

    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    create_date:Date;

    @UpdateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    updated_date:Date;

    @Column({nullable:true})
    product_id: number;
    
    @OneToMany(type => Product, product=>product.product_id )
    @JoinColumn({ name: "product_id" })
    Products: Product[]
    
}


