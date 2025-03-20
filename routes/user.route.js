const express = require("express");
const userController = require("../controllers/user.controller");
const route = express.Router();

//เพิ่มข้อมูล
route.post('/', userController.uploadUser, userController.createUser);
//ค้าหา ตรวจสอบ
route.get('/:userName/:userPassword',userController.checkLogin);
//แก้ไขข้อมูล
route.put('/:userId', userController.uploadUser, userController.updateUser);


module.exports = route;