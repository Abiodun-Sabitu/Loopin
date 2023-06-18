<template>
  <div class="main_content">
    <TheHeader />
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
  name: "Main Content",
  components: {
    TheHeader,
  },
};
</script>
<style>
.main_content {
  /* outline: 1px solid black; */
  margin-left: 240px;
  transition: 1.3s;
}

@media screen and (max-width: 768px) {
  .main_content {
    /* outline: 1px solid black; */
    margin-left: 0;
    transition: 1.3s;
  }
}
</style>
