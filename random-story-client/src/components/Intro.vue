<template>
  <div class="intro-story">
    <section class="content bgcolor-1">
      <div class="container">
        <h2>Selamat Datang <span>Ini adalah random world. Perkenalkan dirimu!</span></h2>
        <div class="welcome-message">
          <img class="media-item__img display-block" src="../assets/img/farmer.png">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="form-group">
                <label for="usr">Namamu?</label><br>
                <input type="text" class="form-control" id="nama" placeholder="Masukan namamu" ref="nama" />
              </div>
              <div class="form-group">
                <label for="usr">Asalmu?</label><br>
                <input type="text" class="form-control" id="asal" placeholder="Tempat Kerja / Kuliah / Sekolah" ref="asal" />
              </div>
              <div class="form-group">
                <label for="usr">Hobimu?</label><br>
                <input type="text" class="form-control" id="hobi" placeholder="Masukan hobimu" ref="hobi" />
              </div>
            </div>
          </div>
          <br>
          <div class="info" style="text-align:center;" id="phonePrompt"></div>
          <br>
          <button id="component-1" class="button button--1 display-block" @click="postData">
            Masuk
            <span class="button__container">
              <span class="circle top-left"></span>
              <span class="circle top-left"></span>
              <span class="circle top-left"></span>
              <span class="button__bg"></span>
              <span class="circle bottom-right"></span>
              <span class="circle bottom-right"></span>
              <span class="circle bottom-right"></span>
            </span>
          </button>
        </div>
      </div>
      <Loader id="loader" v-if="isLoading"/>
      <div v-if="!isLoading && user !== null">
        <div class="img-circle avatar">
          <img :src="imageAvatar" v-if="imageAvatar !== null" class="img-responsive img-circle">
        </div>
        <div class="">
          <h3><strong>Welcome {{user.nama}}</strong></h3>
          <span><small>this is your random profile picture</small></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loader from './Loader'
export default {
  components: {
    Loader
  },
  name: 'intro-story',
  data () {
    return {
      user: null,
      imageAvatar: null,
      isLoading: false
    }
  },
  firebase () {
    return {
      users: {
        asObject: true,
        source: this.$db.child('users')
      }
    }
  },
  methods: {
    postData () {
      $('.welcome-message').fadeOut()

      let data = {}
      data.nama = this.$refs.nama.value
      data.asal = this.$refs.asal.value
      data.hobi = this.$refs.hobi.value

      let submitData = this.$db.child('users').push(data)
      var key = submitData.key;
      data.id = key
      this.$db.child('users').child(key).set(data, () => {
        this.isLoading = true
        let self = this
        this.user = data

        setTimeout(function(){
          self.imageAvatar = `https://robohash.org/${data.nama}`
          self.isLoading = false
        }, 3000)

        console.log('yeay', this.user);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .intro-story {
    text-align: center;
  }
  .avatar {
    width: 150px;
    margin: auto;
    background-color: #e2e2e2;
  }
  section.content.bgcolor-1 {
    min-height: 78vh;
  }
</style>
