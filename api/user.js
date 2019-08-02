let User = require('../models/user');

module.exports.userReg = function (req, res, next) {
  let uTime = new Date();
  let regUser = new User({
    user_name: req.body.user_name,
    user_pass: req.body.user_pass,
    user_update_time: uTime
  });
  regUser.save(function (err, context) {
    return err ? res.send({ status: 0, msg: err || '注册失败' }) : res.send({ status: 1, msg: "注册成功" });
  });
};

module.exports.userLogin = function (req, res, next) {
  let userName = req.body.user_name;
  let userPass = req.body.user_pass;
  User.findOne({ user_name: userName }, function (err, context) {
    if (err) {
      return res.send({ status: 1, msg: err || '登录失败' });
    } else {
      let pass = context.user_pass;
      if (pass == userPass) {
        var userData = {
          user_name: context.user_name,
          user_pass: context.user_pass,
          user_update_time: context.user_update_time
        };
        return res.send({ status: 0, msg: userData });
      } else {
        return res.send({ status: 1, msg: "登录失败，密码错误" });
      }
    };
  });
};