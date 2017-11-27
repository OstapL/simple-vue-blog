<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All blog articles</h1>
    <input type="text" name="" v-model="search" placeholder="Search blogs">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
      <article>{{ blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
import {postsRef} from '../config';

export default {
  data () {
    return {
      blogs: [],
      search: '',
      firebase: {
        post: postsRef
      }
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://vue-blog-list.firebaseio.com/post.json').then(function(data) {
    //this.$http.get(postsRef).then(function(data) {
      return data.json();
    }).then(function(data) {
      var blogsArray = [];
      for (let key in data) {
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
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
        el.style.color = "#" + Math.random().toString(16).slice(2,8)
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
