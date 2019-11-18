

const mongoose = require('./../database');
const Schema = mongoose.Schema;

const pessoaSchema = new Schema({  
    nome: String   
  });

  const pessoa = mongoose.model('Pessoa', pessoaSchema);
  module.exports = pessoa;