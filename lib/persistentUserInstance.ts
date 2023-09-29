import Users from "@/models/users";
import prisma from "./client";

const persistentUserInstance = new Users(prisma.user);

export default persistentUserInstance;
