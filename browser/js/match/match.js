app.config(function($stateProvider) {

    // Register our *match* state.
    $stateProvider.state('match', {
        url: '/match',
        controller: 'MatchController',
        templateUrl: 'js/match/match.html'
    });

});

app.controller('MatchController', function($scope) {

    // Images of beautiful Fullstack people.

            //     title: movie.title,
            // gbid: movie.id,
            // image: movie.poster_400x570,
            // genres: movie.genres.title,
            // sources: sources,
            // rating: movie.rating,
            // overview: movie.overview
    $scope.favMovie = {
        "gbid": 134704,
        "title": "Zootopia",
        "rating": "PG",
        "overview": "Disney presents a heartwarming comedy-adventure set in the modern mammal metropolis of Zootopia. With habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it's a melting pot where animals from every environment live together—a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when optimistic Officer Judy Hopps arrives, she discovers that being the first bunny on a police force of big, tough animals isn't so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with fast-talking scam-artist fox Nick Wilde to solve the mystery.",
        // "image": "http://static-api.guidebox.com/111615/thumbnails_movies_small/134704-2485521841-3475374254-6411856697-small-120x171.jpg",
        "image": "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134704-7773225396-1814027522-1959452653-medium-240x342.jpg",
        "poster_400x570": "http://static-api.guidebox.com/111615/thumbnails_movies/134704-3372640242-2719297041-9311544308-large-400x570.jpg",
        "genres": [{
            "id": 4,
            "title": "Animation"
        }, {
            "id": 1,
            "title": "Action"
        }, {
            "id": 3,
            "title": "Adventure"
        }],
        "tags": [{
            "id": 4694,
            "tag": "fox"
        }, {
            "id": 181,
            "tag": "anthropomorphic animal"
        }, {
            "id": 2751,
            "tag": "con artist"
        }, {
            "id": 2854,
            "tag": "rabbit"
        }, {
            "id": 987,
            "tag": "anthropomorphism"
        }],
        "duration": 6480,
        "trailers": {
            "web": [{
                "type": "Main Trailer",
                "source": "guidebox",
                "display_name": "Guidebox",
                "link": "http://www.guidebox.com/watch-now.php?video=56041",
                "embed": "http://api-widget.guidebox.com/embed.php?video=56041"
            }],
            "ios": [{
                "type": "Main Trailer",
                "source": "guidebox",
                "display_name": "Guidebox",
                "link": "http://www.guidebox.com/watch-now.php?video=56041",
                "embed": "http://api-widget.guidebox.com/embed.php?video=56041"
            }],
            "android": [{
                "type": "Main Trailer",
                "source": "guidebox",
                "display_name": "Guidebox",
                "link": "http://www.guidebox.com/watch-now.php?video=56041",
                "embed": "http://api-widget.guidebox.com/embed.php?video=56041"
            }]
        },
        "channels": ["Netflix", "Stars", "AmazonPrime", "Vulu"]
    }

});
