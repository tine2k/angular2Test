"use strict";

(function () {
    var MonitorComponent = ng
        .Component({
            selector: 'monitor',
            templateUrl: 'monitor.html',
            directives: [ng.NgFor, ng.NgIf]
        })
        .Class({
            constructor: [MyService, function (myService) {
                this.myName = "Alice";
                this.persons = myService.query(3);

                var that = this;
                setInterval(function () {
                    that.persons.push({
                        name: 'Seppi',
                        age: 56
                    });
                }, 1000);
                setInterval(function () {
                    var idx = parseInt(Math.random() * that.persons.length);
                    that.persons[idx].age = that.persons[idx].age * 2;
                }, 1500);
            }],
            getPersonCount: function () {
                return this.persons.length;
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(MonitorComponent, [MyService]);
    });
}());