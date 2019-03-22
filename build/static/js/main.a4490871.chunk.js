(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(87)},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/BikeApp.59d74d4a.png"},61:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/Dineamite.280cf41c.png"},64:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/fb-pic.57a829c0.jpg"},67:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/WeatherApp.4fa933f2.png"},70:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/GroceryList.85b2cbc5.png"},73:function(e,t,a){},75:function(e,t,a){e.exports=a.p+"static/media/FoodLog.fcfb1e7d.png"},76:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/BakerySite.d37f9ab9.png"},79:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/EyeTracker.443ff35b.png"},82:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/WeightTracker.3f34f7a5.png"},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),s=(a(40),a(8)),c=a(9),l=a(11),h=a(10),p=a(12),u=a(7),m=(a(42),a(89)),d=a(90),f=a(91),b=a(92),g=a(93),y=a(94),k=a(95),E=a(98),w=a(99),v=a(96),j=a(97),O=(a(44),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement(m.a,{color:"faded",light:!0,expand:"md"},r.a.createElement(d.a,{href:"/"}),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement("button",{id:"about-me-btn",onClick:this.props.aboutMe},"About Me"))),r.a.createElement(y.a,null,r.a.createElement(k.a,{href:"https://github.com/TYohoJr/",target:"_noblank"},"Github")),r.a.createElement(y.a,null,r.a.createElement(k.a,{href:"https://www.linkedin.com/in/thomas-yoho-6a0224a5/",target:"_noblank"},"LinkedIn")),r.a.createElement(E.a,{nav:!0,inNavbar:!0},r.a.createElement(w.a,{nav:!0,caret:!0},"Projects"),r.a.createElement(v.a,null,r.a.createElement(j.a,{onClick:this.props.showBakerySite},"Bakery Site"),r.a.createElement(j.a,{onClick:this.props.showEyeTracker},"Eye Tracker"),r.a.createElement(j.a,{onClick:this.props.showDineamite},"Dine-amite"),r.a.createElement(j.a,{onClick:this.props.showWeightTracker},r.a.createElement("div",null,"Weight Tracker"),r.a.createElement("div",null,"(Android App)"))))))))}}]),t}(r.a.Component)),T=(a(58),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"bike-app-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,'Bike App was created early on during my time at Montana Code School. The user can sign up and enter their work address. Their password is encrypted and upon login they are assigned a token which is stored locally on the client\'s end. After they sign in a map with their current location shows on the screen. The user can then click "Get Me To Work!" to show a route from their current location to their work. The map has a bike layer on top to promote biking over driving.',r.a.createElement("b",null,"Unfortunately, Google has recently incresed their security on what kind of sites can use their geolocation, so this app temporarily is not functional, until I can find an alternative. "),"Group work finished on 3-6-18 and I make commits periodically."),r.a.createElement("a",{href:"https://stark-scrubland-94670.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("p",null,'(use "test" for both the username and password, or feel free to sign up!)'),r.a.createElement("a",{href:"https://github.com/TYohoJr/bikeApp2",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/bikeapp2backend",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(60),alt:"Bike App"}))}}]),t}(n.Component)),S=(a(61),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"dineamite-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"MVP created on March 27th, 2018"),r.a.createElement("p",null,"Dineamite was created by a team of 3 people while at Montana Code School. The user can sign up and enter their phone number. They can sign up for daily text alerts that link them to the site, which then has the daily specials for 3 popular lunch places. The user can sign up for each of the 3 individually, stop all text alerts at once, and send a test sms message if they wish. Each location has 3 buttons which can: sign up for text alerts, go to their website, or view reviews. The second tab has 3 facebook feeds of local music venues. The user can also subscribe to daily texts for these venues. The third tab has local daily specials based on the day of the week",". After signing in a user profile appears in the top left, showing their username, number, and what texts they are currently subscried to.",r.a.createElement("br",null),"Group work finished on 3-28-18"),r.a.createElement("a",{href:"https://dine-amite.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("p",null,'(use "test1" for both the username and password, or feel free to sign up!)',r.a.createElement("br",null),"Please note that due to using the free version of Twilio, only numbers that are manually verified can recieve texts :("),r.a.createElement("a",{href:"https://github.com/TYohoJr/OurVerySpecialApp",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/OurVerySpecialApp-Server",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(63),alt:"Bike App"}))}}]),t}(n.Component)),A=(a(64),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about-me-div"},r.a.createElement("h1",{id:"about-me-header"},"Hello! My name is Thomas Yoho ",r.a.createElement("small",null,r.a.createElement("sup",null,":)"))),r.a.createElement("img",{id:"about-me-pic",src:a(66),alt:"me"}),r.a.createElement("p",{id:"about-me-txt"},"I'm 25 years old and live in Naperville, IL.",r.a.createElement("br",null),"Im an aspiring programmer looking for the right opportunity to start my career.",r.a.createElement("br",null),"I completed ",r.a.createElement("a",{href:"https://montanacodeschool.com/",target:"_blank",rel:"noopener noreferrer"},"Montana Code School")," in April 2018.",r.a.createElement("br",null),"I have a fundamental knowledge of: ",r.a.createElement("br",null),"JavaScript, HTML, CSS, React, Redux, Express, NodeJs, Axios, MongoDB, postgreSQL, Git/GitHub and various API's",r.a.createElement("br",null),"My projects in the dropdown above make use of these technologies (including the site you're currently on)",r.a.createElement("br",null),"Visit my LinkedIn profile to contact me"))}}]),t}(n.Component)),C=(a(67),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"weatheapp-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"I created weather app to get a local forecast without all the ads and bloatware. You can pick from a dropdown list of Montana based cities and get a small weather report. You can also enter your 5 digit zip code into the input field. You then get a table with a current weather report, as well as corresponding images based on the current conditions."),r.a.createElement("a",{href:"https://my-weather-app2.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/myWeatherApp",target:"_blank",rel:"noopener noreferrer"},"Code")),r.a.createElement("img",{className:"project-image",src:a(69),alt:"Bike App"}))}}]),t}(n.Component)),x=(a(70),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"grocerylist-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"Grocery List came to fruition when i got tired of texting my sister and brother-in-law asking if they needed anything when I was at the store. With the app you can signup/login and then add to a list that is tied to your login and saved to a database (mLab). That way anyone who has the login info can add to the list. Then when someone is at the store they can simply login and see what everyone needs. The base functionality is currently implemented in the app, but the fine tuning and visuals will be completed after I complete Code School."),r.a.createElement("a",{href:"https://grocery-list1.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("p",null,'(use "Test1" for the username and "Password1" for the password, or feel free to sign up!)'),r.a.createElement("a",{href:"https://github.com/TYohoJr/grocery-list",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/grocery-list-server",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(72),alt:"Grocery List"}))}}]),t}(n.Component)),L=(a(73),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"foodlog-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"Carb Tracker was created to replicate food tracking apps, such as MyFitnessPal, but with specific focus on helping people on a carb diet. As well as having no advertisements without the need to pay for a subscription. The front end is built using React and Redux, the back end is built from Express, and the data is being managed through a postgreSQL database. The app also makes use of axios for http calls and the Nutrionix API. Security is maintained using Bcrypt and JsonWebTokens."),r.a.createElement("a",{href:"https://food-log1.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("p",null,'(use "test1" for the username and "test1" for the password, or feel free to sign up!)'),r.a.createElement("a",{href:"https://github.com/TYohoJr/food-log",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/food-log-server",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(75),alt:"Food Log"}))}}]),t}(n.Component)),N=(a(76),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"bakerysite-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"MVP created on April 26th, 2018"),r.a.createElement("p",null,'This bakery site, titled "The Cake Lady" was created as a main site for my mothers soon',r.a.createElement("sup",null,"TM")," to exist cake business. She has been talking about it for years, so I decided to use my coding skills to build her a fully functional website from the ground up. The navbar features basic information about the business. The home page features a map with an input field for a potential customer to enter their address and get distance as well as directions from them to the business location. This is made using the Google Maps API. The pricing page allows the user to pick a variety of options for a potential cake in order to get a price estimate. This features modals that includes things such as a size calculator, the same directions component reused, as well as a reset button to start over. The order page features a form to fill out to place an order for a cake. The order placement is contigent on a successful deposit of 10 dollars. This deposit is made using the PayPal API. Upon a successful deposit the form is submitted and saved into a postgreSQL database. The final page displays examples of previous cakes. The main technologies used are React, Redux, Node, Express, postgreSQL, Google Maps API, PayPal API, and ReactStrap."),r.a.createElement("a",{href:"https://bakery-site.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/bakerySite",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/bakerySite-server",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(78),alt:"Bakery Site"}))}}]),t}(n.Component)),B=(a(79),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"eyetracker-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"MVP created on March 15th, 2019"),r.a.createElement("p",null,"I created this Eye Tracker app to supplement myself during post cervical neck surgery. My neurologist has multiple eye tracking exercises through an app that is currently only available on iOS (Focus Builder). Since I have Android instead of Apple I decided to recreate the app myself. I personally use this app every day during my eye/balance exercises. The exercises vary based on the stimuation the patient needs. I'm currently working on adding/re-creating every exercise that is available in the Focus Builder app. I'm adding as many customizable options as possible to better fine tune each exercise to the patients needs/wants."),r.a.createElement("a",{href:"https://eye-tracker-app.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/eyeTracker",target:"_blank",rel:"noopener noreferrer"},"Front-End Code"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/eyeTracker-server",target:"_blank",rel:"noopener noreferrer"},"Back-End Code")),r.a.createElement("img",{className:"project-image",src:a(81),alt:"Eye Tracker"}))}}]),t}(n.Component)),P=(a(82),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"weightapp-div",className:"project-div"},r.a.createElement("div",{className:"project-info"},r.a.createElement("p",null,"MVP created on March 22nd, 2019"),r.a.createElement("p",null,"This simple weight tracker app is my first dive into mobile development. It features a simple graph of all your weight logs, as well as a chart of some of your goals/progress. Logging is as simple as entering the log date and weight. You can also remove a specific log that you may have made on accident. All your data is stored locally to refrain from any unnecessary server calls. Main technology used is React Native as well as some packages for displaying the graph. During deployment I learned some of the basic methods of building APK's, signing apps, and release/version management in Google Play Console. Feel free to download and test it out!"),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.weightappapk",target:"_blank",rel:"noopener noreferrer"},"Download on Google Play Store"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/TYohoJr/weightAppAPK",target:"_blank",rel:"noopener noreferrer"},"Code on GitHub")),r.a.createElement("img",{className:"project-image",src:a(84),alt:"Eye Tracker"}))}}]),t}(n.Component)),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).showBikeApp=e.showBikeApp.bind(Object(u.a)(Object(u.a)(e))),e.showDineamite=e.showDineamite.bind(Object(u.a)(Object(u.a)(e))),e.aboutMe=e.aboutMe.bind(Object(u.a)(Object(u.a)(e))),e.showWeatherApp=e.showWeatherApp.bind(Object(u.a)(Object(u.a)(e))),e.showGroceryList=e.showGroceryList.bind(Object(u.a)(Object(u.a)(e))),e.showFoodLog=e.showFoodLog.bind(Object(u.a)(Object(u.a)(e))),e.showBakerySite=e.showBakerySite.bind(Object(u.a)(Object(u.a)(e))),e.showEyeTracker=e.showEyeTracker.bind(Object(u.a)(Object(u.a)(e))),e.showWeightTracker=e.showWeightTracker.bind(Object(u.a)(Object(u.a)(e))),e.state={showProject:null,pageDescription:null},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.aboutMe()}},{key:"aboutMe",value:function(){this.setState({showProject:"",pageDescription:r.a.createElement("div",null,r.a.createElement(A,null))})}},{key:"showBikeApp",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Bike App"),showProject:r.a.createElement(T,null)})}},{key:"showDineamite",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Dine-amite"),showProject:r.a.createElement(S,null)})}},{key:"showWeatherApp",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Weather App"),showProject:r.a.createElement(C,null)})}},{key:"showGroceryList",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Grocery List (wip)"),showProject:r.a.createElement(x,null)})}},{key:"showFoodLog",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Carb Tracker (wip)"),showProject:r.a.createElement(L,null)})}},{key:"showBakerySite",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Bakery Site"),showProject:r.a.createElement(N,null)})}},{key:"showEyeTracker",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Eye Tracker"),showProject:r.a.createElement(B,null)})}},{key:"showWeightTracker",value:function(){this.setState({pageDescription:r.a.createElement("h1",null,"Weight Tracker"),showProject:r.a.createElement(P,null)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{aboutMe:this.aboutMe,showBikeApp:this.showBikeApp,showDineamite:this.showDineamite,showWeatherApp:this.showWeatherApp,showGroceryList:this.showGroceryList,showFoodLog:this.showFoodLog,showBakerySite:this.showBakerySite,showEyeTracker:this.showEyeTracker,showWeightTracker:this.showWeightTracker}),r.a.createElement("div",null,this.state.pageDescription),r.a.createElement("div",null,this.state.showProject),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-contents"},"\xa9 Thomas Yoho 2018")))}}]),t}(n.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(85);i.a.render(r.a.createElement(M,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()}},[[29,2,1]]]);
//# sourceMappingURL=main.a4490871.chunk.js.map