const program = require("commander");
const loop = require('loop')
const Promise = require('bluebird')
const Bower = require('./package/bower')
/**
 * Class loopAction
 */
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
        const exitOnError = program.quiet?false:true;
        loop({
            command:command,
            directories:folders,
            exitOnError:exitOnError,
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
    /**
     * Change project list's dependence of package 
     * @param {string} name - which package to change
     * @param {string} barnch - which branch to depends
     */
    setDependence({
        name,branch
    }){
        const list = this.loopList

        const packageManageMap = {
            'bower':Bower
        }

        Promise.each(list,(v)=>{
            const packageManage = new packageManageMap[this.packageName](v.path)

            return packageManage.setDependence({name,branch}).then(data=>{
                console.log(`${v.alias} ✓`)
            })
        }).catch(err=>{
            console.error(err)
        })
    }

}

module.exports = MrgLoop;