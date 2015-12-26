var MyService = function () {
};

MyService.prototype.getPersons = function (callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", "persons.json", true); // true for asynchronous
    xmlHttp.send(null);
};