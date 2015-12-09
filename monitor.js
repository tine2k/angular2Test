(function () {
    var MonitorComponent = ng
        .Component({
            selector: 'monitor',
            templateUrl: 'monitor.html'
        })
        .Class({
            constructor: function () {
                this.myName = "Alice";
                this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
            }
        });

    document.addEventListener('DOMContentLoaded', function () {
        ng.bootstrap(MonitorComponent);
    });
}());