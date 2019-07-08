var s1 = new Vue({
    el: '#s1',
    data:{
        s1:''
    },
    computed: {
        s1:function () {
            return Number (s1)
        }
    }
})
var s2 = new Vue({
    el: '#s2',
    data:{
        s2:''
    },
    computed: {
        s2:function () {
            return Number (s2)
        }
    }
})
new Vue({
    el:'#add',
    computed:{
        add:function(){
            return Number(s1.s1)+Number(s2.s2)
        }
    }});
new Vue({
    el: '#mul',
    computed:{
        mul:function () {
            return Number(s1.s1) * Number(s2.s2)
        }
    }
})