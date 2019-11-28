const check = require('./index');

let data = {
  name: '韦现法',
  tel: 123456,
  year: 12
}

let rule = {
  name: '名字不可为空',
  school: '学校不可为空',
  tel: {
    allowNull: true,
    reg: /[0-9]/,
    regErrmsg: '电话格式不正确'
  },
  year: {
    nullmsg: '年龄字段不可为空',
    reg: /s/,
    regErrmsg: '年龄格式不正确'
  }
}

let errmsg = check(data, rule);
console.log(errmsg);
