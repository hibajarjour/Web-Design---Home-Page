var app = angular.module('task-app', ['ngSanitize']);
app.controller('repeatController', function ($scope) {
    $scope.items = [
        {
            id: 0,
            title: 'Best gadget <br/> discount price',
            text: 'Discount up to <span class="text-danger fst-italic">50%</span>',
            itemImg: './imagesHomePage/p1.png',
            itemDetails: '#'
    },
        {
            id: 1,
            title: 'Best gadget <br/> discount price',
            text: 'Discount up to <span class="text-danger fst-italic">50%</span>',
            itemImg: './imagesHomePage/p2.png',
            itemDetails: '#'
    },
        {
            id: 2,
            title: 'Best gadget <br/> discount price',
            text: 'Discount up to <span class="text-danger fst-italic">50%</span>',
            itemImg: './imagesHomePage/p3.png',
            itemDetails: '#'
    }
  ];
});
