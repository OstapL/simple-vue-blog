<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form v-if="!submitted">
    	<label>Blog Title:</label>
    	<input type="text" v-model="blog.title" name="" required>
    	<label>Blog Content:</label>
    	<textarea v-model="blog.content"></textarea>
    	<div id="checkboxes">
    		<label>checkbox 1
    		<input type="checkbox" name="" value="ninjas" v-model="blog.categories">
    		</label>
    		<label>checkbox 2
    		<input type="checkbox" name="" value="wizards" v-model="blog.categories">
    		</label>
    		<label>checkbox 3
    		<input type="checkbox" name="" value="mario" v-model="blog.categories">
    		</label>
    		<label>checkbox 4
    		<input type="checkbox" name="" value="cheese" v-model="blog.categories">
    		</label>
    	</div>
    	<label>Author:
    	<select v-model="blog.author">
    		<option v-for="author in authors">{{ author }}</option>
    	</select>
    	</label>
    	<button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
		<h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
    	<h3>Preview blog</h3>
    	<p>Blog title: {{ blog.title }}</p>
    	<p>Blog content: {{ blog.content }}</p>
    	<p>Blog categories:</p>
		<ul>
			<li v-for="category in blog.categories"> {{ category }}</li>
		</ul>
		<p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
      	title: "",
      	content: "",
      	categories: [],
      	author: []
      },
      authors: ['The Net Os', 'The Vue vindycator', 'The Angular'],
      submitted: false,
    }
  },
  methods: {
  	post: function() {
  		this.$http.post('https://vue-blog-list.firebaseio.com/post.json', this.blog).then(function(data) {
  			console.log(data);
  			this.submitted = true
  		});
  	}
  }
}
</script>

<style>

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes label {
	display: inline-block;
	margin-right: 10px;
}
</style>
