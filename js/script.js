/*Top Menu Style Events Start*/


$(window).scroll(function() { 
    var the_top = $(window).scrollTop();
    if (the_top < $('header').height()) {
        $('#top').css("opacity", 1-the_top/$('header').height());
    	$('#nav_menu').removeClass('invisible').css("opacity", the_top/$('header').height());
    } else if (the_top >= $('header').height()) {
    	$('#top').removeClass('invisible');
    	$('#nav_menu').removeClass('invisible').css("opacity", 1);
    }
    var i;
    function disunderline_li (num) {
    	$("#nav_menu li:nth-child(" + num + ")").css("border-bottom-color", "transparent");
    };
    if (the_top < $('header').height() + $('#home').height() - 80) {
    	i = 1;
    } else if (the_top < $('header').height() + $('#home').height() +
    	$('#work').height() - 80) {
    	i = 2;
    } else if (the_top < $('header').height() + $('#home').height() +
    	$('#work').height() + $('#about').height() - 80) {
    	i = 4;
    } else {
    	i = 5;
    }
    function underlilne_li (num) {
    	$("#nav_menu li:nth-child(" + num + ")").css("border-bottom", "5px solid #000");
    	for (var j = 1; j <=5; j++) {
	    	if (j == 3 || j == num) {
	    		continue;
	    	}
	    	disunderline_li(j);
	    }
    };
    underlilne_li(i);
    /*Top Menu Style Events End*/
});
$('.ordinar_li').bind('mouseenter focus',function() {
	$(this).addClass('hovered');
}).bind('mouseleave blur',function() {
	$(this).removeClass('hovered');
});
$("textarea").html("");
$(document).ready(function(){
    $("#nav_menu, .img_arrow").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - $('#nav_menu').height()*1.5;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(window).scroll(function() {
	var the_top = $(window).scrollTop();
	/*Menu Headers Events Start*/
    var selectors_arr = ['.work_header', '.about_header', '.contact_header'];
    var current_selector;
    var delta;
	
    if (the_top < $('header').height() + $('#home').height() + $('#work').height()/2) {
    	current_selector = 0;
    	delta = (the_top + 10 - ($('header').height() - 1.25*$('#nav_menu').height() + $('#home').height()/2))
    	/($('#home').height()/2);
    //To debug aftew full website completing !starts
    } else if (the_top < $('header').height() + $('#home').height() +
    	$('#work').height() + $('#about').height()/2) {
    	current_selector = 1;
    	delta = (the_top + 80 - ($('header').height() + $('#home').height() + $('#work').height()/2))
    	/ ($('#work').height()/2);
    } else if (the_top >= $('header').height() + $('#home').height() +
    	$('#work').height() + $('#about').height()/2) {
    	current_selector = 2;
    	delta = (the_top + 80 - ($('header').height() + $('#home').height() + $('#work').height()/2))
    	/ ($('#work').height()/2);
    }
    //To debug aftew full website completing !ends
    /*Window position dependent animation starts*/
    	if (delta > 1) delta = 1;
    	if (delta < 0) delta = 0;
    	$(selectors_arr[current_selector]).children().first().css({
		      width: 132 * delta,
		      marginRight: 140 - 132 * delta,
		      position: "relative",
		      display: "inline-block",
		      left: "-105px",
		      top: "42px"
		    });
    	$(selectors_arr[current_selector]).children().last().css({
    		opacity: delta
    	});
    	for (var temp = 0; temp < 3; temp++) {
    		if (temp == current_selector) continue;
    		$(selectors_arr[temp]).addClass('invisible');
    	}
    	$(selectors_arr[current_selector]).removeClass('invisible')

    	
    	console.log(delta);
    /*Window position dependent animation ends*/
	function pre_header_bwd (selector) {
		$(selectors_arr[selector]).children().first().animate({
			width: "0px",
			marginRight: "140px"
		}, 1500);
	};

	function pre_header_fwd (selector) {
		/*for (var temp_val = 0; temp_val < 3; temp_val++) {
			if (temp_val == selector) continue;
			pre_header_bwd(temp_val);
		}*/
		$(selectors_arr[selector]).children().first().animate({
			width: "132px",
			marginRight: "8px"
		}, 1500);
		
	};
	/*pre_header_fwd(current_selector);
	pre_header_bwd(current_selector);
	console.log(position);*/
    /*Menu Headers Events End*/
});

$('.proj_img').mouseenter(function() {
	$(this).children().animate({opacity: 1}, 1000);
}).mouseleave(function() {
	$(this).children().animate({opacity: 0}, 300);
});
$('.about div button').mouseenter(function() {
	$(this).animate({borderColor: "ffffff"}, 500);
	$(this).children().animate({color: "ffffff"}, 500);
}).mouseleave(function() {
	$(this).css({borderColor: "ffffff"}).animate({borderColor: "black"}, 500);
	$(this).children().css({color: "ffffff"}).animate({color: "black"}, 500);
});

$('.in_touch_social li img').mouseenter(function() {
	$(this).animate({opacity: 0.5}, 500);
}).mouseleave(function() {
	$(this).animate({opacity: 1}, 500);
});

/*Feedback Animation Starts*/
$('#feedback_form button').mouseenter(function() {
	$(this)
	.animate({
		borderColor: "black",
		color: "black"
	}, 500);
}).mouseleave(function() {
	$(this)
	.css({
		borderColor: "black",
		color: "black"
	})
	.animate({borderColor: "ffffff"}, 500)
	.delay(500)
	.animate({color: "ffffff"}, 300);
});
$('#InputName1').bind('mouseenter focus', function() {
	$(this).attr('placeholder', '')
	.animate({
		borderColor: "black",
		color: "black"
	}, 500);
}).bind('blur mouseleave', function() {
	$(this).attr('placeholder', 'Name:')
	.css({
		borderColor: "black",
	})
	if ($(this).val()) {
		$(this).css({
			borderColor: "black",
			color: "black"
		})
	}else $(this).animate({borderColor: "ffffff"}, 500);
});
$('#InputEmail1').bind('mouseenter focus', function() {
	$(this).attr('placeholder', '')
	.animate({
		borderColor: "black",
		color: "black"
	}, 500);
}).bind('blur mouseleave', function() {
	$(this).attr('placeholder', 'Email:')
	.css({
		borderColor: "black",
	})
	if ($(this).val()) {
		$(this).css({
			borderColor: "black",
			color: "black"
		})
	}else $(this).animate({borderColor: "ffffff"}, 500);
});
$('textarea').bind('mouseenter focus', function() {
	$(this).attr('placeholder', '')
	.animate({
		borderColor: "black",
		color: "black"
	}, 500);
}).bind('blur mouseleave', function() {
	$(this).attr('placeholder', 'Message:')
	.css({
		borderColor: "black",
	})
	if ($(this).val()) {
		$(this).css({
			borderColor: "black",
			color: "black"
		})
	}else $(this).animate({borderColor: "ffffff"}, 500);
});

$('.img_arrow img').mouseenter(function() {
	$(this).animate({
		opacity: 0.5
	}, 500);
}).mouseleave(function() {
	$(this).animate({opacity: 1}, 500);
});
/*Feedback Animation Ends*/
