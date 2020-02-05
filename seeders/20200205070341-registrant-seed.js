'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registrants', [
      {
        regisId: 'feb-'+ (new Date().getMilliseconds()+1),
        name: 'ahmad',
        nim: 'A11.2017.10001',
        email: 'ahmad@email.com',
        phone: '085842388761',
        institute: 'DOSCOM',
        socmed: '@ahmad',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regisId: 'feb-'+(new Date().getMilliseconds()+2),
        name: 'mahmud',
        nim: 'A11.2017.10002',
        email: 'mahmud@email.com',
        phone: '085842388762',
        institute: 'DOSCOM',
        socmed: '@mahmud',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regisId: 'feb-'+(new Date().getMilliseconds()+3),
        name: 'wahyu',
        nim: 'A11.2017.10002',
        email: 'wahyu@email.com',
        phone: '085842388763',
        institute: 'DOSCOM',
        socmed: '@wahyu',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
