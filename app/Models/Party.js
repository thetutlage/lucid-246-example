'use strict'

const Model = use('Model')

class Party extends Model {
  products () {
    return this.hasMany('App/Models/Product')
  }
}

module.exports = Party
