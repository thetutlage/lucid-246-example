'use strict'

/*
|--------------------------------------------------------------------------
| InitialSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Party = use('App/Models/Party')
const User = use('App/Models/User')
const Team = use('App/Models/Team')
const Database = use('Database')

class InitialSeeder {
  async run () {
    /**
     * Create a party
     */
    const party = await Party.create({ name: 'draculas' })

    /**
     * Party has couple of products
     */
    await party.products().createMany([
      {
        name: 'iPhone',
        price: '199.99'
      },
      {
        name: 'iWatch',
        price: '129.99'
      }
    ])

    /**
     * Create a user and associate it with existing party
     */
    const user = await User.create({ email: 'foo@bar.com', password: 'secret' })
    await user.party().associate(party)

    /**
     * Create a team and associate it with existing party
     */
    const team = await Team.create({ name: 'geeks' })
    await team.party().associate(party)

    Database.close()
  }
}

module.exports = InitialSeeder
