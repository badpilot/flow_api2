//一些方法
var db = require('./init_db.js');
let rest = (ctx,res)=>{
	ctx.response.type = 'application/json';
	ctx.response.body = res;
}
let BoolAccess = async(ctx) =>{
	let value = [ctx.reuqest.body.access_name,ctx.reuqest.body.user_id];
	let sql = `select * from ((ROLE_ACCESS inner join USER on ROLE_ACCESS.role_id=USER.user_role_id) inner join ACCESS_MODULE on ROLE_ACCESS.access_id=ACCESS_MODULE.access_id) 
			where ACCESS_MODULE.access_name=? and USER.user_id=? ;`;
	let res = await db.query(sql,value);
	return rest(ctx,res);
}

let login = async(ctx) =>{
	let value = [ctx.request.body.user_name,ctx.request.body.user_password];
	let sql = 'select * from USER where user_name=? and user_password=?'
	let res = await db.query(sql,value);
	console.log(res);
	return rest(ctx,res);
	
}
