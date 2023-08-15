import { fastify } from "fastify";
import {
	Objective,
	ObjectiveLatency,
	ObjectivePercentile,
	autometrics,
} from "autometrics";
import {
	handleCreateUser,
	handleDeleteUser,
	handleGetAllUsers,
	handleGetUserById,
	handleUpdateUser,
} from "./routes.js";

const port = 8080;
const host = process.env.HOST || "127.0.0.1";

const app = fastify({ logger: true });

const API_SLO: Objective = {
	name: "api",
	successRate: ObjectivePercentile.P99,
	latency: [ObjectiveLatency.Ms250, ObjectivePercentile.P99],
};

app.get("/users", autometrics({ objective: API_SLO }, handleGetAllUsers));
app.get("/users/:id", autometrics({ objective: API_SLO }, handleGetUserById));
app.post("/users", autometrics({ objective: API_SLO }, handleCreateUser));
app.put("/users/:id", autometrics({ objective: API_SLO }, handleUpdateUser));
app.delete("/users/:id", autometrics({ objective: API_SLO }, handleDeleteUser));

app.listen({ port, host }, (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	app.log.info(`Server listening on ${address}`);
});
