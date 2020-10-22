
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const AccountSchema = new Schema();
  return mongoose.model('account', AccountSchema, 'account_list');
}