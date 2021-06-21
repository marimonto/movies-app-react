import { makeServer } from "../../api/api"

let server

beforeEach(() => {
    server = makeServer({ environment: "test" })
})

afterEach(() => {
    server.shutdown()
})

it("shows the movies", function () {
  /*   server.create("giftCards", {
        id: '585-4311',
        value: 50000,
        state: 'inactiva',
        balance: 50000
    }) */

})