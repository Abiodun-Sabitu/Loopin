<template>
  <div class="dashboard_wrapper">
    <SideBar />
    <MainContent />
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
<style>
.dashboard_wrapper {
  display: flex;
}
</style>
