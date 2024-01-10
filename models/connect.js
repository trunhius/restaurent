

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql_restaurant", "root", "5555", {
    host: "localhost",
    port: 3306,
    dialect:"mysql"
})

try {
    await sequelize.authenticate(); //xác minh đã kết nối thành công chưa
    console.log("ket noi thanh cong");
} catch (error) {
    console.log("ket noi thất bại")
}

export default sequelize;