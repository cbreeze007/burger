var orm = require("./config/orm.js");




// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burger;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burger: data });
  });
});

module.exports = burger.js;
