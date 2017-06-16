<template>
  <div class="rules">
    <section id="aturan">
      <div class="content bgcolor-4">
        <div class="container">
          <a href="#" class="close-btn" onclick="removeClass('aturan')">×</a>
          <h1 class="title-variabel">Cara Main</h1>
          <p class="cara-main">Masukan input-input yang ada sesuai dengan data-datamu. Angka terakhir dari input tersebut akan tampil sesuai dengan variabel yang sudah ditentukan di bawah.</p>
          <h3 class="title-variabel">Variabel Pertama</h3>
          <p id="variabel1" class="cara-main"></p>
          <h3 class="title-variabel">Variabel Kedua</h3>
          <p id="variabel2" class="cara-main"></p>
          <h3 class="title-variabel">Variabel Ketiga</h3>
          <p id="variabel3" class="cara-main"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'rules',
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
