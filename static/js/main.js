

$(document).ready(function(){

	var transEffect = Barba.BaseTransition.extend({

		start: function(){
			this.newContainerLoading.then( val => this.fadeInNewcontent($(this.newContainer)));
		},
		fadeInNewcontent: function(nc){
			nc.hide();
			var thisvar = this;
			$(this.oldContainer).fadeOut(500).promise().done( () => {
			nc.css('visibility','visible');
			nc.fadeIn(500,function(){
				thisvar.done();
			})
		});
		}
	 

	});
 
	Barba.Pjax.getTransition = function() {
					return transEffect;
				}
	Barba.Pjax.start();

});


























// $(function(){

// 	var newHash      = "",
// 	$mainContent = $("#main-content"),
// 	$pageWrap    = $("#page-wrap"),
// 	baseHeight   = 0,
// 	$el;



// 	$pageWrap.height($pageWrap.height());
// 	baseHeight = $pageWrap.height() - $mainContent.height();

// 	$('#nav li').delegate("a","click",function(){

// 		window.location.hash = $(this).attr("href");
// 	  return false;
// 	});

// 	$(window).bind('hashchange', function(){

// 		newHash = window.location.hash.substring(1);

// 		if (newHash) {
// 			$mainContent
// 					.find("#guts")
// 					.fadeOut(200, function() {
// 							$mainContent.hide().load(newHash + " #guts", function() {
// 									$mainContent.fadeIn(200, function() {
// 											$pageWrap.animate({
// 													height: baseHeight + $mainContent.height() + "px"
// 											});
// 									});
// 									// $("#nav li a").removeClass("current");
// 									// $("#nav li a[href="+newHash+"]").addClass("current");
// 							});
// 					});
// 	};
	

// 	});
// });


// $(document).ready(function(){


//   $(function(){
// 		$("a[rel='tab']").click(function(e){
// 			pageurl = $(this).attr('href');
// 			$.ajax({url:pageurl+'?rel=tab',success: function(data){
// 				$('#content').html(data);
// 			}});
// 			if(pageurl!=window.location){
// 				window.history.pushState({path:pageurl},'',pageurl);	
// 			}
// 			return false;  
// 		});
// 	});
// 	$(window).bind('popstate', function() {
// 		$.ajax({url:location.pathname+'?rel=tab',success: function(data){
// 			$('#content').html(data);
// 		}});
// 	});

   
// });


