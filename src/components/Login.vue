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
      <el-input v-model="formData.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password" :error="formErrors.password">
      <el-input v-model="formData.password" type="password"></el-input>
    </el-form-item>
    <router-link :to="{ name: 'ResetPassword' }">
      <span class="forgot_pswd">Forgot Password?</span></router-link
    >
    <el-form-item>
      <el-button type="primary" @click="validateForm" class="m-4"
        >Login</el-button
      >
    </el-form-item>
    <router-link class="switcher" :to="{ name: 'CreateAccount' }"
      >New Employee? <span>Create Account Here</span></router-link
    >
  </el-form>
</template>
<script>
export default {
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
  },
};
</script>

<style scoped>
:deep(.el-form-item__label) {
  color: #03045e; /* Customize the label color here */
}

.el-button {
  /* background-color: #03045e; */
  background-color: #da940e;
  margin-top: 15px;
  border: none;
}

.el-button:hover {
  /* background-color: #03045e; */
  background-color: #ebab34;
  margin-top: 15px;
  border: none;
}

.forgot_pswd {
  float: right;
  font-size: 0.9rem;
  cursor: pointer;
  color: #03045e;
}
</style>
