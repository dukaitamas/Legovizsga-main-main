
  
  <script setup>
  //import axios from '@/axios'; // Import the configured Axios instance

  import { ref, onMounted } from 'vue';
import axios from '../axios';

const posts = ref([]);
const newPost = ref({ title: '', content: '' });
const isLoggedIn = ref(true);

const fetchPosts = async () => {
  const response = await axios.get('/api/posts');
  posts.value = response.data;
};

const createPost = async () => {
  try {
    const response = await axios.post('/api/posts', newPost.value);
    posts.value.push(response.data);
    newPost.value.title = '';
    newPost.value.content = '';
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

onMounted(() => {
  fetchPosts();
});
  
  // You can add data fetching logic here if needed
  </script>


<template>
  <div>
    <h1>Blog</h1>
    <br>
    <br>

    <p>Töltsd fel ide kedvenc fotóidat, kedvenc gyűjteményed, kedvenc AI genrált LEGO képedet.</p>
<br>
<p>Kérlek tartsd tiszteletben a többi látogatót, ne légy tiszteletlen és ne sértsd meg a weboldal "házirendjét".</p>

<div>
    <!-- <h1>Blog</h1> -->
    <div v-if="isLoggedIn">
      <h2>Create a new post</h2>
      <form @submit.prevent="createPost">
        <div>
          <label for="title">Title:</label>
          <input type="text" v-model="newPost.title" required />
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea v-model="newPost.content" required></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
    <h2>All Posts</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <p>By: {{ post.user.name }}</p>
    </div>
  </div>

  </div>
</template>
  
  <style scoped>
  /* Add your styles here */

  h1{
    display: flex;
    justify-content: center;
  }

  p{
    display: flex;
    justify-content: center;
  }
  </style>
  