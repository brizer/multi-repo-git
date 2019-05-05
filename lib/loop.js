const loop = require('loop')
const Bower = require('./package/bower')
class MrgLoop {
    constructor({
        lists=[],
        packageName='bower'
    }){
        this.loopList = lists;
        this.packageName = packageName;
    }
    /**
     * loop command
     * @param {string} command - command to loop
     */
    loopCommand(command){

        let folders = this.getFolders()

        loop({
            command:command,
            directories:folders,
            exitOnError:true,
            exitOnAggregateError:true
        })
    }
    /**
     * get repo path in projectList 
     */
    getFolders(){
        let list = this.loopList;
        let folders = list.map((v)=>{
            return v.path;
        });
        return folders;
    }

    setDependence({
        name,branch
    }){
        const list = this.loopList

        const packageManageMap = {
            'bower':Bower
        }
        list.map(v=>{
            const packageManage = new packageManageMap[this.packageName](v.path)
            packageManage.setDependence({
                name,branch
            })
        })
    }

}

module.exports = MrgLoop;