<template>
  <div>
    <div class="office"></div>
  </div>
</template>
<script>
export default {
  name: "Hero Image",
};
</script>
<style scoped>
.office {
  background: url(https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  overflow-x: hidden;

  /* @media screen and (max-width: 480px) {
    background-size: contain;
    background-position: bottom center;
    opacity: 0.8;
  } */
}
</style>
