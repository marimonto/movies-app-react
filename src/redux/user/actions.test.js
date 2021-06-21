import { userActions } from './actions';
import { makeServer } from "../../api/api"
import { Model } from "miragejs"
import { store } from '../../_mocks_/store/store';
import { giftCards } from '../../api/_mocks_/gift-cards'
import { users } from '../../api/_mocks_/users'
import { giftCardsService } from '../../services/gift-cards/gift-cards.service';
describe('User actions', () => {
    let server
    beforeEach(() => {
        store.clearActions();
        server = makeServer({
            models: {
                giftCards: Model,
            },

            routes() {
                this.namespace = "api"

                this.get("/api/user/:id", (schema, request) => {
                    const id = request.params.id
                    return schema.db.users.findBy({ userUuid: id });
                });

                this.get("/api/giftCards", (schema, request) => {
                    return schema.giftCards.all().models
                });
            },
        })
    })

    afterEach(() => {
        server.shutdown()
    })

    it('getById', async () => {
        server.db.loadData({ giftCards })
        server.db.loadData({ users })
        await store.dispatch(userActions.getById(giftCards[0].id));
        const expectedActions = [{ type: '@@USER/GET_USER_REQUEST' }];
        const receivedActions = store.getActions()
        expect(receivedActions).toEqual(expectedActions);
    });

});