import { Server, Model, Response } from "miragejs"
import { users } from "./_mocks_/users"
import { giftCards } from "./_mocks_/gift-cards"


export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
        environment,

        models: {
            users: Model,
            giftCards: Model
        },

        seeds(server) {
            server.db.loadData({ users })
            server.db.loadData({ giftCards })
        },
        routes() {
            this.post("/api/login", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                const currentUser = schema.db.users.findBy({ userName: attrs.userName })
                return currentUser !== null ? checkPassword(currentUser, attrs.password) : new Response(401, { some: 'header' }, { errors: ['wrong user'] });
            })

            this.get("/api/user/:id", (schema, request) => {
                const id = request.params.id
                return schema.db.users.findBy({ userUuid: id });
            })

            this.get("/api/giftCards", (schema, request) => {
                return schema.giftCards.all().models
            })

            this.get("/api/giftCard/:id", (schema, request) => {
                console.log(schema.giftCards.all().models);
                const id = request.params.id
                console.log(schema.giftCards.all().models.filter(item => item.id.includes(id)));
                return schema.giftCards.all().models.filter(item => item.id.includes(id))
            })
        },
    })
    return server;
}

const checkPassword = (user, password) => user.password === password ? user : new Response(401, { some: 'header' }, { errors: ['wrong password'] });
