window.KaskusUtil = (function() {
    
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if ( !immediate ) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait || 200);
            if ( callNow ) { 
                func.apply(context, args);
            }
        };
    }

    return {
        debounce: debounce
    }
})();
if($('#all-category').length){
	var iterations = 1,
	abjad = $('.abjad'),
	search_category = $('.search-category'),
	closestSelector = $('li[id^="anc-"]');

	// capitalize and contains function
	String.prototype.capitalize = function() {
		return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};

	jQuery.expr[":"].Contains = function(a, i, m) {
	    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
	jQuery.expr[":"].contains = function(a, i, m) {
	    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};


	function getAbjad(val){
		var $$ = $(val).find('.head-title');
		firstLetter = [];

		$$.each(function() {
			var txt = $(this).text().toUpperCase();
			firstLetter.push(txt.charAt(0));
		});

		abjad.children('ul').find('li').each(function() {
			$(this).children('a').removeClass('active');
			text = $(this).children('a').text();
			if( firstLetter.indexOf( text.toUpperCase() ) > -1){
				$(this).children('a').addClass('active').css('cursor','pointer');
			}else{
				$(this).children('a').css('cursor','default');
			}
		});
	}

	// ABJAD SELECTED TRIGGER
	unactiveTitle = $(".sub-category, .headache-title" ).find('a');

	$('ul.nav-tabs').find('a').on('click', function() {
		search_category.val('');
		closestSelector.show();
		unactiveTitle.css( "color", "#555555");
		getAbjad($(this).attr('href'));
	}); 

	//  ANCHOR 
	abjad.children('ul').find('a').on('click',function(){
		$('html, body').animate({
			scrollTop: ( $( $(this).attr('href') ).offset().top - 60) 
		}, 500);
		return false;
	});

	
	// SEARCH ALL CATEGORIES
	search_category.keyup(function(event) {
		phrase = $(this).val();
		closestSelector.show();
		if(phrase === '' || phrase === undefined || phrase.length < 3){
			unactiveTitle.css( "color", "#555555");
			return false;
		}
		
		phrase = phrase.capitalize();
		SelectorContainer = $("#all-category a:contains(" + phrase + ")" );
		search_category.find('a').css({
			'text-decoration': 'none',
			'color': '#ccc'
		});
		closestSelector.hide();
		$(".headache-title" ).find('a').css( "color", "#ccc");
		SelectorContainer.css( "color", "#1497ec").closest('li[id^="anc-"]').css('display','block');
	});

	$(window).load(function() {
		$('ul.nav-tabs').find('li.active').children('a').click();
	});

	
};
// console.log("%cHayooo Agan mau ngapain??...", "color: #1497ec; font-size: x-large");
// get category search header area
function get_cat(param)
{
	if (param == 'forum' || param == 'fjb')
	{
		$('.select-category').addClass('show');
		$.ajax({
			url: '/misc/get_categories_search/' + param
		}).success(function(result) {
			var checkurl = location.href.match(/forumchoice(\[\])*=([^&]+)/);
            var id = '';
			if (checkurl)
			{
				id = checkurl[2];
			}
			var selected = '';
			for(var i in result)
			{
				if (id == result[i].forum_id)
				{
					selected = "selected";
					$('#search_category').parent().find('.customSelectInner').text(result[i].name);
				}
				else
				{
					selected = '';
				}

				$('#search_category').append('<option data-child-list="' + result[i].child_list + '" value="' + result[i].forum_id + '" ' + selected + '>' + result[i].name + '</option>');
			}
		});
	}
	else
	{
		$('.select-category').removeClass('show');
	}
}

// Spoiler

function spoiler(spoilerData)
{
   if (spoilerData.value == "Show")
   {
       $(".content_" + $(spoilerData).attr("class")).slideDown(0);
       spoilerData.innerHTML = "";
       spoilerData.value = "Hide";
   }
   else
   {
       $(".content_" + $(spoilerData).attr("class")).slideUp(0);
       spoilerData.innerHTML = "";
       spoilerData.value = "Show";
   }
}


function get_smilies() {
  localSmilies = get_MRU();

  if (localSmilies) {
    var mru_smilies = {
      'smilies': $.param(localSmilies)
    };
  }

  $.ajax({
    method: "POST",
    url: '/misc/get_smilies',
    data: mru_smilies || {}
  }).success(function(result) {
    result = JSON.parse(result);
    smilies = JSON.parse(result.kaskus);

    $('.smilies-tab').replaceWith(smilies.tab);
    $('.smilies-tab-content').replaceWith(smilies.content);

    if (result.mru) {
      smilies_mru = result.mru;

      $('#content-mru').html(smilies_mru);

      // $('.smiley-tab > .nav-tabs > li[id^="group"]:first').removeClass('active');
      // $('#emoticons .tab-content > .tab-pane[id^="tab"]:first').removeClass('active');

      $('#mru').addClass('active');
      $('#content-mru').addClass('active');

      load_MRU();
    } else {
      $('#mru').hide();
      // $('.smiley-tab > .nav-tabs > li[id^="group"]:first').addClass('active');
      // $('#emoticons .tab-content > .tab-pane[id^="tab"]:first').addClass('active');


    }
    show_tab(".smiley-wrapper .smiley-tab .tab-content > .active");
    $('.smiley-tab__item').not('.smiley-tab__item--unavailable').find('.smilie__in-action').click(function() {
      get_focus();
      smiley_tracking(this.children);
      insert_smilikiti(this.children);
    });
    $('#emoticons').show();
  });
}

function printDiv(divId) {
    window.frames["print_frame"].document.body.innerHTML= document.getElementById(divId).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
}

function get_MRU()
{
	var temp = [];

	if (localStorage[mru_key]) {
		mru = JSON.parse(localStorage[mru_key]);

		if (mru) {
			for (var a in mru) {
				if (a.search("smilie") > -1)
				{
					temp.push(mru[a]);
				}
			}
			var data = { smilies: temp };
		}
	}

	return data || {};
}

function load_MRU()
{
	var x = $('#content-mru').find('.loadMRU');

	if (x)
	{
		$.each(x, function(i, smilie)
		{
			$(smilie).attr('src', $( '.loadSmilies[alt="' + $(smilie).attr('alt') + '"]' ).attr('data-src'));
			$(smilie).attr('title', $( '.loadSmilies[alt="' + $(smilie).attr('alt') + '"]' ).attr('title'));
			$(smilie).removeAttr('class');
		});
	}

	return true;
}

function show_tab(tab_number)
{
	var x = $(tab_number).find('.loadSmilies');

	if (x)
	{
		$.each(x, function(i, smilie)
		{
			$(smilie).attr('src', $(smilie).attr('data-src'));
			$(smilie).removeAttr('data-src');
			$(smilie).removeAttr('class');
		});
	}

	return true;
}

function insert_smilikiti(a)
{
	if (localStorage) {
		var smilies = JSON.parse(localStorage.getItem(mru_key));

		if (smilies) {
			for (var b in smilies) {
				if (b === ('smilie' + $(a).attr("alt")))
				{
					delete smilies[b];
				}
			}
		}
		else {
			var smilies = new Object();
		}

		if (mru_limit == Object.keys(smilies).length) {
			delete smilies[Object.keys(smilies)[0]];
		}

		smilies['smilie' + $(a).attr("alt")] = $(a).attr("alt");

		localStorage.setItem(mru_key, JSON.stringify(smilies));
	}
	emoticon = $(a).attr("alt") + " ",
	$.markItUp({replaceWith:emoticon})
	if($.cookie('use_old_qnt') !== "1"){
       	if (sceditorInstance.inSourceMode()) {
        	sceditorInstance.insert($(a).attr("alt"))
       	} else {
        	sceditorInstance.insert('<img src="' + $(a).attr("src") + '" data-sceditor-emoticon="' + $(a).attr("alt") + '" border="0" alt="emoticon-' + $(a).attr("title") + '" title="' + $(a).attr("title") + '">', null, false);
       	}
   	}
}

// notice

function notice(text, timeout)
{
	if(typeof timeout === 'undefined'){
		timeout = 3000;
	}

	if(document.notice_tid){
		clearTimeout(document.notice_tid);
	}

	$('#notice_span').html(text);
	$('#floating_notice').show();
	document.notice_tid = setTimeout(function(){$('#floating_notice').fadeOut();}, timeout);
}

function printContent(el){
	var restorepage = document.body.innerHTML;
	var printcontent = document.getElementById(el).innerHTML;
	document.body.innerHTML = printcontent;
	window.print();
	document.body.innerHTML = restorepage;
}

// Jump to page
function jump_page(e) {
    var t = $("#" + e).val();
    var n = $(".url_jump").val();
    window.location.href = n + t;
}

function show_signin_popup()
{
  $.ajax({
      url: "/user/login",
      success: function(a) {
          $("#signin-popup .modal-body").html(a),
          $("#signin-popup").modal("show"),
          $("#username").focus();
      }
  })
}

function show_signup_popup()
{
  $.ajax({
      url: "/register/index",
      success: function(a) {
          $("#signin-popup .modal-body").html(a),
          $("#signin-popup").modal("show"),
          $("#signup_email").focus();
      }
  })
}

//SEARCH

var ten_minutes = 600;
var one_second = 1;
var local_search_history_date;
var local_search_history;
var local_top_keyword_date;
var local_top_keyword;
var indexSelected = -1;
var last_process_time = 0;
var last_search_history;
var last_top_keyword;

function get_search_dropdown()
{
    var time_now = Date.now() / 1000;
    if(parseFloat(last_process_time) + one_second > time_now)
        return;

    last_process_time = time_now;

    get_top_keyword();
    get_search_history();
    show_search_drop_down();
}

function show_search_drop_down()
{
    var data_top_keyword = get_term_local_data('top_keyword');
    var data_search_history = get_cookie_term_local_data('search_history_' + user_id);

    show_template_search(data_top_keyword, 'top_search_choice', '#top_search', 'last_top_keyword');
    show_template_search(data_search_history, 'history_search_choice', '#history_search', 'last_search_history');

    $('.jsSearchResult .jsSearchWrapper li').hover(function(event) {
        $(".jsSearchResult").find('li.is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
        indexSelected = $(".jsSearchResult .jsSearchWrapper li").index($(this));
    });

    $(".jsSearchResult .jsSearchWrapper li").mousedown(function(e) {
        e.preventDefault();
        $("#search").val($(this).text());
        $("#btn-search").click();
    });
}

function show_template_search(terms, div_id, div_to_hide, last_data)
{
    var temp_template = '';
    for (var i in terms) {
        temp_template += '<li><a href="javascript:void(0);">' + terms[i] + '</a></li>';
    }

    if (temp_template != window[last_data]) {
        document.getElementById(div_id).innerHTML = temp_template;
        window[last_data] = temp_template;
        indexSelected = -1;
    }
    if (temp_template == '') {
        $(div_to_hide).hide();
    } else {
        $(div_to_hide).show();
    }
}

function get_top_keyword()
{
    var top_keyword_date = null;
    if(localStorage) {
        top_keyword_date = parseFloat(localStorage.getItem("top_keyword_date"));
    } else {
        top_keyword_date = local_top_keyword_date;
    }
    var date_now = Date.now() / 1000;
    if(isNaN(top_keyword_date) || (top_keyword_date + ten_minutes) < date_now)
    {
        $.ajax({
            url: "/misc/get_top_keyword",
            success: function(a) {
                if (localStorage) {
                    localStorage.setItem("top_keyword", a);
                    localStorage.setItem("top_keyword_date", Date.now() / 1000);
                } else {
                    local_top_keyword = JSON.parse(a);
                    local_top_keyword_date = Date.now() / 1000;
                }

                show_search_drop_down();
            },
            error: function() {
                show_search_drop_down();
            }
        });
    }
}

function get_search_history()
{
    var search_history_date = parseFloat($.cookie("search_history_date_" + user_id));
    var date_now = Date.now() / 1000;

    if(isNaN(search_history_date) || (search_history_date + ten_minutes) < date_now)
    {
        $.ajax({
            url: "/misc/get_search_history",
            success: function(a) {
                var cookie_domain = '';
                if(typeof KASKUS_COOKIE_DOMAIN !== 'undefined')
                    cookie_domain = KASKUS_COOKIE_DOMAIN;
                else
                    cookie_domain = COOKIE_DOMAIN;
                date_now = Date.now() / 1000;

                $.cookie("search_history_" + user_id, a, { expires: date_now + ten_minutes, path:"/", domain:cookie_domain, secure:false});
                $.cookie("search_history_date_" + user_id, date_now, { expires: date_now + ten_minutes, path:"/", domain:cookie_domain, secure:false});

                show_search_drop_down();
            },
            error: function() {
                show_search_drop_down();
            }
        });
    }
}

function get_term_local_data(key)
{
    var data = {};
    if (localStorage) {
        data = localStorage.getItem(key);
        if(data) {
            try {
                data = JSON.parse(data);
            } catch(e) {
                data = {};
            }
        }
    } else {
        data = window['local_' + key];
    }

    return (data) ? data : {};
}

function get_cookie_term_local_data(key)
{
    var data = $.cookie(key);
    try {
        data = JSON.parse(data);
    } catch(e) {
        data = {};
    }
    return data;
}

function remove_search_history()
{
  $.ajax({
      url: "/misc/remove_search_history",
      success: function() {
          var cookie_domain = '';
          if(typeof KASKUS_COOKIE_DOMAIN !== 'undefined')
              cookie_domain = KASKUS_COOKIE_DOMAIN;
          else
              cookie_domain = COOKIE_DOMAIN;
          date_now = Date.now() / 1000;
          $.cookie("search_history_" + user_id, '[]', { expires: date_now + ten_minutes, path:"/", domain:cookie_domain, secure:false});
          $.cookie("search_history_date_" + user_id, date_now, { expires: date_now + ten_minutes, path:"/", domain:cookie_domain, secure:false});

          show_search_drop_down();
      }
  });
}

function resend_otp_code() {
  $.post("/register/resend_registration_otp",
    function(data)
    {
      var img_url = '';
      if (data.success == false) {
          img_url = '-sad';
      } else {
      $("#modal-container").on("hidden.bs.modal", function () {
          window.location.replace('/register/verify_otp');
      });
      }
      $('#modal-container .modal-content').html('<div class="modal-header p-all-0"><button id="notice-reveal" type="button" class="close" data-dismiss="modal"><i class="fa fa-times"></i><span class="sr-only">Close</span></button></div><div class="modal-body text-center"><img src="' + CDN_URL + '/e3.1/images/images-notice' + img_url + '.png" width="120" height="120" alt="notice"><p>' + data.message + '</p><div class="modal-footer m-bottom-20"><input type="button" class="btn btn-blue btn-fixed" value="OK" data-dismiss="modal"/></div></div>');
      $('#modal-container').modal('show');
      return false;
  },'json');
}

/**
 * notice cookie
 */
function updateNotice(notice_id)
{
	var cookie_data = $.parseJSON($.cookie('notices'));
	cookie_data.push(notice_id);
	$.cookie('notices', JSON.stringify(cookie_data), {expires:null,path:"/",domain:"",secure:false});
}

$('.btn_close').click(function() {
	$(this).closest('.jsNoticeBoard').remove();
});

$('#notif').on('click', function(event) {
  if ($('#notif').hasClass("open")) {
    $('.notif-wrap').attr('data-id', 'header-notification-old');
  } else {
    $('.notif-wrap').removeAttr('data-id');
  }
});

//add to watch list
$('.watchlist').on('click', function(){
	$$ = $(this);
	if($$.hasClass('watched')){
		$$.removeClass('watched').html('<i class="fa fa-eye"></i> Watch List');
	}else{
		$$.addClass('watched').html('<i class="fa fa-eye-slash"></i> Remove Watch List');
	}
});

$('.header-trigger').on('click', function() {
	if( $('#left-nav').hasClass('full-show') || $('#bgover').length ){
		$('#bgover').remove();
	}else{
		$('body').prepend('<div id="bgover" onclick="$(\'.header-trigger\').click()"></div>');
	}
});

var khplist = $('#k-hp-list');
khplist.find('label').click(function() {
	var imgicon = $(this).find('i').attr('class');
	khplist.find('li').removeClass('selected');
	$(this).closest('li').addClass('selected');
	$('#header-search-trigger').attr('class', imgicon);
});

// Accordion
var menuAccordion = $('#menu-accordion');
menuAccordion.children('ul').find('a').click(function() {
	var checkElement = $(this).next();
	if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('open');
		checkElement.slideUp();
	}
	if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		menuAccordion.children('ul').find('ul:visible').slideUp();
		menuAccordion.find('li').removeClass('open');
		$(this).closest('li').addClass('open');
		checkElement.slideDown();
	}

	if ($(this).closest('li').find('ul').children().length === 0) {
		return true;
	}else{
		return false;
	}
});

