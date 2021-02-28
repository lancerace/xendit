import * as express from 'express';
import { getConnection, getRepository } from 'typeorm';
import Product from '../entity/product';



const router: express.Router = express.Router();
router.get('/', async (req: express.Request, res: express.Response) => {
console.log("/products");
    const products: Product[] = await getRepository(Product).createQueryBuilder("product").getMany();
    return res.json(products);
});


router.get('/:id', async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const products: Product[] = await getRepository(Product)
        .createQueryBuilder("product")
        .where("product.category_id = :id", { id: id }).getMany();


    return res.json(products);
});


router.post('/', async (req: express.Request, res: express.Response) => {
    console.log("/product/:id");
const {name} = req.body;

    const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Product)
        .values([
            { name: name },
        ])
        .execute();

        const { raw } = result;

        if (raw.length > 0)
            return res.json({ rowAffect: raw.length });
        else
            return res.status(400).send({ message: "fail insert" });
});



export default router;