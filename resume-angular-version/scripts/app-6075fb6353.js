!function(){"use strict";angular.module("ngNepKoder",["ngRoute"])}(),function(){"use strict";function s(s){var e=this;$(".lead").typed({strings:["Computer Engineering Student"],typeSpeed:0,backSpeed:0,loop:!0,smartBackspace:!0});var i=new Date,t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.month=t[i.getMonth()],e.date=i.getDate()}s.$inject=["$scope"],angular.module("ngNepKoder").controller("MainController",s)}(),!function(s,e,i){"use strict";var t=function(s,e){var t=this;this.el=s,this.options={},Object.keys(a).forEach(function(s){t.options[s]=a[s]}),Object.keys(e).forEach(function(s){t.options[s]=e[s]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,i&&this.options.stringsElement instanceof i?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};t.prototype={constructor:t,init:function(){var s=this;s.timeout=setTimeout(function(){for(var e=0;e<s.strings.length;++e)s.sequence[e]=e;s.shuffle&&(s.sequence=s.shuffleArray(s.sequence)),s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos)},s.startDelay)},build:function(){var s=this;if(this.showCursor===!0&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";var i=Array.prototype.slice.apply(this.stringsElement.children);i.forEach(function(e){s.strings.push(e.innerHTML)})}this.init()},typewrite:function(s,e){if(this.stop!==!0){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var i=Math.round(70*Math.random())+this.typeSpeed,t=this;t.timeout=setTimeout(function(){var i=0,a=s.substr(e);if("^"===a.charAt(0)){var r=1;/^\^\d+/.test(a)&&(a=/\d+/.exec(a)[0],r+=a.length,i=parseInt(a)),s=s.substring(0,e)+s.substring(e+r)}if("html"===t.contentType){var o=s.substr(e).charAt(0);if("<"===o||"&"===o){var n="",l="";for(l="<"===o?">":";";s.substr(e+1).charAt(0)!==l&&(n+=s.substr(e).charAt(0),e++,!(e+1>s.length)););e++,n+=l}}t.timeout=setTimeout(function(){if(e===s.length){if(t.options.onStringTyped(t.arrayPos),t.arrayPos===t.strings.length-1&&(t.options.callback(),t.curLoop++,t.loop===!1||t.curLoop===t.loopCount))return;t.timeout=setTimeout(function(){t.backspace(s,e)},t.backDelay)}else{0===e&&t.options.preStringTyped(t.arrayPos);var i=s.substr(0,e+1);t.attr?t.el.setAttribute(t.attr,i):t.isInput?t.el.value=i:"html"===t.contentType?t.el.innerHTML=i:t.el.textContent=i,e++,t.typewrite(s,e)}},i)},i)}},backspace:function(s,e){var i=this;if(this.stop!==!0){if(this.fadeOut)return void this.initFadeOut();var t=Math.round(70*Math.random())+this.backSpeed;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===s.substr(e).charAt(0)){for(var t="";"<"!==s.substr(e-1).charAt(0)&&(t-=s.substr(e).charAt(0),e--,!(0>e)););e--,t+="<"}var a=s.substr(0,e);i.replaceText(a),e>i.stopNum?(e--,i.backspace(s,e)):e<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],e))},t)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(s){this.attr?this.el.setAttribute(this.attr,s):this.isInput?this.el.value=s:"html"===this.contentType?this.el.innerHTML=s:this.el.textContent=s},shuffleArray:function(s){var e,i,t=s.length;if(t)for(;--t;)i=Math.floor(Math.random()*(t+1)),e=s[i],s[i]=s[t],s[t]=e;return s},reset:function(){var s=this;clearInterval(s.timeout),this.el.getAttribute("id"),this.el.textContent="","undefined"!=typeof this.cursor&&"undefined"!=typeof this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},t["new"]=function(s,i){var a=Array.prototype.slice.apply(e.querySelectorAll(s));a.forEach(function(s){var e=s._typed,a="object"==typeof i&&i;e&&e.reset(),s._typed=e=new t(s,a),"string"==typeof i&&e[i]()})},i&&(i.fn.typed=function(s){return this.each(function(){var e=i(this),a=e.data("typed"),r="object"==typeof s&&s;a&&a.reset(),e.data("typed",a=new t(this,r)),"string"==typeof s&&a[s]()})}),s.Typed=t;var a={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery),function(){"use strict";function s(s){s.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}s.$inject=["$routeProvider"],angular.module("ngNepKoder").config(s)}(),angular.module("ngNepKoder").run(["$templateCache",function(s){s.put("app/main/main.html",'<div id=page-top data-spy=scroll data-target=.navbar><div id=main-wrapper><!--  column section --><div class=columns-block><!-- left side block --><div class="left-col-block blocks"><!-- header for left image --><header class=header><div class=today><h2 class=day>{{vm.date}}</h2><p class=month>{{vm.month}}</p></div><div class="content text-center"><h1 class=name-title>Hi, I\'m Sujan Shrestha</h1><p class=lead>Engineering Student</p><ul class=social-icon><li><a href=http://www.facebook.com/newar.bhai11><i class="fa fa-facebook" aria-hidden=true></i></a></li><li><a href=http://www.twitter.com/newar_bhai><i class="fa fa-twitter" aria-hidden=true></i></a></li><li><a href=http://www.linkedin.com/sujansth><i class="fa fa-linkedin" aria-hidden=true></i></a></li><li><a href=http://www.github.com/nepkoder><i class="fa fa-github" aria-hidden=true></i></a></li></ul></div><!-- image for header section --><div class=profile-img></div></header><!-- .header--></div><!--  right side block --><div class="right-col-block blocks"><!--personal detials intor section --><section class="intro section-wrapper"><div class=container-fluid><!-- section title --><div class=row><div class="span12 text-center"><div class=headline><p><span>What I Really AM?</span></p><h1>Personal Details</h1></div><!-- end .headline --></div><!-- end .span12 --></div><!-- end .row --><div class=row><div class="col-md-12 intro"><p>I\'m fast learner, hardworking &amp; coding enthusiast. With strong will and passion to study and work with the newest information technologies.</p><div class=divider-intro></div><p>Being a technical person, I saw in the continuous-improving IT sector a good opportunity for an adventure-seeker like me to aim my forces and take the way of the software engineer. Most of my knowledge I have gained on college computer engineering coures are C, C++, Data Structure &amp; Algorithm, HTML, CSS, JS, Linux, AI, Software Engineering, RDBMS, Project Managment &amp; Organization, Computer Network, Data Mining, Big Data, Object Oriented Analysis &amp; Design etc.</p></div></div><!-- end of profile description section --><div class=row><div class="span12 text-center"><div class=bio-desc><!-- Buttons --><div class=resume-btn><!-- Download CV button --> <span><a href=resume.pdf class="btn btn-primary btn-download-resume"><i class="fa fa-download"></i>&nbsp; Download Resume</a> </span><!-- /Download CV button --><!-- Get in Touch button --><!-- <a href="#contact" class="btn btn-primary btn-touch"> --><!-- <i class="fa fa-paper-plane-o"></i>&nbsp; Get in Touch</a> --><!-- /Get in Touch button --></div><!-- /Buttons --><div class=resume-desc><div class=row><div class=col-md-12><ul class="info text-left"><li><i class="fa fa-arrow-right" aria-hidden=true></i>Full Name: Sujan Shrestha</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Address: Balaju, Kathmandu, Nepal</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Marital Status: Single</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Language: English &amp; Nepali</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Date of Birth: 1996</li></ul></div></div></div></div></div></div></div></section><!-- end of intro &amp; personal details section --><section class="section-wrapper skills-wrapper gray-bg"><div class=container-fluid><div class=row><div class="span12 text-center"><div class=headline><p><span>What I\'m Best At</span></p><h1>Coding Skills</h1></div><!-- end .headline --></div><!-- end .span12 --></div><!--.row--><div class=row><div class=col-md-12><div class=progress-wrapper><div class=progress-item><span class=progress-title>Java Programming (JavaFX, JavaEE, Spring, Hibernate)</span><div class=progress><div class=progress-bar role=progressbar aria-valuenow=88 aria-valuemin=0 aria-valuemax=100 style="width: 88%"><span class=progress-percent>83%</span></div></div><!-- .progress --></div><!-- .skill-progress --><div class=progress-item><span class=progress-title>HTML, CSS &amp; Bootstrap</span><div class=progress><div class=progress-bar role=progressbar aria-valuenow=90 aria-valuemin=0 aria-valuemax=100 style="width: 90%"><span class=progress-percent>90%</span></div></div><!-- /.progress --></div><!-- /.skill-progress --><div class=progress-item><span class=progress-title>JavaScript (JQuery, Angular 2+)</span><div class=progress><div class=progress-bar role=progressbar aria-valuenow=70 aria-valuemin=0 aria-valuemax=100 style="width: 70%"><span class=progress-percent>70%</span></div></div><!-- /.progress --></div><!-- /.skill-progress --><div class=progress-item><span class=progress-title>Android Development</span><div class=progress><div class=progress-bar role=progressbar aria-valuenow=83 aria-valuemin=0 aria-valuemax=100 style="width: 83%"><span class=progress-percent>83%</span></div></div></div><div class=progress-item><span class=progress-title>Databases (MySQL, MongoDB)</span><div class=progress><div class=progress-bar role=progressbar aria-valuenow=64 aria-valuemin=0 aria-valuemax=100 style="width: 64%"><span class=progress-percent>68%</span></div></div><!-- .progress --></div><!-- .skill-progress --></div><!-- /.progress-wrapper --></div></div><!--.row --><div class=row><div class="other-skills text-center"><h2>Other Skills &amp; Knowledge</h2></div></div><div class=row><div class=col-md-6><ul class=info><li><i class="fa fa-arrow-right" aria-hidden=true></i>Web Services (REST)</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Linux</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Software Engineering</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Version Control (Git)</li></ul></div><div class=col-md-6><ul class=info><li><i class="fa fa-arrow-right" aria-hidden=true></i>Python (Basic)</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>Big Data (Hadoop)</li><li><i class="fa fa-arrow-right" aria-hidden=true></i>WordPress</li></ul></div></div></div><!-- .container-fluid --></section><!-- .skills-wrapper --><section class=section-wrapper><div class=container-fluid><div class=row><div class="span12 text-center"><div class="doing headline"><h1>What I\'m Doing</h1></div><!-- end .headline --></div><!-- end .span12 --></div><!--	services section starts --><div class=row><div class=col-md-6><div class="service-wrap text-center"><div class=service-icon><i class="fa fa-cogs"></i></div><h3>Development</h3><p>Application Development With JavaFX, JavaEE, Spring Framework, Hibernate</p></div></div><div class=col-md-6><div class="service-wrap text-center"><div class=service-icon><i class="fa fa-code"></i></div><h3>Front End Design</h3><p>Website Development with front-end technologies HTML5, CSS3, JS, Bootstrap, Angular.</p></div></div><div class=col-md-6><div class="service-wrap text-center"><div class=service-icon><i class="fa fa-leaf"></i></div><h3>Mobile App</h3><p>Android Programming & Mobile Application Development for Android smartphones.</p></div></div><div class=col-md-6><div class="service-wrap text-center"><div class=service-icon><i class="fa fa-wordpress"></i></div><h3>WordPress</h3><p>Complete WordPress Website Design with Domain Registration & Hosting Service</p></div></div></div></div></section><!-- Hobbits and interests --><section class="section-wrapper hobbits-wrapper gray-bg"><div class=container-fluid><div class=row><div class="span12 text-center"><div class=headline><p><span>What I Like</span></p><h1>Hobbits &amp; Interests</h1></div><!-- end .headline --></div><!-- end .span12 --></div><div class=row><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-gamepad"></i></div><h4>Gaming</h4></div><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-trophy"></i></div><h4>Sports</h4></div><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-coffee"></i></div><h4>Coffee</h4></div><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-camera"></i></div><h4>Photography</h4></div><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-code"></i></div><h4>Learning</h4></div><div class="col-md-2 text-center"><div class=item-icon><i class="fa fa-bicycle"></i></div><h4>Cycling</h4></div></div></div></section><section class="section-wrapper section-education"><div class=container-fluid><div class=row><div class="span12 text-center"><div class=headline><p><span>My Education</span></p><h1>Qualification</h1></div><!-- end .headline --></div><!-- end .span12 --></div><div class=divider-edu></div><div class=row><div class=col-md-12><div class=content-item><small>2014 - 2018 (Running)</small><h3>Bachelor in Computer Engineering</h3><h4>Himalaya College of Engineering (HCOE)</h4><p>Chysal, Lalitpur</p></div><!-- .experience-item --><div class=content-item><small>2012 - 2014</small><h3>+2 Science</h3><h4>National School of Sciences (NSS)</h4><p>Lainchor, Kathmandu</p></div><!-- .experience-item --><div class=content-item><small>Class of 2012</small><h3>SLC</h3><h4>Shree Soubhagyodaya Higher Secondary School</h4><p>Rainas, Lamjung</p></div><!-- .experience-item --></div></div></div><!-- .container-fluid --></section><!-- .section-education --><!--	experience section --><section class="section-contact section-wrapper gray-bg" id=contact><div class=container-fluid><div class=row><div class="span12 text-center"><div class=headline><p><span>DO NOT HESITATE TO</span></p><h1>Contact Me</h1></div><!-- end .headline --></div><!-- end .span12 --></div><!-- end .row --><div class="row text-center"><div class=col-md-4><i class="fa fa-map-marker"></i><address><strong>Address</strong><br>Balaju, Kathmandu</address></div><div class=col-md-4><i class="fa fa-phone"></i><address><strong>Phone Number</strong><br>(+977) 9843710406</address></div><div class=col-md-4><i class="fa fa-envelope"></i><address><strong>Email</strong><br><a href=mailto:#>nepkoder@gmail.com</a></address></div></div><div class=row><div class=col-md-12><div class=feedback-form><form id="contactForm " action=sendemail.php method="POST "><div class=form-group><label for="InputName ">Name</label><input type="text " name="name " required class=form-control id="InputName " placeholder="Full Name "></div><div class=form-group><label for="InputEmail ">Email Address</label><input type="email " name="email " required class=form-control id="InputEmail " placeholder="Email "></div><div class=form-group><label for="InputSubject ">Subject</label><input type="text " name="subject " class=form-control id="InputSubject " placeholder="Subject "></div><div class=form-group><label for="message-text " class=control-label>Message</label><textarea class=form-control rows=4 required name="message " id="message-text " placeholder="Write message "></textarea></div><button type="submit " class="btn btn-primary">Submit</button></form></div><!-- .feedback-form --></div></div></div><!--.container-fluid--></section><!--.section-contact--><section class="social-section gray-bg"><div class=container><div class="row text-center"><div class=col-sm-12><div class=social-icon-bottom><a href=http://www.facebook.com/newar.bhai11><i class="fa fa-facebook"></i> </a><a href=http://www.twitter.com/newar_bhai><i class="fa fa-twitter"></i> </a><a href=http://www.instagram.com/_sujansth_><i class="fa fa-instagram"></i> </a><a href=http://www.linkedin.com/sujansth><i class="fa fa-linkedin"></i> </a><a href=mailto:nepkoder@gmail.com><i class="fa fa-google-plus"></i> </a><a href=http://www.github.com/nepkoder><i class="fa fa-github"></i> </a><a href=http://www.youtube.com/nepkoder><i class="fa fa-youtube-square"></i></a></div></div></div></div></section><footer class=footer><div class=copyright-section><div class=container-fluid><div class=row><div class=col-md-12><div class=copytext>&copy; 2018 All Rights Reserved. | Developed By: <a href=https://www.sujansth.com.np>Sujan Shrestha</a></div></div></div><!--.row--></div><!-- .container-fluid --></div><!-- .copyright-section --> <a href=#page-top id=goto-top class="btn btn-default btn-back-to-top" title="Top " role="button "><i class="fa fa-angle-up"></i></a></footer><!-- .footer --></div><!-- .right-col-block --></div><!-- .columns-block --></div><!-- #main-wrapper --></div>')}]);
//# sourceMappingURL=../maps/scripts/app-6075fb6353.js.map