// Accordion
// var accordionMenu = $('.accordion-menu');
// accordionMenu.children('ul').find('a').click(function() {
// 	var checkedMenu = $(this).next();
// 	if ((checkedMenu.is('ul')) && (checkedMenu.is(':visible'))) {
// 		$(this).closest('li').removeClass('open');
// 		checkedMenu.slideUp();
// 	}
// 	if ((checkedMenu.is('ul')) && (!checkedMenu.is(':visible'))) {
// 		accordionMenu.children('ul').find('ul:visible').slideUp();
// 		accordionMenu.find('li').removeClass('open');
// 		$(this).closest('li').addClass('open');
// 		checkedMenu.slideDown();
// 	}

// 	if ($(this).closest('li').find('ul').children().length === 0) {
// 		return true;
// 	}else{
// 		return false;
// 	}
// });

$('.accordion-menu > ul > li > a').click(function(){
	var link = $(this).attr('href');
	$('.accordion-menu ul ul').slideUp();
	$('.accordion-menu ul li').removeClass('open');
	if(!$(this).next().is(":visible"))
	{
		$(this).next().slideDown();
		$(this).closest('li').addClass('open');

	}
	switch($(this).has('.fa-angle-right').length==1){
		case true:
			$(this).find('.fa-angle-right').addClass('fa-angle-down');
			$(this).find('.fa-angle-right').removeClass('fa-angle-right');
			break;
		case false:
			$(this).find('.fa-angle-down').addClass('fa-angle-right');
			$(this).find('.fa-angle-down').removeClass('fa-angle-down');
	}
	if(link!='#'){
		$(window).attr("location",link);
	}

	return false;
});

// $('.accordion-menu > ul > li > ul > li > a').click(function(){


// 	//$('.accordion-menu > ul > li > ul > li').removeClass('open');
// 	if(!$(this).next().is(":visible"))
// 	{
// 		$(this).next().slideDown();
// 		$(this).closest('li').addClass('open');
// 	}
// 	else{
// 		$(this).next().slideUp();
// 	}
// 	return false;
// });

// polling
$('.poll-swap-result').click(function(){
	$('#polling-form').addClass('hide');
	$('#polling-result').removeClass('hide');
});

$('.poll-swap-back').click(function(){
	$('#polling-form').removeClass('hide');
	$('#polling-result').addClass('hide');
});

// accessibility
$('.text-size-increase').click(function(){
	currentSize = parseInt($('.entry').css('font-size')) + 1;
	if(currentSize <= 32){
		$('.entry').css('font-size', currentSize);
		$('.post-quote').children('span').css('font-size', currentSize);
	}
});

$('.text-size-decrease').click(function(){
	currentSize = parseInt($('.entry').css('font-size')) - 1;
	if(currentSize >= 10){
		$('.entry').css('font-size', currentSize);
		$('.post-quote').children('span').css('font-size', currentSize);
	}
});

//toggle multi-quote
$('.multi-quote').click(function() {
	$(this).toggleClass('o-btn--multi-quoted');
});

//quick reply
$('.quick-reply').click(function() {
	$(this).parent().find('.hfeed').addClass('bagus');
});

//notice
$('.btn-close').click(function(){
	$(this).parent().hide();
});

// post-icon post reply
var titleMessage = $('#title-message');
titleMessage.find('label').click(function() {
	$$ = $(this);
	$$.find('input').prop("checked", true);
	titleMessage.find('label').removeClass('selected');
	$$.addClass('selected');
	if( $$.find('img').length < 1){
		titleMessage.find('.btn').html('No icon');
	}else{
		img = $$.find('img').attr('src');
		titleMessage.find('.btn').html('<img src="'+ img +'" width="15" />');
	}
});

// behaviour jump page pagination
$('.jump-page-form').find('.dropdown-toggle').on('click', function(event) {
	event.preventDefault();
	setTimeout(function() {
		$('.jump-page-top').focus();
	}, 20);
});

//prevent hiding dropdown
// $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
//     e.stopPropagation();
// });

// USER EXPERIENCE
$('.sidebar-trigger-small-screen').on('click', function() {
	setTimeout(function (){
		$('#filter-cat').focus();
	}, 10);
});

$('.short-url').children('a').on('click',function() {
	setTimeout(function() {
		$('.short-url').find('input').focus().select();
	}, 50);
});

$('.dropdown-close').on('click', function() {
	$(".dropdown-embed.open").removeClass("open");
});



// choose location
$('.fjb-refine-search-form .location, .fjb-refine-search-form .close').on('click', function(event) {
	event.preventDefault();
	$('.location-list-con').toggle();
});

// behaviour
$('#loginform').find('.dropdown-toggle').on('click', function(event) {
	event.preventDefault();
	setTimeout(function() {
		$('#username').focus();
	}, 20);
});

// related thread
if ($('.related-thread, .bengkel-content').length){
	var widthList = $('.related-thread, .wrap-bengkel').find('li').outerWidth();
	var lengthList = $('.related-thread, .wrap-bengkel').find('li').length;
	var state = 0, leftPos = 0, lengthData = 1;

	// modify width list on bengkel menu
	if( $('.bengkel-content').length ){
		widthList = widthList + 110;
		lengthData = 3;
	}

	// $('.wrap-bengkel').children('ul').width( widthList * lengthList );

	$('.related-thread').find('.close').bind('click', function() {
		$('.related-thread').removeClass('nongol').addClass('disable');
	});

	$('.related, .arrow-bengkel').bind('click', function(event) {
		event.preventDefault();
		if( $(this).hasClass('prev') ){
			// prev
			if( state === 0 ){
				return;
			}
			state = state - 1;
			leftPos = widthList * state;
			$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft: leftPos}, 600);
		}else{
			// next
			if( state === (lengthList - lengthData) ){
				return;
			}
			state = state + 1;
			leftPos = widthList * state;
			$(".wrap-scroll, .wrap-bengkel").animate({scrollLeft: leftPos}, 600);
		}
	});


	$('#show-related').on('click', function(event) {
		event.preventDefault();
		$('.related-thread').toggleClass('nongol');
	});
}

$('.switch-view').on('click', function() {
	$('.switch-view').toggleClass('on');
	$('body').toggleClass('response');
});

//toggle autoplay
$('.autoplay-widget .btn-toggle').click(function(){
	$('.autoplay-widget .btn-toggle').toggleClass( "on" );
});


$(".card__subscribe--btn").click(function(){
	$(this).toggleClass("active");
});

$(".add-video-via-link").click(function(){
	$("#default_video_picture_file").toggleClass("disappear");
	$("#default_video_picture").toggleClass("disappear");
	$("#input-video-url").toggleClass("active");
	$(".delete-video-btn").toggleClass("active");
	$("#input-video-url").focus();
});

$(".delete-video-btn").click(function(){
	if($("#input-video-url").hasClass("active")){
		$("#default_video_picture").removeClass("disappear");
		$("#default_video_picture_file").removeClass("disappear");
		$(".delete-video-btn").removeClass("active");
		$("#input-video-url").toggleClass("active");
	}
	if($(".uploaded-video").hasClass("active")){
		$("#default_video_picture").removeClass("disappear");
		$("#default_video_picture_file").removeClass("disappear");
		$(".delete-video-btn").removeClass("active");
		$("#iframe-preview").html("");
	}
	if($("#uploaded-video-file").hasClass("active")){
		$("#uploaded-video-file").toggleClass("active");
		$("#default_video_picture_file").toggleClass("disappear");
		$("#default_video_picture").toggleClass("disappear");
		$(".delete-video-btn").toggleClass("active");
		var reader = new window.FileReader(),
    reader = window.URL || window.webKitURL;
    url = reader.createObjectURL(file);
    video.src = url;
		if (reader && reader.createObjectURL) {
      reader.revokeObjectURL(url);  //free up memory !IMPORTANT
		}
	}
});

function onClickPreview(clickedImage){
	var imageid = clickedImage.id;
  $("#"+clickedImage.nextSibling.nextSibling.id).click();
}



function handleFiles(MAX_WIDTH, MAX_HEIGHT, item)
{
	var filesToUpload = item.files,
    	file = filesToUpload[0],
    	img = document.createElement("img"),
    	imageMimes = ['image/png', 'image/bmp', 'image/gif', 'image/jpeg'],
    	acceptedMimes = new Array(),
    	reader = new FileReader();
    if(imageMimes.indexOf(file.type) === -1){
    	alert('file type is not allowed!!!');return;
    }
    if(file.type !== 'image/gif'){
    	reader.onload = function(e)
	    {
	        img.src = e.target.result;
	        var canvas = document.createElement("canvas");
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0);
	        var width = img.width;
	        var height = img.height;

	        if (width > height) {
	          if (width > MAX_WIDTH) {
	            height *= MAX_WIDTH / width;
	            width = MAX_WIDTH;
	          }
	        } else {
	          if (height > MAX_HEIGHT) {
	            width *= MAX_HEIGHT / height;
	            height = MAX_HEIGHT;
	          }
	        }
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0, width, height);
	        var dataurl = canvas.toDataURL(file.type, 0.8);
	        item.setAttribute('data-img',dataurl);
	        document.getElementById("image").setAttribute('src',dataurl);
	        // BASE64 Image = dataurl;
	    }
	    // Load files into file reader
	    reader.readAsDataURL(file);
    }else{
    	alert('gambar gif tidak di resize');
    }
}
var linksearch, searchchoice, catLoaded, retryFetch = true;

function fetchCategories()
{
    url = KASKUS_URL + '/misc/get_categories/' + catVersion;
    $.retrieveJSON(url, {}, function(a){
        if(retryFetch && a.version != catVersion)
        {
            $.clearJSON(url, {});
            retryFetch = false;
            fetchCategories();
        }
        else
        {
            $('#cat-forum').replaceWith(a.forum);
            $('#cat-jb').replaceWith(a.jb);
            catLoaded = true;

            var liSelected,
                valscroll;
            $("#filter-cat-forum").bind("keydown keyup", function(event) {
                var li = $("#update-tag ul.sidebar-category").find('li');
                // if keydown
                if(event.which === 40){
                    if(event.type === 'keydown'){
                        if(liSelected){
                            liSelected.removeClass('selected');
                            next = liSelected.next();
                            if(next.length > 0){
                                liSelected = next.addClass('selected');
                            }else{
                                liSelected.addClass('selected');
                            }
                        }else{
                            liSelected = li.eq(0).addClass('selected');
                        }
                    }
                    valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
                    // $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
                // if keyup
                }else if(event.which === 38){
                    if(event.type === 'keydown'){
                        if(liSelected){
                            liSelected.removeClass('selected');
                            next = liSelected.prev();
                            if(next.length > 0){
                                liSelected = next.addClass('selected');
                            }else{
                                liSelected.addClass('selected');
                            }
                        }else{
                            liSelected = li.last().addClass('selected');
                        }
                    }
                    //valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
                    //$('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
                // presss enter get redirect URL
                }else if(event.which === 13){
                    if($('.scrolling-con-update').find('li.selected').length > 0){
                        window.location = $('.scrolling-con-update li.selected .categories-title').children('a').attr('href');   
                    }
                }else {
                    // keyup get data json and append listing data
                    if(event.type === 'keyup'){
                        $("#update-tag ul.sidebar-category").find('li').removeClass('selected');
                        searchField = $('#filter-cat-forum').val();
                        $( ".flyout__search i.fa-search" ).replaceWith( "<i class='fa fa-times'></i>" );
                        // close filter categories
                        $('#tabForum .flyout__search i.fa-times').click(function() {
                            $(this).replaceWith( "<i class='fa fa-search'></i>" );
                            $('#filter-cat-forum').val('');
                            $('#update-tag').html('');
                            $('#update-tag').addClass('hide');
                        });
                        try{
                            myExp = new RegExp(searchField, 'i');
                            if(searchField === ''){
                                $('#update-tag').addClass('hide');
                                $( "#tabForum .flyout__search i.fa-times" ).replaceWith( "<i class='fa fa-search'></i>" );
                                return false;
                            }
                            $.retrieveJSON( urlCatJSON, { usergroupid: userGroupIdJSON }, function(data) {
                                $('#update-tag').removeClass('hide');
                                //heightUpdateContent = $('.tag-wrap').height() - 28;
                                //$('#update-tag').children('.scrolling-con-update').height(heightUpdateContent);
                                output = '<ul class="flyout__result__list"><div class="flyout__scroll flyout__scroll--up"><i class="fa fa-chevron-up"></i></div>';
                                $.each(data, function(key, val) {
                                    if (val.forum_name.search(myExp) != -1) {
                                        output += '<li class="flyout__result__item">';
                                        output += '<a class="flyout__result__link" href="' + decodeURIComponent(val.forum_url) + '">';
                                        output += '<img src="' + decodeURIComponent(val.forum_icon) + '" alt="" width="20" height="20" ><span>' + decodeURIComponent(val.forum_name);
                                        output += '</span></a>';
                                        output += '</li>';
                                    }
                                });
                                output += '<div class="flyout__scroll flyout__scroll--down"><i class="fa fa-chevron-down"></i></div></ul>';
                                $('#update-tag').html(output);

                            },864e5);
                            liSelected = '';
                            checkScroller(".flyout__result__list");
                        }catch(err){
                            // console.log(err);
                        }
                    }
                }
            });
            
            $("#filter-cat-jb").bind("keydown keyup", function(event) {
                var li = $("#update-tag ul.sidebar-category").find('li');
                // if keydown
                if(event.which === 40){
                    if(event.type === 'keydown'){
                        if(liSelected){
                            liSelected.removeClass('selected');
                            next = liSelected.next();
                            if(next.length > 0){
                                liSelected = next.addClass('selected');
                            }else{
                                liSelected.addClass('selected');
                            }
                        }else{
                            liSelected = li.eq(0).addClass('selected');
                        }
                    }
                    valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
                    // $('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
                // if keyup
                }else if(event.which === 38){
                    if(event.type === 'keydown'){
                        if(liSelected){
                            liSelected.removeClass('selected');
                            next = liSelected.prev();
                            if(next.length > 0){
                                liSelected = next.addClass('selected');
                            }else{
                                liSelected.addClass('selected');
                            }
                        }else{
                            liSelected = li.last().addClass('selected');
                        }
                    }
                    //valscroll = ( $(".scrolling-con-update ul li.selected").position().top ) - 140;
                    //$('.mCSB_container').attr('style', 'position:relative;top:-'+ valscroll +'px;');
                // presss enter get redirect URL
                }else if(event.which === 13){
                    if($('.scrolling-con-update').find('li.selected').length > 0){
                        window.location = $('.scrolling-con-update li.selected .categories-title').children('a').attr('href');   
                    }
                }else {
                    // keyup get data json and append listing data
                    if(event.type === 'keyup'){
                        $("#update-tag ul.sidebar-category").find('li').removeClass('selected');
                        searchField = $('#filter-cat-jb').val();
                        $( ".flyout__search i.fa-search" ).replaceWith( "<i class='fa fa-times'></i>" );
                        // close filter categories
                        $('#tabJB .flyout__search i.fa-times').click(function() {
                            $(this).replaceWith( "<i class='fa fa-search'></i>" );
                            $('#filter-cat-jb').val('');
                            $('#update-tag').html('');
                            $('#update-tag').addClass('hide');
                        });
                        try{
                            myExp = new RegExp(searchField, 'i');
                            if(searchField === ''){
                                $('#update-tag').addClass('hide');
                                $( "#tabJB .flyout__search i.fa-times" ).replaceWith( "<i class='fa fa-search'></i>" );
                                return false;
                            }
                            $.retrieveJSON( urlCatJSON, { usergroupid: userGroupIdJSON }, function(data) {
                                $('#update-tag').removeClass('hide');
                                //heightUpdateContent = $('.tag-wrap').height() - 28;
                                //$('#update-tag').children('.scrolling-con-update').height(heightUpdateContent);
                                output = '<ul class="flyout__result__list"><div class="flyout__scroll flyout__scroll--up"><i class="fa fa-chevron-up"></i></div>';
                                $.each(data, function(key, val) {
                                    if (val.forum_name.search(myExp) != -1) {
                                        output += '<li class="flyout__result__item">';
                                        output += '<a class="flyout__result__link" href="' + decodeURIComponent(val.forum_url) + '">';
                                        output += '<img src="' + decodeURIComponent(val.forum_icon) + '" alt="" width="20" height="20" ><span>' + decodeURIComponent(val.forum_name);
                                        output += '</span></a>';
                                        output += '</li>';
                                    }
                                });
                                output += '<div class="flyout__scroll flyout__scroll--down"><i class="fa fa-chevron-down"></i></div></ul>';
                                $('#update-tag').html(output);

                            },864e5);
                            liSelected = '';
                            checkScroller(".flyout__result__list");
                        }catch(err){
                            // console.log(err);
                        }
                    }
                }
            });
            if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
                $('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
            }
            //scroll top main category nav
            $(".flyout__category__list").bind('scroll', function() {
                checkScroller($(this));
            }); 

            //scroll top main category search
            $(".flyout__result__list").bind('scroll', function() {
                checkScroller($(this));
            }); 

            //scroll anakan main category nav
            $(".flyout__category-children__list").bind('scroll', function() {
                checkScroller($(this));
            });
        }
    }, 36e5);
}
// get height content hover
var heightContentHover = $('.hover-sidebar-content').height(),
    forumCategories = $('#forum-home-categories'),
    fjbCategories = $('#fjb-home-categories');

