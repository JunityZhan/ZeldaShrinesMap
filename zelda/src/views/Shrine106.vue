<template>
    <div class="container">
        <div v-if="permission" class="warning">
            <p>It is highly recomended to solve a shrine by yourself, and that is one of the source of BOTW's happiness. If you insist to get the tips:</p>
            <br>
            <div class="getPermission" v-on:click="permission=false">CLICK ME</div>
            <div class="placeHolder"></div>
        </div>
        <div v-if="!permission" class="body">
            <div class="tips">
                Hello, There should be some Tips for this Shrine.
            </div>
            <!--Video-->
            <iframe class="video" src="//player.bilibili.com/player.html?aid=82909939&bvid=BV1oJ411H7fg&cid=141640881&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            <div class="tableTitle"><span class="midText"></span></div>
                    <h1>Share your unique way to clear the Shrine!</h1>
                    <div class="create-post">
                    <label for="create-post">Say Something... </label>
                    <textarea id="create-post" v-model="text" placeholder="The connection is slow, after you click Post!, it will take about 30s to handle your post."></textarea>
                    <button v-on:click="createPost">Post!</button>
                    </div>
                    <hr>
                    <div class="posts-container">
                    <div class="post" v-for="(post, index) in posts" v-bind:item="post"
                    v-bind:index="index" v-bind:key="post._id"
                    >
                         
                        <p class="text">{{post.text}}</p>
                    </div>
                    </div>
         </div>
    </div>
</template>

<script>

import PostService from '../PostService'

export default {
    name: "Shrine1",
    data() {
        return {
            posts: [],
            error: '',
            text: '',
            permission: true,
            id: window.location.pathname.slice(7),
        }
    },
    async created() {
        try {
            this.posts = await PostService.getPosts();
            console.log(this.posts)
            this.posts = this.posts.filter(post => post.id===this.id)
        } catch(err) {
            this.error = err.message;
        }
    },
    methods: {
    async createPost() {
      await PostService.insertPost(this.text, window.location.pathname.slice(7))
      this.posts = await PostService.getPosts();
      this.posts = this.posts.filter(post => post.id===this.id)
      this.text = ''
    },
  }
}
</script>

<style scoped>
button {
    background-color: #45454d; /* 绿色 */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}
textarea {
  margin-top: 10px;
  margin-left: 180px;
  width: 500px;
  height: 100px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: rgba(101, 101, 101, 1);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
}


textarea:focus {
    background: none repeat scroll 0 0 #B99F65;
    outline-width: 0;
}
.video {
  height: 600px;
  width: 1050px;
  text-align: center;
}
.tableTitle {
    
    position: relative;
    margin: 0 auto;
    width: 600px;
    height: 1px;
    background-color: #B99F65;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {
    
    position: absolute;
    left: 50%;
    background-color:transparent;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
}
div.placeHolder {

  padding-bottom: 100%;
}
div.container {
  max-width: 1100px;
  margin: 0 auto;
}
div.tips 
{
  font-size: 24px;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  background: hsla(0,0%,100%,.3);
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}


p {
  font-size: 26px;
    font-family: "botw";
}
p.text {
  font-weight: 700;
  margin-bottom: 0;
  font-family: 'Courier New', Courier, monospace;
}
.getPermission {
    font-family: "botw";
    cursor: pointer;
}
</style>