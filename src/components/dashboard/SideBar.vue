<template>
  <aside>
    <img src="@\assets\images\logo2.png" alt="logo" class="dashboard_logo" />
  </aside>
</template>
<script>
export default {
  name: "Sidebar",
  components: {},
};
</script>
<style scoped>
aside {
  transition: 1.3s;
  width: 238px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  /* padding: 12px 18px; */
  background: linear-gradient(
    165.88deg,
    rgba(241, 237, 228, 0.172549) 3.64%,
    rgba(236, 219, 184, 0.343948) 62.99%,
    #da940e 63%
  );
}

.dashboard_logo {
  width: 100px;
  margin: 13px 0px 30px 10px;
}

@media screen and (max-width: 768px) {
  aside {
    transition: 1.3s;
    width: 0;
    overflow-x: hidden;
  }

  /* .toggler {
    transition: 1.3s;
    width: 0;
    overflow-x: hidden;
  } */
}
</style>
