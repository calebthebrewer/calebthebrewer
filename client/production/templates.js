!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("home/home.tpl.html",'<div class="jumbotron me-jumbotron"><img class="me-background" src="images/me.png"><div class="container"><h1>Caleb the Brewer</h1><p>Check out all of the cool stuff I\'ve wasted my time on.</p></div></div><div class="container"><div class="row"><div class="col-md-12"><i>Most of these applications were rapidly prototyped with AngularJS in order to explore something more interesting. Click on a thumbnail to see more.</i></div></div><hr><div class="row"><div site-thumbnail="" title="JS Envy" image="images/jsenvy.png" href="http://jsenvy.com" class="col-md-6">JS Envy allows you to load any JavaScript libraries from <a title="CDNJS" href="https://cdnjs.com/">CDNJS</a> that you want to experiment with. If you want to load a library from another location you can also enter the full URL to a hosted copy of the library.</div><hr class="hidden-md hidden-lg"><div site-thumbnail="" title="Beat Stat" image="images/beatstat.png" href="http://beatstat.com" class="col-md-6">Simple HTML5 Audio Context demo which pulls a raw audio stream from SoundCloud and makes pretty shapes with it.</div></div><hr><div class="row"><div site-thumbnail="" title="Fuze" image="images/fuze.png" href="http://fuze.dayoftheduck.com" class="col-md-6">Fuze plays content from SoundCloud and Youtube. The big number represents a ratio of likes:views, which is meant to be the sorted value, to avoid new content being pushed to the bottom. Saving playlists and sorting is kind of broken.</div><hr class="hidden-md hidden-lg"><div site-thumbnail="" title="Pin" image="images/pin.png" href="http://pin.dayoftheduck.com" class="col-md-6">A better way to share your location with friends. Generate a unique link by dropping a pin and send it to your friends so you don\'t have to spend your night alone.</div></div><hr><div class="row"><div site-thumbnail="" title="Meetup Roulette" image="images/meetup.png" href="http://meetup.calebthebrewer.com" class="col-md-6">Find a random meetup happening in your neighborhood within the next 24 hours.</div><hr class="hidden-md hidden-lg"><div site-thumbnail="" title="Day of the Duck" image="images/dotd.png" href="http://www.dayoftheduck.com" class="col-md-6">My personal website which contains my github projects and blog posts. The angular branch of this repository is the newest iteration which has replaced the master WordPress theme branch.</div></div><h3>Want more? The fun continues on <a title="GitHub" href="https://github.com/calebthebrewer">GitHub</a>.</h3></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("site-thumbnail/tile.tpl.html",'<div class="media site-thumbnail"><a class="media-left" href="{{href}}"><img ng-src="{{image}}" alt="{{title}}" class="tile-thumbnail"></a><div class="media-body"><h4 class="media-heading">{{title}}</h4><p ng-transclude=""></p></div></div>')}])}();