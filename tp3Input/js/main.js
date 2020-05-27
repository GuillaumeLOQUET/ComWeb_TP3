function ajaxRequest(type,url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () => {
        switch (xhr.status){
            case 200:
            case 201: callback(xhr.responseText);
            break;
            default: callback(xhr.status);
        }
    };

    xhr.send();
}

function update(text){

    document.getElementById('timestamp').innerHTML = text;
}

function errorMessage(error){
    let message;
    console.log('test');
    switch(error){
        case 400:
            message = '400: Requête incorrecte';
            break;
        case 401:
            message = '401: Authentifiez vous';
            break;
        case 403:
            message = '403: Accès refusé';
            break;
        case 404:
            message = '404: Page non trouvée';
            break;
        case 500:
            message = '500: Erreur interne du serveur';
            break;
        case 503:
            message = '503: Service indisponible';
            break;
    }
    document.getElementById('errors').innerHTML = '<span class="material-icons">error</span>' + message;
    document.getElementById('errors').style.display = null;
}

function main(){

    //setInterval(ajaxRequest,1000,'GET','php/timestamp.php',update);
    setInterval(ajaxRequest,1000,'GET','php/time.php',update);
    //setInterval(ajaxRequest,1000,'GET','php/errors.php',errorMessage);
    

}

main();