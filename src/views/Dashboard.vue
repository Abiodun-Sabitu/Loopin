<template>
  <div>
    <SideBar />
    <MainContent />
    <DashboardHeader />
  </div>
</template>
<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader.vue";
import MainContent from "@/components/dashboard/MainContent.vue";
import SideBar from "@/components/dashboard/SideBar.vue";
export default {
  name: "Dashboard",
  components: {
    DashboardHeader,
    MainContent,
    SideBar,
  },
};
</script>
<style></style>
