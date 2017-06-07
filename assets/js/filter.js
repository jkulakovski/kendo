$(document).ready(function () {
    var viewModel = kendo.observable({
        manufacturer: manufacturer,
        mark: mark,

        onDataBound: function (e) {
            e.sender.trigger('change');
        },
        model:'',
        marka:'',
        year: null,
        price: null,
        transmission: '',
        fuel: '',
        mileage: null,
        capacity: null,
        apply: function (e) {
            e.preventDefault();
            alert('Manufacturer: ' + this.get('model') +
                    '\nMark: ' + this.get('marka') +
                    '\nYear: ' + this.get('year') +
                    '\nPrice: '+ this.get('price') +
                    '\nTransmission: '+ this.get('transmission') +
                    '\nFuel: '+ this.get('fuel') +
                    '\nMileage: '+ this.get('mileage') +
                    '\nCapacity: '+ this.get('capacity'));
        }
    });

    kendo.bind($("#filter"), viewModel);
});