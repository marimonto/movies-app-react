import { Server, Model, Response } from "miragejs"
import { users } from "./_mocks_/users"
import { giftCards } from "./_mocks_/gift-cards"
import { constants } from "./_mocks_/constants"


export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
        environment,

        models: {
          
            users: Model,
            giftCards: Model,
            constants: Model
        },

        seeds(server) {
            server.db.loadData({ users })
            server.db.loadData({ giftCards })
            server.db.loadData({ constants })
        },
        routes() {
            this.post("/api/login", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                const currentUser = schema.db.users.findBy({ userName: attrs.userName })
                return currentUser !== null ? checkPassword(currentUser, attrs.password) : new Response(401, { some: 'header' }, { errors: ['wrong user'] });
            });

            this.get("/api/user/:id", (schema, request) => {
                const id = request.params.id
                return schema.db.users.findBy({ userUuid: id });
            });

            this.get("/api/giftCards", (schema, request) => {
                return schema.giftCards.all().models
            });

            this.get("/api/giftCard/:id", (schema, request) => {
                const id = request.params.id
                return schema.giftCards.all().models.filter(item => item.id.includes(id))
            });

            this.get("/api/giftCards/values", (schema, request) => {
                return schema.constants.all().models[0].giftCardsValues
            })

            this.get("/api/giftCards/constants", (schema, request) => {
                return schema.constants.all().models[0]
            });

            this.post("/api/giftCard", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                const card = {
                    id: attrs.id,
                    value: attrs.value,
                    state: 'inactiva',
                    balance: attrs.value
                }
                schema.giftCards.create(card)
                return schema.giftCards.all().models
            });

            this.put("/api/giftCard/sell", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                attrs.state = 'activa'
                schema.giftCards.create(attrs)
                return schema.giftCards.all().models
            });

            this.put("/api/giftCard/edit", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                attrs.balance = attrs.balance - attrs.purchases[attrs.purchases.length-1].value
                attrs.state = attrs.balance <= 0 ? 'terminada' : 'activa';
                schema.giftCards.create(attrs)
                return schema.giftCards.all().models
            });
        },
    })
    return server;
}

const checkPassword = (user, password) => user.password === password ? user : new Response(401, { some: 'header' }, { errors: ['wrong password'] });
