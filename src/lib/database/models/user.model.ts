import { Schema, model, models } from 'mongoose';
const UserSchema = new Schema({
    _id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
})

const User = models.User || model('User', UserSchema);

const testUser = new User({
    clerkId: "user_2sMoBzt44Ze5BjPEc6kVoe7KEJy",
    email: "test@example.com",
    username: "testuser",
    firstName: "John",
    lastName: "Doe",
    photo: "https://example.com/photo.jpg"
  });
  await testUser.save();
  console.log("User created:", testUser);

export default User;