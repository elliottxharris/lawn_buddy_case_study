<template>
  <b-container>
    <h1>Employees</h1>
    <EmployeeBox
      :employee="employee"
      v-for="employee in this.$store.getters.getEmployees"
      :key="employee.id"
    ></EmployeeBox>
  </b-container>
</template>

<script>
import EmployeeBox from "../components/EmployeeBox.vue";
export default {
  name: "EmployeeView",
  methods: {
    rowClicked(record, index) {
      console.log(record);
      console.log(index);
    },
  },
  data() {
    return {};
  },
  components: {
    EmployeeBox,
  },
};
</script>
