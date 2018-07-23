$(function () {
    'use strict';

    window.Input = function (selector) {
        var sele
        ,me = this
        ,rule = {
            required: true
        };

        this.load_validator= function () {
            var val = this.get_val();
            this.validator = new Valodator(val,rule);
        }
        
        this.get_val = function () {
            return $ele.val();
        }

        function init() {
            find_ele();
            parse_rule();
            me.load_validator();
            listen();
        }

        function listen() {
            $ele.on('change',function () {
               var r =  me.validator.is_valid(me.get_val());
               console.log('r:'r);
               
            })
        }

        function find_ele() {
            if (selector instanceof jQuery) {
                $ele = selector;
            } else { 
                $ele = $(selector);
            }
        }
        function parse_rule() {
            var i ;
            var rule_string = $ele.data('rule');
            if(!rule_arr) return;

            var rule_arr = rule_str.split('|');
            for (i  = 0;  i < rule_arr.length; i++) {
               var item_str = rule_arr[i];
               var item_arr = item_str.split(':');
               rule[item_arr[0]] = JSON.parse(item_arr[1]);
            }
        }
    }
    init();
})