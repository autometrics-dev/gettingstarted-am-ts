import { FastifyRequest, FastifyReply } from "fastify";

export async function handleGetAllUsers(
	_req: FastifyRequest,
	res: FastifyReply,
): Promise< FastifyReply > {
	try {
		const users = await fetch("https://jsonplaceholder.typicode.com/posts");
				return res.send(users);
	} catch (e) {
		return res.status(500).send(e)
	}
}

export async function handleGetUserById(
	req: FastifyRequest,
	res: FastifyReply,
) {
	type RequestParams = { id: string }; 
	const params = req.params as RequestParams;
	const id = parseInt(params.id);
	try {
		const user = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
		);
				if (!user) {
			return res.status(404).send("User not found");
		}

		return res.status(200).send(user);
	} catch (e) {
		return res.status(500).send(e);
	}
}

export async function handleCreateUser(
	_req: FastifyRequest,
	res: FastifyReply,
) {
	try {
		const user = await fetch("https://jsonplaceholder.typicode.com/posts/1");
				return res.status(201).send(user);
	} catch (e) {
		return res.status(500).send(e);
	}
}

export async function handleUpdateUser(
	_req: FastifyRequest,
	res: FastifyReply,
) {
	try {
		const user = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
			method: "PUT",
		});
				return res.status(201).send(user);
	} catch (e) {
		return res.status(500).send(e);
	}
}

export async function handleDeleteUser(
	_req: FastifyRequest,
	res: FastifyReply,
) {
	try {
		const user = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
			method: "DELETE",
		});
				return res.status(200).send(user);
	} catch (e) {
		return res.status(500).send(e);
	}
}


