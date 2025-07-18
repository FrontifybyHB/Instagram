import userModel from "../models/user.model.js";

export async function createUser(data){
    return await userModel.create(data)
}

export async function findOneUser(qurey){
    return await userModel.findOne(qurey);
}

export async function findUser(qurey){
    return await userModel.find(qurey);
}

