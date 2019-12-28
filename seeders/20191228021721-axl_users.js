'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tbl_users', [
        {
          username: 'axlh',
          email:'axl@gmail.com',
          password:'12345678',
          phonrNumber:'089999',
          img:'https://i.mmo.cm/is/image/mmoimg/bigview/john-doe-foam-latex-mask--mw-117345-1.jpg'
        },
        {
          username: 'john doe',
          email:'johndoe@gmail.com',
          password:'12345678',
          phonrNumber:'089999',
          img:'https://i.mmo.cm/is/image/mmoimg/bigview/john-doe-foam-latex-mask--mw-117345-1.jpg'
        },
        {
          username: 'satrio suka mantap2',
          email:'satrio@gmail.com',
          password:'12345678',
          phonrNumber:'089999',
          img:'https://i.mmo.cm/is/image/mmoimg/bigview/john-doe-foam-latex-mask--mw-117345-1.jpg'
        },
        {
          username: 'rahmat',
          email:'rahmat@gmail.com',
          password:'12345678',
          phonrNumber:'089999',
          img:'https://upload.wikimedia.org/wikipedia/commons/1/1f/Detroit%2C_Michigan_Jane_Doe_facial_reconstruction.jpg'
        },
        {
          username: 'bastian',
          email:'bastian@gmail.com',
          password:'12345678',
          phonrNumber:'089999',
          img:'https://upload.wikimedia.org/wikipedia/commons/1/1f/Detroit%2C_Michigan_Jane_Doe_facial_reconstruction.jpg'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_users', null, {});
  }
};
