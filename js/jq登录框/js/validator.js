//验证  jq包裹的立即执行是等待所有加载完毕 ready
//类似于jq,立即执行,暴露出一个方法
$(function () {
    'use strict'
    window.Validator = function (val, rule) {
       
        this.is_valid = function () {
        var key;   
        val = new_val || val;
        //如果不是必填项目且用户
        if(!rule.required && !val)
            return true;

        for (key  in rule) {
            if(key === 'required')
            continue;

            var r = this['validate_'+key]();
            if(!r) return false;
        }

        //
        if(!rule.required && !val)
           return true;

        for(key in rule) {
            
            if(key==='required')
            continue;
            //调用rule中相对应的方法
            var  r = this['validate_'+key]();
            if(!r) return false;
        }
       }
        this.validate_max = function () {
            per_max_mix()
            return val <= rule.max;
        }//指向的是实例对象
            per_max_mix()
        this.validate_min = function () {

            return val >= rule.min;
        }//指向的是实例对象

        this.validate_maxlength = function () {
            per_length();
            return val.length <= rule.maxlength;
        }//指向的是实例对象

        this.validate_mixlength = function () {
            per_length();
            return val.length >= rule.mixlength;
        }//指向的是实例对象

        this.validate_numeric = function () {
            return $.inNumberic(val)
        }

        this.validate_required = function () {
            var real= $.trim(val)
            if(!real && real  !== 0) {
               return false; 
            }
            return true;  
        }

        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }

       
        //用于this.calidate_max或_min
        function per_max_mix() {
            val = parseFloat(val);
        }

        function per_length() {
            val = val.toString();
        }

    }
})