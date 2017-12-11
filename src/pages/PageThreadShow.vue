<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <post-list :posts="posts"></post-list>


  </div>
</template>

<script>
import PostList from '@/components/PostList'
import sourceData from '@/data'

export default {
  components: {
    PostList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: sourceData.threads[this.id]
    }
  },

  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts)
                   .filter(post => postIds.includes(post['.key']))
    }
  }
}
</script>

<style>
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
</style>
