let mongoose = require("./index");
let Schema=mongoose.Schema;
let vue_user = new Schema({
  user_name:{type:String},
  user_pass:{type:String},
  user_update_time:{type:String}
});
module.exports=mongoose.model('vue_users',vue_user);