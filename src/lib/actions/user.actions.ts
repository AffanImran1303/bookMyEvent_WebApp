'use server'

import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../database"
import User from "@/lib/database/models/user.model";
import Order from "@/lib/database/models/order.model";
import {handleError} from "@/lib/utils";
import Event from "@/lib/database/models/event.model";

import {CreateUserParams, UpdateUserParams} from "@/types"

export async function createUser(user:CreateUserParams){
    try{
        await connectToDatabase()
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser))
    }
    catch(error){
        handleError(error)
    }
}

export async function getUserById(userId:string){
    try{
        await connectToDatabase()
        const user = await User.findById(userId)
        if(!user)throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
    }catch (error){
        handleError(error)
    } 
}

export async function updateUser(clerkId:string, user:UpdateUserParams){
    try{
        await connectToDatabase()
        const updatedUser =await User.findOneAndUpdate({clerkId},user,{new:true})
        if(!updatedUser)throw new Error('User not found')
            return JSON.parse(JSON.stringify(updatedUser))
    }catch(error){
        handleError(error)
    }
}

export async function deleteUser(clerkId:string){
    try{
        await connectToDatabase()
    
    const userToDelete = await User.findOne({clerkId})
    if(!userToDelete){
        throw new Error ('User not found')
    }

    await Promise.all([
        Event.updateMany(
            {_id:{$in:userToDelete.events}},
            {$pull:{organizer:userToDelete._id}}
        ),
        Order.updateMany({_id:{$in:userToDelete.orders}},{$unset:{buyer:1}}),
    ])
    const deleteUser=await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deleteUser?JSON.parse(JSON.stringify(deleteUser)):null
}catch (error){
    handleError(error)
}

}

