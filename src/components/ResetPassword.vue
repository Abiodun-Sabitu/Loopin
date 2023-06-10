<template>
  <Rider
    ><template v-slot:ResetPassword><h4>Reset Password</h4></template></Rider
  >
  <el-form
    ref="resetForm"
    :model="resetData"
    label-position="top"
    :rules="rules"
    size="large"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="resetData.email" type="email"></el-input>
    </el-form-item>
    <el-form-item label="New Password" prop="password">
      <el-input v-model="resetData.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="Confirm Password" prop="confirmPassword">
      <el-input v-model="resetData.confirmPassword" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Reset Password</el-button>
    </el-form-item>
    <div class="go_back">Go back to Login</div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      resetData: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please enter a valid email",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your new password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "Please confirm your password",
            trigger: "blur",
          },
          { validator: this.validatePassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          // Perform reset password logic here
          // You can access the form data via this.resetData object
          // Example: console.log(this.resetData);
        } else {
          console.log("Form validation failed.");
        }
      });
    },
    validatePassword(rule, value, callback) {
      if (value !== this.resetData.password) {
        callback(new Error("Passwords do not match"));
      } else {
        callback();
      }
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

.switcher {
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
  color: #03045e;
}

.go_back {
  text-align: end;
  font-size: 0.9rem;
  cursor: pointer;
  color: #03045e;
}
</style>
