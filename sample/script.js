document.getElementById('button').addEventListener('click',loaddata)

function loaddata(){
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML =`<h1>${this.responseText}</h1>`;
        }   
     }
     xhr.onerror=function(){
        alert('Request error')
     }
     xhr.send();
}
