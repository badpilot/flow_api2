var mysql = require('mysql');
var config = require('./config.js');
//var tables = require('./tableMap.js');
const fs = require('fs');

var pool = mysql.createPool({
	host:config.host,
	user:config.username,
	password:config.password,
	database:config.database
});

var query = (sql,val) => {
	return new Promise((resolve,reject)=>{
		pool.getConnection((err,connection)=>{
			if (err){
				return resolve(err)
			} else{
				connection.query(sql,val,(err,rows)=>{
					if (err) {
						reject(err)
					}else{
						resolve(JSON.parse(JSON.stringify(rows)))
					}
					connection.release()
				})
			}
		})
	})
}
  
  

var createTable = ( sql ) => {
    return query( sql, [] )
  }


fs.readdirSync(__dirname).filter((f)=>{
    return f.endsWith('module');
	}).forEach((f)=>{
    //console.log(f);
    	fs.readdirSync(__dirname+'/'+f).filter((f)=>{
        	return f.endsWith('tableMap.js')
    	}).forEach((f1)=>{
            let tables = require(__dirname+'/'+f+'/'+f1);           
        	for (let key in tables){
				createTable(tables[key]);
				//console.log('create table '+ key);
            }
            console .log('create '+f)
    	})
})

module.exports = {
    query: query
}