// --------------------------------------------------------
//
// This file is to configure the configurable settings.
//settings.js houses alot of the functions for this script
// Load this file before script.js file at gmap.html.
//defalt settings can change in settings page
function set_reset() {
    storevalue('flightawareshow','true');
    storevalue('fr24show','true');
    storevalue('flightstatsshow','true');
    storevalue('maplat','30.384');
    storevalue('maplon','262.300');
    storevalue('sitelat','30.384');
    storevalue('sitelon','262.294');
    storevalue('1r','0');//active planes red of rgb
    storevalue('1g','255');//active planes green in rgb
    storevalue('1b','0');//active planes blue in rgb
    storevalue('2r','255');//slected planes red in rgb
    storevalue('2g','255');//slected planes green in rgb
    storevalue('2b','255');//slected planes blue in rgb
    storevalue('3r','255');//non active planes red in rgb
    storevalue('3g','0');//non active planes green in rgb
    storevalue('3b','0');//non active planes blue in rgb
    storevalue('metric',null);
    storevalue('showsite','true');
    storevalue('showcircles','true');
    storevalue('airplanemarker_showextended','true');
    storevalue('airplanemarker_showtext','true');
    storevalue('zoom',9);
    storevalue('darkmode','false');
    return true;
}
// --------------------------------------------------------
// -- Output Settings -------------------------------------
// Show metric values
Metric = getvalue('metic'); // true or false in settings page defalt here

// -- Map settings ----------------------------------------
// The Latitude and Longitude in decimal format
if( getvalue('maplat') !== null && getvalue('maplon')!== null) {
   CONST_CENTERLAT = getvalue('maplat');//map latitude
   CONST_CENTERLON = getvalue('maplon');//map longitude
 }else{
   set_reset();
   location.reload();
 }
CONST_ZOOMLVL   = 9;//map zoom
StandardMapType = 'OSM2'; // mapType[google.maps.MapTypeId.ROADMAP|google.maps.MapTypeId.TERRAIN|google.maps.MapTypeId.SATELLITE|'OSM'|'OSM2'|'OAIP'|'dark_map']. google mapTypeIDs without ' ' eg. google.maps.MapTypeId.ROADMAP

// -- Marker settings -------------------------------------
// The default marker color all in settings page defalt goes here
mR = getvalue('1r');//marker red
mG = getvalue('1g');//marker green
mB = getvalue('1b');//marker blue
seR = getvalue('2r');//slected red
seG = getvalue('2g');//slected green
seB = getvalue('2b');//slected blue
stR = getvalue('3r');//stale red
stG = getvalue('3g');//stale green
stB = getvalue('3b');//stale blue
MarkerColor	= 'rgb('+mR+','+mG+','+mB+')';
SelectedColor	= 'rgb('+seR+','+seG+','+seB+')';
StaleColor	= 'rgb('+stR+','+stG+','+stB+')';

// -- flight info  look up Settings -----------------------

flightawareshow = getvalue('flightawareshow');
fr24show = getvalue('fr24show');
flightstatsshow = getvalue('flightstatsshow');

//settings settings
darkmode = getvalue('darkmode');

// -- Site Settings ---------------------------------------
SiteShow    = getvalue('showsite'); 
SiteCircles = getvalue('showcircles');

// The Latitude and Longitude in decimal format
SiteLat     = getvalue('sitelat');
SiteLon     = getvalue('sitelon');

// In nautical miles or km (depending settings value 'Metric')
SiteCirclesDistances = new Array(5,10,15,20,25,30,35,40,45,50,55,60);

// Extended Airplane Marker
airplanemarker_showextended = getvalue('airplanemarker_showextended'); 
airplanemarker_showtext     = getvalue('airplanemarker_showtext'); 

// Settings darkmode
settingdark = getvalue('darksettings');
