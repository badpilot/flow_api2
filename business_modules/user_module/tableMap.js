//模块相关数据表
//user表
var User = 
    `create table if not exists User(
        user_id INT NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(20) NOT NULL,
        user_real_name VARCHAR(20) NOT NULL,
        user_role_id INTEGER NOT NULL,
        user_password VARCHAR(20) NOT NULL,
        user_department VARCHAR(20) NOT NULL,
        PRIMARY KEY (user_id)
    );
    `
//角色表
var Role = 
    `create table if not exists Role(
        role_id INT NOT NULL AUTO_INCREMENT,
        role_name VARCHAR(20) NOT NULL,
        PRIMARY KEY (role_id)   
    );
    `
var Role_Access =   
    `create table if not exist Role_Access(
        role_id INT NOT NULL,
        access_id INT NOT NULL,
        PRIMARY KEY (role_id)
    );
    `
//权限模块
var Access_Module =
    `create table if not exists Access_Module(
        module_id INT NOT NULL AUTO_INCREMENT,
        module_name VARCHAR(20) NOT NULL ,
        module_description VARCHAR(50) NOT NULL,
        PRIMARY KEY (module_id)
    );
    `
//角色-权限模块-权限
var Role_Module_Access = 
    `create table if not exists Role_Module_Access(
        access_id INT NOT NULL AUTO_INCREMENT,
        access_name VARCHAR(20) NOT NULL,
        module_id INT NOT NULL,
        module_name VARCHAR(20) NOT NULL,
        PRIMARY KEY (access_id)
    );
    `

module.exports = {
    User: User,
    Role: Role,
    Role_Access:Role_Access,
    Access_Module: Access_Module,
    Role_Module_Access: Role_Module_Access   
}