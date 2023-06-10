<template>
  <Rider
    ><template v-slot:CreateAccount><h4>Create Account</h4></template></Rider
  >
  <el-form
    ref="signupForm"
    :model="formData"
    label-position="top"
    label-width="120px"
    :rules="rules"
    size="large"
  >
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="formData.email"
        placeholder="Enter your email"
      ></el-input>
      <el-form-item-error v-if="errors.email">{{
        errors.email[0]
      }}</el-form-item-error>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="formData.password"
        type="password"
        placeholder="Enter your password"
        autocomplete="off"
      ></el-input>
      <el-form-item-error v-if="errors.password">{{
        errors.password[0]
      }}</el-form-item-error>
    </el-form-item>
    <el-form-item label="Confirm Password" prop="confirmPassword">
      <el-input
        v-model="formData.confirmPassword"
        type="password"
        placeholder="Confirm your password"
      ></el-input>
      <el-form-item-error v-if="errors.confirmPassword">{{
        errors.confirmPassword[0]
      }}</el-form-item-error>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm"
        :disabled="!signupFormIsValid"
        >Create Account</el-button
      >
    </el-form-item>
    <div class="go_back">
      <router-link to="/login" class="switcher">Go back to Login</router-link>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "Sign Up-form",
  data() {
    return {
      formData: {
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
            message: "Invalid email format",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Please create your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password should be at least 6 characters long",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "Please confirm your password",
            trigger: "blur",
          },
          { validator: this.validateConfirmPassword, trigger: "blur" },
        ],
      },
      errors: {},
    };
  },
  computed: {
    signupFormIsValid() {
      return Object.values(this.formData).every((value) => value !== "");
    },
  },
  methods: {
    validateConfirmPassword(rule, value, callback) {
      if (value !== this.formData.password) {
        callback(new Error("Passwords do not match"));
      } else {
        callback();
      }
    },
    submitForm() {
      this.$refs.signupForm.validate((valid) => {
        if (valid) {
          // Form validation successful, perform account creation logic here
          console.log("Account created successfully");
        } else {
          console.log("Form validation failed.");
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
</style>
