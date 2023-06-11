<template>
  <div class="main_container">
    <main>
      <section class="left_section">
        <Logo />
        <div class="entry_point_forms">
          <router-view></router-view>
        </div>
      </section>
      <section class="right_section">
        <HeroImage />
      </section>
    </main>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import HeroImage from "../components/onboarding/HeroImage.vue";
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
:deep(.el-form-item__label) {
  color: #03045e !important;
}

.entry_point_forms {
  margin-inline: 30px;
  /* outline: 1px solid yellow; */
  padding: 25px;
  background-color: white;
  margin-top: 15%;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  background-color: white;
}

@media screen and (max-width: 768px) {
  .left_section {
    position: relative;
    z-index: 1;
    /* background-color: teal; */
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
    /* background-color: teal; */
    width: 70%;
    min-width: 100%;
  }
  .entry_point_forms {
    margin-top: 30%;
  }
}
/* @media screen and (max-width: 767px) {
}
@media screen and (max-width: 480px) {
} */
</style>
