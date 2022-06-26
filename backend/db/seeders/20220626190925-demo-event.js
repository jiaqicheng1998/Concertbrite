'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        title: "Just Me ( )I-DLE by (G)I-DLE",
        description: "Just Me ()I-DLE is the first offcial world tour by South Korean girl group (G)I-DLE. This is the group's second attempt at touring as I-LAND was previously canceled due to the COVID-19 pandemic.",
        img_url: "https://media.allure.com/photos/625cbce5cb478756af23433f/master/pass/gidle%20tomboy%20cover%20photo%20final.jpg",
        location: "Warfield, San Francisco, CA",
        user_id: 1,
        time: '2022-07-24'
      },
      {
        title:"LUXURY DISEASE TOUR by One Ok Rock",
        description:"On October 21, 2021, One Ok Rock released the documentary, Flip a Coin, on Netflix, their first to be hosted by them.[151] The next day, on October 22, the band released the single, 'Wonder' through Fueled By Ramen.[152] On June 21, 2022, it was announced that they will release a new single 'Save Yourself' on June 24 along with the music video.[153] One Ok Rock announced their new album 'Luxury Disease' will be available September 9th 2022[154]",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/b/bd/ONE_OK_ROCK_w_Polsce.jpg",
        location:"Fox Theater Oakland, Oakland, CA",
        user_id: 1,
        time:"2022-10-19"
      },
      {
        title:"THE ICE TOUR by Twenty One Pilots",
        description:"Scaled and Icy is the sixth studio album by American musical duo Twenty One Pilots.[1] The album was released on May 21, 2021, through Fueled by Ramen and Elektra.[2][3] The album's title is a play on 'scaled back and isolated', a phrase frontman Tyler Joseph associated with music produced during the COVID-19 pandemic, though the phrase is also an anagram of 'Clancy is dead', a reference to the protagonist of their previous album, Trench.",
        img_url:"https://upload.wikimedia.org/wikipedia/en/5/52/Twenty_One_Pilots_-_Scaled_and_Icy.png",
        location:"Chase Center, San Francisco, CA",
        user_id: 2,
        time:"2022-09-18"
      },
      {
        title:"San Francisco Symphony - Chamber Music",
        description:"The San Francisco Symphony (SFS), founded in 1911,[1] is an American orchestra based in San Francisco, California. Since 1980 the orchestra has been resident at the Louise M. Davies Symphony Hall in the city's Hayes Valley neighborhood. ",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/3/3c/DaviesHallInteriorPanoCropped.jpg",
        location:"Davies Symphony Hall, San Francisco, CA",
        user_id: 2,
        time:"2022-07-16"
      },
      {
        title:"World's Hottest Tour by Bad Bunny",
        description:"Benito Antonio Martínez Ocasio (born March 10, 1994), known professionally as Bad Bunny, is a Puerto Rican rapper and singer. His music is often defined as Latin trap and reggaeton,[3] but he has incorporated various other genres into his music, including rock, bachata, and soul. ",
        img_url:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/01/25/16430725850492.jpg",
        location:"RingCentral Coliseum, Oakland, CA",
        user_id: 3,
        time:"2022-09-14"
      },
      {
        title:"Love on Tour by Harry Styles",
        description:"Love On Tour is the second concert tour by English singer-songwriter Harry Styles, in support of his second studio album, Fine Line. ",
        img_url:"https://static.stereogum.com/uploads/2019/11/Love-on-Tour-Poster-2-1573655935-scaled.jpg",
        location:"Madison Square Garden, New York, NY",
        user_id: 1,
        time:"2022-08-20"
      },
      {
        title:"Weekends With Adele",
        description:"Weekends with Adele is the first residency show by Adele in support of her fourth studio album, 30.",
        img_url:"https://mma.prnewswire.com/media/1699194/CAESARS_Adele.jpg",
        location:"Hyde Park, London, GB",
        user_id: 2,
        time:"2022-07-20"
      },
      {
        title:"All-American Road Show by Chris Stapleton",
        description:"Christopher Alvin Stapleton[1][2] (born April 15, 1978) is an American singer-songwriter,[3][4] guitarist,[5] and record producer.[6] He was born in Lexington, Kentucky, and grew up in Staffordsville, Kentucky. ",
        img_url:"https://upload.wikimedia.org/wikipedia/commons/9/9d/2022_Gershwin_Prize_for_Popular_Song_%2851929239752%29.jpg",
        location:"Brandon Amphitheater, Brandon, MS",
        user_id: 1,
        time:"2022-07-16"
      },
      {
        title:"La Ultima Vuelta Tour by Daddy Yankee",
        description:"The next Daddy Yankee Oakland show will take place at Oakland Arena. Fans of Rap/Hip Hop and all music fans across the Oakland area might enjoy being in the crowd at Oakland Arena for the Daddy Yankee show.",
        img_url:"https://www.bctv.org/wp-content/uploads/2022/04/daddy-yankee-santander.jpg",
        location:"Oakland Arena, Oakland, CA",
        user_id: 1,
        time:"2022-08-02"
      },
      {
        title:"MANIAC by Stray Kids",
        description:"The next Stray Kids Oakland show will take place at Oakland Arena. Fans of K-pop and all music fans across the Oakland area might enjoy being in the crowd at Oakland Arena for the Stray Kids concert.",
        img_url:"https://s1.ticketm.net/dam/a/163/979bcdb3-888c-4c7e-ba52-5bce87c30163_1666851_SOURCE.jpg",
        location:"Oakland Arena, Oakland, CA",
        user_id: 2,
        time:"2022-07-12"
      },
      {
        title:"ALL 4 NOTHING by Lauv",
        description:"The next Lauv Berkeley show will take place at Greek Theatre - Berkeley. Fans of Pop and all music fans across the Berkeley area might enjoy being in the crowd at Greek Theatre - Berkeley for the Lauv show.",
        img_url:"https://zumic.com/wp-content/uploads/lauv-2022-usa-tour-dates-tickets-info.jpg",
        location:"Greek Theatre - Berkeley, Berkeley, CA",
        user_id: 1,
        time:"2022-09-15"
      },
      {
        title:"Chromatica Ball Tour by Lady Gaga",
        description:"The next Lady Gaga San Francisco show will take place at Oracle Park. Fans of Pop and all music fans across the San Francisco area might enjoy being in the crowd at Oracle Park for the Lady Gaga show.",
        img_url:"https://www.livenationentertainment.com/wp-content/uploads/2022/03/TR_NationalAsset_LADYGAGA_SG_1200x628.jpg",
        location:"Oracle Park, San Francisco, CA",
        user_id: 2,
        time:"2022-09-08"
      },
      {
        title:"WORLD TOUR 2022 by Maroon 5",
        description:"The next Maroon 5 Green Bay show will take place at Resch Center. Fans of Pop and all music fans across the Green Bay area might enjoy being in the crowd at Resch Center for the Maroon 5 show.",
        img_url:"https://cdn.ontourmedia.io/maroon5sin/non_secure/images/20220424/m5_2022_usdates_1080x10801650853361/m5_2022_usdates_1080x10801650853361.jpg",
        location:"Resch Center, Green Bay, WI",
        user_id: 1,
        time:"2022-08-15"
      },
      {
        title:"Lollapalooza with Metallica",
        description:"The next Lollapalooza Chicago show will take place at Hutchinson Field at Grant Park. Fans of Alternative and all music fans across the Chicago area might enjoy being in the crowd at Hutchinson Field at Grant Park for the Lollapalooza show.",
        img_url:"https://wallpaperaccess.com/full/1814028.jpg",
        location:"Hutchinson Field at Grant Park, Chicago, IL",
        user_id: 3,
        time:"2022-07-28"
      },
      {
        title:"NEVER ENDING SUMMER TOUR by OneRepublic",
        description:"The next OneRepublic Mountain View show will take place at Shoreline Amphitheatre - CA. Fans of Pop and all music fans across the Mountain View area might enjoy being in the crowd at Shoreline Amphitheatre - CA for the OneRepublic show.",
        img_url:"https://foundationsmusic.com/wp-content/uploads/2022/02/IMG_4181.jpg",
        location:"Shoreline Amphitheatre, Mountain View, CA",
        user_id: 2,
        time:"2022-08-17"
      },
      {
        title:"Make It Go Quiet Tour by Girl in Red",
        description:"The next Girl In Red Chicago show will take place at Bottom Lounge. Fans of Alternative and all music fans across the Chicago area might enjoy being in the crowd at Bottom Lounge for the Girl In Red show.",
        img_url:"https://theblocksslc.com/wp-content/uploads/2022/04/event-featured-girl-in-red-at-the-complex-1649459484.jpeg",
        location:"Bottom Lounge, Chicago, IL",
        user_id: 1,
        time:"2022-07-28"
      },
      {
        title:"Justice World Tour by Justin Bieber",
        description:"The next Justin Bieber London show will take place at O2 Arena - London. Fans of Pop and all music fans across the London area might enjoy being in the crowd at O2 Arena - London for the Justin Bieber show.",
        img_url:"https://www.313presents.com/assets/img/JB_W_Harry_Hudson-fbce8de66c.jpg",
        location:"O2 Arena - London, London, GB",
        user_id: 3,
        time:"2023-02-14"
      },
      {
        title:"The Big Steppers Tour by Kendrick Lamar",
        description:"The next Kendrick Lamar Oakland show will take place at Oakland Arena. Fans of Rap/Hip Hop and all music fans across the Oakland area might enjoy being in the crowd at Oakland Arena for the Kendrick Lamar show.",
        img_url:"https://www.fiservforum.com/assets/img/TR_LocalizedAsset_KendrickLamar_BK_TL_US_SG_720x720-4e0549843d.jpg",
        location:"Oakland Arena, Oakland, CA",
        user_id: 1,
        time:"2022-08-31"
      },
      {
        title:"MCR TOUR by My Chemical Romance",
        description:"The next My Chemical Romance Oakland show will take place at Oakland Arena. Fans of Rock and all music fans across the Oakland area might enjoy being in the crowd at Oakland Arena for the My Chemical Romance show.",
        img_url:"https://s3.amazonaws.com/bit-photos/large/10031878.jpeg",
        location:"Oakland Arena, Oakland, CA",
        user_id: 1,
        time:"2022-10-05"
      },
      {
        title:"After Hours Til Dawn Tour by The Weeknd",
        description:"The next The Weeknd Santa Clara show will take place at Levi's Stadium. Fans of Rap/Hip Hop and all music fans across the Santa Clara area might enjoy being in the crowd at Levi's Stadium for the The Weeknd show.",
        img_url:"https://www.livenationentertainment.com/wp-content/uploads/2022/03/TR_NationalAsset_TheWeeknd_SG_1200x628.jpg",
        location:"Levi's Stadium, Santa Clara, CA",
        user_id: 2,
        time:"2022-08-27"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
