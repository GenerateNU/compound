//GET, PUT, DELETE for a specific lesson by ID

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient, Lesson } from "@prisma/client";
const prisma = new PrismaClient();
import { Message } from "../../../../lib/CompoundTypes";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Message | Lesson>
) {
	const session = await getServerSession(req, res, authOptions);
	const supportedRequestMethods: { [key: string]: Function } = {
		GET: getLesson
	};

	if (req.method) {
		return supportedRequestMethods[req.method](req, res, session);
	}
	return res.status(405).send({ message: "request method not supported" });
}

async function getLesson(
	req: NextApiRequest,
	res: NextApiResponse<Message | Lesson>
) {
	//convert then check that given id param is a number
	const id = Number(req.query.id);

	// check explicitly for empty string because Number() casts empty string to 0
	if (isNaN(id) || req.query.id === "") {
		return res.status(403).send({ message: "Please input an Integer" });
	}

	//TODO maybe check if ID exists and return a message if not? right now it'll just return null if it doesnt

	const lesson = await prisma.lesson.findUnique({
		where: {
			id
		}
	});
	if (!lesson){
		return res.status(404).send({ message: `Lesson with Id ${id} not found` })
	}else{
		return res.status(200).send(lesson);
	}

}
