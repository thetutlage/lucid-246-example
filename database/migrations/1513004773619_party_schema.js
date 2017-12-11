'use strict'

const Schema = use('Schema')

class PartySchema extends Schema {
  up () {
    this.create('parties', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('parties')
  }
}

module.exports = PartySchema