if($('#home-categories').length){
    // checking arrow circle up
    function checkArrow(){
        if( forumCategories.hasClass('show-all') ){
            fjbCategories.find('.fa').attr('class','fa fa-chevron-circle-up right');
        }else{
            fjbCategories.find('.fa').attr('class','fa fa-chevron-circle-down right');
        }
    }

    // change chevron
    fjbCategories.find('.head-categories-title').hover(function () {
        if( fjbCategories.hasClass('show-five'))
        $(this).find('.fa').attr('class','fa fa-chevron-circle-up right');
    }, function () {
        if( fjbCategories.hasClass('show-five'))
        $(this).find('.fa').attr('class','fa fa-chevron-circle-down right');
    });

    // homepage slide leftsidebar
    function homeSlide(selectorSlide){
        var liHeight = selectorSlide.find('.listing-sidebar').height() + 1;
        var lilength = selectorSlide.find('.listing-sidebar').length + 1;
        if(selectorSlide.hasClass('show-five')){
            selectorSlide.removeClass('show-five').addClass('show-all').animate({height: (liHeight*lilength)}, {queue:false, duration:300});
            selectorSlide.next().removeClass('show-five').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
            selectorSlide.prev().removeClass('show-five').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
            checkArrow();
        }else{
            if(selectorSlide.hasClass('show-all')){
                $('#home-categories').children('div').attr('class','show-five').animate({ height: (liHeight*6)}, {queue:false, duration:300});
            }else if(selectorSlide.hasClass('hide-all')){
                selectorSlide.prev().removeClass('show-all').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
                selectorSlide.next().removeClass('show-all').addClass('hide-all').animate({height: 32}, {queue:false, duration:300});
                selectorSlide.removeClass('hide-all').addClass('show-all').animate({height: (liHeight*lilength)}, {queue:false, duration:300});
            }else{
                selectorSlide.addClass('show-five').animate({ height: (liHeight*6)}, {queue:false, duration:300});
            }
            checkArrow();
        }
    }
}
// homepage sidebar slideup
$('.head-categories-title').bind('click', function(event) {
    event.preventDefault();
    var selectorSlide = $(this).parent('div');
    homeSlide(selectorSlide);
});

// $('.masonry').masonry({
//   // columnWidth: 337.5,
//   itemSelector: '.masonry--item'
// });

// autoplay hot featured
var refreshInterval = null;

function swapFeatured() {
	active = $('.hot-featured .tab-nav li.active');
	activeDataFjb = $("#fjb-highlight").find(".carousel-indicators").children(".active"); 
    _gaq.push([activeDataFjb.attr("data-event"), activeDataFjb.attr("data-event-category"),
    activeDataFjb.attr("data-event-action"), activeDataFjb.attr("data-event-label")]);
	activeContent = $('.hot-featured .tab-panel .tab-pane.active');
	next = active.next().length > 0 ? active.next().addClass('active') : $('.hot-featured .tab-nav li:first').addClass('active');
	activeNext = activeContent.next().length > 0 ? activeContent.next().addClass('active') : $('.hot-featured .tab-panel .tab-pane:first').addClass('active');
	active.removeClass('active');
	activeContent.removeClass('active');
}

$("#fjb-highlight").on("slid.bs.carousel", function() {
    activeDataFjb = $("#fjb-highlight").find(".carousel-indicators").children(".active"), 
    _gaq.push([activeDataFjb.attr("data-event"), activeDataFjb.attr("data-event-category"), 
    activeDataFjb.attr("data-event-action"), activeDataFjb.attr("data-event-label")])
});

$('.hot-featured').on('mouseleave', function() {
	refreshInterval = setInterval(swapFeatured, 2000);
});
$('.hot-featured').on('mouseover', function() {
	clearInterval(refreshInterval);
});

// be step
(function($){
	$.fn.cycle = function(timeout, clas){
		var length  = $(this).length,
			current = 0,
			prev = 0,
			divs = $(this);
		divs.eq(0).addClass(clas);

		function next(){
			divs.eq(prev).removeClass(clas);
			divs.eq(current).addClass(clas);
			prev = current;
			current = (current + 1) % length;
			setTimeout(next, timeout);
		}
		setTimeout(next, timeout);
		return $(this);
	};
}(jQuery));


document.onkeydown = function(event) {
	event = event || window.event; // Internet Explorer Event...
	key = event.which || event.charCode || event.keyCode; // browser differences...
	if(key == 27) $('#bgover').click();
	if ($('input[type="text"], textarea, input[type="radio"], input[type="checkbox"], input[type="password"] , input[type="email"]').is(":focus")) return;
	state = 0;
	if (!event.altKey && !event.ctrlKey && event.shiftKey ) { // Shift
		switch (key) {
			case 88: // shift+x (Open all spoiler)
				$(".spoiler input[type=button]").click();
			break;

			case 65: // shift+A (Show/Hide All categories)
				if($('body').hasClass('landing')){
					if($('.sidebar-trigger-small-screen').is(':visible')) {
						$('.sidebar-trigger-small-screen').click();	
					}
					setTimeout(function(){
						$('#filter-cat').focus();	
					}, 10);
				}else{
					$('.sidebar-trigger-small-screen').click();
				}
			break;

			case 83: // shift + s (Search)
				setTimeout(function() {
					$('#search').focus();
				}, 10);
			break;

			case 49:  // shift + 1 (Go to Homepage)
				link = $('.navbar-brand').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 50:  // shift + 2 (Go to Forum)
				link = $('#kk-forum a').attr('href');
				if(!$("#search").is(":focus")) {
					window.location = link;
				}
			break;

			case 51:  // shift + 3 (Go to FJB)
				link = $('#kk-fjb a').attr('href');
				if(!$("#search").is(":focus")) {
					window.location = link;
				}
			break;

			case 52:  // shift + 4 (Go to Groupee landing page)
				link = $('#kk-groupee a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 53:  // shift + 5 (Go to Radio landing page)
				link = $('#kk-radio a').attr('href');
				if(link){
					window.location = link;
				}
			break;

			case 82: // Shift+R (Reply Thread)
				link = $("#act-post").attr("href");
				if(link){
					window.location = link;
				}
			break;

			case 37: // (Go To Previous Page)
				link = $(".pagination .previous-page").attr("href");
				if(link){
					window.location = link;
				}
			break;
			
			case 39: // (Go to Next Page)
				link = $(".pagination .next-page").attr("href");
				if(link){
					window.location = link;
				}
			break;

			default:
				key = '';
			break;
		}
	} 
	else if (event.ctrlKey && event.shiftKey && !event.altKey) { // Ctrl + shift
		switch (key) {
			case 37: // Go to previous thread
				link = $(".prev-thread").attr("href");
				if(link){
					window.location = link;
				}
			break;

			case 39: // Go to next thread
				link = $(".next-thread").attr("href");
				if(link){
					window.location = link;
				}
			break;

			default:
				key = '';
			break;
		}
	}
	else if (!event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) { // Key Only		
		switch (key) {
			case 74: // J (Jump to next post section)
				if(state < $('.permalink').length - 1){
					state++;
					scrollval = $('.permalink').eq(state).offset().top;
					$('body').animate({scrollTop: scrollval - 100}, 500);
				}
			break;

			case 75: // K (Jump to next post section)
				if(state > 0){
					state--;
					scrollval = $('.permalink').eq(state).offset().top;
					$('body').animate({scrollTop: scrollval - 100}, 500);
				}
			break;

			case 49: // 1 (Homepage)
				$('.navbar-brand').focus();
			break;

			case 50: // 2 (Forum)
				if(!$("#search").is(":focus")) {
					$('#kk-forum a').focusout();
				}
			break;

			case 51: // 3 (FJB)
				if(!$("#search").is(":focus")) {
					$('#kk-fjb a').focusout();
				}
			break;

			case 52: // 4 (Gruopee)
				$('#kk-groupee a').focus();
			break;

			case 53: // 5
				$('#kk-radio a').focus();
			break;

			default:
				key = '';
			break;
		}
	} 
	else {
		return true;
	}
	return true;
};

$('#search-header-button , #k-hp-list').hover(function() {
	$('#search-header-button').addClass('hover');
}, function() {
	$('#search-header-button').removeClass('hover');
});

$( ".flyout__trigger" )
	.mouseover(function() {
    	$(".flyout__anchor").show();

    	if($('.flyout__tab__pane > .flyout__category__list').length > 0 && $('.flyout__tab__pane > .flyout__category__list')[0].scrollHeight > $('.flyout__tab__pane > .flyout__category__list').height()){
	  		$('.flyout__tab__pane > .flyout__category__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
	  	if($('.flyout__subscribed__list').length > 0 && $('.flyout__subscribed__list')[0].scrollHeight > $('.flyout__subscribed__list').height()){
	  		$('flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
 	.mouseout(function() {
    	$(".flyout__anchor").hide();
  	});

$( ".flyout__content" )
	.mouseenter(function() {
    	$(this).closest(".flyout__anchor").show();
  	})
	.mouseleave(function() {
    	$(this).closest(".flyout__anchor").hide();
  	});

$( ".flyout__category__item--has-children , .flyout__category-children__item--has-children"  )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	if($(this).find('.flyout__category-children__list').first().length > 0 && $(this).find('.flyout__category-children__list').first()[0].scrollHeight > $(this).find('.flyout__category-children__list').first().height()){
	  		$(this).find('.flyout__category-children__list').first().siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
  	});       

$( ".flyout__subscribed__anchor" )
	.mouseover(function() {
    	$(this).closest(".flyout__content").addClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").addClass( "flyout__anchor--subscribed" );
    	if($(this).find('.flyout__subscribed__list').length > 0 && $(this).find('.flyout__subscribed__list')[0].scrollHeight > $(this).find('.flyout__subscribed__list').height()){
	  		$(this).find('.flyout__subscribed__list').siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
	  	}
  	})
  	.mouseout(function() {
    	$(this).closest(".flyout__content").removeClass( "flyout__content--triggered" );
    	$(this).closest(".flyout__anchor").removeClass( "flyout__anchor--subscribed" );
  	});

$( ".flyout__subscribed__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").addClass( "flyout__subscribed__anchor__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__subscribed__anchor__link").removeClass( "flyout__subscribed__anchor__link--hovered" );
  	});

$( ".flyout__category__panel" )
	.mouseover(function() {
    	$(this).siblings(".flyout__category__link").addClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").addClass( "flyout__category-children__link--hovered" );
  	})
  	.mouseout(function() {
    	$(this).siblings(".flyout__category__link").removeClass( "flyout__category__link--hovered" );
    	$(this).siblings(".flyout__category-children__link").removeClass( "flyout__category-children__link--hovered" );
  	});

var scrolling = false;
function scrollContent(direction,element) {
    var amount = (direction === "up" ? "-=5px" : "+=5px");
    $(element).animate({
        scrollTop: amount
    }, 1, function() {
        if (scrolling) {
            scrollContent(direction,element);
        }
    });
}

$(".flyout__scroll--down")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("down",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("down",$(this).siblings(".flyout__category__list"));
    	scrollContent("down",$(this).siblings(".flyout__result__list"));
    	scrollContent("down",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});

$(".flyout__scroll--up")
	.bind("mouseover", function(event) {
    	scrolling = true;
    	scrollContent("up",$(this).siblings(".flyout__category-children__list"));
    	scrollContent("up",$(this).siblings(".flyout__category__list"));
    	scrollContent("up",$(this).siblings(".flyout__result__list"));
    	scrollContent("up",$(this).siblings(".flyout__subscribed__list"));
	})
	.bind("mouseout", function(event) {
    	scrolling = false;
	});

// reputation
function reputationTrigger(){
	$('.reputation-icon').hover(function() {
		if($(this).hasClass('cendol-big')){
			$(this).addClass('shake');
		}else{
			$(this).addClass('tada');	
		}
	}, function() {
		if($(this).hasClass('cendol-big')){
			$(this).removeClass('shake');
		}else{
			$(this).removeClass('tada');
		}
	});

	$('.reputation-icon').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.radio').prev().removeClass('selected');
		$(this).closest('.radio').next().removeClass('selected');
		$(this).closest('.radio').addClass('selected');
	});
}

// bengkel
$(".ani-swing").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend", function() {
	$(this).removeClass("swing");
});

