'use strict'

const Model = use('Model')

class Team extends Model {
  products () {
    return this.manyThrough('App/Models/Party', 'products', 'party_id', 'id')
  }

  party () {
    return this.belongsTo('App/Models/Party')
  }
}

module.exports = Team
