

const mongoose = require('./../database');
const Schema = mongoose.Schema;

const knightSchema = new Schema({  
    name: String,
    nickname: String,
    birthday: Date,
    keyAttribute: String,
    removed: Boolean,
    attributes:{
        strength: Number, dexterity: Number, 
        constitution: Number, intelligence: Number, 
        wisdom: Number, charisma: Number, equipped: Boolean
    },
    weapons: [{name: String, mod: Number, attr: String, equipped: Boolean}]

  });

  const knight = mongoose.model('Knight', knightSchema);
  module.exports = knight;