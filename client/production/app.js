angular.module("app",["ui.router","ngAnimate","templates"]),angular.module("app").config(["$urlRouterProvider","$sceProvider",function(e,t){e.otherwise("/"),t.enabled(!1)}]),function(e,t,a,n,l,r,o){e.GoogleAnalyticsObject=l,e[l]=e[l]||function(){(e[l].q=e[l].q||[]).push(arguments)},e[l].l=1*new Date,r=t.createElement(a),o=t.getElementsByTagName(a)[0],r.async=1,r.src=n,o.parentNode.insertBefore(r,o)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-58348041-1","auto"),ga("send","pageview"),angular.module("app").config(["$stateProvider",function(e){e.state("home",{url:"/",templateUrl:"home/home.tpl.html"})}]),angular.module("app").directive("siteThumbnail",[function(){return{scope:{title:"@",image:"@",href:"@"},restrict:"EA",transclude:!0,templateUrl:"site-thumbnail/tile.tpl.html"}}]);