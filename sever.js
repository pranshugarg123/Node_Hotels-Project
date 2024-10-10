var fs=require('fs')
var os=require('os')
var user=os.userInfo()
/*console.log(user)
console.log(user.username)
fs.appendFile('greeting.txt','hi'+user.username+'!\n',()=>{
    console.log('file is created')
})*/
const notes=require('./notes.js')
age=notes.age
console.log(age)
console.log(notes.addnum(7,8))
var _=require('lodash')
var data=["person","person",1,2,1]
var filter=_.uniq(data)
console.log(filter)
console.log(_.isString(2))
const jsonstring='{"name":"Aman","Age":10}'
const jsonobj=JSON.parse(jsonstring)
console.log(jsonobj.name)
const objtocon={Gender:"male",Height:30}
const json=JSON.stringify(objtocon)
console.log(json)
console.log(typeof json)
