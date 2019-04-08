const path = require('path')
const config = require('../config');
const configContent = require('./.mrgx.config.json');



jest.mock('findup-sync');
let configIns = new config();
describe("config.findupFile",()=>{
    test("findupFile",()=>{
        expect(configIns.findupFile()).toEqual(
            path.join(__dirname,'./.mrgx.config.json')
        );
    });

})


describe('config commands',()=>{
    test('ls',async ()=>{
        expect.assertions(1);
        const config = await configIns.ls();
        expect(config).toEqual(JSON.stringify(configContent, null, 2))
    })

    test('addp', async ()=>{
        const addp = await configIns.addp();
        const projects = await configIns.getProjectList();
        expect(projects.length).toEqual(3);
    })


    test('rmp',async()=>{
        const rmp = await configIns.rmp();
        const projects = await configIns.getProjectList();
        console.log(projects);
        expect(projects.length).toEqual(2);        
    })
})