$(".ani-swing").hover(function() {
	$(this).addClass("swing");
});

// cendol-bata
$('.vote-up-off').hover(function() {
	$(this).parent().toggleClass('vote-cendol');
});
$('.vote-down-off').hover(function() {
	$(this).parent().toggleClass('vote-bata');
});
;
(function($) {

  $.fn.kslzy = function(threshold, callback) {

    var $w = $(window),
      images = this,
      threshold = threshold || 0;

    function checkVisible(elm, eval) {
      eval = eval || "visible";
      var spolier = $(elm).closest(".spoiler");
      if (spolier.length == 1) {
        elm = spolier;
      }
      var vpH = $w.height(), // Viewport Height
        st = $w.scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
      //console.log("elm = "+elm+" y = "+y+" scrollTop = "+st+ " elementHeight = "+elementHeight+" Viewport = "+vpH+" threshold ="+threshold);
      if (eval == "visible") return ((y < (vpH + st + threshold)) && (y > (st - elementHeight - threshold)));
      if (eval == "above") return ((y < (vpH + st)));
    }

    this.one("display", function() {
      var downloadingImage = new Image();
      if ($(this).context.tagName == 'DIV' || $(this).context.tagName == 'A') {
        var currElem = this;
        downloadingImage.onload = function() {
          $(currElem).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src")
            .hide()
            .fadeIn();

          if ($(currElem).attr("data-type") == "1") {
            $(currElem).css("background-image", "url(" + this.src + ")");
          } else {
            var img = $('<img class="lte-img">');
            img.attr('src', this.src);
            img.appendTo($(currElem));
          }

        };
      } else {
        var currImage = this;
        downloadingImage.onload = function() {
          $(currImage).removeClass("mls-img")
            .addClass("rjn-img")
            .removeAttr("data-src");

          $(currImage).attr('src', this.src);
        };
      }
      downloadingImage.src = $(this).attr("data-src");
    });

    function scan() {
      var inview = images.filter(function() {

        if ($(this).is(":visible") == false)
          return false;

        return checkVisible($(this));
      });

      loaded = inview.trigger("display");
      // console.log(inview);
      images = images.not(loaded);
    }

    $w.on("scroll.kslzy resize.kslzy lookup.kslzy click.kslzy", scan);

    scan();

    return this;

  };

})(window.jQuery || window.Zepto);

