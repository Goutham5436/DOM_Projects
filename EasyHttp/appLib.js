function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//make an HTTP GET Request
easyHTTP.prototype.get= function(url, callback){
this.http.open('GET', url, true);

let self = this;
this.http.onload = function(){
    if(self.http.status === 200){
        callback(null, self.http.responseTex);
    }else {
        console.log('Error' + self.http.status)
    }
}
this.http.send();

}
//make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
            callback(null, self.http.responseTex);
    }
    this.http.send(JSON.stringify(data))
}

//make an HTTP PUT Request
//make an HTTP DELETE Request