const path = require('path')
let findup = jest.genMockFromModule('findup-sync')


findup = (pth)=>{
    return path.join(__dirname,'../__tests__/.mrgx.config.json')
}

module.exports = findup;