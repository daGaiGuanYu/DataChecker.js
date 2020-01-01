module.exports = function check(data, rule){
  if(!data||!rule)
    throw Error('数据对象或规则不可为空');
  
  for(var key in rule){
    let ruleItem = rule[key];
    let value = data[key];
    // ruleItem 是函数
    if(typeof(ruleItem) == 'function'){
      let errmsg = ruleItem(value);
      if(errmsg)
        return errmsg;
      continue;
    }

    // ruleItem 是字符串时（空校验）
    if(typeof(ruleItem) == 'string' || ruleItem instanceof String){ // 空校验
      if(!value)
        return ruleItem; // 空，返回
      continue; // 非空，提前结束本次循环
    }
    
    if(!ruleItem.allowNull&&!value)
      return ruleItem.nullmsg;
    if(ruleItem.allowNull&&!value)
      continue;
    
    if(ruleItem.regexp&&!ruleItem.regexp.test(value))
      return ruleItem.regexpErrmsg;
  }
}