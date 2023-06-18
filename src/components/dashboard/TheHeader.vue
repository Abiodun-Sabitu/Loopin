<template>
  <header>
    <div>
      <v-icon
        name="fa-bars"
        class="icon hamburger"
        scale="1.3"
        v-if="isSidebarClosed"
        @click="toggleSidebar"
      ></v-icon>
      <v-icon
        name="hi-solid-x"
        class="icon hamburger"
        scale="1.3"
        v-else
        @click="toggleSidebar"
      ></v-icon>
    </div>
    <div class="right_items">
      <el-badge :value="3" class="item bell"
        ><v-icon
          name="fa-bell"
          class="fa-solid fa-bell icon"
        ></v-icon> </el-badge
      ><el-avatar class="icon"> user </el-avatar>
    </div>
  </header>
</template>
<script>
export default {
  name: "Dashboard Header",
  data() {
    return {
      isSidebarClosed: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
      this.$emit("toggle-sidebar", this.isSidebarClosed);
    },
  },
};
</script>
<style scoped>
header {
  padding: 12px 19px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: #f1ede42c;
  display: flex;
  justify-content: space-between;
}
.hamburger {
  margin-top: 10px;
}

.bell {
  margin-top: 10px;
}

.right_items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.el-avatar--circle {
  margin-top: 3px;
}
</style>
