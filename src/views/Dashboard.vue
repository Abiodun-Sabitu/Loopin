<template>
  <div>
    <SideBar class="sidebar" id="sidebar" />
    <MainContent id="main" />
  </div>
</template>
<script>
import MainContent from "@/components/dashboard/MainContent.vue";
import SideBar from "@/components/dashboard/SideBar.vue";
export default {
  name: "Dashboard",
  components: {
    MainContent,
    SideBar,
  },
};
</script>
<style scoped></style>
