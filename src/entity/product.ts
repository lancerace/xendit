import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Category from "./category";
import ShoppingCart from "./shoppingCart";

@Entity({ name: "product" })
export default class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    category_id: number;
    @ManyToOne(type => Category)
    @JoinColumn({ name: "category_id", referencedColumnName:"category_id" })
    Category: Category

    @Column({ nullable: true })
    shoppingcart_id: number;

    @ManyToOne(type => ShoppingCart)
    @JoinColumn({ name: "shoppingcart_id" })
    ShoppingCart: ShoppingCart

    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    create_date: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    updated_date: Date;
}


