---
layout: post
title:  "Web SQL Database"
categories: JavaScript
tags:  JavaScript
author: kzli
---

* content
{:toc}

## 三个核心方法

* openDatabase: 这个方法使用现有数据库或创建新数据库对象。

  * 参数1: 数据库名称。
  * 参数2: 版本号。
  * 参数3: 对数据库的描述。
  * 参数4: 设置数据的大小。
  * 参数5: 回调函数(可省略)。

* transaction: 这个方法允许我们根据情况控制事务提交或回滚。

* executeSql: 这个方法用于执行真实的SQL查询。




```js
// initialization
!function (_){
	let db = openDatabase('_local_db', '1.0', '_local_db description', 1024 * 1024)
	let execute = (sql, params) => new Promise((resolve, reject) => db.transaction(tx => tx.executeSql(sql, params, (tx, rs) => resolve(rs.rows,tx), (tx, err) => reject(err,tx))))
	_.db = {
		sql:(a, b) => execute(a, b)
	}
	Object.freeze(_.db)
}(window)

// create table user
db.sql('create table if not exists user(id text,name text,password text,primary key(id))');

// insert data
db.sql('insert into user(id,name) values(?,?)',[Date.now(),'test']);
db.sql('insert into user(id,name) values(?,?)',['x01','ts']);
db.sql('insert into user(id,name) values(?,?)',['x02','lqq']);

//select
db.sql('select * from user where name like ?',['%s%']).then(r => {
	for(let o of r) console.info(o);
});

//...
```
