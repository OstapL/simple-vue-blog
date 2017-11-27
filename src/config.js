import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAub_5Mc6q7Kv2CMBw6FXFTUaVksGV-c20",
    authDomain: "vue-blog-list.firebaseapp.com",
    databaseURL: "https://vue-blog-list.firebaseio.com",
    projectId: "vue-blog-list",
    storageBucket: "vue-blog-list.appspot.com",
    messagingSenderId: "533072440047"
  });

export const db = app.database();
export const postsRef = db.ref('post');

