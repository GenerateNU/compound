// GET, PUT, DELETE operations for lessons by submodule ID
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { PrismaClient, Lesson } from "@prisma/client";
const prisma = new PrismaClient();
import { Message } from "../../../../../lib/CompoundTypes";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Message>
) {
	const session = await getServerSession(req, res, authOptions);
	const supportedRequestMethods: { [key: string]: Function } = {
		GET: getLessons
	};

	if (req.method) {
		return supportedRequestMethods[req.method](req, res, session);
	}
	return res.status(405).send({ message: "request method not supported" });
}

async function getLessons(
	req: NextApiRequest,
	res: NextApiResponse<Message | Lesson[]>
) {
	//convert then check that given id param is a number
	const subModuleId = Number(req.query.id);

	// check explicitly for empty string because Number() casts empty string to 0
	if (isNaN(subModuleId) || req.query.id === "") {
		res.status(403).send({ message: "Please input an Integer" });
	}

	//TODO maybe check if submoduleID exists and return a message if not? right now it'll just return an empty array if it doesnt

	const lessons = await prisma.lesson.findMany({
		where: {
			subModuleId: {
				equals: subModuleId
			}
		}
	});

	res.status(200).send(lessons);
}
