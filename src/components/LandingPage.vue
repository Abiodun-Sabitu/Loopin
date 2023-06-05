<template>
  <div class="main_container">
    <main class="outline">
      <section class="outline left_section">
        <Logo />
      </section>
      <section class="right_section">
        <HeroImage />
      </section>
    </main>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import HeroImage from "./HeroImage.vue";
export default {
  name: "Landing Page",
  data() {
    return {};
  },
  components: {
    HeroImage,
    Logo,
  },
};
</script>
<style scoped>
.outline {
  outline: 1px solid grey;
}

main {
  display: flex;
}

.left_section {
  width: 40%;
}
.right_section {
  width: 60%;
}
.main_container {
  /* background-color: rgb(225, 229, 242); */
  background-color: #03045e;
}

@media screen and (max-width: 768px) {
  .left_section {
    position: relative;
    z-index: 1;
    background-color: teal;
    min-width: 60%;
  }
  .right_section {
    position: absolute;
    z-index: 0;
    float: right;
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  .left_section {
    position: relative;
    z-index: 1;
    background-color: teal;
    width: 70%;
    min-width: 100%;
  }
}
/* @media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
} */
</style>
