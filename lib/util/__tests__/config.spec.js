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


    test('rmp with param alias',async()=>{
        const addp = await configIns.addp();
        const rmp = await configIns.rmp('multi-repo-git');
        const projects = await configIns.getProjectList();
        expect(projects.length).toEqual(2);        
    })


    test('addb do not change project params', async()=>{
        let projects = await configIns.getProjectList();
        const addb = await configIns.addb(projects,{
            "alias":"multi-repo-git",
            "path":process.cwd()
        })
        projects = await configIns.getProjectList();
        expect(projects.length).toEqual(2);  
        let backup = await configIns.getBackupList();
        expect(backup.length).toEqual(1)
    })

    test('rmb do not change project params',async()=>{
        let projects = await configIns.getProjectList();
        const rmb = await configIns.rmb(projects,{
            "alias":"multi-repo-git",
            "path":process.cwd()
        })
        expect(projects.length).toEqual(2);
        let backup = await configIns.getBackupList();
        expect(backup.length).toEqual(0)  
    })
})