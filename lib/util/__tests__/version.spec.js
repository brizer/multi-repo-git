const version = require('../version');
const requireVersion = require('../../../package.json').engines.node


describe("version.checkNodeVersion",()=>{
    test("checkNodeVersion success",()=>{
        expect(version.checkNodeVersion('v8.9.1')).toEqual(true);
    });

    test("checkNodeVersion fail",()=>{
        expect(version.checkNodeVersion('v8.8.1')).toEqual(false);
    });
})