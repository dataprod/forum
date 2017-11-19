<template>
  <div>




  </div>
</template>

<script>
import sourceData from '@/data'

export default {
  name: 'HelloWorld',
  data () {
    return {
      ...sourceData
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
