import { createServer, Model } from "miragejs"
import { users } from "./users"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.db.loadData({users})
 
        },
        routes() {
            this.post("/api/login", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                const userName = attrs.userName
                console.log(attrs);
                const currentUser = schema.db.users.findBy({ userName: userName })
                console.log(currentUser);
                return currentUser;
            })
        },
    })
    return server;
}