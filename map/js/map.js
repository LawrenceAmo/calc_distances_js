// default coordinates Durban And Pinetown Coordinates
function calcDis(){
var dis1 = new google.maps.LatLng(29.8587, 31.0218);
var dis2 = new google.maps.LatLng(29.8345, 30.8384); 
// The distance is in KMs( DEFAULT )
function calcDistance(dis1, dis2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(dis1, dis2) / 1000).toFixed(2);
}
var dis = calcDistance(dis1, dis2);

document.getElementById("dis").innerHTML ="your total Distance is: "+ dis+" km";
}