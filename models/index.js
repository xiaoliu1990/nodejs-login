let mongoose = require('mongoose');
let vuetest = 'mongodb://localhost:27017/vuetest'
mongoose.connect(vuetest, function (err) {
  err ? console.log('connect fail') : console.log('connect success');
});
module.exports = mongoose;