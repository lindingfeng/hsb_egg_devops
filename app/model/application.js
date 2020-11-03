
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ApplicationSchema = new Schema({
    app_id: String,
    app_type: String,
    app_key: String,
    app_status: Number,
    app_name: String,
    amc_user: String,
    amc_pass: String,
    ftid: String,
    ft_tl: String,
    ft_te: String,
    push_cdn_type: Number,
    cdn_upload_dir: String,
    test_flag: Number,
    gray_publish_flag: Number,
    rolling_flag: Number,
    tinify_key: String,
    uid: String,
    create_user: String,
    create_time: String,
    dingTalk_url: String,
    third_key: String,
    third_desc: String,
    build_command: String
  });
  return mongoose.model('application', ApplicationSchema, 'application_list');
}