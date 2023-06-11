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
  background: url(https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
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
