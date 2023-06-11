<template>
  <Rider v-slot:default><h4>Loopin to Start Your Digital Onboarding</h4></Rider>
  <el-form
    ref="myForm"
    :model="formData"
    :rules="formRules"
    label-position="top"
    size="large"
  >
    <el-form-item label="Email" prop="email" :error="formErrors.email">
      <el-input
        v-model="formData.email"
        placeholder="John.Doe@GigglePay.com"
      ></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password" :error="formErrors.password">
      <el-input
        v-model="formData.password"
        type="password"
        placeholder="*********"
      ></el-input>
    </el-form-item>
    <router-link :to="{ name: 'ResetPassword' }">
      <span class="forgot_pswd">Forgot Password?</span></router-link
    >
    <el-form-item>
      <!-- @click="validateForm" -->
      <el-button type="primary" class="m-4">Login</el-button>
    </el-form-item>
    <router-link class="switcher" to="/create-account"
      >New Employee? <span>Create Account Here</span></router-link
    >
    <p @click="navigateToDashboard">login</p>
  </el-form>
</template>
<script>
export default {
  name: "login-form",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      formRules: {
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please enter a valid email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters long",
            trigger: "blur",
          },
        ],
      },
      formErrors: {},
    };
  },
  methods: {
    validateForm() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          // Form is valid, perform actions like submitting the form
        } else {
          // Form is invalid, handle the errors
        }
      });
    },
    navigateToDashboard() {
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped></style>
