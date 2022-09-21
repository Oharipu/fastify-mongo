const mongoose = require('mongoose');
const { Schema } = mongoose;

const cssSchema = new Schema({
  cssType: { type: String, require: true}
  styles: Schema.Types.Mixed,
});

const Css = mongoose.model('user', cssSchema);

module.exports = Css;
