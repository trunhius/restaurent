import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getlistLikeRes = async (req, res) => {
    const res_id = req.params;
    try {
        const data = await conn.like_res.findAll({
            where: res_id
        });
        res.send(data)

    } catch (error) {
        res.send(error)
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
        res.send(error)
    }
}

const getlistRateRes = async (req, res) => {
    const res_id = req.params;
    try {
        const data = await conn.rate_res.findAll({
            where: res_id,
        });
       res.send(data)

    } catch (error) {
        res.send(error)
    }
}

export {
    getlistLikeRes,
    getlistRateRes
}