<template>
  <div>
    <h2 class="logo_style">
      <router-link to="/login"
        ><img src="../assets/images/logo.png" alt="" />LoopIn</router-link
      >
    </h2>
  </div>
</template>
<script>
export default {
  name: "Logo",
};
</script>
<style scoped>
.logo_style {
  color: #03045e;
  margin: 5px 0px 0px 30px;
}

a {
  color: #03045e;
}

.logo_style img {
  width: 30px;
  height: 30px;
  margin-top: 22px;
}
</style>
