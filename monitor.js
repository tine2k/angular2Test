"use strict";

(function () {
    var MonitorComponent = ng
        .Component({
            selector: 'monitor',
            templateUrl: 'monitor.html',
            directives: [ng.NgFor, ng.NgIf]
        })
        .Class({
            constructor: function () {
                this.myName = "Alice";
                this.persons = [{
                    name: 'Peter',
                    age: 19
                }, {
                    name: 'Martin',
                    age: 23
                }, {
                    name: 'Sarah',
                    age: 32
                }];

                var persons = this.persons;
                setInterval(function() {
                    persons.push({
                        name: 'Seppi',
                        age: 56
                    });
                },1000);
                setInterval(function() {
                    var idx = parseInt(Math.random() * persons.length);
                    persons[idx].age = persons[idx].age * 2;
                },1500);
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(MonitorComponent);
    });
}());