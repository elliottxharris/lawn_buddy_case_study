<template>
  <div class="box">
    <b-row>
      <b-col> {{ employee.last_name }}, {{ employee.first_name }} </b-col>
      <b-col> {{ employee.email }} </b-col>
    </b-row>

    <b-row>
      <b-col> {{ companyName }} </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    employee: Object,
  },
  data() {
    return {
      companyName: null,
    };
  },
  created() {
    this.companyName = this.$store.getters.getCompanies.find(
      (e) => e.id == this.employee.company_id
    ).company_name;
  },
};
</script>

<style scoped>
.box {
  width: 12rem;
  height: 12rem;
  border-style: solid;
  border-radius: 8px;
  border-color: black;
}
</style>
