$(function(){

	var myString = 
	       '<div id="someId"> \
	some content<br /> \
	<a href="#someRef">someRefTxt</a> \
	</div>';

	var menu = 
		'<ul class="menulist"> \
		<li style="margin-top: 20px; "><a id= "sarahchoi" href="http://www.sarahsunchoi.com/">S A R A H &nbsp; S U N &nbsp; C H O I</a></li> \
		<li style="margin-top: 10px;"><a href="http://www.sarahsunchoi.com/about.html">a b o u t</a></li> \
		<li style="margin-top: 40px;"> \
		<li style="margin-top: 40px;"> \
		<li><a href="http://www.sarahsunchoi.com/painting.html">P A I N T I N G</a></li> \
		<li><a href="http://www.sarahsunchoi.com/graphic.html">G R A P H I C</a></li> \
		<li><a href="http://www.sarahsunchoi.com/installation.html">I N S T A L L A T I O N</a> \
		<li style="margin-top: 40px;"><a href="https://www.facebook.com/sarahsunchoiart/">f a c e b o o k</a></li> \
		<li><a href="https://instagram.com/su.un_/">i n s t a g r a m</a></li> \
		<li><a href="https://vimeo.com/suun">v i m e o</a></li> \
		<li><a href="contact.html">c o n t a c t</a></li> \
		</ul>';

	$(".menubox").append(menu);

	console.log(menu);

});
