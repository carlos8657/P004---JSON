function ajax_cargar_datos(){
        
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    http.onreadystatechange = function(){
        // Validar la respuesta
        if(this.status > 200 || this.readyState == 4){
            let res = document.getElementById("contenedor");
            // Convertir en formato JSON para hacer objetos
            const json = JSON.parse(this.responseText);
            for(const dato of json){
                if(dato.albumId == 1){
                    res.innerHTML +="<div class='caja'>" + "<div class ='albumId'><h2>Almbum ID: "+ dato.albumId +"</h2></div>" 
                    + "<div class ='id'><h2>ID: "+ dato.id + "</h2></div>" + "<div class ='titulo'><h2>Titulo: "+ dato.title + "</h2></div>" 
                    +"<a href='"+ dato.url +"'><img src='" + dato.thumbnailUrl + "'></a>" + "<br>" +"</div>";
        
                }
            
            }


        }

        
    }

    http.open('GET',url);
    http.send();
}

document.getElementById("btnCargar").addEventListener("click",function(){
    ajax_cargar_datos();
})

document.getElementById("btnLimpiar").addEventListener("click",function(){
    document.getElementById('contenedor').innerHTML = "";
})