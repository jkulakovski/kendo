$(document).ready(function() {
    var viewModel = kendo.observable({
        sortRating: cars.sort('rating'),
        topRating: cars.slice(0,25)
    });
    kendo.bind($("#view"), viewModel);
});