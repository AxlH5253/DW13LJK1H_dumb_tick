'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_events', [
      {
        title: 'Concert RAN',
        categoryId:1,
        description:'adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.',
        price:30000,
        img:'https://upload.wikimedia.org/wikipedia/it/f/f1/Ran_Mori.png',
        userId:1,
        address:'Corner',
        urlMaps:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.517914737178!2d124.82385911444932!3d1.4628920616100616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328774f0f340cfe1%3A0xffe34b851a96a31e!2sCorner%20Club!5e0!3m2!1sid!2sid!4v1577500841153!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        startAt:'2019-12-31 17:00:00',
        endAt:'2019-12-31 23:00:00'
      },
      {
        title: 'Meet and Greet Manchester United',
        categoryId:2,
        description:'adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.',
        price:100,
        img:'https://i.ytimg.com/vi/nxViD5k-fo8/maxresdefault.jpg',
        userId:3,
        address:'Corner',
        urlMaps:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.517914737178!2d124.82385911444932!3d1.4628920616100616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328774f0f340cfe1%3A0xffe34b851a96a31e!2sCorner%20Club!5e0!3m2!1sid!2sid!4v1577500841153!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        startAt:'2019-12-28 23:00:00',
        endAt:'2019-12-28 02:00:00'
      },
      { 
        title: 'Sirkus Lalat',
        categoryId:5,
        description:'adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.',
        price:1000,
        img:'http://3.bp.blogspot.com/-EO9Sj1Kq5YM/UMv09bQF72I/AAAAAAAAGh8/2UDlHk2eI7A/s1600/Lalat+3.jpg',
        userId:2,
        address:'R2 Cofee',
        urlMaps:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31908.142633778494!2d124.80853809103581!3d1.462940163432798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328775304bab86c5%3A0x9c8ab36edb69893a!2sHaHa%20Billiard%20%26%20Bar%20(R2)!5e0!3m2!1sid!2sid!4v1577501831921!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        startAt:'2019-12-28 23:00:00',
        endAt:'2019-12-31 02:00:00'
      
      },
      {
        title: 'Perang Bintang',
        categoryId:3,
        description:'adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.',
        price:1000,
        img:'https://cdn5.vectorstock.com/i/1000x1000/61/44/gladiator-cartoon-vector-6376144.jpg',
        userId:4,
        address:'Stadion Mandala Jayapura',
        urlMaps:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7971.844365070246!2d140.71411112297164!3d-2.532290774230919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686c5832f6f1466f%3A0xb7bf2fba915b0082!2sMandala%2C%20Jayapura%20Utara%2C%20Kota%20Jayapura%2C%20Papua!5e0!3m2!1sid!2sid!4v1577502106711!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        startAt:'2020-01-28 15:00:00',
        endAt:'2020-01-28 19:00:00'
      },
      {
        title: 'Stand Up Erniest Prakasa',
        categoryId:4,
        description:'adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf.',
        price:1000,
        img:'http://1.bp.blogspot.com/_Pea9haujtjQ/TKtYpI_bZdI/AAAAAAAAABM/iNAUHTUz75w/s1600/comedy+poster+done.jpg',
        userId:5,
        address:'Taman Kebangkitan Bangsa',
        urlMaps:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4648224762445!2d124.8386409144491!3d1.492458061517141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328775420c4ec5b7%3A0x776303a5087e823d!2sRB%20Boutiq!5e0!3m2!1sid!2sid!4v1577502224980!5m2!1sid!2sid" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        startAt:'2019-12-28 19:00:00',
        endAt:'2019-12-31 21:00:00'
      }
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
