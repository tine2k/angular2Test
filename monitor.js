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
            this.persons = [];
            this.done = false;

            var that = this;
            myService.getPersons(function(value) {
                that.persons = value;
            });

            this.count = 0;
            var interval1 = setInterval(function () {
                that.persons.push({
                    name: 'Seppi',
                    age: 56
                });
                that.count++;
                if (that.count >= 10) {
                    clearInterval(interval1);
                    that.done = true;
                }
            }, 1000);
            var interval2 = setInterval(function () {
                var idx = parseInt(Math.random() * that.persons.length);
                that.persons[idx].age = that.persons[idx].age * 2;
                that.count++;
                if (that.count >= 10) {
                    clearInterval(interval2);
                    that.done = true;
                }
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