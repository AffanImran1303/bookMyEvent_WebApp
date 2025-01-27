import {Document,Schema,model,models} from 'mongoose';
import { unique } from 'next/dist/build/utils';

export interface ICategory extends Document{
    _id:string;
    name:string;
}

const CategorySchema = new Schema({
    name:{type:String,required:true,unique:true},
})

const Category=models.Category || model<ICategory>('Category',CategorySchema)

export default Category;