'use strict';

describe('controller: merryXmasController', function () {

  // load the controller's module
  beforeEach(module('merryXmasApp'));

  var scope, ctrl, $httpBackend, albumsJson;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('merryXmasController', { $scope: scope });
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('xmas_albums.json').respond(albumsJson);
  }));

  it('should have the Jasmine testing framework working', function() {
    expect(true).toBe(true);
  });

  it('should have X number of albums and well formed objects', function() {
    $httpBackend.flush();
    expect(scope.albums.length).toBe(16);
    expect(scope.albums[0].year).toBe(2013);
    expect(scope.albums[0].songs.length).toBe(2);
  });







<!--- semi-mock data below -->

  albumsJson = [
    {
      "year": 2013,
      "number": 16,
      "title": "2013 xmas album",
      "imageUrl": "images/2013/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2012/2012.zip",
      "songs": [
        {   
          "url": "http://example.org/mp3s/xmas/xmas_2012/01%20Happy%20Fucking%20Holidays%20%5BExplicit%5D.mp3",
          "title": "Happy Fucking Holidays [Explicit]",
          "artist": "Starfucker",
          "duration": "4:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/02%20Wonderful%20Christmastime.mp3",
          "title": "Wonderful Christmastime",
          "artist": "The Shins",
          "duration": "2:27"
        }
      ]
    },

    {
      "year": 2012,
      "number": 15,
      "title": "Christmastime Terror",
      "imageUrl": "images/2012/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2012/2012.zip",
      "songs": [
        {   
          "url": "http://example.org/mp3s/xmas/xmas_2012/01%20Happy%20Fucking%20Holidays%20%5BExplicit%5D.mp3",
          "title": "Happy Fucking Holidays [Explicit]",
          "artist": "Starfucker",
          "duration": "4:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/02%20Wonderful%20Christmastime.mp3",
          "title": "Wonderful Christmastime",
          "artist": "The Shins",
          "duration": "2:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/03%20All%20I%20Need%20Is%20Love%20(feat.%20Disney's%20The%20Muppets).mp3",
          "title": "All I Need Is Love (feat. Disney's The Muppets)",
          "artist": "CeeLo Green",
          "duration": "3:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/04%20You%20Trashed%20My%20Christmas.mp3",
          "title": "You Trashed My Christmas",
          "artist": "The Primitives",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/05%20Santa's%20Coming%20in%20a%20Whirlybird.mp3",
          "title": "Santa's Coming in a Whirlybird",
          "artist": "Little Lance & His Friends",
          "duration": "1:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/06%20Lost%20In%20The%20Post.mp3",
          "title": "Lost In The Post",
          "artist": "Wombats",
          "duration": "3:06"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/07%20Tijuana%20Christmas.mp3",
          "title": "Tijuana Christmas",
          "artist": "The Border Brass",
          "duration": "2:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/08%20Cheap%20Gold.mp3",
          "title": "Cheap Gold",
          "artist": "Frightened Rabbit",
          "duration": "2:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/09%20We%20Three%20Kings.mp3",
          "title": "We Three Kings",
          "artist": "Dave Brubeck",
          "duration": "3:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/10%20The%20Chipmunk%20Song%20(Christmas%20Don't%20Be%20Late).mp3",
          "title": "The Chipmunk Song (Christmas Don't Be Late)",
          "artist": "Catwalk",
          "duration": "3:06"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/11%20Christmas%20(Baby%20Please%20Come%20Home).mp3",
          "title": "Christmas (Baby Please Come Home)",
          "artist": "Slow Club",
          "duration": "2:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/12%20All%20I%20Want%20is%20Truth%20(for%20Christmas).mp3",
          "title": "All I Want is Truth (for Christmas)",
          "artist": "The Mynabirds",
          "duration": "3:51"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/13%20Deck%20The%20Halls.mp3",
          "title": "Deck The Halls",
          "artist": "11 Acorn Lane",
          "duration": "2:17"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/14%20Santa%20Stole%20My%20Lady.mp3",
          "title": "Santa Stole My Lady",
          "artist": "Fitz & The Tantrums",
          "duration": "3:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/15%20Back%20Door%20Santa%20(Non%20Album%20Version).mp3",
          "title": "Back Door Santa (Non Album Version)",
          "artist": "Jet",
          "duration": "2:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/16%20The%20Happiest%20Christmas%20Tree.mp3",
          "title": "The Happiest Christmas Tree",
          "artist": "Nat King Cole",
          "duration": "1:51"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/17%20Christmas%20Wrapping.mp3",
          "title": "Christmas Wrapping",
          "artist": "Summer Camp",
          "duration": "3:51"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/18%20Christmas%20Carousel.mp3",
          "title": "Christmas Carousel",
          "artist": "Peggy Lee",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/19%20Christmas%20Time%20is%20Here%20%5BVince%20Guaraldi%20cover%5D.mp3",
          "title": "Christmas Time is Here [Vince Guaraldi cover]",
          "artist": "Woods",
          "duration": "2:37"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/20%20We%20Wish%20You%20A%20Merry%20Christmas.mp3",
          "title": "We Wish You A Merry Christmas",
          "artist": "Shonen Knife",
          "duration": "1:57"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/21%20Grinch%202000.mp3",
          "title": "Grinch 2000",
          "artist": "Busta Rhymes",
          "duration": "3:35"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/22%20Grown-Up%20Christmas%20List.mp3",
          "title": "Grown-Up Christmas List",
          "artist": "Whitney Houston Feat Toni Braxton",
          "duration": "4:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/23%20My%20Baby%20Fell%20For%20Ol'%20St.%20Nick%20-%20Dada.mp3",
          "title": "My Baby Fell For Ol' St. Nick",
          "artist": "Dada / Dada",
          "duration": "3:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2012/24%20Let's%20Call%20It%20Quits.mp3",
          "title": "Let's Call It Quits",
          "artist": "human",
          "duration": "2:41"
        }
      ]
    },

    {
      "year": 2011,
      "number": 14,
      "title": "Christmas Bundle",
      "imageUrl": "images/2011/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2011/2011.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/01%20Minty.mp3",
          "title": "Minty",
          "artist": "Team Coco",
          "duration": "1:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/02%20Frosty%20The%20Snowman.mp3",
          "title": "Frosty The Snowman",
          "artist": "Zee Avi",
          "duration": "2:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/03%20How%20Do%20You%20Spell%20Channukkahh_.mp3",
          "title": "How Do You Spell Channukkahh?",
          "artist": "The LeeVees",
          "duration": "4:57"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/04%20The%20Nutcracker%20March.mp3",
          "title": "The Nutcracker March",
          "artist": "Stella Artois Jazz Band",
          "duration": "3:13"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/05%20Song%20for%20the%20Season%20(Holy%20Jam).mp3",
          "title": "Song for the Season (Holy Jam)",
          "artist": "Baby Jazz",
          "duration": "2:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/06%20Merry%20Christmas,%20Baby%20(Please%20Don't%20Die).mp3",
          "title": "Merry Christmas, Baby (Please Don't Die)",
          "artist": "Crocodiles &amp; Dum Dum Girls",
          "duration": "3:19"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/07%20Artificial%20Snow%20(Campfire%20Metalophone%20Version).mp3",
          "title": "Artificial Snow (Campfire Metalophone Version)",
          "artist": "Atlas Sound",
          "duration": "2:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/08%20Christmas%20In%20A%20Chinese%20Restaurant.mp3",
          "title": "Christmas In A Chinese Restaurant",
          "artist": "Diamond Rugs",
          "duration": "3:49"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/09%20Wishes.mp3",
          "title": "Wishes",
          "artist": "The Bird And The Bee",
          "duration": "2:35"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/10%20Kindle%20A%20Flame%20In%20Her%20Heart.mp3",
          "title": "Kindle A Flame In Her Heart",
          "artist": "Los Campesinos!",
          "duration": "4:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/11%20Santa%20Papi.mp3",
          "title": "Santa Papi",
          "artist": "Maria Isa",
          "duration": "3:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/12%20Holiday%20Fortnight.mp3",
          "title": "Holiday Fortnight",
          "artist": "The Specials",
          "duration": "2:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/13%20Santa%20Loves%20To%20Boogie.mp3",
          "title": "Santa Loves To Boogie",
          "artist": "Asleep at the Wheel",
          "duration": "2:33"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/14%20Mean%20Old%20Jews%20Who%20Crucify%20My%20Lord.mp3",
          "title": "Mean Old Jews Who Crucify My Lord",
          "artist": "Sister Albertha Harris Lewis",
          "duration": "3:31"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/15%20Have%20Yourself%20a%20Merry%20Little%20Christmas.mp3",
          "title": "Have Yourself a Merry Little Christmas",
          "artist": "Vanessa Rubin",
          "duration": "4:30"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/16%20Jingle%20Bell%20Rock.mp3",
          "title": "Jingle Bell Rock",
          "artist": "Rogue Wave",
          "duration": "2:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/17%20Let%20it%20Snow,%20All%20I%20Want%20for%20Christmas%20medley.mp3",
          "title": "Let it Snow, All I Want for Christmas medley",
          "artist": "Her Space Holiday",
          "duration": "2:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/18%20Christmas%20Time%20Is%20Here.mp3",
          "title": "Christmas Time Is Here",
          "artist": "Mayer Hawthorne",
          "duration": "3:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/19%20I%20Do%20Not%20Care%20For%20The%20Winter%20Sun.mp3",
          "title": "I Do Not Care For The Winter Sun",
          "artist": "Beach House",
          "duration": "3:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/20%20Got%20Something%20for%20You.mp3",
          "title": "Got Something for You",
          "artist": "Best Coast, Wavves",
          "duration": "1:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/21%20867-5309%20_%20Jenny%20(Christmas%20Version).mp3",
          "title": "867-5309",
          "artist": "Jenny (Christmas Version) / Tommy Tutone",
          "duration": "3:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/22%20The%20Christmas%20Waltz.mp3",
          "title": "The Christmas Waltz",
          "artist": "She &amp; Him",
          "duration": "2:38"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/23%20Run%20Away%20With%20Me.mp3",
          "title": "Run Away With Me",
          "artist": "Jens Lekman",
          "duration": "2:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/24%20Drummer%20Boy%20(Feat.%20Busta%20Rhymes).mp3",
          "title": "Drummer Boy (Feat. Busta Rhymes)",
          "artist": "Justin Bieber",
          "duration": "3:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2011/25%20Mamacita%20Donde%20Esta%20Santa%20Claus.m4a.mp3",
          "title": "Mamacita Donde Esta Santa Claus",
          "artist": "El Vez",
          "duration": "2:10"
        }
      ]
    },

    {
      "year": 2010,
      "number": 13,
      "title": "Happy Ho-Ho Holidays",
      "imageUrl": "images/2010/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2010/2010.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/01%20Little%20Dealer%20Boy.mp3",
          "title": "Little Dealer Boy",
          "artist": "Stephen Colbert &amp; Willie Nelson",
          "duration": "2:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/02%20Merry%20Something%20To%20You.mp3",
          "title": "Merry Something To You",
          "artist": "Devo",
          "duration": "1:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/03%20Christmas%20Time%20Is%20Here%20Again.mp3",
          "title": "Christmas Time Is Here Again",
          "artist": "The Flirtations",
          "duration": "3:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/04%20Present%20Face.mp3",
          "title": "Present Face",
          "artist": "Garfunkel and Oates",
          "duration": "2:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/05%20Fruitcake.mp3",
          "title": "Fruitcake",
          "artist": "The Superions",
          "duration": "3:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/06%20Winter%20Wonderland.mp3",
          "title": "Winter Wonderland",
          "artist": "Shirley Horn",
          "duration": "4:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/07%20A%20Child%20Is%20Born.mp3",
          "title": "A Child Is Born",
          "artist": "Rihanna",
          "duration": "3:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/08%20Santa%20Claus.mp3",
          "title": "Santa Claus",
          "artist": "Lee 'Scratch' Perry",
          "duration": "3:57"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/09%20It%20doesn't%20often%20snow%20at%20Christmas%20(new%20version).mp3",
          "title": "It Doesn't Often Snow at Christmas",
          "artist": "Pet Shop Boys",
          "duration": "3:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/10%20Winter%20Weather.mp3",
          "title": "Winter Weather",
          "artist": "Jo Stafford",
          "duration": "1:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/11%20Give%20The%20Jew%20Girl%20Toys%20%5BExplicit%5D.mp3",
          "title": "Give The Jew Girl Toys [Explicit]",
          "artist": "Sarah Silverman",
          "duration": "2:20"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/12%20Purple%20Snowflakes.mp3",
          "title": "Purple Snowflakes",
          "artist": "Marvin Gaye",
          "duration": "2:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/13%20Rated%20Xmas%20%5BExplicit%5D.mp3",
          "title": "Rated Xmas [Explicit]",
          "artist": "The Millionaires",
          "duration": "3:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/14%20Christmas%20Isn't%20Christmas.mp3",
          "title": "Christmas Isn't Christmas",
          "artist": "The Boy Least Likely To",
          "duration": "3:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/15%20Stay%20A%20Little%20Longer,%20Santa.mp3",
          "title": "Stay A Little Longer, Santa",
          "artist": "Shemekia Copeland",
          "duration": "4:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/16%20Mamacita,%20Donde%20Esta%20Santa%20Claus_%20(Non-Album%20Track).mp3",
          "title": "Mamacita, Donde Esta Santa Claus?",
          "artist": "Guster",
          "duration": "[2:21]"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/17%20Mambo%20Santa%20Mambo.mp3",
          "title": "Mambo Santa Mambo",
          "artist": "The Enchanters",
          "duration": "2:39"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/18%20Ol'%20Fatso.mp3",
          "title": "Ol' Fatso",
          "artist": "Augie Rios",
          "duration": "2:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/19%20Christmas%20Is.mp3",
          "title": "Christmas Is",
          "artist": "Run D.M.C.",
          "duration": "3:20"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/20%20Ho!%20Ho!%20Ho!%20(Who'd%20Be%20A%20Turkey%20At%20Christmas).mp3",
          "title": "Ho! Ho! Ho! (Who'd Be A Turkey At Christmas)",
          "artist": "Elton John",
          "duration": "4:07"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/21%20It's%20Christmas.mp3",
          "title": "It's Christmas",
          "artist": "Coconut Records",
          "duration": "2:13"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/22%20Jake%20The%20Flake.mp3",
          "title": "Jake The Flake",
          "artist": "Bobby Starr",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/23%20Clean%20For%20Christmas.mp3",
          "title": "Clean For Christmas",
          "artist": "James Brown",
          "duration": "2:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/24%20Stuck%20At%20The%20Airport.mp3",
          "title": "Stuck At The Airport",
          "artist": "Money Mark",
          "duration": "3:19"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/25%20Step%20Into%20Christmas.mp3",
          "title": "Step Into Christmas",
          "artist": "The Puppini Sisters",
          "duration": "3:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2010/26%20Everything%20Is%20One%20Big%20Christmas%20Tree.mp3",
          "title": "Everything Is One Big Christmas Tree",
          "artist": "The Magnetic Fields",
          "duration": "2:25"
        }
      ]

    },
    {
      "year": 2009,
      "number": 12,
      "title": "Holiday Cane-ing",
      "imageUrl": "images/2009/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2009/2009.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/01%20Please%20Be%20Patient.mp3",
          "title": "Please Be Patient",
          "artist": "Feist",
          "duration": "2:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/02%20Last%20Christmas.mp3",
          "title": "Last Christmas",
          "artist": "Glee Cast",
          "duration": "3:38"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/03%20The%20Merriest%20%5BThunderball%20Mix%5D.mp3",
          "title": "The Merriest [Thunderball Mix]",
          "artist": "June Christy",
          "duration": "3:31"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/04%20My%20Christmas%20Bells.mp3",
          "title": "My Christmas Bells",
          "artist": "Hard Call Christmas",
          "duration": "3:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/05%20Fairytale%20Of%20New%20York.mp3",
          "title": "Fairytale Of New York",
          "artist": "Stars",
          "duration": "4:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/06%20I'm%20Gonna%20Lasso%20Santa%20Claus.mp3",
          "title": "I'm Gonna Lasso Santa Claus",
          "artist": "Brenda Lee",
          "duration": "2:17"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/07%20Christmas%20Tree.mp3",
          "title": "Christmas Tree",
          "artist": "Lady GaGa",
          "duration": "2:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/08%20The%20Little%20Drummer%20Boy.mp3",
          "title": "The Little Drummer Boy",
          "artist": "Salsoul Orchestra",
          "duration": "5:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/09%20X-mas%20song.mp3",
          "title": "X-mas song",
          "artist": "fireflies",
          "duration": "1:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/10%20Santa's%20Goin'%20To%20Kokomo.mp3",
          "title": "Santa's Goin' To Kokomo",
          "artist": "Mike Love",
          "duration": "2:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/11%20Santa%20Baby.mp3",
          "title": "Santa Baby",
          "artist": "Latin Jazz Featuring Sheila E.",
          "duration": "4:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/12%20Jew%204%20Xmas.mp3",
          "title": "Jew 4 Xmas",
          "artist": "Coconut &amp; the Duke",
          "duration": "4:06"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/13%20All%20I%20Want%20For%20Christmas.mp3",
          "title": "All I Want For Christmas",
          "artist": "88 Fingers Louie",
          "duration": "1:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/14%20Get%20Your%20Hump%20On%20This%20Christmas.mp3",
          "title": "Get Your Hump On This Christmas",
          "artist": "Earth, Wind &amp; Fire",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/15%20Wonderful%20Christmas%20Time.mp3",
          "title": "Wonderful Christmas Time (Paul McCartney Cover)",
          "artist": "Mark...",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/16%20Super%20Rock%20Santa.mp3",
          "title": "Super Rock Santa",
          "artist": "Fleshtones",
          "duration": "1:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/17%20I%20Wanna%20Take%20You%20Out%20In%20Your%20Holiday%20Sweater.mp3",
          "title": "I Wanna Take You Out In Your Holiday Sweater",
          "artist": "Pas/Cal",
          "duration": "3:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/18%20Christmas%20Spirit.mp3",
          "title": "Christmas Spirit",
          "artist": "The Wailers",
          "duration": "3:10"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/19%20Donna%20%26%20Blitzen.mp3",
          "title": "Donna &amp; Blitzen",
          "artist": "Badly Drawn Boy",
          "duration": "4:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/20%20Child's%20Christmas%20in%20Wales.mp3",
          "title": "Child's Christmas in Wales",
          "artist": "John Cale",
          "duration": "3:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/21%20In%20the%20Bleak%20Midwinter.mp3",
          "title": "In the Bleak Midwinter",
          "artist": "The Pipettes",
          "duration": "2:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/22%20Ain't%20No%20Chimneys.mp3",
          "title": "Ain't No Chimneys",
          "artist": "Sharon Jones &amp; The Dap-Kings",
          "duration": "2:21"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/23%20Boogaloo%20Santa%20Claus.mp3",
          "title": "Boogaloo Santa Claus",
          "artist": "J.D. McDonald",
          "duration": "4:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2009/24%20Children%20Go%20Where%20I%20Send%20Thee.mp3",
          "title": "Children Go Where I Send Thee",
          "artist": "Hall and Oates",
          "duration": "4:29"
        }
      ]
    },
    {
      "year": 2008,
      "number": 11,
      "title": "Holiday Dance-y Dance",
      "imageUrl": "images/2008/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2008/2008.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/01%20Another%20Christmas%20Song.mp3",
          "title": "Another Christmas Song",
          "artist": "Stephen Colbert",
          "duration": "2:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/02%20Who%20Took%20The%20Merry%20Out%20Of%20Christmas.mp3",
          "title": "Who Took The Merry Out Of Christmas",
          "artist": "Darlene Love",
          "duration": "3:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/03%20A%20Beguiled%20Christmas%20Sales.mp3",
          "title": "A Beguiled Christmas Sales",
          "artist": "Jason Collett",
          "duration": "2:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/04%20Seven%20Joys%20Of%20Mary.mp3",
          "title": "Seven Joys Of Mary",
          "artist": "Great Big Sea",
          "duration": "2:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/05%20Santa%20Claus%20Shuffle.mp3",
          "title": "Santa Claus Shuffle",
          "artist": "Tommy Scott",
          "duration": "2:50"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/06%20Merry%20Christmas%20(You%20Won't%20Get%20What%20You%20Want).mp3",
          "title": "Merry Christmas (You Won't Get What You Want)",
          "artist": "Johnny Bertram",
          "duration": "3:08"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/07%20Carol%20Of%20The%20Bells.mp3",
          "title": "Carol Of The Bells",
          "artist": "The Polyphonic Spree",
          "duration": "1:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/08%20We%20Wish%20You%20a%20Lousy%20Xmas.mp3",
          "title": "We Wish You a Lousy Xmas",
          "artist": "Space Negros",
          "duration": "2:03"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/09%20I%20Won't%20Be%20Home%20For%20Chirstmas.mp3",
          "title": "I Won't Be Home For Chirstmas",
          "artist": "Blink 182",
          "duration": "3:18"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/10%20I%20Ate%20Too%20Much%20Over%20The%20Holidays.mp3",
          "title": "I Ate Too Much Over The Holidays",
          "artist": "Lee Shot Williams",
          "duration": "4:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/11%20Linus%20and%20Lucy.mp3",
          "title": "Linus and Lucy",
          "artist": "Bela Fleck &amp; The Flecktones",
          "duration": "2:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/12%20Christmas%20Time%20is%20Here.mp3",
          "title": "Christmas Time is Here",
          "artist": "Au Revoir Simone",
          "duration": "2:30"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/13%20Christmas%20Card%20From%20a%20Hooker%20in%20Minneapolis.mp3",
          "title": "Christmas Card From a Hooker in Minneapolis",
          "artist": "Neko Case",
          "duration": "3:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/14%20I%20Need%20A%20Lover%20For%20Christmas.mp3",
          "title": "I Need A Lover For Christmas",
          "artist": "Sheba Potts-Wright",
          "duration": "4:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/15%20Plasma%20for%20Christmas.mp3",
          "title": "Plasma for Christmas",
          "artist": "The Reverend Peyton's Big Damn Band",
          "duration": "2:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/16%20A%20Christmas%20Duel.mp3",
          "title": "A Christmas Duel",
          "artist": "The Hives &amp; Cyndi Lauper",
          "duration": "4:49"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/17%20Hannukah%20Snowman.mp3",
          "title": "Hannukah Snowman",
          "artist": "Phranc",
          "duration": "1:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/18%20I%20Need%20A%20Man%20Down%20My%20Chimney.mp3",
          "title": "I Need A Man Down My Chimney",
          "artist": "Barbara Carr",
          "duration": "3:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/19%20Why%20Can't%20It%20Be%20Christmastime%20All%20Year.mp3",
          "title": "Why Can't It Be Christmastime All Year",
          "artist": "Rosie Thomas",
          "duration": "4:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/20%20It's%20A%20Marshmallow%20World.mp3",
          "title": "It's A Marshmallow World",
          "artist": "The May Fire",
          "duration": "3:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/21%20Darlin'%20(Christmas%20is%20Coming).mp3",
          "title": "Darlin' (Christmas is Coming)",
          "artist": "Over The Rhine",
          "duration": "3:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/22%20The%20Christmas%20Sound.mp3",
          "title": "The Christmas Sound",
          "artist": "The Swimmers",
          "duration": "2:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/23%20Christmas%20Tree's%20On%20Fire.mp3",
          "title": "Christmas Tree's On Fire",
          "artist": "Holly Golightly",
          "duration": "2:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/24%20Winter%20Wonderland.mp3",
          "title": "Winter Wonderland",
          "artist": "Goldfrapp",
          "duration": "3:10"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2008/25%20Christmas%20Is%20Coming%20Soon.mp3",
          "title": "Christmas Is Coming Soon",
          "artist": "Blitzen Trapper",
          "duration": "3:04"
        }
      ]
    },
    {
      "year": 2007,
      "number": 10,
      "title": "Xmas Sweaters",
      "imageUrl": "images/2007/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2007/2007.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/01%20X-Mass%20Wii.mp3",
          "title": "X-Mass Wii",
          "artist": "Hot Lava",
          "duration": "1:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/02%20Last%20Month%20of%20the%20Year.mp3",
          "title": "Last Month of the Year",
          "artist": "The Blind Boys of Alabama",
          "duration": "3:03"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/03%20Hanukkah%20Dance%20(Alternate%20Take).mp3",
          "title": "Hanukkah Dance (Alternate Take)",
          "artist": "Woody Guthrie",
          "duration": "1:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/04%20Merry%20Christmas%20(I%20Don't%20Want%20To%20Fight%20Tonight).mp3",
          "title": "Merry Christmas (I Don't Want To Fight Tonight)",
          "artist": "Asobi Seksu",
          "duration": "3:08"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/05%20Christmas%20Comes%20But%20Once%20a%20Year.mp3",
          "title": "Christmas Comes But Once a Year",
          "artist": "Amos Milburn with Charles Brown",
          "duration": "2:19"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/06%20End%20of%20the%20Year.mp3",
          "title": "End of the Year",
          "artist": "Aaron Robinson",
          "duration": "2:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/07%20%20Yeah,%20I%20Know,%20It's%20Christmastime.mp3",
          "title": " Yeah, I Know, It's Christmastime",
          "artist": "Andrew Dost (Anathallo)",
          "duration": "2:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/08%20O%20Come%20All%20Ye%20Faithful.mp3",
          "title": "O Come All Ye Faithful",
          "artist": "Chet Baker",
          "duration": "4:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/09%20Have%20Yourself%20A%20Filthy%20Little%20Christmas.mp3",
          "title": "Have Yourself A Filthy Little Christmas",
          "artist": "And What Will Be Left Of Them?",
          "duration": "2:37"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/10%20A%20Change%20At%20Christmas%20(Say%20It%20Isn't%20So).mp3",
          "title": "Holiday Adam",
          "artist": "The Promise Ring",
          "duration": "3:19"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/11%20Holiday%20Adam.mp3",
          "title": "A Change At Christmas (Say It Isn't So)",
          "artist": "The Flaming Lips",
          "duration": "5:18"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/12%20Merry%20Christmas%20Baby.mp3",
          "title": "Merry Christmas Baby",
          "artist": "Otis Redding",
          "duration": "2:30"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/13%20Wish%20It%20Would%20Snow.mp3",
          "title": "Wish It Would Snow",
          "artist": "The Specimen",
          "duration": "3:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/14%20Merry%20Christmas,%20Baby.mp3",
          "title": "Merry Christmas, Baby",
          "artist": "Ike &amp; Tina Turner",
          "duration": "2:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/15%20This%20Christmas.mp3",
          "title": "This Christmas",
          "artist": "The Dismemberment Plan",
          "duration": "3:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/16%20She%20Came%20Home%20For%20Christmas.mp3",
          "title": "She Came Home For Christmas",
          "artist": "Mew",
          "duration": "3:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/17%20Mazel%20Tonk.mp3",
          "title": "Mazel Tonk",
          "artist": "Brigid Kaelin",
          "duration": "2:38"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/18%20This%20Christmas.mp3",
          "title": "This Christmas",
          "artist": "Louis XIV",
          "duration": "3:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/19%20Lo,%20How%20a%20Rose%20e're%20Blooming.mp3",
          "title": "Lo, How a Rose e're Blooming",
          "artist": "Feist",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/20%20Silent%20Night.mp3",
          "title": "Silent Night",
          "artist": "Ween",
          "duration": "1:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/21%20Nine%20Inch%20Noels.mp3",
          "title": "Nine Inch Noels",
          "artist": "Bad Gods",
          "duration": "3:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/22%20Space%20Christmas.mp3",
          "title": "Space Christmas",
          "artist": "Shonen Knife",
          "duration": "3:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/23%20All%20I%20Want%20for%20Christmas.mp3",
          "title": "All I Want for Christmas",
          "artist": "Timbuk 3",
          "duration": "3:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/24%20Santar%20Klaws%20(Poj%20Masta's%20Christmas%20Mix).mp3",
          "title": "Santar Klaws (Poj Masta's Christmas Mix)",
          "artist": "Eartha Kitt",
          "duration": "2:10"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/25%20A%20Joyous%20Time%20Of%20The%20Year.mp3",
          "title": "A Joyous Time Of The Year",
          "artist": "Marty Feldman",
          "duration": "3:10"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2007/26%20Pretty%20Paper.mp3",
          "title": "Pretty Paper",
          "artist": "Roy Orbison",
          "duration": "2:39"
        }
      ]
    },
    {
      "year": 2006,
      "number": 9,
      "title": "Hung like Ornaments",
      "imageUrl": "images/2006/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2006/2006.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/01%20It's%20Christmas%20Time.mp3",
          "title": "It's Christmas Time",
          "artist": "Yo La Tengo",
          "duration": "2:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/02%20Santa%20Bring%20My%20Baby%20Back%20(To%20Me)%201.mp3",
          "title": "Santa Bring My Baby Back (To Me)",
          "artist": "Elvis Presley",
          "duration": "1:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/03%20Holly%20Jolly%20Christmas.mp3",
          "title": "Holly Jolly Christmas",
          "artist": "The Format",
          "duration": "2:49"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/04%20Merry%20Christmas.mp3",
          "title": "Merry Christmas",
          "artist": "Slade",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/05%20A%20Great%20Big%20Sled.mp3",
          "title": "A Great Big Sled",
          "artist": "The Killers",
          "duration": "4:21"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/06%20Mele%20Kalikimaka%201.mp3",
          "title": "Mele Kalikimaka",
          "artist": "Beach Boys",
          "duration": "2:37"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/07%20Come%20On!%20Let's%20Boogey%20to%20the%20Elf.mp3",
          "title": "Come On! Let's Boogey to the Elf",
          "artist": "Sufjan Stevens",
          "duration": "3:50"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/08%20Even%20Squeaky%20Fromme%20Loves%20Christmas.mp3",
          "title": "Even Squeaky Fromme Loves Christmas",
          "artist": "The Reverend Glen Armstrong",
          "duration": "3:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/09%20A%20Marshmellow%20World.mp3",
          "title": "A Marshmellow World",
          "artist": "Math and Physics Club",
          "duration": "2:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/10%20Christmas%20Reindeer.mp3",
          "title": "Christmas Reindeer",
          "artist": "The Knife",
          "duration": "5:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/11%20Christmas%20in%20Hollis.mp3",
          "title": "Christmas in Hollis",
          "artist": "Thunderbirds are Now",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/12%20Stone%20Soul%20Christmas.mp3",
          "title": "Stone Soul Christmas",
          "artist": "Binky Griptite &amp; the Dee-Kay's",
          "duration": "4:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/13%20The%20Man%20In%20The%20Santa%20Suit.mp3",
          "title": "The Man In The Santa Suit",
          "artist": "Fountains Of Wayne",
          "duration": "2:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/14%20Elves%20on%20Strike.mp3",
          "title": "Elves on Strike",
          "artist": "Ryan Allen",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/15%20Merry%20Christmas%20All.mp3",
          "title": "Merry Christmas All",
          "artist": "Denise Montana &amp; the Salsoul Orchestra",
          "duration": "3:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/16%20The%20Christmas%20Song.mp3",
          "title": "The Christmas Song",
          "artist": "Ravonettes",
          "duration": "2:15"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/17%20Drunk%20Santa.mp3",
          "title": "Drunk Santa",
          "artist": "Ryan Adams",
          "duration": "2:51"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/18%20Hey%20America.mp3",
          "title": "Hey America",
          "artist": "James Brown",
          "duration": "3:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/19%20All%20the%20Right%20Reasons.mp3",
          "title": "All the Right Reasons",
          "artist": "Dressy Bessy",
          "duration": "2:38"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/20%20Don't%20Believe%20in%20Christmas.mp3",
          "title": "Don't Believe in Christmas",
          "artist": "The Sonics",
          "duration": "1:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/21%20Christmas%20Is%20A-Coming%20(May%20God%20Bless%20You).mp3",
          "title": "Christmas Is A-Coming (May God Bless You)",
          "artist": "The Shitbirds",
          "duration": "2:15"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/22%20Swingin'%20Them%20Jingle%20Bells.mp3",
          "title": "Swingin' Them Jingle Bells",
          "artist": "Fats Waller",
          "duration": "3:03"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/23%20Please%20Come%20Home%20For%20Christmas.mp3",
          "title": "Please Come Home For Christmas",
          "artist": "Etta James",
          "duration": "3:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/24%20I%20Hate%20Christmas.mp3",
          "title": "I Hate Christmas",
          "artist": "Sesame Street",
          "duration": "1:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/25%20Run%20Rudolph%20Run.mp3",
          "title": "Run Rudolph Run",
          "artist": "Richards, Keith",
          "duration": "3:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2006/26%20We%20Wish%20You%20A%20Merry%20Christmas.mp3",
          "title": "We Wish You A Merry Christmas",
          "artist": "Blitch Bango",
          "duration": "2:05"
        }
      ]
    },
    {
      "year": 2005,
      "number": 8,
      "title": "COMING SOON",
      "imageUrl": "images/2006/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2005/2005.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/01%20Jingle%20Smells%20(Extended%20Mix).mp3",
          "title": "Jingle Smells (Extended Mix)",
          "artist": "Pull My Finger",
          "duration": "1:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/02%20Sugar%20Rum%20Cherry%20(Dance%20of%20the%20Sugar%20Plum%20Fairy).mp3",
          "title": "Sugar Rum Cherry (Dance of the Sugar Plum Fairy)",
          "artist": "Duke Ellington",
          "duration": "3:07"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/03%20Christmas%20Time%20Is%20Here.mp3",
          "title": "Christmas Time Is Here",
          "artist": "Chomsky",
          "duration": "3:33"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/04%20Silent%20Night.mp3",
          "title": "Silent Night",
          "artist": "Craig Le Roq",
          "duration": "1:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/05%20Jingle%20Bells.mp3",
          "title": "Jingle Bells",
          "artist": "Tenchi Muyo",
          "duration": "3:03"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/06%20let%20it%20snow.mp3",
          "title": "let it snow",
          "artist": "bit shifter",
          "duration": "1:48"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/07%20Everything's%20Gonna%20Be%20Cool%20This%20Christmas.mp3",
          "title": "Everything's Gonna Be Cool This Christmas",
          "artist": "E",
          "duration": "3:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/08%20Snowflakes.mp3",
          "title": "Snowflakes",
          "artist": "Pizzicato Five",
          "duration": "2:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/09%20Candy%20Cane%20Children.mp3",
          "title": "Candy Cane Children",
          "artist": "White Stripes",
          "duration": "2:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/10%20Knockin%20Boots%20For%20Christmas.mp3",
          "title": "Knockin Boots For Christmas",
          "artist": "H-Town",
          "duration": "4:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/11%20El%20Cha%20Cha%20Cha%20De%20La%20Navidad.mp3",
          "title": "El Cha Cha Cha De La Navidad",
          "artist": "Celia Cruz",
          "duration": "2:30"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/12%20Santa%20Claus%20Is%20Coming%20To%20My%20House.mp3",
          "title": "Santa Claus Is Coming To My House",
          "artist": "DeVito, Karla",
          "duration": "2:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/13%20_Jingle%20Bells%20(Batman%20Smells)_.mp3",
          "title": "Jingle Bells (Batman Smells)",
          "artist": "Lay To Rest",
          "duration": "1:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/14%20Go%20Power%20at%20Christmas%20Time.mp3",
          "title": "Go Power at Christmas Time",
          "artist": "James Brown",
          "duration": "3:17"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/15%20Gee%20Whiz,%20It's%20Christmas.mp3",
          "title": "Gee Whiz, It's Christmas ",
          "artist": "Carla Thomas",
          "duration": "2:31"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/16%20The%20Hat%20I%20Got%20for%20Christmas%20Is%20Too%20Big.mp3",
          "title": "The Hat I Got for Christmas Is Too Big",
          "artist": "Speedy Gonzales - Mel Blanc",
          "duration": "2:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/17%20Jing%20Jing%20A%20Ling.mp3",
          "title": "Jing Jing A Ling",
          "artist": "Honey &amp; The Bees",
          "duration": "2:26"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/18%20The%20Only%20Gift%20That%20I%20Need.mp3",
          "title": "The Only Gift That I Need",
          "artist": "Dashboard Confessional",
          "duration": "2:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/19%20The%20Bell%20That%20Couldn't%20Jingle%20-%20Burt%20Bacharach.mp3",
          "title": "The Bell That Couldn't Jingle",
          "artist": "Burt Bacharach - 'Christmas",
          "duration": "2:34"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/20%20Do%20You%20Hear%20What%20I%20Hear_.mp3",
          "title": "Do You Hear What I Hear?",
          "artist": "Native Tongue",
          "duration": "3:49"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/21%20Put%20The%20Lights%20On%20The%20Tree.mp3",
          "title": "Put The Lights On The Tree",
          "artist": "Sufjan Stevens",
          "duration": "1:49"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/22%20It%20Happened%20In%20Sun%20Valley.mp3",
          "title": "It Happened In Sun Valley",
          "artist": "Randy Van Horne Singers",
          "duration": "2:04"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/23%20Thank%20You,%20Dreaded%20Black%20Ice.mp3",
          "title": "Thank You, Dreaded Black Ice",
          "artist": "Giant Sand",
          "duration": "3:30"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/24%20Yellin'%20At%20the%20Xmas%20Tree.mp3",
          "title": "Yellin' At the Xmas Tree",
          "artist": "Billy Idol",
          "duration": "4:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/25%20Jingle%20Bells%20(Greetings%20from%20Esquivel).mp3",
          "title": "Jingle Bells (Greetings from Esquivel)",
          "artist": "Esquivel",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2005/26%20Little%20Jack%20Frost%20Get%20Lost.mp3",
          "title": "Little Jack Frost Get Lost",
          "artist": "Frankie Carle &amp; Marjorie Hughes",
          "duration": "2:46"
        }
      ]
    },
    {
      "year": 2004,
      "number": 7,
      "title": "Santa's Little Helpers",
      "imageUrl": "images/2006/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2004/2004.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/01%20Snow%20Miser.mp3",
          "title": "Snow Miser",
          "artist": "Crash Vinyl",
          "duration": "1:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/02%20Peanuts.mp3",
          "title": "Peanuts",
          "artist": "Jeff Adkins",
          "duration": "2:04"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/03%20Baby%20It's%20Cold%20Outside.mp3",
          "title": "Baby It's Cold Outside",
          "artist": "Leon Redbone/Zooey Deschanel",
          "duration": "3:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/04%20Merry%20Christmas%20I%20Fucked%20Your%20Snowman.mp3",
          "title": "Merry Christmas I Fucked Your Snowman",
          "artist": "Showcase Showdown",
          "duration": "2:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/05%20Jingle%20Bells.mp3",
          "title": "Jingle Bells",
          "artist": "Bob Dalpe",
          "duration": "3:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/06%20It's%20Christmas%20Time%20(Celebrate).mp3",
          "title": "It's Christmas Time (Celebrate)",
          "artist": "Beat Symphony",
          "duration": "3:21"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/07%20Jingle%20Bells%20(Dan%20the%20Automator).mp3",
          "title": "Jingle Bells (Dan the Automator)",
          "artist": "Dean Martin",
          "duration": "2:47"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/08%20A%20Marshmellow%20World.mp3",
          "title": "A Marshmellow World",
          "artist": "Johnny Mathis",
          "duration": "2:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/09%20Christmas%20(Baby%20Please%20Come%20Home).mp3",
          "title": "Christmas (Baby Please Come Home)",
          "artist": "Death Cab for Cutie",
          "duration": "2:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/10%20Rudolph%20The%20Read-Nosed%20Reindeer%20(Japanese%20Version).mp3",
          "title": "Rudolph The Read-Nosed Reindeer (Japanese Version)",
          "artist": "Petty Booka",
          "duration": "2:50"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/11%20A%20Wonderful%20Christmas%20Time.mp3",
          "title": "A Wonderful Christmas Time",
          "artist": "[DARYL]",
          "duration": "3:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/12%20Christmas%20Rhapsody.mp3",
          "title": "Christmas Rhapsody",
          "artist": "Pledge Drive",
          "duration": "5:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/13%20River.mp3",
          "title": "River",
          "artist": "Travis",
          "duration": "3:53"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/14%20Jingle%20Bells%20Hop.mp3",
          "title": "Jingle Bells Hop",
          "artist": "Sharpshooters",
          "duration": "3:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/15%20White%20Christmas.mp3",
          "title": "White Christmas",
          "artist": "Zakk Wylde",
          "duration": "2:51"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/16%20O%20Holy%20Night.mp3",
          "title": "O Holy Night",
          "artist": "Kaki King",
          "duration": "3:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/17%20Blue%20Christmas.mp3",
          "title": "Blue Christmas",
          "artist": "Bright Eyes",
          "duration": "2:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/18%20Donde%20Esta%20Santa%20Claus.mp3",
          "title": "Donde Esta Santa Claus",
          "artist": "Augie Rios",
          "duration": "2:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/19%20I%20Believe%20In%20Father%20Christmas.mp3",
          "title": "I Believe In Father Christmas",
          "artist": "Greg Lake",
          "duration": "3:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/20%20Mele%20Kalikimaka.mp3",
          "title": "Mele Kalikimaka",
          "artist": "Nick Hexum From 311",
          "duration": "2:26"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/21%20Must%20Be%20Santa%20(Polka).mp3",
          "title": "Must Be Santa (Polka)",
          "artist": "Brave Combo",
          "duration": "4:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/22%20Last%20Christmas.mp3",
          "title": "Last Christmas",
          "artist": "Evil Beaver",
          "duration": "4:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/23%20Snowball.mp3",
          "title": "Snowball",
          "artist": "Jimmy Fallon",
          "duration": "1:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/24%20Little%20Toy%20Trains.mp3",
          "title": "Little Toy Trains",
          "artist": "Roger Miller",
          "duration": "2:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/25%20Just%20Like%20Christmas.mp3",
          "title": "Just Like Christmas",
          "artist": "Low",
          "duration": "3:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2004/26%20Most%20Wonderful%20Time%20of%20the%20Year.mp3",
          "title": "Most Wonderful Time of the Year",
          "artist": "In Memory",
          "duration": "2:21"
        }
      ]
    },
    {
      "year": 2003,
      "number": 6,
      "title": "Songs for the Steakhouse",
      "imageUrl": "images/2003/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2003/2003.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/01%20Leave%20a%20Message.mp3",
          "title": "Leave a Message",
          "artist": "Quad City DJ's",
          "duration": "0:39"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/02%20Frosty%20the%20Snowman.mp3",
          "title": "Frosty the Snowman",
          "artist": "Danny Kaye",
          "duration": "2:33"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/03%20The%20Sugar%20Plum%20Glutton.mp3",
          "title": "The Sugar Plum Glutton",
          "artist": "Starborg",
          "duration": "3:04"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/04%20Santa%20Train.mp3",
          "title": "Santa Train",
          "artist": "Patty Loveless",
          "duration": "2:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/05%20Christmas%20at%20the%20Zoo.mp3",
          "title": "Christmas at the Zoo",
          "artist": "Flaming Lips",
          "duration": "3:07"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/06%20Nuttin'%20for%20Christmas.mp3",
          "title": "Nuttin' for Christmas",
          "artist": "Spike Jones",
          "duration": "1:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/07%20I've%20Got%20My%20Love%20to%20Keep%20Me%20Warm%20(Stuhr%20Remix).mp3",
          "title": "I've Got My Love to Keep Me Warm (Stuhr Remix)",
          "artist": "Kay Starr",
          "duration": "3:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/08%20The%20Peppermint%20Stick%20Man.mp3",
          "title": "The Peppermint Stick Man",
          "artist": "Randall Reed &amp; The Forerunners",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/09%20Lil'%20Bass%20Boi.mp3",
          "title": "Lil' Bass Boi",
          "artist": "B-Fast And G-Slow",
          "duration": "3:34"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/10%20My%20Two%20Front%20Teeth.mp3",
          "title": "My Two Front Teeth",
          "artist": "Petty Booka",
          "duration": "2:39"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/11%20What%20Do%20The%20Lonely%20Do%20At%20Christmas.mp3",
          "title": "What Do The Lonely Do At Christmas",
          "artist": "The Emotions",
          "duration": "3:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/12%20Step%20Into%20Christmas.mp3",
          "title": "Step Into Christmas",
          "artist": "Elton John",
          "duration": "4:26"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/13%20Things%20I%20Want.mp3",
          "title": "Things I Want",
          "artist": "Tenacious D",
          "duration": "3:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/14%20Santa%20Came%20On%20A%20Nuclear%20Missile.mp3",
          "title": "Santa Came On A Nuclear Missile",
          "artist": "Heather Noel",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/15%20What%20I%20Want%20For%20Christmas.mp3",
          "title": "What I Want For Christmas",
          "artist": "Macy Gray",
          "duration": "3:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/16%20Santa%20Claus%20Is%20Back%20in%20Town.mp3",
          "title": "Santa Claus Is Back in Town",
          "artist": "The Mavericks",
          "duration": "3:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/17%20Who%20Took%20The%20Merry%20Out%20Of%20Christmas.mp3",
          "title": "Who Took The Merry Out Of Christmas",
          "artist": "The Staple Singers",
          "duration": "2:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/18%20Let%20It%20Snow!.mp3",
          "title": "Let It Snow!",
          "artist": "Trisha Yearw",
          "duration": "2:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/19%20Deck%20the%20Halls%20_%20Bring%20a%20Torch,%20Jeannette,%20Isabella.mp3",
          "title": "Deck the Halls / Bring a Torch, Jeannette, Isabella",
          "artist": "Smokey Robinson &amp; The Miracles",
          "duration": "4:07"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/20%20Dina-A-Ling,%20The%20Christmas%20Bell.mp3",
          "title": "Dina-A-Ling, The Christmas Bell",
          "artist": "Conway Twitty",
          "duration": "3:50"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/21%20The%20Christmas%20Song.mp3",
          "title": "The Christmas Song",
          "artist": "Jimmy Smith",
          "duration": "4:34"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/22%20Christmas%20Mem'ries.mp3",
          "title": "Christmas Mem'ries",
          "artist": "Rosemary Clooney",
          "duration": "3:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/23%20My%20Christmas%20List.mp3",
          "title": "My Christmas List",
          "artist": "Simple Plan",
          "duration": "3:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2003/24%20Rudolph%20the%20Red-Nosed%20Reindeer.mp3",
          "title": "Rudolph the Red-Nosed Reindeer",
          "artist": "Jack Johnson",
          "duration": "2:09"
        }
      ]
    },
    {
      "year": 2002,
      "number": 5,
      "title": "Oh Christmas Tree",
      "imageUrl": "images/2002/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2002/2002.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/01%20Holiday%20Road.mp3",
          "title": "Holiday Road",
          "artist": "Lindsey Buckingham",
          "duration": "2:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/02%20Glow%20Worm.mp3",
          "title": "Glow Worm",
          "artist": "Mel Torme",
          "duration": "3:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/03%20Bizarre%20Christmas%20Incident.mp3",
          "title": "Bizarre Christmas Incident",
          "artist": "Ben Folds Five",
          "duration": "2:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/04%20Rudolph%20the%20Red%20Nosed%20Reindeer.mp3",
          "title": "Rudolph the Red Nosed Reindeer",
          "artist": "Rosemary Clooney",
          "duration": "2:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/05%20Thank%20God%20It's%20Christmas.mp3",
          "title": "Thank God It's Christmas",
          "artist": "Queen",
          "duration": "4:21"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/06%20An%20Old%20Christmas%20Card.mp3",
          "title": "An Old Christmas Card",
          "artist": "Jim Reeves",
          "duration": "2:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/07%20Country%20Christmas.mp3",
          "title": "Country Christmas",
          "artist": "Loretta Lynn &amp; Conway Twitty",
          "duration": "2:07"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/08%20Let%20It%20Snow.mp3",
          "title": "Let It Snow",
          "artist": "unknown artist",
          "duration": "1:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/09%20If%20There's%20A%20God.mp3",
          "title": "If There's A God",
          "artist": "Smashing Pumpkins &amp; Radiohead",
          "duration": "3:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/10%20Merry%20Christmas%20Babt.mp3",
          "title": "Merry Christmas Babt",
          "artist": "Stevie Wonder &amp; Wyclef Jean",
          "duration": "5:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/11%20Mistletoe%20%26%20Holly.mp3",
          "title": "Mistletoe &amp; Holly",
          "artist": "Frank Sinatra",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/12%20God%20Rest%20Ye%20Merry%20Gentelman.mp3",
          "title": "God Rest Ye Merry Gentelman",
          "artist": "Barenaked Ladies &amp; Sarah McLachlan",
          "duration": "3:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/13%20Old%20Toy%20Trains.mp3",
          "title": "Old Toy Trains",
          "artist": "Nana Mouskouri",
          "duration": "2:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/14%20Winter%20Wonderland.mp3",
          "title": "Winter Wonderland",
          "artist": "Macy Gray",
          "duration": "2:57"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/15%20The%20Little%20Drummer%20Boy.mp3",
          "title": "The Little Drummer Boy",
          "artist": "Alex Lifeson",
          "duration": "3:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/16%20First%20Noel%20(I%20Like%20Christmas).mp3",
          "title": "First Noel (I Like Christmas)",
          "artist": "Eve 6",
          "duration": "2:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/17%20Good%20Old%20Fashioned%20Country%20Christmas.mp3",
          "title": "Good Old Fashioned Country Christmas",
          "artist": "Buck Owens",
          "duration": "2:39"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/18%20Sleigh%20Ride.mp3",
          "title": "Sleigh Ride",
          "artist": "Ronnettes",
          "duration": "3:08"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/19%20Tell%20Me%20%20A%20Story%20(About%20The%20Night%20Before).mp3",
          "title": "Tell Me  A Story (About The Night Before)",
          "artist": "Hilary Duff / Lil' Romeo",
          "duration": "3:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/20%20Have%20Yourself%20A%20Merry%20Little%20Christmas.mp3",
          "title": "Have Yourself A Merry Little Christmas",
          "artist": "Coldplay",
          "duration": "2:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/21%20Maybe%20Next%20Christmas.mp3",
          "title": "Maybe Next Christmas",
          "artist": "George  Jones",
          "duration": "2:13"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2002/22%20Happy%20Holiday's%20Y'all.mp3",
          "title": "Happy Holiday's Y'all",
          "artist": "Robert Earl Keen",
          "duration": "9:02"
        }
      ]
    },
    {
      "year": 2001,
      "number": 4,
      "title": "A Christmas Odyssey",
      "imageUrl": "images/2001/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2001/2001.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/01%20Ding%20Dong,%20Ding%20Dong.mp3",
          "title": "Ding Dong, Ding Dong",
          "artist": "George Harrison",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/02%20Sleigh%20Ride.mp3",
          "title": "Sleigh Ride",
          "artist": "Mel Torme",
          "duration": "2:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/03%20Back%20Door%20Santa.mp3",
          "title": "Back Door Santa",
          "artist": "Clarence Carter",
          "duration": "2:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/04%20Christmas%20Time.mp3",
          "title": "Christmas Time",
          "artist": "The Pretenders",
          "duration": "3:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/05%20Medly.mp3",
          "title": "Medly",
          "artist": "Henry Mancini",
          "duration": "3:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/06%20Christmas%20In%20Jamaica.mp3",
          "title": "Christmas In Jamaica",
          "artist": "Toni Braxton",
          "duration": "4:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/07%20Merry%20Christmas%20From%20The%20Family.mp3",
          "title": "Merry Christmas From The Family",
          "artist": "Robert Earl Keen",
          "duration": "3:57"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/08%20The%20Merry%20Christmas%20Polka.mp3",
          "title": "The Merry Christmas Polka",
          "artist": "Jim Reeves",
          "duration": "2:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/09%20Christmas%20At%20K-Mart.mp3",
          "title": "Christmas At K-Mart",
          "artist": "Root Boy Slim",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/10%20Hawaiian%20Christmas%20Song.mp3",
          "title": "Hawaiian Christmas Song",
          "artist": "Bing Crosby",
          "duration": "2:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/11%20All%20I%20Want%20For%20Christmas%20Is%20My%20Methadone.mp3",
          "title": "All I Want For Christmas Is My Methadone",
          "artist": "Lonelyland",
          "duration": "4:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/12%20Santa%20Looked%20A%20Lot%20Like%20Daddy.mp3",
          "title": "Santa Looked A Lot Like Daddy",
          "artist": "Buck Owens",
          "duration": "2:17"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/13%20Dominick%20The%20Italian%20Christmas%20Donkey.mp3",
          "title": "Dominick The Italian Christmas Donkey",
          "artist": "Lou Monte",
          "duration": "2:35"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/14%20White%20Christmas.mp3",
          "title": "White Christmas",
          "artist": "The Drifters",
          "duration": "2:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/15%20Hard%20Candy%20Christmas.mp3",
          "title": "Hard Candy Christmas",
          "artist": "Dolly Parton",
          "duration": "3:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/16%20I%20Want%20A%20Hippo%20For%20Christmas.mp3",
          "title": "I Want A Hippo For Christmas",
          "artist": "Gayla Peevey",
          "duration": "2:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/17%20Blue%20Christmas.mp3",
          "title": "Blue Christmas",
          "artist": "Miles Davis",
          "duration": "2:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/18%20Please%20Come%20Home%20For%20Christmas.mp3",
          "title": "Please Come Home For Christmas",
          "artist": "Aaron Neville",
          "duration": "2:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/19%20Father%20Christmas.mp3",
          "title": "Father Christmas",
          "artist": "The Kinks",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/20%20Christmas%20In%20Prison.mp3",
          "title": "Christmas In Prison",
          "artist": "John Prine",
          "duration": "3:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/21%20Christmas%20Rappin'.mp3",
          "title": "Christmas Rappin'",
          "artist": "Curtis Blow",
          "duration": "4:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2001/22%20Christmas%20Sucks.mp3",
          "title": "Christmas Sucks",
          "artist": "Tom Waits &amp; Peter Murphy",
          "duration": "2:56"
        }
      ]
    },
    {
      "year": 2000,
      "number": 3,
      "title": "Another Fruitcake",
      "imageUrl": "images/2000/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_2000/2000.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/01%20We%20Just%20Go%20Nuts%20At%20Christmastime.mp3",
          "title": "We Just Go Nuts At Christmastime",
          "artist": "They Might Be Giants",
          "duration": "1:23"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/02%20Have%20A%20Holly%20Jolly%20Christmas.mp3",
          "title": "Have A Holly Jolly Christmas",
          "artist": "Burl Ives",
          "duration": "2:20"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/03%20Little%20Drummer%20Boy.mp3",
          "title": "Little Drummer Boy",
          "artist": "Love Spirals Downwards",
          "duration": "4:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/04%20We're%20A%20Couple%20Of%20Misfits.mp3",
          "title": "We're A Couple Of Misfits",
          "artist": "Rudolph &amp; The Dentist Elf",
          "duration": "1:25"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/05%20Carol%20Of%20The%20Bells.mp3",
          "title": "Carol Of The Bells",
          "artist": "Harry Connick Jr",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/06%20Spread%20A%20Little%20Love%20On%20Christmas%20Day.mp3",
          "title": "Spread A Little Love On Christmas Day",
          "artist": "Destiny's Child",
          "duration": "3:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/07%20I%20Say%20Mommy%20Kissing%20Santa%20Claus.mp3",
          "title": "I Say Mommy Kissing Santa Claus",
          "artist": "Tenchi-Muyo! (Sasami)",
          "duration": "3:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/08%20I%20Bought%20You%20A%20Plastiic%20Star.mp3",
          "title": "I Bought You A Plastiic Star",
          "artist": "Michael Franks",
          "duration": "5:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/09%20Santa%20Baby.mp3",
          "title": "Santa Baby",
          "artist": "Rev Run &amp; The Christmas All-Stars",
          "duration": "4:06"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/10%20Merry%20Christmas.mp3",
          "title": "Merry Christmas",
          "artist": "The Ramones",
          "duration": "2:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/11%20Last%20Christmas.mp3",
          "title": "Last Christmas",
          "artist": "Wham!",
          "duration": "6:48"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/12%20Christmas%20In%20The%20City.mp3",
          "title": "Christmas In The City",
          "artist": "Mary J Blige",
          "duration": "4:40"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/13%20O'%20Holly%20Night.mp3",
          "title": "O' Holly Night",
          "artist": "N'Sync",
          "duration": "3:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/14%20Careless%20Santa.mp3",
          "title": "Careless Santa",
          "artist": "Mondo Puff",
          "duration": "2:18"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/15%20I%20Don't%20Have%20A%20Christmas%20Tree.mp3",
          "title": "I Don't Have A Christmas Tree",
          "artist": "Mark Mothersbaugh",
          "duration": "5:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/16%20Up%20On%20The%20House%20Top.mp3",
          "title": "Up On The House Top",
          "artist": "The Jackson 5",
          "duration": "3:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/17%20My%20First%20Christmas%20As%20A%20Woman.mp3",
          "title": "My First Christmas As A Woman",
          "artist": "The Vandals",
          "duration": "2:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/18%20Lonely%20Christmas%20Eve.mp3",
          "title": "Lonely Christmas Eve",
          "artist": "Ben Folds Five",
          "duration": "3:22"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/19%20Jesus%20Was%20A%20Dreidel%20Spinner.mp3",
          "title": "Jesus Was A Dreidel Spinner",
          "artist": "Jill Sobule",
          "duration": "2:29"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_2000/20%20Christmas%20Day.mp3",
          "title": "Christmas Day",
          "artist": "Dido",
          "duration": "4:03"
        }
      ]
    },
    {
      "year": 1999,
      "number": 2,
      "title": "Worse Than Fruitcake",
      "imageUrl": "images/1999/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_1999/1999.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/01%20Xmas%20On%20A%20Boat.mp3",
          "title": "Xmas On A Boat",
          "artist": "Coin",
          "duration": "0:32"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/02%20Merry%20Christmas%20From%20The%20Family%201.mp3",
          "title": "Merry Christmas From The Family",
          "artist": "Jill Sobule",
          "duration": "4:26"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/03%20All%20I%20Want%20For%20Ismas.mp3",
          "title": "All I Want For Ismas",
          "artist": "Jacob Mille &amp; Ray I",
          "duration": "2:59"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/04%20(Everybody's%20Waiting%20For)%20The%20Man%20With%20The%20Bag.mp3",
          "title": "(Everybody's Waiting For) The Man With The Bag",
          "artist": "Kay Starr",
          "duration": "2:44"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/05%20Millie%20Pulled%20A%20Pistol%20On%20Santa.mp3",
          "title": "Millie Pulled A Pistol On Santa",
          "artist": "The Roots",
          "duration": "4:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/06%20Carolina%20Christmas.mp3",
          "title": "Carolina Christmas",
          "artist": "Squirrel Nut Zippers",
          "duration": "1:54"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/07%20Frosty%20The%20Snowman.mp3",
          "title": "Frosty The Snowman",
          "artist": "Cocteau Twins",
          "duration": "3:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/08%20Overture.mp3",
          "title": "Overture",
          "artist": "Duke Ellington",
          "duration": "3:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/09%20Christmas%20Wrapping.mp3",
          "title": "Christmas Wrapping",
          "artist": "The Waitresses",
          "duration": "5:26"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/10%20The%20Christmas%20Song.mp3",
          "title": "The Christmas Song",
          "artist": "Mel Torme",
          "duration": "2:11"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/11%2025th%20December.mp3",
          "title": "25th December",
          "artist": "Everything But The Girl",
          "duration": "4:05"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/12%20Baby%20It's%20Cold%20Outside.mp3",
          "title": "Baby It's Cold Outside",
          "artist": "Dean Martin",
          "duration": "2:24"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/13%20Fairytale%20Of%20New%20York%20(Featuring%20Kristy%20MacColl).mp3",
          "title": "Fairytale Of New York (Featuring Kristy MacColl)",
          "artist": "The Pogue",
          "duration": "4:35"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/14%20God%20Rest%20Ye%20Merry%20Gentleman.mp3",
          "title": "God Rest Ye Merry Gentleman",
          "artist": "Viva Voce",
          "duration": "2:11"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/15%20One%20Christmas%20Catalog.mp3",
          "title": "One Christmas Catalog",
          "artist": "Captain Sensible",
          "duration": "4:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/16%20What%20Will%20Santa%20Claus%20Say%20When%20He%20Finds%20Everybody%20Swinging_.mp3",
          "title": "What Will Santa Claus Say When He Finds Everybody Swinging?",
          "artist": "Louis Prima",
          "duration": "3:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/17%20Christmas.mp3",
          "title": "Christmas",
          "artist": "The Posies",
          "duration": "3:56"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/18%20Deck%20The%20Halls%20With%20Boogie%20Woogie.mp3",
          "title": "Deck The Halls With Boogie Woogie",
          "artist": "Katie Webster",
          "duration": "3:01"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/19%20You're%20A%20Mean%20One%20Mr.%20Grinch.mp3",
          "title": "You're A Mean One Mr. Grinch",
          "artist": "Sixpence None The Richer",
          "duration": "3:08"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/20%20Santa%20Claus%20Goes%20Straight%20To%20The%20Ghetto%20(Featuring%20Nate%20Dogg).mp3",
          "title": "Santa Claus Goes Straight To The Ghetto (Featuring Nate Dogg)",
          "artist": "Snoop Doggy Dogg",
          "duration": "5:52"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/21%20Rudolph%20The%20Manic%20Reindeer.mp3",
          "title": "Rudolph The Manic Reindeer",
          "artist": "Los Lobos",
          "duration": "1:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1999/22%20The%20Most%20Offensive%20Song%20Ever.mp3",
          "title": "The Most Offensive Song Ever",
          "artist": "Kenny McCormic &amp; Mr. Hankey",
          "duration": "3:00"
        }
      ]
    },
    {
      "year": 1998,
      "number": 1,
      "title": "The Begining",
      "imageUrl": "images/1998/cover.jpeg",
      "packageUrl": "http://example.org/mp3s/xmas/xmas_1998/1998.zip",
      "songs": [
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/01%20Heat%20Miser.mp3",
          "title": "Heat Miser",
          "artist": "Heat Miser (from The Year Without Santa Claus)",
          "duration": "1:55"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/02%20Papa%20Noel.mp3",
          "title": "Papa Noel",
          "artist": "Brenda Lee",
          "duration": "2:28"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/03%20Christmas%20in%20Hollis.mp3",
          "title": "  Christmas in Hollis",
          "artist": "Run DMC",
          "duration": "3:00"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/04%20Daddy's%20Drinking%20Up%20Our%20Christmas.mp3",
          "title": "  Daddy's Drinking Up Our Christmas",
          "artist": "Commander Cody",
          "duration": "2:34"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/05%20Little%20Drummer%20Boy.mp3",
          "title": "  Little Drummer Boy",
          "artist": "The Dandy Warhols",
          "duration": "3:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/06%20Jingle%20Bells.mp3",
          "title": "  Jingle Bells",
          "artist": "Herb Alpert &amp; The Tijuana Brass Band",
          "duration": "2:37"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/07%20Christmas%20in%20the%20Congo.mp3",
          "title": "  Christmas in the Congo",
          "artist": "The Marquees",
          "duration": "2:18"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/08%20Here%20Comes%20Santa%20Claus.mp3",
          "title": "  Here Comes Santa Claus",
          "artist": "Elvis",
          "duration": "1:58"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/09%20Drummer%20Boy.mp3",
          "title": "  Drummer Boy",
          "artist": "Michigan &amp; Smiley",
          "duration": "3:41"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/10%20Frosty%20the%20Snowman.mp3",
          "title": "  Frosty the Snowman",
          "artist": "Elle Fitzgerald",
          "duration": "2:14"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/11%20Keegan's%20Christmas.mp3",
          "title": "  Keegan's Christmas",
          "artist": "Marcy Playground",
          "duration": "2:45"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/12%20Santa%20Baby.mp3",
          "title": "  Santa Baby",
          "artist": "Madonna",
          "duration": "2:36"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/13%20Merry%20Christmas%20Baby.mp3",
          "title": "  Merry Christmas Baby",
          "artist": "Southern Culture on the Skids",
          "duration": "3:12"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/14%20Merry%20Xmess.mp3",
          "title": "  Merry Xmess",
          "artist": "Sun 60",
          "duration": "4:27"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/15%20Santa%20Claus%20is%20Coming%20to%20Town%20(with%20Cindi%20Lauper).mp3",
          "title": "  Santa Claus is Coming to Town (with Cindi Lauper)",
          "artist": "Frank Sinatra",
          "duration": "2:39"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/16%20Millie%20Pulled%20a%20Pistol%20on%20Santa.mp3",
          "title": "  Millie Pulled a Pistol on Santa",
          "artist": "De La Soul",
          "duration": "4:09"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/17%20Po'%20Folks%20Christmas.mp3",
          "title": "  Po' Folks Christmas",
          "artist": "Bill Anderson",
          "duration": "3:16"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/18%20Sleigh%20Ride.mp3",
          "title": "  Sleigh Ride",
          "artist": "Squirrel Nut Zippers",
          "duration": "3:11"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/19%20The%20Little%20Drum%20Machine%20Boy.mp3",
          "title": "  The Little Drum Machine Boy",
          "artist": "Beck",
          "duration": "7:02"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/20%20The%20Night%20Before%20Christmas.mp3",
          "title": "  The Night Before Christmas",
          "artist": "Carly Simon",
          "duration": "3:42"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/21%20Amazing%20Grace.mp3",
          "title": "  Amazing Grace",
          "artist": "Ted Hawkins",
          "duration": "3:43"
        },
        {
          "url": "http://example.org/mp3s/xmas/xmas_1998/22%20Hallelujah!.mp3",
          "title": "  Hallelujah!",
          "artist": "Handel",
          "duration": "3:56"
        }
      ]
    }
  ];



});
