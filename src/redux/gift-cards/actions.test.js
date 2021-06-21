import { giftCardsActions } from './actions';
import { makeServer } from "../../api/api"
import { store } from '../../_mocks_/store/store';
import { giftCards } from '../../api/_mocks_/gift-cards'
import { users } from '../../api/_mocks_/users'
import { giftCardsService } from '../../services/gift-cards/gift-cards.service';
import { createServer, Model } from "miragejs"
describe('giftCards actions', () => {
    let server
    beforeEach(() => {
        store.clearActions();
        server = createServer({
            models: {
                giftCards: Model,
            },
            
            seeds(server) {
                server.db.loadData({ giftCards })
            },
            routes() {
                this.get("/api/giftCards", (schema, request) => {
                    return new Promise((resolve, reject) => {
                        process.nextTick(() =>
                            schema.giftCards.all().models
                                ? resolve(schema.giftCards.all().models)
                                : reject({
                                    error: 'error'
                                }),
                        );
                    });
                    /* return schema.giftCards.all().models */
                });
                this.get("/api/giftCard/:id", (schema, request) => {
                    const id = request.params.id
                    return schema.giftCards.all().models.filter(item => item.id.includes(id))
                });

            },
        })
    })

    afterEach(() => {
        server.shutdown()
    })

    fit('getById', async () => {
        await store.dispatch(giftCardsActions.getById('103-6197'));
        const expectedActions = [{ type: '@GIFT_CARDS/GET_BY_ID_REQUEST' }];
        const receivedActions = store.getActions()
        expect(receivedActions).toEqual(expectedActions);
    });

    fit('getAll', async () => {
        await store.dispatch(giftCardsActions.getAll());
        const expectedActions = [{ type: '@GIFT_CARDS/GET_ALL_REQUEST' }];
        const receivedActions = store.getActions()
        expect(receivedActions).toEqual(expectedActions);
    });

});