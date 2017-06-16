<template>
  <div class="main-page">
    <HeaderStory />
    <Intro />
    <FirstStory />
    <SecondStory />
    <Rules />
    <FooterStory />
  </div>
</template>

<script>
import HeaderStory from './HeaderStory'
import Intro from './Intro'
import FirstStory from './FirstStory'
import SecondStory from './SecondStory'
import Rules from './Rules'
import FooterStory from './FooterStory'
export default {
  components: {
    HeaderStory,
    FirstStory,
    Intro,
    SecondStory,
    Rules,
    FooterStory
  },
  name: 'main-page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
