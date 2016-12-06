<template>
  <div class="text--center">
    <br><br>
    <h1 class="giga">MicroFilm<div><small>Image Editing w/ CSS Filters &amp; Blend Modes</small></div></h1>
    <div class="blendmode">
      <select name="blendMode" id="blendMode" v-model="blendMode">
        <option value="">-- Blend Mode --</option>
        <option value="normal">Normal</option>
        <option value="multiply">Multiply</option>
        <option value="screen">Screen</option>
        <option value="overlay">Overlay</option>
        <option value="darken">Darken</option>
        <option value="lighten">Lighten</option>
        <option value="color-dodge">Color-dodge</option>
        <option value="saturation">Saturation</option>
        <option value="color">Color</option>
        <option value="luminosity">Luminosity</option>
      </select>
      <label for="backgroundColor"></label>
      <select name="backgroundColor" id="backgroundColor" v-model="backgroundColor">
        <option value="">-- Background-Color --</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="gray">Gray</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <br><br><br>
      <div>
        <div>
          <label for="blur">Blur</label>
          <input type="range" min="0" max="100" v-model="filterTypes.blur">
        </div>
        <div>
          <label for="contrast">Contrast</label>
          <input type="range" min="0" max="200" v-model="filterTypes.contrast">

          <label for="brightness">Brightness</label>
          <input type="range" min="0" max="200" v-model="filterTypes.brightness">
        </div>

        <label for="grayscale">Grayscale</label>
        <input type="range" min="0" max="100" v-model="filterTypes.grayscale">

        <label for="hueRotate">Hue-Rotate</label>
        <input type="range" min="0" max="359" v-model="filterTypes['hue-rotate']">

        <label for="invert">Invert</label>
        <input type="range" min="0" max="100" v-model="filterTypes.invert">

        <label for="opacity">Opacity</label>
        <input type="range" min="0" max="100" v-model="filterTypes.opacity">

        <label for="saturate">Saturate</label>
        <input type="range" min="0" max="200" v-model="filterTypes.saturate">

        <label for="sepia">Sepia</label>
        <input type="range" min="0" max="100" v-model="filterTypes.sepia">
      </div>
    </div>
    <div>
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/atx.jpg)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/bike.jpg)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/black.png)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/cacti.jpg)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/gray.png)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/lakegeneva.jpg)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; background-image: url(imgs/tahoe.jpg)" alt="">
      <img :class="[blendMode, backgroundColor]" :style="filters" style="width: 300px; height: 300px; background-size: 300px 300px; box-sizing: border-box; border: 1px #ccc solid; background-image: url(imgs/white.png)" alt="">
    </div>
    <br><br><br>
    <p>Refresh Page to Reset ;P</p>
    <br><br><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blendMode: "",
        backgroundColor: "",
        filterTypes: {
          "blur": 0,
          "contrast": 100,
          "brightness": 100,
          "grayscale": 0,
          "hue-rotate": 0,
          "invert": 0,
          "opacity": 100,
          "saturate": 100,
          "sepia": 0,
          // "drop-shadow": 0,
        }
      }
    },
    computed: {
      filters: function() {
        var f = "filter:";
          f += (this.filterTypes['blur'] > 0) ? " blur(" + this.filterTypes['blur'] + "px)" : " blur(0px)";
          f += (this.filterTypes['contrast'] > 0) ? " contrast(" + this.filterTypes['contrast'] + "%)" : " contrast(0%)";
          f += (this.filterTypes['brightness'] > 0) ? " brightness(" + this.filterTypes['brightness'] + "%)" : " brightness(0%)";
          // f += (this.filterTypes['drop-shadow'] > 0) ? " drop-shadow(" + this.filterTypes['drop-shadow'] + "%)" : " drop-shadow(0%)";
          f += (this.filterTypes['grayscale'] > 0) ? " grayscale(" + this.filterTypes['grayscale'] + "%)" : " grayscale(0%)";
          f += (this.filterTypes['hue-rotate'] > 0) ? " hue-rotate(" + this.filterTypes['hue-rotate'] + "deg)" : " hue-rotate(0deg)";
          f += (this.filterTypes['invert'] > 0) ? " invert(" + this.filterTypes['invert'] + "%)" : " invert(0%)";
          f += (this.filterTypes['opacity'] > 0) ? " opacity(" + this.filterTypes['opacity'] + "%)" : " opacity(0%)";
          f += (this.filterTypes['saturate'] > 0) ? " saturate(" + this.filterTypes['saturate'] + "%)" : " saturate(0%)";
          f += (this.filterTypes['sepia'] > 0) ? " sepia(" + this.filterTypes['sepia'] + "%)" : " sepia(0%)";
        return f + ";";
      }
    }
  }
</script>
