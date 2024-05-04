/* @project_name : Masky-Md
   * @author : Masky bot info 
   * @youtube : https://www.youtube.com/@Maskybot01
   * @description : Masky-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Masky Tech Info.
   * © 2024 Masky-Md.
⛥┌┤
 */

  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"Suhail_Md"},
  data : { type: Object, default: {} } });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
