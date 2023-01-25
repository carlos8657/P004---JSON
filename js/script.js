function ajax_cargar_datos(){
        
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    http.onreadystatechange = function(){
        // Validar la respuesta
        if(this.status > 200 || this.readyState == 4){
            let res = document.getElementById("caja");
            // Convertir en formato JSON para hacer objetos
            const json = JSON.parse(this.responseText);
            for(const dato of json){
                if(dato.albumId == 1){
                    res.innerHTML += dato.albumId + dato.id + dato.title + "<a href='"+ dato.url +"'><img src='" + dato.thumbnailUrl + "'></a>" + "<br>";
                    
                }
            
            }


        }

        
    }

    http.open('GET',url);
    http.send();
}

window.onload = ajax_cargar_datos();