window.KaskusMap = (function() {
    var _map, 
        _marker,
        _markerIcon,
        _location,
        _geocoder,
        _autocompleteService,
        _searchBox,
        _infoWindow,
        _uiContainer,
        _uiConfirmButton,
        _onSelectedListener,
        dGetLocationByCurrentMarker = KaskusUtil.debounce(getLocationByCurrentMarker, 1000);

    function KaskusMap(mapElm, option) {
        _uiContainer = mapElm;
        _location = (option || {}).location;
        _markerIcon = (option || {}).markerIcon;
        _onSelectedListener = (option || {}).onSelected;
        _geocoder = new google.maps.Geocoder();
        _autocompleteService = new google.maps.places.AutocompleteService();
    }

    KaskusMap.prototype.init = function() {
        var locationPromise = !!_location ? getLocationByQuery(_location.address) : getLocationByNavigator();
        locationPromise
            .then(setup)
            .catch(function(err) {
                setup();
                console.error(err);
            });
    }

    function getLocationByQuery(query) {
        return fetchLocationAmbiguous(_location.address)
            .then(function(placeId) { 
                return fetchLocation({'placeId': placeId}); 
            });
    }

    function getLocationByNavigator() {
        return fetchCurrentLocation()
            .then(function(latLng) { 
                return fetchLocation({'location': latLng}); 
            });
    }

    KaskusMap.prototype.setLocation = function(location) {
        _location = location;
    }

    KaskusMap.prototype.getLocation = function() {
        return _location;
    }

    KaskusMap.prototype.setMarkerIcon = function(markerIcon) {
        _markerIcon = markerIcon;
    }

    KaskusMap.prototype.setOnSelectedListener = function(listener) {
        _onSelectedListener = listener;
    }

    function setup(locationObj) {
        if (!_uiContainer) throw 'Container element is not supplied';

        _location = locationObj;

        _map = new google.maps.Map(_uiContainer, {
            center: locationObj && locationObj.latLng,
            disableDefaultUI: true,
            gestureHandling: 'greedy',
            zoom: 15
        });
    
        _marker = new google.maps.Marker({
            icon: _markerIcon,
            map: _map,
            position: locationObj && locationObj.latLng
        });

        _infoWindow = new google.maps.InfoWindow({ maxWidth: 300 });
        _infoWindow.open(_map, _marker);
        _infoWindow.setContent(locationObj && locationObj.address)
        
        setupControls();
        setupListeners();
    }
    
    function setupControls() {
        setupSearchBox();
        setupConfirmButton();
    }

    function setupSearchBox() {
        
        var wrapperDiv = document.createElement('DIV');
        wrapperDiv.className += 'c-map__search';
        
        var input = document.createElement('INPUT');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Cari Lokasi');
        
        var clearButton = document.createElement('BUTTON');
        clearButton.setAttribute('type', 'button');
        clearButton.innerHTML = '×';
        clearButton.onclick = function() { input.value = ''; }
        
        wrapperDiv.appendChild(input);
        wrapperDiv.appendChild(clearButton);

        _map.controls[google.maps.ControlPosition.TOP_LEFT].push(wrapperDiv);
        _searchBox = new google.maps.places.SearchBox(input);
    }

    function setupConfirmButton() {
        _uiConfirmButton = document.createElement('BUTTON');
        _uiConfirmButton.setAttribute('type', 'button');
        _uiConfirmButton.className += 'c-map__confirm';
        _uiConfirmButton.innerHTML = 'Gunakan Lokasi Ini';
        _uiConfirmButton.onclick = function() {
            _location = { 
                latLng: {
                    lat: _marker.getPosition().lat(), 
                    lng: _marker.getPosition().lng()
                },
                address: _infoWindow.getContent() 
            };
            _onSelectedListener(_location);
        };
        _map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(_uiConfirmButton);
    }

    function setupListeners() {
        // Add this listener to bias search result towards current viewport area
        _map.addListener('bounds_changed', function() { 
            _searchBox.setBounds(_map.getBounds());
        });
    
        // Add this listener to keep marker at the center while map is dragged
        _map.addListener('center_changed', function() {
            _marker.setPosition(_map.getCenter());
            if (isMarkerWithinLocationBounds()) {
                startLoading();
                dGetLocationByCurrentMarker();
            } else {
                _infoWindow.setContent('Lokasi tidak sesuai dengan Alamat Pengiriman!');
                _uiConfirmButton.setAttribute('disabled', true);
            }
        });

        // Add this listener to open info window when marker is clicked
        _marker.addListener('click', function() {
            _infoWindow.open(_map, _marker);
        });
    
        // Add this listener to set marker onto new location when searching new place
        _searchBox.addListener('places_changed', function() {
            var places = _searchBox.getPlaces();
    
            if (places.length == 0 || !places[0].geometry) {
              return;
            } else {
                var bounds = new google.maps.LatLngBounds();
                places[0].geometry.viewport ? bounds.union(places[0].geometry.viewport) : bounds.extend(places[0].geometry.location);
                _map.fitBounds(bounds);
            }
        });
    }

    function isMarkerWithinLocationBounds() {
        if (_location && _location.latLngBounds) {
            var bounds = new google.maps.LatLngBounds();
            return bounds.union(_location.latLngBounds).contains(_marker.getPosition());
        } else {
            // failed establishing boundary
            return true;
        }
    }

    function getLocationByCurrentMarker() {
        fetchLocation({ location: _marker.getPosition() })
            .then(finishLoadingSuccess)
            .catch(finishLoadingFailed);
    }

    function startLoading() {
        _infoWindow.setContent('Memuat Lokasi...');
        _uiConfirmButton.setAttribute('disabled', true);
    }

    function finishLoadingSuccess(locationObj) {
        _infoWindow.setContent(locationObj.address);
        _uiConfirmButton.removeAttribute('disabled');
    }

    function finishLoadingFailed(err) {
        _infoWindow.setContent('Gagal memuat lokasi. Silakan coba lagi');
        _uiConfirmButton.setAttribute('disabled', true);
        console.err(err);
    }

    function findAdministrativeAreaLevel3(locationList) {
        return locationList.find(function(location) {
            return location.types.indexOf('administrative_area_level_3') >= 0;
        });
    }

    /**
     * @param {String} text format: kecamatan,kota/kabupaten,provinsi
     * @return {Promise<String>} place_id from AutocompleteService
    **/
    function fetchLocationAmbiguous(text) {
        return new Promise(function(resolve, reject) {
            var payload = {
                input: text,
                types: ['(cities)'],
                componentRestrictions: { country: 'id' }
            }
            
            _autocompleteService.getPlacePredictions(payload, function(responses, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    var location = findAdministrativeAreaLevel3(responses) || responses[0];
                    resolve(location.place_id);
                } else {
                    reject('Autocomplete was not successful for the following reason: ' + status);
                }
            });
        });
    }

    /**
     * @param {Object} request see https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingRequests
     * @return {Promise<Object>} format: {
     *   latLngBounds: see https://developers.google.com/maps/documentation/javascript/reference#LatLngBounds
     *   latLng: see https://developers.google.com/maps/documentation/javascript/reference#LatLngLiteral
     *   address: string
     * }
    **/
    function fetchLocation(request) {
        return new Promise(function(resolve, reject) {
            _geocoder.geocode(request, function(responses, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var location = responses[0];
                    resolve({
                        latLngBounds: location.geometry.bounds || location.geometry.viewport,
                        latLng: location.geometry.location.toJSON(),
                        address: location.formatted_address
                    });
                } else {
                    reject('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }

    /**
     * @return {Promise<Object>} format: see https://developers.google.com/maps/documentation/javascript/reference#LatLngLiteral
    **/
    function fetchCurrentLocation() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(function(geo) {
                resolve({
                    lat: geo.coords.latitude, 
                    lng: geo.coords.longitude
                });
            }, function(error) {
                reject('Navigator error code: ' + error.code);
            });
        })
    }

    return KaskusMap;
})();

$(function() {
    // Menu AIM
    var $menu = $("#categories > ul , #forum-home-categories > ul , #fjb-home-categories > ul");
    // jQuery-menu-aim: <meaningful part of the example>
    // Hook up events to be fired on menu row activation.
    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu,
        exitOnMouseOut: true,
        submenuWrap: '.hover-sidebar-content'
    });

    // jQuery-menu-aim: </meaningful part of the example>

    // jQuery-menu-aim: the following JS is used to show and hide the submenu
    // contents. Again, this can be done in any number of ways. jQuery-menu-aim
    // doesn't care how you do this, it just fires the activate and deactivate
    // events at the right times so you know when to show and hide your submenus.
    function activateSubmenu(row) {
        var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId),
        height = $menu.outerHeight(),
        width = $menu.outerWidth();

    	$submenu.css({
            display: "block"
        });

        $(".listing-sidebar").hover(
            function() {
                $(this).addClass('hover').addClass('maintainHover');
            },
            function() {
                $(this).removeClass('hover').removeClass('maintainHover');
            }
        );

        $('.hover-sidebar-content').height( $('.tag-wrap').height() - 1);

        $row.addClass("maintainHover hover");
        $row.mousedown(function() {
            $row.on('mouseup mousemove', function handler(evt) {
                if (evt.type === 'mouseup') {
                    $($submenu).css("display", "block");
                }else{
                    $($submenu).css("display", "none");
                }
                $row.off('mouseup mousemove', handler);
            });
        });

        //for lazyload image
        startHover = $.now();
        img = $(row).find(".b_sdbr");
        preload = img.attr("data-src") || null;
        if(preload)
        {
            rsrc = img.attr("data-src");
            img.attr("data-src",null);
            img.attr("src",rsrc);

        }
        //end of lazyload image
    }

    // Deactive submenu mouseout
    function deactivateSubmenu(row){
        var $row = $(row),
            submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);
        $submenu.css("display", "none");
        $row.removeClass("maintainHover");

        var endHover = $.now();
        var msHovered = endHover - startHover;
        var seconds = msHovered/1000;

        if (seconds >= 1) {
            cat_tag_name = $(row).find('.b_sdbr').attr("cat-tag-name");
            // tracksidebar(cat_tag_name);
        }
    }

    // Bootstrap's dropdown menus immediately close on document click.
    // Don't let this event close the menu if a submenu is being clicked.
    // This event propagation control doesn't belong in the menu-aim plugin
    // itself because the plugin is agnostic to bootstrap.
    $(".listing-sidebar").click(function(e) {
        e.stopPropagation();
    });
    $('.hover-sidebar-content').on('mouseup mousemove', function handler(evt) {
        evt.stopPropagation();
    });
});
// define ready function
$(document).ready(function() {

	// $('.gp__icon').popover({
	// 	placement: 'right',
	// 	template: '<div class="popover golden-cendol" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
	// 	container: 'body',
	// 	html: true,
	//   	content: function () {
	//      	return $('.gp__popover').html();
	//    	}
	// });

	// $('body').on('click', '.btn__close', function (e) {
	// 	$('.popover').popover('hide');
	// 	return false;
	// });

	// $('body').on('click', function (e) {
	// 	$('[data-toggle=popover]').each(function () {
	// 	    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	// 	        $(this).popover('hide');
	// 	    }
	// 	});
	// });

	// $('.recovery-code').keyup(function(e){
 //        if($(this).val().length==$(this).attr('maxlength'))
 //        $(this).next(':input').focus()
 //    })

 // 	$(".is-item__checkbox .check-select").change(function(){
 //        if(this.checked.length==0) {
	// 	    $(".is-btn-wrapper").fadeOut();
	// 	} else {
	// 	    $(".is-btn-wrapper").fadeIn();
	// 	}
 //    });

 // 	var CheckBoxValue = $('.is-item__checkbox .check-select').prop('checked').length==0;

 // 	if(CheckBoxValue) {
	//     $(".is-btn-wrapper").fadeIn();
	// } else {
	//     $(".is-btn-wrapper").fadeOut();
	// }

 	// NESTED COMMENT
 // 	moreComment = 'Lihat komentar lainnya';
 // 	$('.jsShowComment').click(function() {
	// 	$(".postlist__comment-nested").addClass("is-open");
	// 	if($(".postlist__comment-nested").hasClass("is-open"))
	// 	{
	// 		$(".postlist__comment-showmore").html(moreComment);
	// 	}
	// });
	//

	if ($.cookie('notices') === null) {
		$.cookie('notices', JSON.stringify([]), {expires:null,path:"/",domain:"",secure:false});
	}

	$('input.jump-page-top').on('keyup', function (e) {
		$('input.jump-page-top').val($(this).val());
		if (e.which == 13) {
		  e.preventDefault();
		  jump_page($(this).attr('id'));
		  return false;
		}
	});

 	$("#search").focusin(function() {
      	$(".search-overlay").addClass("is-active");
      	$(".site-header--top").addClass("is-pop");
      	$(".site-header--bot").addClass("is-overlay");
      	$("#search-button, #btn-search").addClass("is-active");
      	$("body").addClass("o-hidden");
      	$("#jsRemoveOverlay").click(function(e){
        	$(".search-overlay").removeClass("is-active");
        	$(".site-header--top").removeClass("is-pop");
        	$(".site-header--bot").removeClass("is-overlay");
        	$("#search-button, #btn-search").removeClass("is-active");
        	$("body").removeClass("o-hidden");
      	});
    });

    $("textarea.reply-post").on("keyup",function() {
        var textarea_value = $(this).closest(".reply-post").val();

        if(textarea_value != '') {
            $(this).parent().next().find("input").removeClass("btn-grey").addClass("btn-blue").prop('disabled', false);
        } else {
            $(this).parent().next().find("input").removeClass("btn-blue").addClass("btn-grey").prop('disabled', true);
        }
    });

 	$("#search").focusout(function() {
 		$(".search-overlay").removeClass("is-active");
    	$(".site-header--top").removeClass("is-pop");
    	$(".site-header--bot").removeClass("is-overlay");
    	$("#search-button, #btn-search").removeClass("is-active");
    	$("body").removeClass("o-hidden");
	});

  scrollNoticeHeader();

	$('#signin-popup').on('shown.bs.modal', function() {
	    $("#username").focus();
    })

	$(".is-remove-all").mousedown(function(e) {
	 	e.preventDefault();
	});

 	$("#search").keydown(function(event) {
 		$(".jsSearchResult").find('li.is-selected').removeClass('is-selected');
 		var totalIndex = $(".jsSearchResult .jsSearchWrapper li").length-1;

	  	if ( event.which == 38 ) {
	   		if(indexSelected>0){
	   			indexSelected--;
	   		}
	   		else{
	   			indexSelected = totalIndex;
	   		}
	   		setSelectedSearch();
	   		return false;
	  	}
	  	else if( event.which == 40 ) {
	  		if(indexSelected<totalIndex){
	   			indexSelected++;
	   		}
	   		else{
	   			indexSelected = 0;
	   		}
	   		setSelectedSearch();
	  	}
	});

	function setSelectedSearch () {
		var selectedElement = ".jsSearchResult .jsSearchWrapper li:eq(" + indexSelected + ")";
      	var selectedElementValue = $(selectedElement).find('a').text();

      	// $(".jsSearchResult").scrollTop(0);
      	// $(".jsSearchResult").scrollTop($(selectedElement).offset().top-$(".jsSearchResult").height());

      	$("#search").val(selectedElementValue);
	  	$(selectedElement).addClass('is-selected');
		$("#search").attr("value",selectedElementValue);
		$("#search").blur();
		$("#search").focus();
	}

	$(".feed-score").parents("body").addClass("user-forum-profile");

	if($('.flyout__trigger').length > 0)
	{
		$('.flyout__trigger').hover(function(){
			if(!catLoaded)
			{
				fetchCategories();
			}
		});
	}
	if (linksearch !== '')
	{
		get_cat(searchchoice);
	}

	$("input[name=searchchoice]").on('change', function(){
		$('#searchform').attr('action', '/search'+$(this).data('search'));
		$('#search_category').html('<option>Semua Kategori</option>');
		$('#search_category').parent().find('.customSelectInner').text("Semua Kategori");

		if($(this).val() === 'fjb' || $(this).val() === 'forum')
 			$('#search').css('width', '300px');
 		else
 			$('#search').css('width', '100%');

		get_cat($(this).val());
	})

	$('#search_category').on('change', function(){
		$('.select-category').find('.child_list').remove();
		var child_list = $(this).find("option:selected").attr("data-child-list");
		   if (typeof child_list !== "undefined"){
		   var child = child_list.split(",");
		}
		for (var i in child)
		{
			if (child[i] != '-1')
			{
				$('.select-category').append('<input type="hidden" class="child_list" name="forumchoice[]" value="' + child[i] + '">');
			}
		}
	});

	$('#toggle-subforum').on("click",function (event) {
		event.preventDefault();
		$$ = $(".header-list-sub");
		if( $$.hasClass('hide-sub') ){
			$$.removeClass('hide-sub');
			$(this).find('.fa').attr('class', 'fa fa-chevron-up');
		}else{
			$$.addClass('hide-sub');
			$(this).find('.fa').attr('class', 'fa fa-chevron-down');
		}
	});

	// header border
	if ($(window).scrollTop() > 0) {
        $(".site-header").addClass("scrolled");
    }

    if ($.cookie('display') == 'list') {
    	FiveGridToList();
  	}
  	else{
    	ListToFiveGrid();
  	}

	function FiveGridToList(){
		var CookieList = $.cookie('display', 'list');
   		$.cookie('display', 'list');
    	$('.product__listing').animate({opacity:0},function(){
		    $('.grid__icon').removeClass('active');
		    $('.list__icon').addClass('active');
		    $('.product__listing .block-grid-lg-5').removeClass('block-grid-lg-5 block-grid-md-5 block-grid-sm-4 block-grid-xs-4');
		    $('.product__listing>div>ul').addClass('block-grid-xs-1');
		    $('.product__listing .product__item .item--grid').removeClass('item--grid');
		    $('.product__listing .product__item>div').addClass('item--list');
		    $('.product__listing').stop().animate({opacity:1});
		});
	}

	function ListToFiveGrid(){

		var CookieGrid = $.cookie('display', 'grid');

   		$.cookie('display', 'grid');
		$('.product__listing').animate({opacity:0},function(){
		    $('.list__icon').removeClass('active');
		    $('.grid__icon').addClass('active');
		    $('.product__listing .block-grid-xs-1').removeClass('block-grid-xs-1');
		    $('.product__listing>div>ul').addClass('block-grid-lg-5 block-grid-md-5 block-grid-sm-4 block-grid-xs-4');
		    $('.product__listing .product__item .item--list').removeClass('item--list');
		    $('.product__listing .product__item>div').addClass('item--grid');
		    $('.product__listing').stop().animate({opacity:1});
		});
	}

	// change 5 grid to list

    $('.list__icon').click(function() {
    	FiveGridToList();
	});

    //change list to 5 grid
	$('.grid__icon').click(function() {
		ListToFiveGrid();
	});

	$('.lapak .item__detail .price i').click(function() {
		$(this).closest(".price").next(".price__field").show();
		$(this).closest(".price").hide();
	});

	$(".lapak .item__detail .price__field input").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
			$(this).closest(".price__field").siblings( ".price" ).show();
			$(this).closest(".price__field").hide();
	    }
	});

	$(".slider__highlight").slick({
	    autoplay: true,
	    dots: true,
	    customPaging : function(slider, i) {
	        var atag = document.createElement('A');
               atag.setAttribute('onclick', $(slider.$slides[i]).data("onclick"));
               var options = $(slider.$slides[i]).data("options");
               if(options)
               {
               		$.each(options, function(idx, val){
	               		atag.setAttribute(idx, val);
	               	});
               }
               atag.appendChild(document.createTextNode($(slider.$slides[i]).data("thumb")));
               return atag.outerHTML;
	    },

	    responsive: [{
	        breakpoint: 500,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 2,
	            slidesToScroll: 2
	        }
	    }]
	});

	$('.slider__grid').on('init', function(event, slick){
		$(".slider__grid .slick-slide.slick-active:first .grid__image").css( "margin-left", "-5px" );
	  	$(".slider__grid .slick-slide.slick-active:first .grid__caption").css( "margin-left", "-5px" );
	  	$(".slider__grid .slick-slide.slick-active:last .grid__image").css( "margin-left", "5px" );
	  	$(".slider__grid .slick-slide.slick-active:last .grid__caption").css( "margin-left", "5px" );
	});

	$('.slider__grid').on('afterChange', function(event, slick, currentSlide){
	  	$(".slider__grid .slick-slide.slick-active:first .grid__image").css( "margin-left", "-5px" );
	  	$(".slider__grid .slick-slide.slick-active:first .grid__caption").css( "margin-left", "-5px" );
	  	$(".slider__grid .slick-slide.slick-active:last .grid__image").css( "margin-left", "5px" );
	  	$(".slider__grid .slick-slide.slick-active:last .grid__caption").css( "margin-left", "5px" );
	});

	$('.slider__grid').slick({

		slidesToShow: 3,
		slidesToScroll: 3,
		dots:true
	});

	if(typeof slickShowcaseInitialized === "undefined"){
		$(".slider__grid--six").slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			dots: true
		})
	}

	$('#map-modal1').on('shown.bs.modal', function() {
		$('.slideshow-photos').show();
		$('.slideshow-photos').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>'
		});
	})

	// JS build by Back End
	// $('div.map-islands > div').on('click', function() {
	// 	var mapUrl = $(this).parent().data('remote');
	// 	var list_template = '<div><div class="slider-wrapper"><a href="{thread_url}"><div class="slider-image" style="background-image:url({thread_image})">{thread_title}</div></a><div class="slider-caption"><div class="slider-caption__title"><a href="{thread_url}">{thread_title}</a></div><div class="slider-caption__text"> by <a href="{thread_poster_profile}">{thread_poster}</a></div><div class="slider-caption__text m-top-10">{thread_tags}</div></div></div></div>';
	// 	var modal_template = '<div class="modal-header map-showcase-header"><button type="button" class="close map-showcase-btn" data-dismiss="modal"><i class="close-slim"></i><span class="sr-only">Close</span></button><span class="text-center">{setting_name}</span></div><div class="modal-body"><div class="slider-has-border"><div class="slideshow-photos" style="display:none;" role="toolbar">{thread_list}</div></div></div><div class="modal-footer map-showcase-footer"><a class="btn btn-blue btn-fixed--superlong" href="{setting_url}">Lihat Selengkapnya</a></div>';

	// 	$.ajax({
	// 		url: mapUrl,
	// 		success: function(response) {
	// 			try {
	// 				var json = $.parseJSON(response);
	// 				var thread_list = '';
	// 				for(i in json.threads) {
	// 					var thread = json.threads[i];
	// 					var thread_item = list_template;
	// 					for(attr in thread) {
	// 						var pattern = new RegExp('{thread_' + attr + '}', 'g');
	// 						thread_item = thread_item.replace(pattern, thread[attr]);
	// 					}
	// 					thread_list += thread_item;
	// 				}
	// 				for(i in json.settings) {
	// 					modal_template = modal_template.replace('{setting_' + i + '}', json.settings[i]);
	// 				}
	// 				$('#map-modal .modal-content').html(modal_template.replace('{thread_list}', thread_list));
	// 				setTimeout(function () {
	// 					$('.slideshow-photos').show();
	// 					$('.slideshow-photos').slick({
	// 						slidesToShow: 4,
	// 						slidesToScroll: 4,
	// 						dots: true,
	// 						nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
	// 						prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>'
	// 					});
	// 				}, 200);
	// 			} catch (e) {
	// 				console.error(e);
	// 			}
	// 		}
	// 	});
	// 	$('#map-modal .modal-content').html('<div style="text-align:center;padding: 20px"><img src="' + $('#map-modal').data('img') + '" /></div>');
	// 	$('#map-modal').modal('show');
	// });

	$(".slider__highlight").show();
	$(".slider__grid").show();

    function CurrencyFormatted(number){
	   var decimalplaces = 2;
	   var decimalcharacter = ",";
	   var thousandseparater = ".";
	   number = parseFloat(number);
	   var sign = number < 0 ? "-" : "";
	   var formatted = new String(number.toFixed(decimalplaces));
	   if( decimalcharacter.length && decimalcharacter != "." ) { formatted = formatted.replace(/\./,decimalcharacter); }
	   var integer = "";
	   var fraction = "";
	   var strnumber = new String(formatted);
	   var dotpos = decimalcharacter.length ? strnumber.indexOf(decimalcharacter) : -1;
	   if( dotpos > -1 )
	   {
	      if( dotpos ) { integer = strnumber.substr(0,dotpos); }
	      fraction = strnumber.substr(dotpos+1);
	   }
	   else { integer = strnumber; }
	   if( integer ) { integer = String(Math.abs(integer)); }
	   while( fraction.length < decimalplaces ) { fraction += "0"; }
	   temparray = new Array();
	   while( integer.length > 3 )
	   {
	      temparray.unshift(integer.substr(-3));
	      integer = integer.substr(0,integer.length-3);
	   }
	   temparray.unshift(integer);
	   integer = temparray.join(thousandseparater);
	   // return sign + integer + decimalcharacter + fraction;
	   return sign + integer;
	}

	var total = $('#offer-price').text();
	total = total.replace(".", "");
	total = parseInt(total);

	$('input[type="range"]').rangeslider({
	    polyfill: false,
	    rangeClass: 'rangeslider',
	    fillClass: 'rangeslider__fill',
	    handleClass: 'rangeslider__handle',

	    // Callback function
	    onInit: function() {
	    	// price = $('#the-price');
	    	// curPrice = $('#id-range').val();
	    	// price.html( CurrencyFormatted(parseInt(price.text()) + parseInt(curPrice)));
	    	// $('#the-price').attr('price', parseInt(price.text()) + parseInt(curPrice) );
	    },

	    // Callback function
	    onSlide: function(position, value) {
	    	if( value <= 5000){
	    		$('#id-range').attr('step', 1000);
	    		$('#id-range2').attr('step', 1000);
	    	}
	    	else if( value > 5000 && value < 30000 ){
	    		$('#id-range').attr('step', 5000);
	    		$('#id-range2').attr('step', 5000);

	    	}
	    	else if( value >= 30000 && value < 200000 ){
	    		$('#id-range').attr('step', 10000);
				$('#id-range2').attr('step', 10000);

	    	}
	    	if( value > 5000){
	    		// value = value - 1000;
	    	}
	    	// console.log(value);
	    	$('#js-output').css('left',position).text( CurrencyFormatted(value) );
	    	$('#price-control').val(value);
	    	$('#js-output2').css('left',position).text( CurrencyFormatted(value) );
	    	$('#price-control2').val(value);
	    	// $('#js-output').attr('price', value);
	    },

	    // Callback function
	    onSlideEnd: function(position, value) {
	    	// $('#the-price').html( CurrencyFormatted( parseInt($('#js-output').attr('price')) + value) );
	    	celengan = value;
			$('#the-price').text( CurrencyFormatted(total + celengan ) );
			$('#celengan-range').attr('value', celengan);
			$('#the-price2').text( CurrencyFormatted(total + celengan ) );
			$('#celengan-range').attr('value', celengan);
	    }
	});

	$('#price-control').change(function(event){
		$('input[type="range"]').val($(this).val()).change();
	})
	$('#price-control2').change(function(event){
		$('input[type="range"]').val($(this).val()).change();
	})

	// $( "select" )
	//   .change(function() {
	//     var str = "";
	//     $( "select option:selected" ).each(function() {
	//       str += $( this ).text() + " ";
	//     });
	//     $( "div" ).text( str );
	//   })
	//   .trigger( "change" );

	// $('.order-sidebar').scrollToFixed({ marginTop: 30});
	// $('.invoice-sidebar').scrollToFixed({zIndex:1, marginTop: 60});

	/* hot thread date picker */
	// var to = new Date();
	// var from = new Date(to.getTime() - 1000 * 60 * 60 * 24 * 14);

	//FJB CROP images
	// $('.upload-image-holder').fjbcrop();

	// content lazy load
	$(".mls-img").kslzy(300);

	$('body.fjb #tags').tagsInput({
    	'height':'80px',
    	'width':'100%',
    	'defaultText':'Tambahkan',
    	'placeholderColor': '#b7b7b7'
    });

	$('#datepicker-calendar').DatePicker({
		inline: true,
		// date: [from, to],
		calendars: 2,
		mode: 'range',
		// current: new Date(to.getFullYear(), to.getMonth() - 1, 1),
		onChange: function(dates, el) {
			$('#date-range-field span').html(dates[0].getDate() + '/' + ( dates[0].getMonth(true) + 1 ) + '/' + dates[0].getFullYear() + ' - ' +
				dates[1].getDate() + '/' + ( dates[1].getMonth(true) + 1 ) + '/' + dates[1].getFullYear());
		}
	});

	$('#dp2').datepicker()
	  .on('changeDate', function(ev){
	    $('#dp2').datepicker('hide');
	  });

	$('.form-date').datepicker()
	.on('changeDate', function(ev){
	$('.form-date').datepicker('hide');
	});

	// initialize the special date dropdown field
	// $('#date-range-field span').text(from.getDate()+' '+from.getMonthName(true)+', '+from.getFullYear()+' - '+
	//                                 to.getDate()+' '+to.getMonthName(true)+', '+to.getFullYear());

	$('#date-range').bind('click', function() {
		$('#datepicker-calendar').toggle();
		$('#date-range-field').toggleClass('open');
		$('#search-keyword').removeClass('open');
		return false;
	});

	$('html').click(function() {
		if ($('#datepicker-calendar').is(":visible")) {
			$('#datepicker-calendar').hide();
			$('#date-range-field').removeClass('open');
		}
	});

	$('#datepicker-calendar').click(function(event){
		event.stopPropagation();
	});


	// friend thumbnail
	$('.check-select').change(function() {
		if ($(this).prop("checked")) {
			$(this).closest('.thumbnail').addClass('selected');
		} else {
			$(this).closest('.thumbnail').removeClass('selected');
		}
	});

	// img-hover-change
	$('.thumbnail').hover(function() {
		img = $(this).find('.img-hover');
		if (img.attr('src') === '#') {
			img.attr('src', img.attr('data-large'));
		}
	});


	//Sundul eropa slider
	// $(".slider-match").slick({
	// 	slidesToShow: 5,
	// 	dots: true,
	// 	infinite: false,
	// 	dotsClass: 'slider-pagination',
	// 	arrows: false,
	// 	nextArrow: '<div class="next-slider-btn"><i class="fa fa-angle-right"></i></div>',
 //    prevArrow: '<div class="prev-slider-btn"><i class="fa fa-angle-left"></i></div>'
	// });

	$('#shipping-img').zoom();

	$('.image-product-detail').each(function( index ) {

		$(this).find(".carousel-largeimage").zoom({
			callback: function(){
				var altImg = $(".img-container").find("img").attr("alt");
				$(".zoomImg").attr( "alt", altImg);
				if( $('.zoomImg').width() <= 400 ){
					$('.zoomImg').css({
						visibility: 'hidden',
						cursor: 'default'
					});
				}else{
					$('.zoomImg').css({
						visibility: 'visible',
						cursor: 'all-scroll'
					});
				}
			}
		});

		var thisSlider = 'slider' + index;

		thisSlider = $(this).find(".carousel-thumb").lightSlider({
			enableDrag: false,
			autoWidth: true,
			pager: false,
			easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
			controls: true,
			slideMove: 1,
			slideMargin: 0
		});

		$(this).find('.prev-thumb').click(function(){
	        thisSlider.goToPrevSlide();
	    });
	    $(this).find('.next-thumb').click(function(){
	        thisSlider.goToNextSlide();
	    });

	    //carousel FJB
		$(this).find('.carousel-fjb').find('.thumbnail').on('click', function() {
			largeTarget = $(this).closest('.image-product-detail').find('.carousel-largeimage');
			$$ = $(this);
			$(this).siblings().removeClass('active');
			$$.addClass('active');
			largeTarget.find('img').attr('src', $$.find('img').attr('data-large') );

		});

	});


	// accordion
	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dd').first().show();
	$('.accordion > dt').first().addClass('active');

	$('.escrow .accordion > dd').first().hide();
	$('.escrow .accordion > dt').first().removeClass('active');

	$('.accordion.autoexpand > dd').show();
	$('.accordion.autoexpand > dt').addClass('active');

	$('.accordion > dt').click(function() {
		// allPanels.slideUp(300);
		// $(this).next().slideDown(300);

		// if ($('.accordion > dt').next().is(':visible')) {
		// 	$('.accordion > dt').removeClass('active');
		// 	$(this).addClass('active');
		// };
		// else if{

		// }

		// return false;
		var $this = $(this) ,
            $target = $this.next();

        $('.accordion > dt.active').not($this.toggleClass('active')).removeClass('active');

        $this.siblings('dd').not($target.addClass('active').slideToggle()).slideUp();

        return false;
	});

	// $('#tab-payment-method li a').click(function(){
	// 	// $('#kaspay > div > form > dl > dt').click();
	// 	$('.accordion > dd').show();
	// 	$('.accordion > dt').addClass('active');
	// })

	$('#tab-info-lapak li a').click(function(){
		$('#tab2 .accordion > dd').first().show();
		$('#tab2 .accordion > dt').first().addClass('active');
		$('#tab4 .accordion > dd').first().show();
		$('#tab4 .accordion > dt').first().addClass('active');
	})

	$('.head-categories-title').click(function(){
		checkArrow();
	});

	$(window).on('resize', function() {
		if ($(window).width() > 1024) {
			$('#left-nav').removeClass('full-show');
			$('#bgover').remove();
		}
	});

	$('#home-categories').children('div').addClass('show-five');
	$('.sidebar-trigger').on('click', function() {
		$('#left-nav').toggleClass('full-show');
		$('.hover-sidebar-content').height($('.tag-wrap').height());
		// if( $('body').hasClass('groupee') || $('body.forum').hasClass('inner') || $('body.groupee').hasClass('inner') || $('body.username').hasClass('inner')){
		// 	setTimeout(function() {
				// $('.head-categories-title').eq(1).click();
		// 	}, 50);
		// }
	});

	// sortable
	$('.sortable').sortable({
		items: ':not(.disabled)'
	});

	// backend sortable JS
	$("#sidebar-category").sortable().bind("sortupdate", function()
	{
		var a = $("#sidebar-category > li").map(function()
		{
			if($(this).attr("data-submenu-id"))
			{
				var tag_id = $(this).attr("data-submenu-id").split('-');
				return "tag_id[]=" + tag_id[2];
			} else
				return null;
		}).get();
		$.ajax(
		{
			url: urlSaveTagOrder,
			type: "post",
			data: a.join("&"),
			success: function() {},
			error: function()
			{
				alert("Please try again");
			}
		});
	});

	// hover-sidebar-content
	if ($('#home-categories').length < 1) {
		$('.hover-sidebar-content').height($('.tag-wrap').height());
	}

	//mCustomScrollbar
	$(".event-calendar, .scrolling-con-update").mCustomScrollbar({
		advanced: {
			updateOnContentResize: true,
			autoScrollOnFocus: false
		}
	});

	// $(".flyout__result__list, .flyout__category__list, .flyout__category-children__list, .flyout__category-children__wrapper, .flyout__subscribed__list").mCustomScrollbar({
	// 	advanced: {
	// 		updateOnContentResize: true,
	// 		autoScrollOnFocus: false
	// 	}
	// });
	// be step
	$('#wts-tab .step li').cycle(2500, 'active');
	$('#be-buyer-tab .step li').cycle(2500, 'active');

	// custom select
	$('select.select').customSelect();

	$('.modal').on('shown.bs.modal', function (e) {
		$('.select').trigger('render');
	})


	// tooltips
	$('.tooltips').tooltip();
	$('.popovers').popover({
		trigger: 'hover'
	});

	// markItUp
	$('#reply-messsage').markItUp(kaskusBbcodeSettings).focus();

	// selected first header search
	// $('#k-hp-list label:first').click();

	// FJB Thread list brand
	$('.brand-con .brand').each(function(index, el) {
		$(this).width(Math.floor($('.brand-con').width() / $('.brand-con .brand').length) - 1);
	});

	// search width
	$('#search').focus(function(event) {
		$('.global-search').addClass('large');
	});

	$('#search').blur(function(event) {
		$('.global-search').removeClass('large');
	});

	// badges
	$(".badges .user-badge>div .badge").bind("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationend", function() {
		$(this).removeClass("swing");
	});

	$(".badges .user-badge>div .badge").hover(function() {
		$(this).addClass("swing");
	});

	$(".must-number").keydown(function (e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});

	// BackEnd
		// hide unused div search result pages
	if ($("ul#filter_list").has("li").length > 0){
		$('#div_filter').css('display', 'block');
		$('#clear_filter').css('display', 'inline-block');
	}

	// back to top
	$('.back-to-top, .back-top').bind('click', function(event) {
		if( $(window).scrollTop() < 40 ) return;
		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	// bottom leaderboard fix
	if( $('.main-content-full').length ){
		$('#bottom-leaderboard').children().attr('style', '');
	}

	// search result height fix
	if( $('#search-result').length ){
		if( $('#search-result').height() < $('#refine-search').height() ){
			$('#search-result').find('tbody').height( $('#refine-search').height() - 98 );
		}
	}

	// floating notice
	$('<div id="floating_notice" class="header-notification-wrap visible"><div class="header-notification"><span id="notice_span"></span></div></div>').appendTo('.site-header').hide();


	// placeholder
	$('input, textarea').placeholder();

	// input helper verified seller form

	$(".verified-seller-form").hide();

	$( "#button-form-verified-seller" ).click(function() {
	  $(".verified-seller-trigger").hide();
	  $(".verified-seller-form").show();
	});

	$( ".verified-seller-form input[type='text']" ).focusin(function() {
		$(".input-helper").show();
	});
	$( ".verified-seller-form input[type='text']" ).focusout(function() {
		$(".input-helper").hide();
	});

	// landing hot review carousel
	$('#landing-hot-review').find('.item').each(function(){
		var next = $(this).next();
		if (!next.length) {
		    next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i = 0; i < 1; i++) {
		    next = next.next();
		    if (!next.length) {
		        next = $(this).siblings(':first');
		    }
		    next.children(':first-child').clone().appendTo($(this));
		}
	});

	// career
	if($('.career-page').length){
		var url = document.location.toString();
		if (url.match('#')) {
			$('.career-page .nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
		}
		$('.career-page .nav-tabs a').on('shown', function (e) {
			window.location.hash = e.target.hash;
		})
		$('.career-page .nav-tabs a').click(function (e) {
			window.location.hash = e.target.hash;
		})

		function offsetAnchor() {
		    if(location.hash.length !== 0) {
		        window.scrollTo(window.scrollX, window.scrollY - 200);
		    }
		}
		if( $('.career-page').length ){
			$(window).on("hashchange", function () {
			    offsetAnchor();
			});
		}
	}

	//chosen select
	$('.cat-selection').chosen({
		search_contains : true,
	 	no_results_text: "Salah kali, gan!"
	});

	$('#catlevel1').chosen({
		search_contains : true,
	 	no_results_text: "Kategori tidak ada, Gan!"
	});

	$( "#catlevel1" ).change(function() {
	  	$("#catlevel2").show();
		  	$('#catlevel2').chosen({
			search_contains : true,
		 	no_results_text: "Kategori tidak ada, Gan!"
		});
	});

	$('.alamat-selection').chosen({
	 	no_results_text: "Alamat tidak ditemukan, gan!"
	});

	//chosen select
	$('.no-search').chosen({
		disable_search_threshold: 10
	});

	// google-analytics mlt & nav-ads
	$(".related-thread").find("a").click(function() {
        _gaq.push(['_trackEvent', 'more like this', 'click', this.href]);
    })
    var startHover = $.now();
    $(".trfc").hover(
        function() {
            startHover = $.now();
        },
        function() {
            var endHover = $.now();
            var msHovered = endHover - startHover;
            var seconds = msHovered / 1000;
            if (seconds >= 1) {
                var cat_tag_name = $(this).attr("cat-tag-name");
                _gaq.push(['_trackPageview', '/bannercategories/' + cat_tag_name]);
            }
        }
    );
	$('.nav-promo').find('img').addClass('trfc');

	$('.hover-sidebar-content').on('mouseup mousemove', function handler(evt) {
		evt.stopPropagation();
	});

	//change textarea resize cursor
	$(function() {
	    $(document).on('mousemove', 'textarea', function(e) {
			var a = $(this).offset().top + $(this).outerHeight() - 16,
				b = $(this).offset().left + $(this).outerWidth() - 16;
			$(this).css({
				cursor: e.pageY > a && e.pageX > b ? 'nwse-resize' : ''
			});
		})

	.on('keyup', 'textarea', function(e) {
			$(this).height($(this).height() + this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth")) - $(this).outerHeight());
		});
	});

	$('.category-list__slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(".category-list__slider").show();

	//Image Description Show More
	var showMore = $(".js-showMore"),
	moreText = 'Selengkapnya <i class="fa fa-chevron-down"></i>',
	lessText = 'Tutup <i class="fa fa-chevron-up"></i>';

	//$(this).parent().prev().find('.c-detail__item').slideToggle();

	showMore.click(function () {

	    if($(this).html()==moreText){
	        $(this).html(lessText);
	        $(this).parent().prev().css('height', 'auto');
	        $(this).prev('.c-detail__btn__grad').toggle();
	        //$(this).parent().prev().find('.c-detail__item').slideToggle();
	    }else{
	        $(this).html(moreText);
	        $(this).parent().prev().css('height', '45px');
	        $(this).prev('.c-detail__btn__grad').toggle();
	        //$(this).parent().prev().find('.c-detail__item').slideToggle();
	    }
	});

	function GridToList(){
		$('.c-subforum-listing--desc').animate({opacity:0},function(){
		    $('.o-icon--grid').removeClass('active');
		    $('.o-icon--list').addClass('active');
		    $('.c-subforum-listing--grid').hide();
		    $('.c-subforum-listing--list').show();
		    $('.c-subforum-listing--desc').stop().animate({opacity:1});
		});
	}

	function ListToGrid(){
		$('.c-subforum-listing--desc').animate({opacity:0},function(){
		    $('.o-icon--list').removeClass('active');
		    $('.o-icon--grid').addClass('active');
		    $('.c-subforum-listing--grid').show();
		    $('.c-subforum-listing--list').hide();
		    $('.c-subforum-listing--desc').stop().animate({opacity:1});
		});
	}

	// Tooltip Kaskus Store
	$('[data-toggle="tooltip"]').tooltip({animation: true});

	// change grid to list
	$('.o-icon--list').click(function() {
		GridToList();
	});

	//change list to grid
	$('.o-icon--grid').click(function() {
		ListToGrid();
	});

	//reset password show hide password
	$('.pass-trigger').click(function() {
        if ($(this).find('i').hasClass('fa-eye-slash')){
            $(this).find('i').removeClass('fa-eye-slash')
			$(this).find('i').addClass('fa-eye')
            $(this).parent().find('input').prop('type', 'text');
        }else{
            $(this).find('i').removeClass('fa-eye')
			$(this).find('i').addClass('fa-eye-slash')
            $(this).parent().find('input').prop('type', 'password');
        }
    });

	//DATEPICKER KASKUS POIN

	var nowTemp = new Date();
	var pertamaxDate = false;
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

	// $( "#datetimepicker4" ).focus(function() {
	// 	if(pertamaxDate){
	// 		alert("jnoi");
	// 	}
	// });

	var fromDate = $('.jsStartDate').datepicker({
	  onRender: function(date) {
	    return '';
	  }
	}).on('changeDate', function(ev) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    toDate.setValue(newDate);
	  fromDate.hide();
	  $('.jsEndDate')[0].focus();
	}).data('datepicker');

	var toDate = $('.jsEndDate').datepicker({
	  onRender: function(date) {
	    return date.valueOf() <= fromDate.date.valueOf() ? 'disabled' : '';
	  }
	}).on('changeDate', function(ev) {
	  toDate.hide();
		pertamaxDate = true;
	}).data('datepicker');

	//next input after filling otp forgot password
	var sortPassword = $('.c-forgot-password--recovery-code input');
	var focusedValue = '';

	sortPassword.focus(function(){$(this).select();});
	sortPassword.eq(0).focus();
	sortPassword.keyup(function(event) {
		var sortValue = $(this).val();
		var sortPosition = sortPassword.index(this);
		if (!(event.keyCode == 16 || event.keyCode == 9)) {
			if (sortValue.length == 1 && sortPosition !== 7) {
				sortPosition += 1;
				sortPassword.eq(sortPosition).focus();
			}
			checkButton();
		}

		if (event.keyCode == 8 || event.keyCode == 46) {
			if (sortPosition != 0 && $(this).val() == '') {
				sortPassword.eq(sortPosition - 1).focus();
			} else {
				$("#submit-button").addClass('btn-grey').removeClass('btn-blue');
			}
		}
	});

	checkButton();

	// $("a.c-reputation__item.up-vote").on( "click", function() {
	//     $(".jsCendol", this).toggleClass("is-cendol-animate");
	//     $(".is-up-vote", this).toggleClass("is-active");
	//     $(".jsBata").addClass("is-bata").removeClass("is-bata-animate");
	//     $(".is-down-vote").removeClass("is-active");
	// });

	// $("a.c-reputation__item.down-vote").on( "click", function() {
	//     $(".jsBata", this).toggleClass("is-bata-animate");
	//     $(".is-down-vote", this).toggleClass("is-active");
	//     $(".jsCendol").addClass("is-cendol").removeClass("is-cendol-animate");
	// 	$(".is-up-vote").removeClass("is-active");
	// });
});

// Post Reply Textarea function to show post buttons
$(".textarea-block").on("focus", function () {
	$(".control-hidden").show();
});

//shipping track
function OtherSelectCheck(nameSelect)
{
    if(nameSelect){
        jasaOptionValue = document.getElementById("jasaLain").value;
        if(jasaOptionValue == nameSelect.value){
            document.getElementById("namajasa").style.display = "block";
            document.getElementById("input-jasa").style.display = "table";
            document.getElementById("jasa-text").style.display = "none";
        }
        else{
        	document.getElementById("namajasa").style.display = "none";
            document.getElementById("input-jasa").style.display = "none";
            document.getElementById("jasa-text").style.display = "block";
        }
    }
    else{
    	document.getElementById("namajasa").style.display = "none";
        document.getElementById("input-jasa").style.display = "none";
    }
}


//register revamp-- eye toggle
$('.pass-form__btn').click(function() {
    if ($(this).find('.pass-form__icon').hasClass('ic-eye-close')){
        $(this).find('.pass-form__icon').addClass('ic-eye-open').removeClass('ic-eye-close');
        $('.pass-form__input').prop('type', 'password');
    }else{
        $(this).find('.pass-form__icon').addClass('ic-eye-close').removeClass('ic-eye-open');
        $('.pass-form__input').prop('type', 'text');
    }
});


$('.suggest__link').click(function(){
	$('#inputusername').val($(this).text() );
});

// FJB Thread List Filter
var leftOffset = {
	'#fjb-thread-kondisi-barang': 180,
	'#fjb-thread-lokasi': -220,
	'#fjb-thread-filter-lengkap': -330
};
$('a[data-target*="#fjb-thread-"]').on('click', function() {
	var dataTarget = $(this).attr('data-target');
	$('.modal-thread-list' + dataTarget + ' .modal-focus').css('left', $(this).offset().left);
	$('.modal-thread-list' + dataTarget + ' .modal-triangle').css('left', $(this).offset().left + 258);
	$('.modal-thread-list' + dataTarget + ' .modal-content').css('left', $(this).offset().left + leftOffset[dataTarget]);
	window.scrollTo(0, 572);
});

// //Take snapshot js
// if (checkObject($('.jsCanvasCapture'))) {
// 	var cameraOn = {};
// 	var cameraGranted = {};
// 	var isMirrored = false;
// 	var canvas= document.querySelector('.jsCanvasCapture');
// 	var context = canvas.getContext('2d');
// 	function takePicture(type) {
// 		if(cameraGranted[type] === false)
// 			return false;
//
// 	    var video = document.querySelector('.'+type+'-cam');
// 	    if (navigator.mediaDevices && !cameraOn[type]) {
// 	      cameraOn[type] = true;
// 	      navigator.mediaDevices.getUserMedia({video: true})
// 	      // permission granted:
// 	        .then(function(stream) {
// 	        	video.src = window.URL.createObjectURL(stream);
// 	        	cameraGranted[type] = true;
// 	        })
// 	        // permission denied:
// 	        .catch(function(error) {
// 	        	$('.camera-refused--wrapper').show();
// 	        	$('.camera-snapshot--area').addClass('disabled');
// 	        	cameraGranted[type] = false;
// 	        });
// 	    }
// 	    else{
// 			var width = video.offsetWidth;
// 			var height = video.offsetHeight;
// 			video.width = width;
// 			video.height = height;
// 			context.drawImage(video, 0, 0, 860, 650);
// 			var src = canvas.toDataURL('image/png');
// 			$('.'+type+'-capture').attr('src', src).show();
// 			camCallback(type);
// 	    }
// 	};
// }

//expander button
// $(document).ready(function() {
//     $(window).scroll(function() {
//         var pos = $(".expander-btn").position();
//         var windowpos = $(window).scrollTop();
//         //var heightContent = $(textAreaAdjust(o)).height();

//         if (windowpos >= 1500)
//         {
//             $(".expander-btn").css('display', 'none'); //grey
//         }

//         else if ($("body").height() <= ($(window).height() - windowpos))
//         {
//             $(".expander-btn").css('display', 'none'); //orange
//         }
//         else
//         {
//             $(".expander-btn").css('display', 'block'); //blue
//         }
//     });
// });

//create thread expander
// $( "#expand-sidebar" ).click(function() {
//     if($('#sidebar-creator-content:visible').length) {
//     	document.getElementById("expand-sidebar").innerHTML = "&raquo;",
//     	$(".create-thread").css('float', 'none'),
//     	$(".expander-btn").css('left', '1070px'),
//     	$(".quick-post-revamp .markItUp.editor-fixed").css ('margin','0px auto'),
//         $('#sidebar-creator-content').hide();
//     }
//     else {
//     	document.getElementById("expand-sidebar").innerHTML = "&laquo;",
//     	$(".create-thread").css('float', 'left'),
//     	$(".expander-btn").css('left', '1225px'),
//     	$(".quick-post-revamp .markItUp.editor-fixed").css ('margin','0px 67px auto'),
//         $('#sidebar-creator-content').show();
//     }
// });

//textarea auto resize
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (5+o.scrollHeight)+"px";
}

//scrolled markitup
$.fn.isVisible = function() {
    var windowScrollTopView = $(window).scrollTop();
    var windowBottomView = windowScrollTopView + $(window).height();
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).height();
    return ((elemBottom <= windowBottomView) && (elemTop >= windowScrollTopView));
}

