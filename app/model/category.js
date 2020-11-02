
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CategorySchema = new Schema();
  return mongoose.model('category', CategorySchema, 'application_category_list');
}