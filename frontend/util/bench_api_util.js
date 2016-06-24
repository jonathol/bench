const BenchApiUtil = {
  fetchAllBenches: function(callback) {
    $.ajax({
      url: "/api/benches",
      method: "GET",      
      success: function(response) {
        callback(response);
      }
    });
  }
};

module.exports = BenchApiUtil;