//next input after filling otp forgot password
function checkButton() {
	var recoveryCode = '';
	recoveryCodeInputs = document.getElementsByClassName('recovery-code');
	for(i in recoveryCodeInputs) {
		if(recoveryCodeInputs[i].value)
		{
			recoveryCode += recoveryCodeInputs[i].value;
		}
	}

	if (recoveryCode.length >= 8) {
		$("#submit-button").addClass('btn-blue').removeClass('btn-grey').prop('disabled', false);
	} else {
		$("#submit-button").addClass('btn-grey').removeClass('btn-blue').prop('disabled', true);
	}
};

function checkObject( varObject ){
	existing = varObject.length ? true : false;
	return existing;
}

var StatusControlStick = false,
	forumControl = $('.postlist').eq(0),
	userControlStick = $('.user-control-stick'),
	header = $('.site-header'),
	windowPanel = $(window),
	sidebar = $('.sidebar-wrap'),
	footer = $('.site-footer'),
	leftnav = $('#left-nav'),
	relatedThread = $('.related-thread'),
	momod = $('.momod-frame'),
	kaskusStore = $('.kaskus-store'),
	limitControlStick = $('.nor-post').first(),
	batasScrollBawah = $('.sidebar-wrap > div:last-child');
	batasScrollAtas = $('.main-bar');
	landingMain = $('.home-landing-main');
	landingMainBar = $('.main-bar');
	skyScrapper = $('.skin-banner');
	leaderBanner = $('.leader-banner');
	mediaQuery   = window.matchMedia("(min-width: 1025px)");
	//createPostContent = $('.main-content-revamp');


	var createListingPreview = $('.create-preview');

	function scrollNoticeHeader() {
    var topHeaderPosition;

    if($('.jsNoticeHeader').length > 0){

        if($(window).scrollTop() <  $('.jsNoticeHeader').outerHeight()){
            topHeaderPosition = $('.jsNoticeHeader').outerHeight() - $(window).scrollTop();
        }
        else{
            topHeaderPosition = 0;
        }
        $('.site-header').css('top', topHeaderPosition + 'px');
    }
}


	//if( checkObject( leftnav ) ) leftnavTop = leftnav.position().top;
	if( checkObject( momod ) ) heightright = momod.offset().top;
	if( checkObject( kaskusStore ) ) heightright = kaskusStore.offset().top;
	if( checkObject( batasScrollBawah ) ) heightright = batasScrollBawah.offset().top;
	if( checkObject( batasScrollAtas ) ) batasAtas = batasScrollAtas.offset().top;

