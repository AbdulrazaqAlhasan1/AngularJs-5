var app = angular.module("myApp", ["ngRoute"])
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/", {
        templateUrl: "view/horizontal.html",
        controller: "horizontalController" 
    })
    
    .when("/horizontal", {
        templateUrl: "view/horizontal.html",
        controller: "horizontalController" 
    })
    
    .when("/vertical", {
        templateUrl: "view/vertical.html",
        controller: "verticalController" 
    })
    });

        // Horizontal Controller
        app.controller("horizontalController", function($rootScope, $http) {

        const starsTotal = 5;

        $http.get("http://localhost:5000/api/products").then((res) => $rootScope.products = res.data);

        $rootScope.rating = function (input) {
            return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
        }
    })
        

        // Vertical Controller
        app.controller("verticalController", function($rootScope, $http) {


            // ratings
            const starsTotal = 5;

            $http.get("http://localhost:5000/api/products").then((res) => $rootScope.products = res.data);
    
            $rootScope.rating = function (input) {
                return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
            }

           // Scroll function
            $(window).scroll(function () {
                let topPosition = $(this).scrollTop();
    
                if (topPosition > 100) {
                    $(".scrollTop").css("opacity", "1");
                } else {
                    $(".scrollTop").css("opacity", "0");
                }
            })
        });



