const path = require('path')
const config = require('../config');



jest.mock('findup-sync');
let configIns = new config();
describe("config.findupFile",()=>{
    test("findupFile",()=>{
        expect(configIns.findupFile()).toEqual(
            path.join(__dirname,'./.mrgx.config.json')
        );
    });

})