function stickSidebar() {
	leaderboardHeight = ($('#bottom-leaderboard').length && $('.main-content').width() > 689) ? 100 : 0;

	if( sidebar.height() < $('.main-content').height() ){
		if( windowPanel.scrollTop() > ( heightright - windowPanel.height() ) + momod.height() + 15 && mediaQuery.matches ){
			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() - 40 - leaderboardHeight) ){
				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() - leaderboardHeight);
				sidebar.css({
					position: 'fixed',
					bottom: footerHeight + 40
				});
			}else{
				sidebar.css({
					position: 'fixed',
					bottom: 0
				});
			}
		}else{
			sidebar.css('position', 'static');
		}
	}
}

// function stickSidebarCreateThread(){
// 	leaderboardHeight = ($('#bottom-leaderboard').length ) ? 100 : 0;
// 	heightright = $('.jsSidebarCreator').height();
// 	headerHeight = ($('.site-header__wrapper--scrolled').length ) ? 80 : 120;

// 	if( $('.jsSidebarCreator').hasClass('is-expanded') ){
// 		if( windowPanel.scrollTop() > 455 ){
// 		// if( windowPanel.scrollTop() > ( $('.main-content-revamp').offset().top - headerHeight)){
// 			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() - leaderboardHeight) ){
// 				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() - 50 - leaderboardHeight );
// 				console.log(footerHeight);
// 				$('.jsSidebarCreator').css({
// 					position: 'fixed',
// 					bottom: footerHeight
// 				});
// 			}else{
// 				$('.jsSidebarCreator').css({
// 					position: 'fixed',
// 					bottom: 20
// 				});
// 			}
// 		}else{
// 			$('.jsSidebarCreator').css('position', 'static');
// 		}
// 	}
// }

function stickSidebarLanding(){
	sliderHeight = ($('.fjb.landing').length ) ? 320 : 0;

	if( sidebar.height() < landingMainBar.height() ){
		if( windowPanel.scrollTop() > ( heightright - windowPanel.height() ) + batasScrollBawah.height() + sliderHeight + 10 && mediaQuery.matches){

			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() - 40 ) ){
				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
				sidebar.css({
					position: 'fixed',
					bottom: footerHeight + 40
				});
			}else{
				sidebar.css({
					position: 'fixed',
					bottom: 0
				});
			}
		}else{
			sidebar.css('position', 'static');
		}
	}
}

function stickSkyScrapper(){

	if( windowPanel.height() > 600 ){
		if( windowPanel.scrollTop() > ( footer.offset().top - 700 ) ){
			var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
			skyScrapper.css({
				bottom: footerHeight + 640,
				top: 'initial'
			});
		}else{
			skyScrapper.css({
				top: 142
			});
		}
	}
}

function stickSidebarHot() {
	if( sidebar.height() < $('.hot-thread-wrap').height() ){
		if( windowPanel.scrollTop() > ( heightright - windowPanel.height() ) + batasScrollBawah.height() + 15 ){
			if( windowPanel.scrollTop() > ( footer.offset().top - windowPanel.height() + 5) ){
				var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height());
				sidebar.css({
					position: 'fixed',
					bottom: footerHeight
				});
			}else{
				sidebar.css({
					position: 'fixed',
					bottom: 0
				});
			}
		}else{
			sidebar.css('position', 'static');
		}
	}
}

// function stickLeftnav() {
// 	if( windowPanel.scrollTop() > leftnavTop - 60){
// 		var marHeight = footer.offset().top - windowPanel.height() + ( windowPanel.height() - leftnav.height() - $('.site-header').height() );
// 		if( windowPanel.scrollTop() > ( marHeight - 25 ) ){
// 			var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
// 			leftnav.attr('style', 'position:fixed !important;bottom:'+ (footerHeight + 15) +'px;');
// 		}else{
// 			leftnav.attr('style', 'position:fixed !important;top:60px;');
// 		}
// 	}else{
// 		leftnav.attr('style', '');
// 	}
// }

function ControlStick(){
	var windowTop = windowPanel.scrollTop() + 50;
	if( $('body').hasClass('fjb') ) {
		userContorlVal = 0;
		controlOffset = 1000000;
	}else{
		userContorlVal = 0;
		if(limitControlStick.length!=0){
			controlOffset = limitControlStick.offset().top;
		}
		else{
			controlOffset = 1000000;
		}

	}

	if (windowTop > forumControl.offset().top && !StatusControlStick && windowTop < controlOffset) {
		userControlStick.css({
			top: userContorlVal
		});


		$('.global-search').css('opacity', '0');
		StatusControlStick = true;
	}

	if(windowTop < forumControl.offset().top || windowTop > controlOffset){
		if(StatusControlStick === true){
			userControlStick.css({
				top: -500
			});

			$('.global-search').css('opacity', '1');
			StatusControlStick = false;
		}
		if($('.short-url').hasClass('open')){
			$('.short-url').removeClass('open');
		}
	}
}

function showSingleLayerHeader(){
	$('.site-header__category .flyout__trigger').show();
	$('.site-header__action .site-header__quick').show();
	$('.site-header--bot').addClass("hide-up");
	$('.site-header__anchor').addClass("scrolled");
	//$('.site-header--top').addClass(wrapperClass);
	$('.skin-banner').addClass("adjust-top");
	$('.site-header--top').addClass("site-header__wrapper--scrolled");
	if( $('body').hasClass('fjb') ) {
		$('.site-header--top').addClass("site-header__wrapper--jb");
	}else{
		$('.site-header--top').addClass("site-header__wrapper--forum");
	}
}

