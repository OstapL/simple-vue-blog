<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>List blog Titles</h1>
    <input type="text" name="" v-model="search" placeholder="Search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
export default {
  data () {
    return {
      blogs: [],
      search: ''

    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.blogs = data.body.slice(0,10);
    });
  },
  computed: {

  },
  filters: {
    'to-uppercase': function(value) {
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8)
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
h1 {
  text-align: center;
  border-bottom: solid 1px red;
  padding: 20px;
  margin-bottom: 50px;
}
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
