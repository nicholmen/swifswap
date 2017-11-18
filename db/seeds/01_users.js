
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([ { id: 1,
        username: 'mbinny0',
        location: 'Waywood',
        email: 'cfotitt0@vimeo.com',
        password: 'tO4NVmU78VMj',
        img_path: 'https://api.adorable.io/avatars/285/mbinny0' },
      { id: 2,
        username: 'jcritchell1',
        location: 'Waubesa',
        email: 'lsjostrom1@accuweather.com',
        password: '6QHMXQ6G32Q7',
        img_path: 'https://api.adorable.io/avatars/285/jcritchell1' },
      { id: 3,
        username: 'dvidler2',
        location: 'Summerview',
        email: 'rofeeny2@barnesandnoble.com',
        password: 'UqQpmGuK2',
        img_path: 'https://api.adorable.io/avatars/285/dvidler2' },
      { id: 4,
        username: 'kminghi3',
        location: 'Forest Run',
        email: 'chellyar3@unc.edu',
        password: 'yA4LobTgv',
        img_path: 'https://api.adorable.io/avatars/285/kminghi3' },
      { id: 5,
        username: 'eyitzhok4',
        location: 'Springs',
        email: 'rzanneli4@amazon.co.jp',
        password: 'PP8RCb0qzZw5',
        img_path: 'https://api.adorable.io/avatars/285/eyitzhok4' },
      { id: 6,
        username: 'veskrigge5',
        location: 'Lunder',
        email: 'dverrell5@nymag.com',
        password: 'RjgPC2G',
        img_path: 'https://api.adorable.io/avatars/285/veskrigge5' },
      { id: 7,
        username: 'wmurtimer6',
        location: 'Morning',
        email: 'ftuxwell6@examiner.com',
        password: 'XCOVh8oFyx1W',
        img_path: 'https://api.adorable.io/avatars/285/wmurtimer6' },
      { id: 8,
        username: 'bhaugen7',
        location: 'Mayer',
        email: 'kseifert7@nifty.com',
        password: 'Za2NTOb',
        img_path: 'https://api.adorable.io/avatars/285/bhaugen7' },
      { id: 9,
        username: 'gciccottio8',
        location: 'Kingsford',
        email: 'rhalksworth8@deliciousdays.com',
        password: 'nJ3TMkj4',
        img_path: 'https://api.adorable.io/avatars/285/gciccottio8' },
      { id: 10,
        username: 'rdrieu9',
        location: 'Mendota',
        email: 'ckobiela9@rakuten.co.jp',
        password: 'LmKvZcxQMw9',
        img_path: 'https://api.adorable.io/avatars/285/rdrieu9' },
      { id: 11,
        username: 'zknealea',
        location: 'Thierer',
        email: 'psenechella@springer.com',
        password: 'WLZgCtq',
        img_path: 'https://api.adorable.io/avatars/285/zknealea' },
      { id: 12,
        username: 'lkleynenb',
        location: 'Lotheville',
        email: 'lwarenb@miibeian.gov.cn',
        password: 'hyyRofTI',
        img_path: 'https://api.adorable.io/avatars/285/lkleynenb' },
      { id: 13,
        username: 'awilhelmyc',
        location: 'Sullivan',
        email: 'ppirkisc@wix.com',
        password: 'c6tHjzRr8D',
        img_path: 'https://api.adorable.io/avatars/285/awilhelmyc' },
      { id: 14,
        username: 'abirleyd',
        location: 'Messerschmidt',
        email: 'igrzeszczakd@cmu.edu',
        password: 'KWh9QvK9qnd',
        img_path: 'https://api.adorable.io/avatars/285/abirleyd' },
      { id: 15,
        username: 'breedse',
        location: 'Maple',
        email: 'ijahere@discuz.net',
        password: 'yeuIYpDmevZR',
        img_path: 'https://api.adorable.io/avatars/285/breedse' },
      { id: 16,
        username: 'draveauf',
        location: 'Schlimgen',
        email: 'idemcikf@dedecms.com',
        password: 'PtEDlw3',
        img_path: 'https://api.adorable.io/avatars/285/draveauf' },
      { id: 17,
        username: 'hrusheg',
        location: 'Eastlawn',
        email: 'jblakesleeg@freewebs.com',
        password: 'DSWv46VeHQqR',
        img_path: 'https://api.adorable.io/avatars/285/hrusheg' },
      { id: 18,
        username: 'kcopph',
        location: 'Twin Pines',
        email: 'bgrahlh@cbsnews.com',
        password: 'cnCXghL4kka7',
        img_path: 'https://api.adorable.io/avatars/285/kcopph' },
      { id: 19,
        username: 'amcclellandi',
        location: 'Crowley',
        email: 'tstariei@usatoday.com',
        password: 'pw9JyI',
        img_path: 'https://api.adorable.io/avatars/285/amcclellandi' },
      { id: 20,
        username: 'fsanperj',
        location: 'Caliangt',
        email: 'nlupsonj@china.com.cn',
        password: 'PUA9Sq2n',
        img_path: 'https://api.adorable.io/avatars/285/fsanperj' },
      { id: 21,
        username: 'gcuttlerk',
        location: 'Messerschmidt',
        email: 'ebesseyk@nps.gov',
        password: '1Fn4ztlY2h',
        img_path: 'https://api.adorable.io/avatars/285/gcuttlerk' },
      { id: 22,
        username: 'msharkeyl',
        location: 'West',
        email: 'rszymonil@cafepress.com',
        password: 'Xpzx1uMzlS',
        img_path: 'https://api.adorable.io/avatars/285/msharkeyl' },
      { id: 23,
        username: 'lwindasm',
        location: 'Marquette',
        email: 'aduddlem@cam.ac.uk',
        password: 'ILW0dTBdDjNB',
        img_path: 'https://api.adorable.io/avatars/285/lwindasm' },
      { id: 24,
        username: 'mkithern',
        location: '4th',
        email: 'cstoaden@nbcnews.com',
        password: 'GhrEKTanWU',
        img_path: 'https://api.adorable.io/avatars/285/mkithern' },
      { id: 25,
        username: 'fmiddleo',
        location: 'Pine View',
        email: 'sclaypoleo@mapquest.com',
        password: 'giNWconLfRA',
        img_path: 'https://api.adorable.io/avatars/285/fmiddleo' },
      { id: 26,
        username: 'tuebelp',
        location: 'Columbus',
        email: 'pgerrensp@dmoz.org',
        password: 'MkSup5O5t',
        img_path: 'https://api.adorable.io/avatars/285/tuebelp' },
      { id: 27,
        username: 'dwimmsq',
        location: 'Sycamore',
        email: 'torhtmannq@merriam-webster.com',
        password: 'm3WWhXtOg',
        img_path: 'https://api.adorable.io/avatars/285/dwimmsq' },
      { id: 28,
        username: 'ghumer',
        location: 'Sage',
        email: 'tpaddickr@lycos.com',
        password: 'nASYP5e',
        img_path: 'https://api.adorable.io/avatars/285/ghumer' },
      { id: 29,
        username: 'cclemmetts',
        location: 'David',
        email: 'kgittingss@skyrock.com',
        password: 'dh25h6d9J',
        img_path: 'https://api.adorable.io/avatars/285/cclemmetts' },
      { id: 30,
        username: 'snuddet',
        location: 'Sauthoff',
        email: 'epickrillt@patch.com',
        password: 'EHNdAy',
        img_path: 'https://api.adorable.io/avatars/285/snuddet' },
      { id: 31,
        username: 'mharmeu',
        location: 'Sunnyside',
        email: 'shumu@skyrock.com',
        password: 'CtRkjPX',
        img_path: 'https://api.adorable.io/avatars/285/mharmeu' },
      { id: 32,
        username: 'dguerinv',
        location: 'Monument',
        email: 'ptremethackv@slashdot.org',
        password: 'mjkpQ1obS',
        img_path: 'https://api.adorable.io/avatars/285/dguerinv' },
      { id: 33,
        username: 'scobbingw',
        location: 'Hazelcrest',
        email: 'rfranklingw@privacy.gov.au',
        password: 'ItviKrAvCRv',
        img_path: 'https://api.adorable.io/avatars/285/scobbingw' },
      { id: 34,
        username: 'eestrellax',
        location: 'Lawn',
        email: 'tweatherburnx@biglobe.ne.jp',
        password: 'jGjwP7G',
        img_path: 'https://api.adorable.io/avatars/285/eestrellax' },
      { id: 35,
        username: 'cbeldeny',
        location: 'Merrick',
        email: 'mheighwayy@businessweek.com',
        password: '6PchyC',
        img_path: 'https://api.adorable.io/avatars/285/cbeldeny' },
      { id: 36,
        username: 'fharkinsz',
        location: 'Blue Bill Park',
        email: 'mkubiczekz@thetimes.co.uk',
        password: '5CRQRtNWS',
        img_path: 'https://api.adorable.io/avatars/285/fharkinsz' },
      { id: 37,
        username: 'jbargery10',
        location: 'Sutteridge',
        email: 'agodrich10@uiuc.edu',
        password: 'IZDDJTsNZwt',
        img_path: 'https://api.adorable.io/avatars/285/jbargery10' },
      { id: 38,
        username: 'gmcmenamin11',
        location: 'International',
        email: 'isiebert11@bandcamp.com',
        password: 'ZEnqfq40dHjh',
        img_path: 'https://api.adorable.io/avatars/285/gmcmenamin11' },
      { id: 39,
        username: 'dnisard12',
        location: 'Forster',
        email: 'lyesson12@about.me',
        password: 'jWihWZS',
        img_path: 'https://api.adorable.io/avatars/285/dnisard12' },
      { id: 40,
        username: 'omoan13',
        location: 'Beilfuss',
        email: 'rcrewther13@sbwire.com',
        password: 'IXIN4M2f1',
        img_path: 'https://api.adorable.io/avatars/285/omoan13' },
      { id: 41,
        username: 'sdrinnan14',
        location: 'Upham',
        email: 'kbook14@vk.com',
        password: 'ZKUdM9P0jkL',
        img_path: 'https://api.adorable.io/avatars/285/sdrinnan14' },
      { id: 42,
        username: 'nbodell15',
        location: 'Oakridge',
        email: 'dscogings15@nba.com',
        password: 'n3AfGue',
        img_path: 'https://api.adorable.io/avatars/285/nbodell15' },
      { id: 43,
        username: 'amacgowan16',
        location: 'Macpherson',
        email: 'obelf16@wikispaces.com',
        password: 'lQc34NIj1To7',
        img_path: 'https://api.adorable.io/avatars/285/amacgowan16' },
      { id: 44,
        username: 'mhouseman17',
        location: 'Hagan',
        email: 'mrittmeier17@bravesites.com',
        password: '3uUj5r1Jxwk',
        img_path: 'https://api.adorable.io/avatars/285/mhouseman17' },
      { id: 45,
        username: 'ocornhill18',
        location: 'Petterle',
        email: 'klawlie18@purevolume.com',
        password: '8ZqLwced',
        img_path: 'https://api.adorable.io/avatars/285/ocornhill18' },
      { id: 46,
        username: 'hdriuzzi19',
        location: 'Dawn',
        email: 'adolohunty19@globo.com',
        password: 'IeNkHMIai3wu',
        img_path: 'https://api.adorable.io/avatars/285/hdriuzzi19' },
      { id: 47,
        username: 'wocaherny1a',
        location: 'Logan',
        email: 'rconsterdine1a@cdc.gov',
        password: '3q2pugFnD',
        img_path: 'https://api.adorable.io/avatars/285/wocaherny1a' },
      { id: 48,
        username: 'rbarton1b',
        location: 'Dottie',
        email: 'tbutten1b@state.tx.us',
        password: '5iFbHU8XzuW',
        img_path: 'https://api.adorable.io/avatars/285/rbarton1b' },
      { id: 49,
        username: 'lbeyne1c',
        location: 'Gina',
        email: 'mromei1c@pcworld.com',
        password: 'tgv9as',
        img_path: 'https://api.adorable.io/avatars/285/lbeyne1c' },
      { id: 50,
        username: 'fclubbe1d',
        location: 'Springs',
        email: 'dgallegos1d@bbb.org',
        password: 'mNCMzfQTafM',
        img_path: 'https://api.adorable.io/avatars/285/fclubbe1d' } ]);
    });
};