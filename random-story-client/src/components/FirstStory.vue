<template>
  <div class="first-story">
    <section class="content bgcolor-1 hide">
      <h2>Nomer Handphonemu <span>Cerita berdasarkan 3 digit terakhir nomer teleponmu.</span></h2>
      <img class="media-item__img display-block" src="../assets/img/smartphone.png">
      <div class="form-group">
        <label for="usr">Masukan Nomer HP mu!</label><br>
        <input type="text" class="form-control" onkeyup="validatePhone()" id="phoneNumber" value="12342313" />
      </div>
      <br>
      <div class="info" style="text-align:center;" id="phonePrompt"></div>
      <br>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
        <defs>
          <filter id="filter-goo-1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <button id="component-1" class="button button--1 display-block" onclick="validateForm()">
        Buat Cerita
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
      <div class="info submit-prompt" id="submitPrompt"></div>
      <p class="content-story  hide title" id="yourPhoneNumber"></p>
      <div id="storyPhoneNumberWrapper" class="hide">
        <p class="content-story" id="storyHariIni"></p>
        <p class="content-story" id="storyPhoneNumber"></p>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
          <defs>
            <filter id="filter-goo-2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <button id="component-2" class="button button--2 display-block next" style="filter: url('#filter-goo-2')" onclick="jsShow('cerita2')">
          Lanjutkan Cerita
          <span class="button__bg"></span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'first-story',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .first-story {
    text-align: center;
  }
</style>
