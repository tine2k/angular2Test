"use strict";

function createMonitor(tag) {

    var Great = ng.core.Pipe({
        name: 'great'
    }).Class({
        constructor: function () {
        },
        transform: function (value) {
            return value.toUpperCase();
        }
    });

    var MonitorComponent = ng.core.Component({
        selector: tag,
        templateUrl: 'monitor.html',
        pipes: [Great]
    }).Class({
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
        ng.platform.browser.bootstrap(MonitorComponent, [MyService, Great]);
    });
}