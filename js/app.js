function myMap() {

  var mapProp= {
      center: new google.maps.LatLng(43.8041, -120.5542),
      zoom:4,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  //large list of major airport hubs in the US
  //google places api has limitations of 50000 meters from location
  //google places api also has limitations on the airport type query as any vendor in the US can label themselves as an airport
  
  var lga = {
    info: 'LaGuardia Airport - LGA',
    lat: 40.7769,
    long: -73.8740
  };

  var phx = {
    info: 'Phoenix Sky Harbor - PHX',
    lat: 33.4373,
    long: -112.0078
  };

  var anc = {
    info: 'Ted Stevens Anchorage - ANC',
    lat: 61.173095999999994,
    long: -149.98060199999998
  };

  var sfo = {
    info: 'San Francisco - SFO',
    lat: 37.61493200000001,
    long: -122.38942599999996
  };

  var lax = {
    info: 'Los Angeles - LAX',
    lat: 33.94031199999999,
    long: -118.404179
  };

  var oak = {
    info: 'Oakland - OAK',
    lat: 37.722705000000005,
    long: -122.220526
  };

  var mia = {
    info: 'Miami - MIA',
    lat: 25.79622800000002,
    long: -80.27524
  };

  var fll = {
    info: 'Ft. Lauderdale-Holloywood - FLL',
    lat: 26.076158000000007,
    long: -80.15205900000001
  };

  var mco = {
    info: 'Orlando - MCO',
    lat: 28.430453,
    long: -81.31266099999999
  };

  var mco = {
    info: 'Orlando - MCO',
    lat: 28.430453,
    long: -81.31266099999999
  };

  var atl = {
    info: 'Hartsfield-Jackson Atlanta - ATL',
    lat: 33.64039000000003,
    long: -84.44352200000003
  };

  var hnl = {
    info: 'Honolulu - HNL',
    lat: 21.33244200000001,
    long: -157.92042700000002
  };

  var hog = {
    info: 'Kahului - HOG',
    lat: 20.891715999999988,
    long: -156.437774
  };

  var hko = {
    info: 'Kona - HKO',
    lat: 19.738963999999992,
    long: -156.04365300000006
  };

  var ord = {
    info: 'O Hare - ORD',
    lat: 41.973351,
    long: -87.90338500000001
  };

  var mdw = {
    info: 'Chicago Midway - MDW',
    lat: 41.78592400000004,
    long: -87.7526239999999
  };

  var cvg = {
    info: 'Cincinnati/Northern Kentucky - CVG',
    lat: 39.054465000000036,
    long: -84.66894199999996
  };

  var bwi = {
    info: 'Baltimore/Washington International Thurgood Marshall - BWI',
    lat: 39.17815500000001,
    long: -76.671381
  };

  var bos = {
    info: 'Logan - BOS',
    lat: 42.366446,
    long: -71.01771400000001
  };

  var dtw = {
    info: 'Detroit Metropolitan Wayne County - DTW',
    lat: 42.21215599999999,
    long: -83.351069
  };

  var msp = {
    info: 'Minneapolis-Saint Paul - MSP',
    lat: 44.88124699999998,
    long: -93.204632
  };

  var mci = {
    info: 'Kansas City - MCI',
    lat: 39.29851900000002,
    long: -94.71250499999996
  };

  var las = {
    info: 'McCarren - LAS',
    lat: 36.07939100000003,
    long: -115.14962200000002
  };

  var ewr = {
    info: 'Newerk Liberty - EWR',
    lat: 40.85528013658323,
    long: -73.51521443945313
  };

  var jfk = {
    info: 'John F. Kennedy - JFK',
    lat: 40.643826000000026,
    long: -73.78146200000003
  };

  var clt = {
    info: 'Charlotte Douglas - CLT',
    lat: 35.21888000000003,
    long: -80.94334600000002
  };

  var cle = {
    info: 'Cleveland Hopkins - CLE',
    lat: 41.41226100000003,
    long: -81.835127
  };

  var pdx = {
    info: 'Portland - PDX',
    lat: 45.587422000000025,
    long: -122.59941099999998
  };

  var phl = {
    info: 'Philadelphia - PHL',
    lat: 39.86898400000002,
    long: -75.24507499999999
  };

  var mem = {
    info: 'Memphis - MEM',
    lat: 35.049842,
    long: -89.97951499999999
  };

  var dfw = {
    info: 'Dallas/Fort Worth - DFW',
    lat: 32.897836000000034,
    long: -97.03577000000001
  };

  var dal = {
    info: 'Dallas Love Field - DAL',
    lat: 32.84457700000002,
    long: -96.85283700000002
  };

  var iah = {
    info: 'George Bush - IAH',
    lat: 29.983664999999984,
    long: -95.34359
  };

  var hou = {
    info: 'Houston Hobby - HOU',
    lat: 29.64722800000002,
    long: -95.279131
  };

  var dfw = {
    info: 'Dallas/Fort Worth - DFW',
    lat: 32.897836000000034,
    long: -97.03577000000001
  };

  var slc = {
    info: 'Salt Lake City - SLC',
    lat: 40.78720900000001,
    long: -111.97508800000003
  };

  var iad = {
    info: 'Washington Dulles - IAD',
    lat: 38.94774099999999,
    long: -77.45504399999999
  };

  var dca = {
    info: 'Ronald Reagan - DCA',
    lat: 38.84628599999999,
    long: -77.038994
  };

  var sea = {
    info: 'Seattle-Tacoma - SEA',
    lat: 47.448197,
    long: -122.30747200000002
  };

  var mke = {
    info: 'General Mitchell - MKE',
    lat: 42.94501400000001,
    long: -87.90103899999997
  };

  var abq = {
    info: 'Albuquerque International Sunport - ABQ',
    lat: 35.0433,
    long: -106.6129
  }

  var dia = {
    info: 'Denver International Airport - DIA',
    lat: 39.8561,
    long: -104.6737
  }

  var gri = {
    info: 'Central Nebraska Regional Airport - GRI',
    lat: 40.9703,
    long: -98.3183
  }

  var abr = {
    info: 'Aberdeen Regional Airport - ABR',
    lat: 45.4535,
    long: -98.4177
  }

  var bil = {
    info: 'Billings Logan International Airport - BIL',
    lat: 45.8079,
    long: -108.5418
  }

  var locations = [
    [lga.info, lga.lat, lga.long, 0],
    [phx.info, phx.lat, phx.long, 1],
    [anc.info, anc.lat, anc.long, 2],
    [sfo.info, sfo.lat, sfo.long, 3],
    [lax.info, lax.lat, lax.long, 4],
    [oak.info, oak.lat, oak.long, 5],
    [mia.info, mia.lat, mia.long, 6],
    [fll.info, fll.lat, fll.long, 7],
    [mco.info, mco.lat, mco.long, 8],
    [atl.info, atl.lat, atl.long, 9],
    [hnl.info, hnl.lat, hnl.long, 10],
    [hog.info, hog.lat, hog.long, 11],
    [hko.info, hko.lat, hko.long, 12],
    [ord.info, ord.lat, ord.long, 13],
    [mdw.info, mdw.lat, mdw.long, 14],
    [cvg.info, cvg.lat, cvg.long, 15],
    [bwi.info, bwi.lat, bwi.long, 16],
    [bos.info, bos.lat, bos.long, 17],
    [dtw.info, dtw.lat, dtw.long, 18],
    [msp.info, msp.lat, msp.long, 19],
    [mci.info, mci.lat, mci.long, 20],
    [las.info, las.lat, las.long, 21],
    [ewr.info, ewr.lat, ewr.long, 22],
    [jfk.info, jfk.lat, jfk.long, 23],
    [clt.info, clt.lat, clt.long, 24],
    [cle.info, cle.lat, cle.long, 25],
    [pdx.info, pdx.lat, pdx.long, 26],
    [phl.info, phl.lat, phl.long, 27],
    [mem.info, mem.lat, mem.long, 28],
    [dfw.info, dfw.lat, dfw.long, 29],
    [dal.info, dal.lat, dal.long, 30],
    [iah.info, iah.lat, iah.long, 31],
    [hou.info, hou.lat, hou.long, 32],
    [slc.info, slc.lat, slc.long, 33],
    [iad.info, iad.lat, iad.long, 34],
    [dca.info, dca.lat, dca.long, 35],
    [sea.info, sea.lat, sea.long, 36],
    [mke.info, mke.lat, mke.long, 37],
    [abq.info, abq.lat, abq.long, 38],
    [dia.info, dia.lat, dia.long, 39],
    [gri.info, gri.lat, gri.long, 40],
    [abr.info, abr.lat, abr.long, 41],
    [bil.info, bil.lat, bil.long, 42]
  ];


  //autocomplete library 
  new autoComplete({
    selector: 'input#point1',
    minChars: 1,
    source: function(term, suggest){
        var term = term.toLowerCase();
        var choices = locations;
        var matches = [];
        for (i = 0; i < choices.length; i++)
            if (~choices[i][0].toLowerCase().indexOf(term)) matches.push(choices[i][0]);
        suggest(matches);
    }
  });

  new autoComplete({
    selector: 'input#point2',
    minChars: 1,
    source: function(term, suggest){
        var term = term.toLowerCase();
        var choices = locations;
        var matches = [];
        for (i = 0; i < choices.length; i++)
            if (~choices[i][0].toLowerCase().indexOf(term)) matches.push(choices[i][0]);
        suggest(matches);
    }
  });

  //marker object 
  var marker, i;

  //google infowindow object
  var infowindow = new google.maps.InfoWindow({});

  //goes through the locations array to place the markers
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

  // var for storing the input information
  var x;
  var y;

  //general jquery methods 
  //determines the distance between two points from the locations array
  //plots two points 
  $('#button').on('click', function(){

    x = $('#point1').val();
    y = $('#point2').val();

    //using underscore to find the result from the input
    var value1 = _.find(locations, function(num) {
      return num[0] == x;
    });

    //using underscore to find the result from the second input
    var value2 = _.find(locations, function(num) {
      return num[0] == y;
    });

    //Find the distance between two points
    var p1 = new google.maps.LatLng(value1[1], value1[2]);
    var p2 = new google.maps.LatLng(value2[1], value2[2]);

    //calculates distance between two points in km's
    function calcDistance(p1, p2) {
      return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }

    //converts km's into nautical miles
    var results = (calcDistance(p1, p2) / 1.852 + " " + '<div class="highlight">'+ "Nautical Miles" + '</div>');

    //renders line between two plots
    var line = new google.maps.Polyline({
        path: [
            new google.maps.LatLng(value1[1], value1[2]), 
            new google.maps.LatLng(value2[1], value2[2])
        ],
        strokeColor: "#ff8a07",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        map: map
    });

    //appending distance results to the dom
    $('#results').append(results);
  });

  //external link providing directions
  $('#google-btn').on('click', function(){

    x = $('#point1').val();
    y = $('#point2').val();

    //storing generic google maps url that will add the address names from the locations array
    var googleDirection = "https://www.google.com/maps/dir/" + x + "/" + y;

    //appending link to page
    $('.link').attr("href", googleDirection);
  });
 
}
