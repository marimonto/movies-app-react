import { makeServer } from "../../api/api"
import { giftCardsService } from "./gift-cards.service"
import { giftCards } from '../../api/_mocks_/gift-cards'
import { Model } from "miragejs"

let server

beforeEach(() => {
    server = makeServer({
        models: {
            giftCards: Model,
        },

        routes() {
            this.namespace = "api"

            this.get("/api/giftCards", (schema, request) => {
                return schema.giftCards.all().models
            });
        },
    })
})

afterEach(() => {
    server.shutdown()
})

it('getAll', async () => {
    server.db.loadData({ giftCards })
    const response = await giftCardsService.getAll();
    expect(response).toEqual(giftCards)
});

it('getById', async () => {
    server.db.loadData({ giftCards })
    const response = await giftCardsService.getById('103-6197');
    expect(response).toEqual([giftCards[0]])
});

it('createCard', async () => {
    server.db.loadData({ giftCards })
    const response = await giftCardsService.getById('103-6197');
    expect(response).toEqual([giftCards[0]])
});