function showDoubleLayerHeader(){
	$('.site-header--bot').removeClass("hide-up");
	$('.site-header__category .flyout__trigger').hide();
	$('.site-header__action .site-header__quick').hide();
	$('.site-header__anchor').removeClass("scrolled");
	if( $('body').hasClass('fjb') ) {
		$('.site-header--top').removeClass("site-header__wrapper--jb");
	}else{
		$('.site-header--top').removeClass("site-header__wrapper--forum");
	}
	$('.site-header--top').removeClass("site-header__wrapper--scrolled");
	$('.skin-banner').removeClass("adjust-top");
}

function mainNavigationHeader(){
	var windowTop = windowPanel.scrollTop() + 50;
	var navKategoriTrigger = $('.flyout__trigger');
	var navKategorimenu = $('.flyout__anchor');
	var controlLanding = $('.main-content-full');

	// Buat Landing
	if (checkObject(controlLanding)){
		if (windowTop > controlLanding.offset().top){
			showSingleLayerHeader();
		}
		else{
			showDoubleLayerHeader();
		}
	}

	// Buat Detail Page
	if (checkObject(forumControl)){
		if (windowTop > forumControl.offset().top){
			showSingleLayerHeader();
		}
		else{
			showDoubleLayerHeader();
		}
	}
}

// header separator
function borderHeader(){
	var scroll = windowPanel.scrollTop();

	if (scroll >= 10) {
		$(".site-header").addClass("scrolled");
	} else {
		$(".site-header").removeClass("scrolled");
	}
}

function stickyInvoiceSidebar(){
	var limitScroll = $(".main-content")[0].scrollHeight - $(".invoice-sidebar")[0].scrollHeight;
	var scroll = windowPanel.scrollTop();

	if (scroll >= limitScroll) {
		$(".invoice-sidebar").css('position', 'absolute');
		$(".invoice-sidebar").css('bottom', '0');

	}
	else{
		$(".invoice-sidebar").css('position', 'fixed');
		$(".invoice-sidebar").css('bottom', 'inherit');
	}
}

function stickyOrderInfoSidebar(){
	var scroll = windowPanel.scrollTop();

	if (scroll >= 30) {
		$(".order-sidebar").css('position', 'fixed');
		$(".order-sidebar").css('margin-top', '-30px');

	}
	else{
		$(".order-sidebar").css('position', 'relative');
		$(".order-sidebar").css('margin-top', '0');
	}
}

function stickyCreateListingBackToTop() {
	var windowTop = windowPanel.scrollTop();
	var previewContainer = createListingPreview;
	var createListingScroll = $('.create-listing__back-to-top');
	if (windowTop > previewContainer.height() - previewContainer.offset().top) {
		createListingScroll.addClass('stick');
	} else {
		createListingScroll.removeClass('stick');
	}
}

// header hide/show
// function headerAni(){
// 	var	windowTop = windowPanel.scrollTop() + 50;
// 		controlOffset = kasAds.offset().top;

// 	if (windowTop > kasAdsOffet) {
// 		// Detect IE version
// 		var iev = 0;
// 		var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
// 		var trident = !!navigator.userAgent.match(/Trident\/7.0/);
// 		var rv = navigator.userAgent.indexOf("rv:11.0");

// 		if (ieold) iev = new Number(RegExp.$1);
// 		if (navigator.appVersion.indexOf("MSIE 10") != -1) iev = 10;
// 		if (trident && rv != -1) iev = 11;

// 		// Firefox or IE 11
// 		if (typeof InstallTrigger !== 'undefined' || iev == 11) {
// 			var lastScrollTop = 0;
// 			$(window).on('scroll', function() {
// 				st = $(this).scrollTop();
// 				if (st < lastScrollTop) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: 0
// 						});
// 					}
// 				} else if (st > lastScrollTop) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: -51
// 						});
// 					}
// 				}
// 				lastScrollTop = st;
// 			});
// 		}
// 		// Other browsers
// 		else {
// 			$('body').on('mousewheel', function(e) {
// 				if (windowTop > kasAdsOffet && e.originalEvent.wheelDelta > 20) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: 0
// 						});
// 					}
// 				} else if (windowTop > kasAdsOffet && e.originalEvent.wheelDelta < 0) {
// 					if (windowTop > kasAdsOffet) {
// 						$(header).css({
// 							top: -51
// 						});
// 					}
// 				}
// 			});
// 		}
// 	}else{
// 		$(header).css({
// 			top: 0
// 		});
// 	}
// }

// related content
function relatedContent(){
	if ( $(this).scrollTop() > ( $('.kaskus-ads .kasad-h').offset().top - $(window).height()) &&
		!relatedThread.hasClass('disable') &&
		!relatedThread.hasClass('fjb') )
	{
		relatedThread.addClass('nongol');
	}else{
		relatedThread.removeClass('nongol');
	}
}

// Make header and leftnav position fixed when ready
// header.css("position", "fixed");

// if( checkObject( $(".landing") ) ) {
// 	leftnav.css("position", "relative");
// 	leftnav.css("top", "0");

// } else {
// 	leftnav.css("position", "fixed");
// }

function checkScroller(element) {
    if (element[0].scrollHeight > element.height()) {
		// mentok bawah
		if (element[0].scrollHeight - element.scrollTop() == element.outerHeight())
        {
            element.siblings(".flyout__scroll--down").removeClass( "flyout__scroll--on" );
        }
        // mentok atas
        else if(element.scrollTop() === 0)
        {
            element.siblings(".flyout__scroll--up").removeClass( "flyout__scroll--on" );
        }
		else{
			element.siblings(".flyout__scroll--down").addClass( "flyout__scroll--on" );
			element.siblings(".flyout__scroll--up").addClass( "flyout__scroll--on" );
		}

	}
}

//scroll top main category nav
$(".flyout__category__list").bind('scroll', function() {
	checkScroller($(this));
});

$(".flyout__subscribed__list").bind('scroll', function() {
	checkScroller($(this));
});

//scroll top main category search
$(".flyout__result__list").bind('scroll', function() {
	checkScroller($(this));
});

//scroll anakan main category nav
$(".flyout__category-children__list").bind('scroll', function() {
	checkScroller($(this));
});

//scroll window
$(window).bind('scroll', function() {
	borderHeader();
	mainNavigationHeader();
	scrollNoticeHeader();

	if( checkObject( $('.landing') ) ){
		// if(!$('#left-nav').hasClass('full-show')){
		// 	stickLeftnav();
		// }
		stickSidebarLanding();
	}

	if( checkObject( skyScrapper ) )
		stickSkyScrapper()

	// if( checkObject( createPostContent ) )
	// 	stickSidebarCreateThread()

	if( checkObject( $('.invoice-sidebar') ) )
	stickyInvoiceSidebar();

	if( checkObject( $('.order-sidebar') ) )
	stickyOrderInfoSidebar();

	if( checkObject( momod ) )
		stickSidebar();

	if( checkObject( $('.user-control-stick') ) ){
		ControlStick();
		// headerAni();
	}

	if( checkObject( $('.kaskus-ads .kasad-h') ) )
		relatedContent();

	if( checkObject( $('.hot-thread-wrap') ) )
		stickSidebarHot();

	if (checkObject($('.create-listing__back-to-top'))) {
		stickyCreateListingBackToTop();
	}

	// fix header < 1024px
	$('.site-header').css('left', -$(this).scrollLeft() + "px");
	$('.user-control-stick').css('left', -$(this).scrollLeft() + 106 + "px");

	if(windowPanel.width() < 1025) {

		$('.user-control-stick').css('left', -$(this).scrollLeft() + 107 + "px");
	}


});


if( checkObject(  $('.landing') ) )
	stickSidebarLanding();

if( checkObject( skyScrapper ) )
	stickSkyScrapper()

// if( checkObject( createPostContent ) )
// 	stickSidebarCreateThread()

if( checkObject( $('.hot-thread-wrap') ) )
	stickSidebarHot();

if( checkObject( momod ) )
	stickSidebar();

if( checkObject( $('.user-control-stick') ) )
	ControlStick();
	mainNavigationHeader()
	$('.user-control-stick').css('left', -$(this).scrollLeft() + 106 + "px");

if( checkObject( $('.kaskus-ads .kasad-h') ) )
	relatedContent();

// if( checkObject( $('.landing') ) )
// 	setTimeout(function() {
// 		stickLeftnav();
// 	}, 130);

function initSticky(){
    $('[sticky-host]').each(function(idx, elm){
        var stickyHostId = $(elm).attr('sticky-host');

        var stickyHostTextArea = $(elm).find('textarea');

        function scrollSticky() {
            const OLD_EDITOR = 1;
            const NEW_EDITOR = 0;
            editor = (typeof editor_type == "undefined") ? OLD_EDITOR : editor_type;

            if (editor == NEW_EDITOR) {
                toggleStickyUp(stickyHostId, showStickyUp(stickyHostId));
                toggleStickyBottom(stickyHostId, showStickyBottom(stickyHostId));
            }

            //cookie for sceditor
            if ($.cookie('use_old_qnt')!=='1') {
                toggleStickyUp(stickyHostId, showStickyUp(stickyHostId)), toggleStickyBottom(stickyHostId, showStickyBottom(stickyHostId))
            }
        }

        $(window).scroll(function() {
            scrollSticky();
        });


        stickyHostTextArea.keyup(function(e){
            if(((e.keyCode || e.which) == 13) || ((e.keyCode || e.which) == 8) || ((e.keyCode || e.which) == 46)) { //Enter keycode
                scrollSticky();
            }
        });
    })
}

function showStickyUp(id) {
    return !isLeaving(id) && isScrollingPastTop(id)
}

function showStickyBottom(id) {
    return isEntering(id) && isScrollingPastBottom(id)
}

function isEntering(id) {
    var $stickyHost = $('[sticky-host=' + id + ']').first();
    var topOffset = parseInt($stickyHost.attr('top-offset')) || 0;
    var y1 = $(window).scrollTop();
    var y2 = ($stickyHost.offset().top + topOffset) - $(window).height();
    return y2 - y1 < 0;
}

function isLeaving(id) {
    var $stickyHost = $('[sticky-host=' + id + ']').first();
    var bottomOffset = parseInt($stickyHost.attr('bottom-offset')) || 0;
    var y1 = $(window).scrollTop();
    var y2 = ($stickyHost.offset().top - bottomOffset) + $stickyHost.height();
    return y2 - y1 < 0;
}

function isScrollingPastTop(id) {
    var $stickyHost = $('[sticky-host=' + id + ']').first();
    var y1 = $(window).scrollTop();
    var y2 = $stickyHost.offset().top;
    return y2 - y1 < 0;
}

function isScrollingPastBottom(id) {
    var $stickyHost = $('[sticky-host=' + id + ']').first();
    var y1 = $(window).scrollTop() + $(window).height();
    var y2 = $stickyHost.offset().top + $stickyHost.height();
    return y1 - y2 < 0;
}

function toggleStickyUp(id, show) {
    var $stickyUp = $('[sticky-up=' + id + ']').first();
    if ($stickyUp !== undefined && show !== $stickyUp.is(':visible')) {
        $stickyUp.css('position', 'fixed').css('top', '0').toggle(show);
    }
}

function toggleStickyBottom(id, show) {
    var $stickyBottom = $('[sticky-bottom=' + id + ']').first();
    if ($stickyBottom !== undefined && show !== $stickyBottom.is(':visible')) {
        $stickyBottom.css('position', 'fixed').css('bottom', '0').toggle(show);
    }
}

$(document).ready(function() {
    initSticky();

    if($.cookie('notices') === null){
      $.cookie('notices', JSON.stringify([]), {expires:null,path:"/",domain:"",secure:false});
    }
});


// Email validation
function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( $email ) ) {
		return false;
	}else{
		return true;
	}
}
function multiEmail(email_field) {
	var form = $('#share-from');
	var email = email_field.split(',');
	for (var i = 0; i < email.length; i++) {
		var trimemail = email[i].trim();
		if (!validateEmail(trimemail, 1, 0)) {
			form.next().remove();
			form.css('border-color', 'red');
			form.after('<span style="margin: 5px 0;float: left;color: #f00;">One or more email address is invalid!</span>');
			return false;
		}
	}
	$('#form-email-thread').submit();
	return true;
}

// fjb share email thread
$('#send-share-mail').on('click', function(event) {
	emailtext = $('#share-from').val();
	multiEmail(emailtext);
});
// function checkObject( varObject ){
// 	existing = varObject.length ? true : false;
// 	return existing;
// }

// var coverImage = $(".cover-image"),
// 		header = $('.site-header'),
// 		windowPanel = $(window),
// 		footer = $('.site-footer'),
// 		leftnav = $('#left-nav');

// function stickHeader() {
// 	if( windowPanel.scrollTop() > coverImage.height() ){
// 		header.addClass("fixed");
// 	} else {
// 		header.removeClass("fixed");
// 	}
// }

// function stickLeftBanner() {
// 	if( windowPanel.scrollTop() > leftnavTop + 140){
// 		var marHeight = footer.offset().top - windowPanel.height() + ( windowPanel.height() - leftnav.height() - $('.site-header').height() );
// 		if( windowPanel.scrollTop() > ( marHeight - 25 ) ){
// 			var footerHeight = windowPanel.scrollTop() - ( footer.offset().top - windowPanel.height() );
// 			leftnav.attr('style', 'position:fixed !important;bottom:'+ (footerHeight + 15) +'px;');
// 		}else{
// 			leftnav.attr('style', 'position:fixed !important;top:60px;');
// 		}
// 	}else{
// 		leftnav.attr('style', '');
// 	}
// }

// // Make header position absolute when there is cover image
// // if( checkObject( $(coverImage) ) ) {

// // 	if (coverImage.height() > 10) {
// // 		// check landing page
// // 		if( checkObject( $(".landing") ) ) {
// // 			header.css("position", "absolute");
// // 			if (windowPanel.scrollTop() > 299) {
// // 				leftnav.css("position", "fixed");
// // 				header.css("position", "fixed");
// // 			}

// // 		} else {
// // 			leftnav.css("position", "absolute");
// // 			header.css("position", "absolute");
// // 			if (windowPanel.scrollTop() > 199) {
// // 				leftnav.css("position", "fixed");
// // 				header.css("position", "fixed");
// // 			}

// // 		}

// // 	}

// // };

// $(window).bind('scroll', function() {

// 	// check when cover banner is enabled
// 	if( checkObject( $(coverImage) ) ) {

// 		if (coverImage.height() > 3) {
// 			stickHeader();
// 			$('.site-header').css('left', -$(this).scrollLeft() + "px");

// 			// check landing page
// 			if( checkObject( $(".landing") ) ) {
// 				//stickLeftBanner();

// 				// check window position when page is refreshed
// 				if (windowPanel.scrollTop() > coverImage.height()) {
// 					header.css("position", "fixed");
// 					$('.site-header').css('left', -$(this).scrollLeft() + "px");
// 				} else {
// 					header.css("position", "absolute");
// 					$('.site-header').css('left', - 0);
// 				}

// 			} else {

// 				// check window position when page is refreshed
// 				if (windowPanel.scrollTop() > coverImage.height()) {
// 					leftnav.css("position", "fixed");
// 				} else {
// 					header.css("position", "absolute");
// 					leftnav.css("position", "absolute");
// 				}

// 			}
// 		} else {
// 			header.css("position", "fixed");
// 		}
// 	} else {
// 		$('.site-header').css('left', -$(this).scrollLeft() + "px");
// 	}
	
// });
