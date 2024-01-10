import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const craetLike = async (req, res) => {
    try {
        const { user_id, res_id, date_like } = req.body;
        const newLike = {
            user_id,
            res_id,
            date_like
        }
        await conn.like_res.create(newLike)
        res.status(200).send("like thanh cong")

    } catch (error) {
        res.status(404).send(error)
    }
}

const craetRate = async (req, res) => {
    try {
        const { user_id, res_id, amount, date_rate } = req.body;
        const newLike = {
            user_id,
            res_id,
            amount,
            date_rate
        }
        await conn.rate_res.create(newLike)
        res.status(200).send("Rate thanh cong")

    } catch (error) {
        res.status(404).send(error)
    }
}

const getlistLike = async (req, res) => {

    const user_id = req.params;
    try {
        const data = await conn.like_res.findAll({
            where: user_id
        });
        res.send(data)

    } catch (error) {
        res.status(404).send(error)
    }
}

const getlistRate = async (req, res) => {

    const user_id = req.params;
    try {
        const data = await conn.rate_res.findAll({
            where: user_id
        });
        res.send(data)

    } catch (error) {
        res.status(404).send(error)
    }
}

const unLike =  async (req, res) =>{
    const {user_id, res_id} = req.body;
    try {
        await conn.like_res.destroy({
            where: { user_id:user_id, res_id:res_id }
        })
        res.status(200).send("Xoa thanh cong")
    } catch (error) {
        res.status(404).send(error)
    }
}
const createOrder =async (req, res) => {
    try {
        const {user_id, food_id, amount, code, arr_sub_id}  = req.body;
        const newOrder = {
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id
        }
        await conn.order_food.create(newOrder)
        res.status(200).send("order succsess")
    } catch (error) {
        res.status(404).send(error)
    }
}
export {
    getlistLike,
    getlistRate,
    craetLike,
    craetRate,
    unLike,
    createOrder
} 