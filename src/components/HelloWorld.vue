<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"></ThreadList>
  </div>
</template>

<script>
import sourceData from '@/data'
import ThreadList from './ThreadList'

export default {
  name: 'HelloWorld',
  components: {
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      user: sourceData.users
    }
  },
  created () {
    console.log(sourceData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
