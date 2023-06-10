<template>
  <Rider
    ><template v-slot:OTP><h4>Authenticate OTP</h4></template></Rider
  >
  <el-form
    ref="otpForm"
    :model="otpData"
    label-position="top"
    label-width="120px"
    :rules="rules"
    size="large"
  >
    <el-form-item label="OTP" prop="otp" :error="errors.otp">
      <el-input
        v-model="otpData.otp"
        type="number"
        placeholder="Enter OTP"
      ></el-input>
      <el-form-item-error v-if="errors.otp">{{
        errors.otp[0]
      }}</el-form-item-error>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Validate OTP</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "OTP",
  data() {
    return {
      otpData: {
        otp: "",
      },
      rules: {
        otp: [
          {
            required: true,
            message: "OTP field cannot be empty please check your mail",
            trigger: "blur",
          },
        ],
      },
      errors: {},
    };
  },

  methods: {
    submitForm() {
      this.$refs.otpForm.validate((valid) => {
        if (valid) {
          // Form validation successful, perform OTP submission logic here
          console.log("OTP field is valid");
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
