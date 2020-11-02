
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    phone: String,
    password: String
  });
  return mongoose.model('user', UserSchema, 'user_list');
}