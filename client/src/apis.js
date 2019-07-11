import axios from "axios";

export default {
  getChecks: function() {
      return axios.get('/api/checks');
  },
  newCheck: function(check) {
      return axios.post('/api/checks', check);
  }
};
