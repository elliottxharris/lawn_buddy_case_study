import Vue from "vue";
import Vuex from "vuex";
const employees = require("../assets/employee_data.json");
const companies = require("../assets/company_data.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: employees,
    companies: companies,
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
    getCompanies(state) {
      return state.companies;
    },
  },
  mutations: {
    addEmployee(state, payload) {
      state.employees.push(payload);
    },
  },
});
