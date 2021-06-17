import { createServer, Model, Response } from "miragejs"
import { users } from "./users"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.db.loadData({ users })

        },
        routes() {
            this.post("/api/login", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                const currentUser = schema.db.users.findBy({ userName: attrs.userName })
                return currentUser !== null ? checkPassword(currentUser, attrs.password) : new Response(401, { some: 'header' }, { errors: ['wrong user'] });
            })
        },
    })
    return server;
}

const checkPassword = (user, password) => user.password === password ? user : new Response(401, { some: 'header' }, { errors: ['wrong password'] });
