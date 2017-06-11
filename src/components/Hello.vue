<template>
  <div class="hello">
    <div class='box' v-text='msg'></div>
    <input v-model='sss' v-on:keyup.enter='enter'>
    <div v-for='item in items' v-bind:class='{someClass:item.finished}' v-on:click='change(item)'>
        {{ item.target }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '德维德和我的警卫局就',
      items:[
        {target:'1',finished:true},
        {target:'2',finished:false},
        {target:'3',finished:true},
        {target:'4',finished:true},
        {target:'5',finished:true}
      ],
      someClass:'wocao'
    }
  },
  methods:{
    change:function(item){
      item.finished = !item.finished
    },
    enter:function(){
      this.items.push({
        target:this.sss,finished:false
     });
     this.sss = '';
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.box{color:red}
.someClass{color:red}
</style>
