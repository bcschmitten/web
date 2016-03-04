(function () {
    'use strict';

    var app = angular.module('app', [
    // Angular modules 
        'ngAnimate',            // Animations
        'ngMaterial',           // Material design
        'ui.router',            // Routing
    ]);


    // Routing
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // For any unmatched url, redirect to state 'home'
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });

        $stateProvider
            // Layouts
            .state('layoutDefault', {
                abstract: true,
                templateUrl: "app/layouts/layout.default.html"
            })

            // Views
            .state('home', {
                url: "/",
                parent: 'layoutDefault',
                templateUrl: "app/pages/home.html",
            })
            .state('searchResults', {
                url: "/Suchergebnisse",
                parent: 'layoutDefault',
                templateUrl: "app/pages/suchergebnisse.html",
            })


            .state('steckbrief', {
                url: "/Steckbrief",
                parent: 'layoutDefault',
                templateUrl: "app/pages/steckbrief.html",
                menuSection: 'Club Info',
                menuName: 'Steckbrief',
            })
            .state('vorstand', {
                url: "/Vorstand",
                parent: 'layoutDefault',
                templateUrl: "app/pages/vorstand.html",
                menuSection: 'Club Info',
                menuName: 'Vorstand',
            })
            .state('training', {
                url: "/Training",
                parent: 'layoutDefault',
                templateUrl: "app/pages/training.html",
                menuSection: 'Club Info',
                menuName: 'Training',
            })
            .state('mitgliedschaft', {
                url: "/Mitgliedschaft",
                parent: 'layoutDefault',
                templateUrl: "app/pages/mitgliedschaft.html",
                menuSection: 'Club Info',
                menuName: 'Mitgliedschaft',
            })
            .state('organigramm', {
                url: "/Organigramm",
                parent: 'layoutDefault',
                templateUrl: "app/pages/organigramm.html",
                menuSection: 'Club Info',
                menuName: 'Organigramm',
            })
            .state('halle', {
                url: "/Halle",
                parent: 'layoutDefault',
                templateUrl: "app/pages/halle.html",
                menuSection: 'Club Info',
                menuName: 'Halle',
            })
            .state('statuten', {
                url: "/Statuten",
                parent: 'layoutDefault',
                templateUrl: "app/pages/statuten.html",
                menuSection: 'Club Info',
                menuName: 'Statuten',
            })


            .state('resultate', {
                url: "/Resultate",
                parent: 'layoutDefault',
                templateUrl: "app/pages/resultate.html",
                menuSection: 'Interclub',
                menuName: 'Resultate',
            })


            .state('juniorenCircuit', {
                url: "/JuniorenCircuit",
                parent: 'layoutDefault',
                templateUrl: "app/pages/juniorenCircuit.html",
                menuSection: 'Junioren',
                menuName: 'Junioren Circuit',
            })
            .state('coupeAvenir', {
                url: "/Resultate",
                parent: 'layoutDefault',
                templateUrl: "app/pages/coupeAvenir.html",
                menuSection: 'Junioren',
                menuName: "Coupe l'Avenir",
            })


            .state('clubAgenda', {
                url: "/ClubAgenda",
                parent: 'layoutDefault',
                templateUrl: "app/pages/clubAgenda.html",
                menuSection: 'Agendas',
                menuName: 'Club Agenda',
            })
            .state('turnierAgenda', {
                url: "/TurnierAgenda",
                parent: 'layoutDefault',
                templateUrl: "app/pages/turnierAgenda.html",
                menuSection: 'Agendas',
                menuName: 'Turnier Agenda',
            })


            .state('galerie', {
                url: "/Galerie",
                parent: 'layoutDefault',
                templateUrl: "app/pages/galerie.html",
                menuSection: 'Galerie',
                menuName: 'Galerie',
            })


            .state('ursprung', {
                url: "/Ursprung",
                parent: 'layoutDefault',
                templateUrl: "app/pages/ursprung.html",
                menuSection: 'Über Badminton',
                menuName: 'Ursprung',
            })
            .state('spielregeln', {
                url: "/Spielregeln",
                parent: 'layoutDefault',
                templateUrl: "app/pages/spielregeln.html",
                menuSection: 'Über Badminton',
                menuName: 'Spielregeln',
            })
            .state('spielfeld', {
                url: "/Spielfeld",
                parent: 'layoutDefault',
                templateUrl: "app/pages/spielfeld.html",
                menuSection: 'Über Badminton',
                menuName: 'Spielfeld',
            })
            .state('wettkampfformen', {
                url: "/Wettkampfformen",
                parent: 'layoutDefault',
                templateUrl: "app/pages/wettkampfformen.html",
                menuSection: 'Über Badminton',
                menuName: 'Wettkampfformen',
            })


            .state('sponsoren', {
                url: "/Sponsoren",
                parent: 'layoutDefault',
                templateUrl: "app/pages/sponsoren.html",
                menuSection: 'Sponsoren',
                menuName: 'Sponsoren',
            })


            .state('links', {
                url: "/Links",
                parent: 'layoutDefault',
                templateUrl: "app/pages/links.html",
                menuSection: 'Links',
                menuName: 'Links',
            })
        ;
    });
})();