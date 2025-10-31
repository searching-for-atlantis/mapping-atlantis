  <script>
        document.addEventListener("DOMContentLoaded", function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show(); // Show the modal when the page loads
    });
var map = L.map('map').setView([55.860916,-4.251433], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([55.861717, -4.2417]).addTo(map);
marker.bindPopup("<b><center>Strathclyde University</center></b>I'm a great place :).");
  </script>