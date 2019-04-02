const loop = require('loop')
class MrgLoop {
    constructor({lists=[]}){
        this.loopList = lists;
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


}

module.exports = MrgLoop;