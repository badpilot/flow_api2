//模块相关数据表
//user表
var USER = 
    `create table if not exists USER(
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
var ROLE = 
    `create table if not exists ROLE(
        role_id INT NOT NULL AUTO_INCREMENT,
        role_name VARCHAR(20) NOT NULL,
        PRIMARY KEY (role_id)   
    );
    `
var ROLE_ACCESS =   
    `create table if not exist ROLE_ACCESS(
        role_id INT NOT NULL,
        access_id INT NOT NULL,
        PRIMARY KEY (role_id)
    );
    `
//权限模块
var ACCESS_MODULE =
    `create table if not exists ACCESS_MODULE(
        module_id INT NOT NULL AUTO_INCREMENT,
        module_name VARCHAR(20) NOT NULL ,
        module_description VARCHAR(50) NOT NULL,
        PRIMARY KEY (module_id)
    );
    `
//角色-权限模块-权限
var ROLE_MODULE_ACCESS = 
    `create table if not exists ROLE_MODULE_ACCESS(
        access_id INT NOT NULL AUTO_INCREMENT,
        access_name VARCHAR(20) NOT NULL,
        module_id INT NOT NULL,
        module_name VARCHAR(20) NOT NULL,
        PRIMARY KEY (access_id)
    );
    `

module.exports = {
    USER: USER,
    ROLE: ROLE,
    ROLE_ACCESS:ROLE_ACCESS,
    ACCESS_MODULE: ACCESS_MODULE,
    ROLE_MODULE_ACCESS: ROLE_MODULE_ACCESS   
}