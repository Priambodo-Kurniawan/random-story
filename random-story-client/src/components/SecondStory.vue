<template>
  <div class="second-story">
    <section class="content bgcolor-3 hide" id="cerita2">
      <h2>Data Dirimu <span>Cerita berdasarkan data dirimu.</span></h2>
      <img class="media-item__img display-block" src="../assets/img/notepad.png">
      <span class="input input--nao display-block" onkeyup="validateNama()">
        <input class="input__field input__field--nao" type="text" id="Nama" />
        <label class="input__label input__label--nao" for="Nama">
          <span class="input__label-content input__label-content--nao">Tuliskan Namamu.</span>
        </label>
        <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
      </span>
      <div class="info" id="namaPrompt"></div>
      <span class="input input--nao small-input" onkeyup="validateTanggalLahir()" >
        <input class="input__field input__field--nao" type="text" id="TanggalLahir" />
        <label class="input__label input__label--nao" for="TanggalLahir">
          <span class="input__label-content input__label-content--nao">Tgl Lahir</span>
        </label>
        <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
        <div class="info small-info" id="tglPrompt"></div>
      </span>
      <span class="input input--nao small-input" onkeyup="validateBulanLahir()" >
        <input class="input__field input__field--nao" type="text" id="BulanLahir" />
        <label class="input__label input__label--nao" for="BulanLahir">
          <span class="input__label-content input__label-content--nao">Bln Lahir</span>
        </label>
        <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
        <div class="info small-info" id="blnPrompt"></div>
      </span>
      <span class="input input--nao small-input"  onkeyup="validateTahunLahir()">
        <input class="input__field input__field--nao" type="text" id="TahunLahir" />
        <label class="input__label input__label--nao" for="TahunLahir">
          <span class="input__label-content input__label-content--nao">Thn Lahir</span>
        </label>
        <svg class="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
        <div class="info small-info" id="thnPrompt"></div>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-filters">
        <defs>
          <filter id="filter-goo-3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <button id="component-3" onclick="validateForm2(month)" class="button button--2 button--3 display-block" style="filter: url('#filter-goo-3')">
        Buat Cerita
        <span class="button__bg"></span>
      </button>
      <div class="info submit-prompt" id="submitPrompt2"></div>
      <div id="storyDateWrapper" class="hide">
        <p class="content-story" id="storySaya"></p>
        <p class="content-story" id="storyKemarin"></p>
        <p class="content-story" id="penutup"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'second-story',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .second-story {
    text-align: center;
  }
</style>
