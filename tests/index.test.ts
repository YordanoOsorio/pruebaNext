/*jshint esversion: 8 */

import { connect, connected, close } from "../src/index"

describe('Connection test', () => {
    beforeAll(async () => {
        await connect();
    })

    afterAll(async done => {
        await close();

        done();
    })

    test('Check Connection', () => {
        expect(connected()).toBeTruthy();
    })
});
