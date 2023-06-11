<template>
  <Rider
    ><template v-slot:OTP><h4>2 Factor Authentication</h4></template></Rider
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
      <el-input v-model="otpData.otp" placeholder="Enter OTP">
        <template #append>
          <el-button @click="GetOTP" type="primary" id="get_OTP"
            >Get OTP</el-button
          >
        </template>
      </el-input>
      <el-form-item-error v-if="errors.otp">{{
        errors.otp[0]
      }}</el-form-item-error>
    </el-form-item>
    <p id="resend_otp">Resend OTP</p>
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

    GetOTP() {
      // Simulate sending OTP
      // Replace this with your actual logic to send OTP to the user's email
      // Example:
      // - Generate OTP
      // - Send OTP via email or SMS
      // - Handle success and error cases
      console.log("OTP sent");
    },
  },
};
</script>

<style scoped>
#get_OTP {
  background-color: #191b80 !important;
  /* margin-top: 15px; */
  border: none !important;
  color: white;
}

#get_OTP:hover {
  background-color: #1f21a2 !important;
  /* margin-top: 15px; */
  border: none !important;
  color: white;
}

p {
  margin: 5px 0;
  font-size: 0.9rem;
  cursor: pointer;
  color: #03045e;
}
</style>
