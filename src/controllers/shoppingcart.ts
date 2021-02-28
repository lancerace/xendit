import * as express from 'express';
import { getConnection, getRepository } from 'typeorm';
import ShoppingCart from '../entity/shoppingCart';



const router: express.Router = express.Router();
router.get('/', async (req: express.Request, res: express.Response) => {

    const shoppingcarts: ShoppingCart[] = await getRepository(ShoppingCart).createQueryBuilder("shoppingcart").getMany();
    return res.json(shoppingcarts);

});

router.post('/', async (req: express.Request, res: express.Response) => {
    const { name } = req.body;
    const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(ShoppingCart)
        .values([
            { name: name },
        ])
        .execute();



    const { raw } = result

    if (raw.length > 0)
        return res.json({ rowAffect: raw.length });
    else
        return res.status(400).send({ message: "fail insert" });
});

export default router;

