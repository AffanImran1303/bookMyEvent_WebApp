import * as z from "zod";

export const eventFormSchema = z.object({
    title:z.string().min(3,"Title must at least be 3 characters long"),
    description:z.string().min(3,"Description must be at least 3 characters").max(400,"Description must be less than 400 characters"),
    location:z.string().min(3,"Location must be at least 3 characters").max(400,"Location must be less than 400 characters"),
    imageUrl:z.string(),
    startDateTime:z.date(),
    endDateTime:z.date(),
    category:z.string(),
    price:z.string(),
    isFree:z.boolean(),
    url:z.string().url()
})