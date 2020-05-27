function ajaxRequest(type,url){
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload = () => {
        switch(xhr.status){
            case 200:
            case 201: console.log(xhr.responseText);

                break; 
            default: console.log("text");
        }
    };

    xhr.send();
}

function main(){
    ajaxRequest('Get','php/time.php');
}
main();