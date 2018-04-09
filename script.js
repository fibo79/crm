class mapupdater {
    constructor() {
        var lat = 34.43, longi = 35.84;
        var mymap = L.map('mapid').setView([lat, longi], 8);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);


        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'positions.json', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                //alert(xhr.responseText);
                var items = JSON.parse(xhr.responseText);

                var lat1, longi1;
                for (var i = 0; i < items.length; i++) {
                    console.log(items[i].info_parrainage.name);
                    lat1 = items[i].info_parrainage.coordinates[0];
                    longi1 = items[i].info_parrainage.coordinates[1];
                   /*  L.circle([lat1, longi1], { radius: 5000 }, {
                        color: 'yellow',
                        fillColor: 'yellow',
                        fillOpacity: 0.9
                    }).addTo(mymap).bindPopup("Here is " + items[i].info_parrainage.name); */
                    var marker = L.marker([lat1, longi1]).addTo(mymap).bindPopup("La ville de " + items[i].info_parrainage.name
                    +'<table class="table table-sm">'
       
          
       
        + '<tbody>'
          + '<tr>'
            + '<th scope="row">Nom du Maire</th>'
           +  '<td>' + items[i].info_parrainage.maire + '</td>'
           
          + '</tr>'
          + '<tr>'
            + '<th scope="row">Téléphone</th>'
             + '<td>' + items[i].info_parrainage.Tel + '</td>'
            
          + '</tr>'
         +  '<tr>'
            + '<th scope="row">Email </th>'
           +  '<td>' + items[i].info_parrainage.Email + '</td>'
            
          + '</tr>'
          +  '<tr>'
            + '<th scope="row">accepte parrainage</th>'
           +  '<td>' + items[i].info_parrainage.parrainage + '</td>'
            
          + '</tr>'
          +  '<tr>'
            + '<th scope="row">adresse </th>'
           +  '<td>' + items[i].info_parrainage.adresse + '</td>'
            
          + '</tr>'
         
          +  '<tr>'
          + '<th scope="row">Website </th>'
         +  '<td> <a href="http://'+items[i].info_parrainage.url+'">'+ items[i].info_parrainage.url+'</a> </td>'
          
        + '</tr>'
		 +  '<tr>'
         +  '<button type="button" class="btn btn-info"><a href="#">Modifier</button>'
          
        + '</tr>'
        + '</tbody>'
      + '</table>'
                    ).openPopup();

                    /* if (items[i].info_parrainage.parrainage <= 35%) {

                    } else if (items[i].info_parrainage.parrainage <=95%) {
                        
                    } else {
                    } */

                }
                mymap.flyTo([lat1, longi1], 5);
            }
        }


    }
}
