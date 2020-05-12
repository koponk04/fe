
<!DOCTYPE html><html lang="ID" itemscope itemtype="http://schema.org/WebPage"><head><title>Kaskus - Home Login</title><meta itemprop="name" content="Kaskus - Home Login"><meta itemprop="description" content="Forum diskusi hobi, rumah ribuan komunitas dan pusat jual beli barang hobi di Indonesia. "><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /><meta charset="utf-8"/><meta http-equiv="Pragma" content="no-cache" /><meta http-equiv="Expires" content="-1" /><meta http-equiv="Cache-Control" content="no-cache" /><meta name="keywords" content=" kaskus,forum,indonesia,kaskuser,kaskusradio,radio,indo,jual beli,news,berita" /><meta name="description" content="Forum diskusi hobi, rumah ribuan komunitas dan pusat jual beli barang hobi di Indonesia. " /><meta name="author" content="KASKUS" /><meta http-equiv="content-language" content="id, en"><meta name="generator" content="DrewBull" /><meta name="revisit-after" content="7" /><meta name="webcrawlers" content="all" /><meta name="rating" content="general" /><meta name="spiders" content="all" /><meta name="robots" content="all" /><meta http-equiv="imagetoolbar" content="no" /><meta name="copyright" CONTENT="&copy; 1999–2020 Kaskus Networks All Right Reserved"><link href="https://s.kaskus.id/themes_3.0/stylesheets/style.css" rel="stylesheet" type="text/css" media="all"/><link href="https://s.kaskus.id/themes_3.0/stylesheets/quickie/font-awesome.css" rel="stylesheet" type="text/css" media="all"/><link href="https://s.kaskus.id/themes_3.0/stylesheets/codemirror.css" rel="stylesheet" type="text/css" media="all"/><link href="https://s.kaskus.id/themes_3.0/stylesheets/chosen.min.css" rel="stylesheet" type="text/css" media="all"/><script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/modernizr.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/tools.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/jknav.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/hotkeys.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/tooltip.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/selectbox.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/carousel.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/javascript/header.js"></script><script type="text/javascript" src="https://s.kaskus.id/themes_3.0/js/jquery.cookie.js"></script><script type="text/javascript">
	function show_forum_categories()
	{
		if($(".category-list").is('#show') === false)
		{
		 	$.getJSON('/misc/show_forum_categories', function(data)
		 	{
		 		$(".category-list").attr('id', 'show');
				$(".category-list").append(data.html);
				$('.category-tab').tabs('.category-tab-panel');
		 	});
		}
	}
	</script><script type="text/javascript">
$(document).ready(function(){
	$('#carousel').carouFredSel({
		responsive: true,
		width: '100%',
		scroll: 5,
		auto:false,
		prev: '.prev',
		next: '.next',
		items: {
			visible:5,
		}
	});

	$('#carousel-f').carouFredSel({
		responsive: true,
		width: '100%',
		scroll: 4,
		auto:false,
		height:130,
		prev: '.prev',
		next: '.next',
		items: {
			visible:4,
		}
	});

	$('#carousel-l').carouFredSel({
		responsive: true,
		width: '100%',
		scroll: 4,
		auto:false,
		height:100,

		prev: '.prev',
		next: '.next',
		items: {
			visible:6,
		}
	});
	$("input[name=searchchoice]").change(function(){
		var searchclass = $(this).val();
		if( searchclass != '')
		{
			$('#searchform').attr('action','/search/'+searchclass);
		}
		else
		{
			$('#searchform').attr('action','/search');
		}
	});
});
window.addEventListener("keydown", function(e) 
{
	if(e.keyCode==65 && e.shiftKey) 
		 show_forum_categories();
}, false);
</script><style>
.ramadhan2019 .overlay{
   z-index: initial;
}

.Ovy\(a\) {
    overflow-y: auto!important;
}

.B\(5px\) {
    bottom: 5px;
}

.Bgc\(\#b3b3b3\){
    background-color: #b3b3b3;
}

.frameStickyBottomAds{
height: initial;
}

.frameStickyBottomAds iframe{
background-color: rgb(0, 0, 0);
transition: height 0.3s ease-in-out 0s;
}

.H\(150px\){height:150px}

.W\(600px\){width:600px}

#div-gpt-ad-r1 iframe{
    position:absolute;
    background-color: rgb(0, 0, 0); 
    position: absolute; 
    right: 0px;
    max-width: initial;
  }

#div-gpt-ad-r1 {
    position: relative;
    height: 250px;
  }

#div-gpt-ad-r2 iframe{
    position:absolute;
    background-color: rgb(0, 0, 0); 
    position: absolute; 
    right: 0px;
    max-width: initial;
  }

#div-gpt-ad-r2 {
    position: relative;
    height: 250px;
  }

#shared_url{
   width: 120px;
}

.checkboxAslinyaloChecker .D\(n\) {
    display: none;
}

.Bgc\(\#general\) {
    background-color: #1998ed;
}

.Bgc\(\#1998ed\)\:h:hover {
  background-color: #1998ed;
}

body{
      -webkit-font-smoothing: antialiased;
}

.immersiveImage {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 1000px;
  left: 0;
  right: 0;
  cursor: pointer;
  background: url('https://s.kaskus.id/img/seasonal/november2018/tematik/wp_background_fbz4r28pw0s5.jpg') no-repeat top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}

.has-immersive .mainContent,
.has-immersive .jsMainFooter,
.has-immersive .jsMainFooter+div,
.has-immersive .subFooter {
  position: relative;
  z-index: 0;
}

.has-immersive .sidebarLeftInner a,
.has-immersive .sidebarLeftInner span,
.has-immersive .listThreadItem,
.has-immersive .column > div > div > span,
.has-immersive .column > div > a,
.has-immersive .column > a{
  color: white
}

.user-control-stick .pull-right {
  float: left !important;
}

.video-thread__ntap .tooltips {
    float: none;
}

video.c-giphy__preview{
   max-width: 100%;
}

.video-thread ul.share .facebook  a{
       padding: 5px 14px 5px;
}

.c-subforum-listing--list table tbody tr td:first-child{
      min-width: 63px;
}

.site-header__secondary-menu__item a {
    max-width: 130px;
}

.reply-thread .postlist {
    border-top: none;
}

.main-menu>li>a {
    padding: 0 5px;
}

.main-menu>li.current a, .main-menu>li:focus a, .main-menu>li:hover a {
    color: #1998ed!important;
}

.site-header__wrapper--scrolled .site-header__quick ul li {
     margin: 0 10px;
}

.main-menu>li.current a, .main-menu>li:focus a, .main-menu>li:hover a {
    color: #1998ed!important;
}

@media only screen and (max-width: 1024px) {
     .main-menu>li>a {
         padding: 0 5px;
     }
}

#preview-anchor .entry-title{
    border-bottom: none;
}

#leader-banner {
    max-width: 1170px;
    text-align:center;
    margin: 5px 5px 10px 10px;
}

.widgetGeneralSpot{
margin-bottom: 10px;
}

#leader-banner.minimize iframe{
	height: 90px;
}

.card__sidebar__list--image img {
    min-height: initial!important;
}

.con-kaskus-ads.clearfix iframe {
    height: 82px!important;
}

.fjb .last-edit a{
   color: #00aba1!important;
}

.card__vertical__desc span {
    display: block;
}

.pesdk-react-editor .pesdk-react-categoryDropdown__overlay{
       width: 420px!important;
}

.pesdk-react-editor .pesdk-react-scrollbar__bar:before{
      background: #000!important;
}

table .tooltips.jump:hover{
      opacity: .8
}

.skin-banner iframe {
    display: block;
    margin: 0 auto;
}

.thread-dashboard #short-url-btm > i, #forum-thread-top > div.forum-control.clearfix > div.pull-right > div:nth-child(3) > a {
     color: #949494;
}

.thread-dashboard #short-url-btm:hover > i , #forum-thread-top > div.forum-control.clearfix > div.pull-right > div:nth-child(3) > a:hover{
      color: #2c9de6;
}

.c-subforum-listing--list table tbody tr td{
     padding: 8px;
}

.user-control-stick > div:nth-child(1) > h1.logo{
   background-image: url(https://s.kaskus.id/e3.1/images/logo-kaskus-n.png);
    width: 35px;
    background-size: contain;
    height: 35px;
}

#amSkinVid-video-link{
    height: 100%!important;
}

#amSkinVid-video-layer{
    top: 0;
}

.markItUp .markItUpButton20 a {
    color: #000!important;
}

.jsNoticeBoard {
    font-size: 14px;
}

#amSkinVid-video {
    position: relative;
    z-index: 5;
}

.markasWidget {
    margin-bottom: 20px;
}

.site-header__secondary-menu__item a.valentine {
    margin: 8px 0;
}

.bt-frame-ads.expanded, .bt-frame-ads.expanded iframe {
    height: 150px!important;
}

.bt-frame-ads iframe {
    -moz-transition: height .2s ease-in-out!important;
    -webkit-transition: height .2s ease-in-out!important;
    transition: height .2s ease-in-out!important;
}

.global-search .form-control.select {
line-height: 12px;
}

@media only screen and (max-width: 1200px) {
     .user-control-stick .pull-right .fa-pencil {
          display:none;
      }
}

@media (max-width: 1024px){
.user-control-stick {
    width: 660px!important;
}

}

#floating-cendol {
	bottom: 8px;
    right: 16px;
    position: fixed;
    z-index: 100;
}

.cendolSticky {
	width: 120px;
	height: 250px;
	background-position: left center;
	-webkit-animation: playCendol 1s steps(12) infinite;
	animation: playCendol 1s steps(12) infinite;
	background-image: url(https://s.kaskus.id/img/seasonal/april2020/header_fci4wy4eg9hp.png);
	background-size: cover;
}

@keyframes playCendol {
	from {
		background-position-x: 0%;
	}
	to {
		background-position-x: 100%;
	}
}




</style><script type="application/ld+json">
{
	"@context" : "http://schema.org",
	"@type" : "Website",
	"name" : "KASKUS",
	"url" : "http://www.kaskus.co.id",
	"sameAs" : [
	    "https://www.facebook.com/officialkaskus",
		"https://www.twitter.com/kaskus",
		"https://www.twitter.com/kaskusjualbeli",
		"https://www.instagram.com/kaskusnetworks",
		"https://www.instagram.com/kaskusjualbeli",
		"https://plus.google.com/+kaskus",
		"https://id.wikipedia.org/wiki/Kaskus",
		"https://en.wikipedia.org/wiki/Kaskus"
	],
	"author" : [
  	{
  		"@context": "http://schema.org",
  		"@type" : "Organization",
  		"name" : "KASKUS",
  		"legalName" : "PT. Darta Media Indonesia",
  		"url" : "http://www.kaskus.co.id",
		"logo" : "http://www.kaskus.co.id/e3.1/images/layout/home-logo-n.png",
		"contactPoint" : [{
			"@type" : "ContactPoint",
			"telephone" : "+62-21-2922-3600",
			"contactType" : "customer service"
		}],
		"address": "Menara Palma Annex Building P11 H. R. X2 Kav 6, Jalan Haji R. Rasuna Said, Daerah Khusus Ibukota Jakarta 12950"
  	}
  ]
}
</script><meta property="fb:pages" content="169377853224026" /><style>
	.control-label-left {
		float: left;
		padding-top: 5px;
		text-align: left;
		width: 170px;
	}
	.controls-left {
		margin-left: 180px;
	}
	.transitionForm {
		height: 1530px;
		transition: height 0.5s linear;
		overflow: hidden;
	}

	.transitionForm.closedForm {
		height: 0;
	}

	.form .control-group{
		display: table;
		padding-bottom: 4px;
		padding-top: 4px;
	}
	.form .form-action{
		background-color: #F5F5F5;
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
		margin-bottom: 18px;
		margin-top: 18px;
		padding: 8px 0 8px 8px;
	}
	.frm-delete{
		display: inline-block;
	}
	.div-forum-ckb{
		display: inline-block;
		width: 90%;
		margin: 0 auto 0px 80px;
		overflow: hidden;
	}
	.selectbox{
		width: 320px;
	}
</style><style>
</style><script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount','UA-132312-29']);

	/* begin enhanced link attribution script */
	var pluginUrl = 
	 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
	_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
	/* end enhanced link attribution script */
	
	
	_gaq.push(['_trackPageview']);
	
	_gaq.push(['b._setAccount','UA-132312-23']);

	
	_gaq.push(['b._trackPageview']);

		
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script></head><body class="forum"><div id="accessibility"><a id="top"></a> <a href="#main">Skip to Main</a></div><header id="site-header" role="banner"><div class="main-site-header"><div class="row"><div class="col grid-3"><h1 id="logo"><a href="/"> <img src="https://s.kaskus.id/themes_3.0/img/home-logo.png" alt="Kaskus - The Largest Indonesian Community" /> </a></h1></div><div class="col grid-4"><nav id="main-site-nav" role="navigation"><div role="menubar"><a href="/forum" class="forum" role="menuitem"> <span>Forum</span> </a> <a href="/fjb" class="fjb" role="menuitem"> <span>Jual Beli</span> </a></div></nav></div><div class="col grid-5"><div id="site-search"><form role="search" action="/search" method="get" id="searchform"><div id="search"><input type="hidden" name="f" value=""> <input type="text" placeholder="Temukan yang Agan cari disini&hellip;" accesskey="s" name="q" value="" x-webkit-speech="x-webkit-speech" lang="id"/> <input type="submit" value="Search" /></div><div class="search-opt"><span><i>Search in:</i></span> <span><input type="radio" id="rad-all" class="searchchoice" name="searchchoice" value="" checked/> <label for="rad-all">All Site</label></span> <span><input type="radio" id="rad-forum" class="searchchoice" name="searchchoice" value="forum" /> <label for="rad-forum">Forum</label></span> <span><input type="radio" id="rad-fjb" class="searchchoice" name="searchchoice" value="fjb" /> <label for="rad-fjb">Jual Beli</label></span> <span><input type="radio" id="rad-groupee" class="searchchoice" name="searchchoice" value="groups" /> <label for="rad-groupee">Groupee</label></span> <span class="advanced"><a href="http://support.kaskus.co.id/kaskus-basic/layout_%26amp%3B_navigation.html#search" target="_blank">Search Tips</a></span></div></form></div></div></div></div><div class="iee-header"><div class="meta-header"><div class="row"><div class="col grid-6"><div class="meta-header-bar mobile-hide"><ul> <li><a href="/" class="nav-home"><i class="icon-home header-icon"></i></a></li> <li><a href="/forum" class="nav-forum">Forum</a></li> <li><a href="/fjb" class="nav-fjb">Jual Beli</a></li> <li><a href="/group" class="nav-groupee">Groupee</a></li> <li><a href="http://www.kaskusradio.com" target="_blank" class="nav-radio">KaskusRadio</a></li> </ul></div></div><div class="col grid-6"><div class="meta-header-bar log-bar"><ul> <li class="vcard user dropdown tools-panel"> <a href="#" class="tools"><div class="fig"><div><img src="https://s.kaskus.id/user/avatar/2009/06/08/avatar916848_49.gif" alt="" class="photo"></div></div><span class="fn">beta tester</span> </a> <ul class="sub-menu dropdown-menu"> <li><a href="/profile/916848">Profile Page</a></li> <li><a href="/myforum">Forum Activities</a></li> <li><a href="/pm/index/0">Private Message</a></li> <li><a href="/user/editprofile">Account Setting</a></li> <li><a href="/user/logout/?&hash=1589251753-940dccf1ed7556db4f556946dfde341e" class="logout"><i class="icon-signout"></i> Sign Out</a></li> </ul> </li> <li class="notice dropdown tools-panel"> <a href="#" class="tools"> <span class="noticed"><strong>99+</strong></span> </a> <ul class="sub-menu dropdown-menu"> <li><a href="/pm" style="font-weight:bold;"> 7,020 new Private Message</a></li> <li><a href="/friend/group" style="font-weight:bold;"> 2 Social Group Invitations</a></li> <li><a href="/myforum/myquotedpost" style="font-weight:bold;"> 19 Post Quoted</a></li> </ul> </li> <li class="shortcut dropdown tools-panel"> <a href="#" class="tools"> <i class="icon-pencil header-icon"></i> </a> <ul class="sub-menu dropdown-menu"> <li><a href="/forum/quicknewthread">Create New Thread</a></li> <li><a href="/fjb/sell">Sell Now</a></li> <li><a href="/fjb/buy">Post Wanted Item</a></li> <li><a href="/group/create">Create Group</a></li> </ul> </li> <li class="shortcut dropdown tools-panel"> <a href="http://support.kaskus.co.id/" rel="tooltip" data-title="Help Center" data-placement="bottom"> <i class="icon-question-sign header-icon"></i> </a> </li> </ul></div></div></div></div></div></header><nav id="hot-cat"><div class="row"><div class="col grid-12"><ul class="categories"> <li class="hot-cat-label"><span>Hot categories</span></li> <li><a href="/forum/635/?ref=hotcategories">Debat Capres</a></li><li><a href="/forum/655/?ref=hotcategories">Komik</a></li><li><a href="/forum/597/?ref=hotcategories">Sains</a></li><li><a href="/forum/277/?ref=hotcategories">Entrepreneurship</a></li><li><a href="/forum/630/?ref=hotcategories">Green Life</a></li><li><a href="/forum/140/?ref=hotcategories">Militer</a></li><li><a href="/forum/193/?ref=hotcategories">Family</a></li><li><a href="/forum/16/?ref=hotcategories">Curhat</a></li><li><a href="/forum/10/?ref=hotcategories">News</a></li><li><a href="/forum/21/?ref=hotcategories">The Lounge</a></li><li><a href="/forum/72/?ref=hotcategories">Regional</a></li> <li class="hot-cat-panel dropdown"> <a href="javascript:void(0);" class="tools" onclick="show_forum_categories()">All categories</a><div class="category-bar"><div class="row"><div class="col grid-12"><div class="category-tab"><a href="#"><i class="icon-comments"></i> Forum</a> <a href="#"><i class="icon-shopping-cart"></i> Jual Beli</a></div><div class="category-list"></div><div class="label-legend"><div><sup class="c-label new">N</sup> <span>New</span></div><div><sup class="c-label updated">U</sup> <span>Update</span></div><div><sup class="c-label promo">P</sup> <span>Promoted</span></div></div></div></div></div></li> </ul> <ul class="acc-control"> <li><a href="/" class="sec-logo"><img src="https://s.kaskus.id/themes_3.0/img/home-logo.png" alt="" /></a></li> <li><a href="#">Forum</a></li> <li><a href="#">FJB</a></li> <li><a href="#">Marketplace</a></li> <li><a href="#">Groupee</a></li> <li style="float:right"> <form class="search"> <input type="text" placeholder="Search something&hellip;" /> <input type="submit" value="Search" /> </form> </li> </ul></div></div></nav><div class="banner-top-wrapper"></div><style type="text/css">
	table.list {
		box-shadow: 0 0 2px 2px rgba(0,0,0,0.4);
		overflow: hidden;
	}
</style><script type="text/javascript">
	function deletechecked(delUrl)
	{
		if (confirm("Are you sure you want to delete")) {
			document.location = delUrl;
		}
	}
</script><div id="main" role="main"><div class="row"><div class="col grid-12"><div class="user-content-wrapper"><div class="row"><div class="col grid-3a"><div class="account-panel"><div class="panel-wrapper user-menu"><div class="user vcard"><figure><div><img src="https://s.kaskus.id/user/avatar/2009/06/08/avatar916848_49.gif" class="photo" alt="profile picutre"></div><a href="/user/editprofile">Edit avatar</a> </figure><div class="user-details"><a href="/profile/916848" class="fn url"><span style="color: #8B0000;font-weight: 700;font-style:italic">beta tester</span></a></div><div class="title"><b>Kaskus Officer</b></div><div class="userid">UserID: 916848</div><div class="reputation off tooltips" data-toggle="tooltip" title="beta tester has disabled_reputation" data-original-title="beta tester has disabled_reputation" ><div></div></div></div><div class="user-stats"><a href="/profile/viewallposts/916848"> <img src="https://s.kaskus.id/themes_3.0/img/icon/comment.png" alt=""> <b>16</b> posts </a></div></div><a href="/user/liveposting" class="live-posting new"> <img src="https://s.kaskus.id/themes_3.0/images/layout/usercp-k-ballon.png">Live Posting<br> </a><div class="panel-wrapper menu"><a href="/myforum" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/forum.png" alt=""> Aktivitas Forum</a></div><div class="panel-wrapper menu"><a href="/activities/buying/purchased" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/package.png" alt=""> Aktivitas Jual Beli</a></div><div class="panel-wrapper menu"><a href="/pm/index/0" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/email.png" alt=""> Kotak Pesan</a></div><div class="panel-wrapper menu"><a href="/store/plus" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/kplus_warna.svg" alt=""> KASKUS Plus</a></div><div class="panel-wrapper menu"><a href="/point" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/forum.png" alt=""> KASKUS Koin</a></div><div class="panel-wrapper menu"><a href="/user/editprofile" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/usersetting.png" alt=""> Pengaturan Akun</a></div><div class="panel-wrapper menu"><a href="/contentmanager/hot_thread" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/feedback.png" alt=""> Manage Content</a> <ul class='dropdown-menu'> <li> <a href="/contentmanager/hot_thread" >Hot Thread </a> </li> <li> <a href="/contentmanager/ht_attr" >Hot Thread Attribute </a> </li> <li> <a href="/contentmanager/middle_banner" >Hot Features </a> </li> <li> <a href="/contentmanager/top_thread_list" >Top Thread </a> </li> <li> <a href="/contentmanager/top_feature" >Top Features </a> </li> <li> <a href="/contentmanager/promoted_forum" >Promoted Forum </a> </li> <li> <a href="/contentmanager/weekly_pictures" >Top Picture </a> </li> <li> <a href="/contentmanager/top_video" >Top Video </a> </li> <li> <a href="/contentmanager/top_keyword_list" >Top Keyword </a> </li> <li> <a href="/contentmanager/top_user_sticky" >Top User </a> </li> <li> <a href="/contentmanager/recommend_threads" >KASKUS HQ </a> </li> <li> <a href="/contentmanager/kaskus_live" >KASKUS Live </a> </li> <li> <a href="/contentmanager/weekly_regional" >Regional of the Week </a> </li> <li> <a href="/contentmanager/field_report_list" >Field Report </a> </li> <li> <a href="/contentmanager/live_promote" >Promoted LivePosting <i class="icon-question-sign" rel="popover" data-title="Promoted LivePosting" data-content="For Manage Promoted post on User's LivePosting" data-placement="right"></i> </a> </li> <li> <a href="/contentmanager/navigation_list" >Navigation Info </a> </li> <li> <a href="/contentmanager/internal_kasad" >Homepage KasAds </a> </li> <li> <a href="/contentmanager/phrase_list" class="current" id="selected_Sub_Menu">Manage Phrase </a> </li> <li> <a href="/contentmanager/group_smilies" >Manage Smilies </a> </li> <li> <a href="/contentmanager/sensor_list" >Manage Sensor Word </a> </li> <li> <a href="/contentmanager/bbcode_list" >Manage BBCode </a> </li> <li> <a href="/contentmanager/icon_list" >Manage Icon </a> </li> <li> <a href="/noticemanager/notices_list" >Manage Notices </a> </li> <li> <a href="/contentmanager/banner_list" >Manage Banner </a> </li> <li> <a href="/contentmanager/custom_template" >Custom Template </a> </li> <li> <a href="/contentmanager/upload_item" >Upload Image </a> </li> <li> <a href="/contentmanager/hot_categories" >Hot Categories </a> </li> <li> <a href="/contentmanager/showcase" >Manage Showcase <i class="icon-question-sign" rel="popover" data-title="Manage Showcase" data-content="Manage Showcase" data-placement="right"></i> </a> </li> <li> <a href="/contentmanager/store_banner_list" >Manage Store Banner </a> </li> <li> <a href="/stickermanager/sticker_category_list" >Manage Sticker <i class="icon-question-sign" rel="popover" data-title="Manage Sticker" data-content="Manage Sticker Forum Image" data-placement="right"></i> </a> </li> <li> <a href="/contentmanager/country_list" >Manage Countries </a> </li> <li> <a href="/contentmanager/location_recommended_thread" >Manage Thread Recommendation </a> </li> </ul></div><div class="panel-wrapper menu"><a href="/forummanager/view_permission" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/forum.png" alt=""> Manage Forum</a></div><div class="panel-wrapper menu"><a href="/usermanager" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/female.png" alt=""> Manage User</a></div><div class="panel-wrapper menu"><a href="/marketplacemanager/view_category" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/basket.png" alt=""> Manage Marketplace</a></div><div class="panel-wrapper menu"><a href="/pmmanager/pm_option" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/emailreplied.png" alt=""> Manage PM</a></div><div class="panel-wrapper menu"><a href="/maintenance/service" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/alert.png" alt=""> Maintenance</a></div><div class="panel-wrapper menu"><a href="/smsmanager/sms_option" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/comment_icon.gif" alt=""> Manage SMS</a></div><div class="panel-wrapper menu"><a href="/bannedmanager/" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/cross.png" alt=""> Manage Auto Ban</a></div><div class="panel-wrapper menu"><a href="/groupmanager" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/group.png" alt=""> Manage Groups</a></div><div class="panel-wrapper menu"><a href="/modcpot/sync_count" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/wrench.png" alt=""> Mod Tools</a></div><div class="panel-wrapper menu"><a href="/fjbmanager/products" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/basket.png" alt=""> Manage Jual Beli</a></div><div class="panel-wrapper menu"><a href="/badgemanager/badge_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/verified.png" alt=""> Manage Badge</a></div><div class="panel-wrapper menu"><a href="http://fjb.kaskus.co.id/jbcontentmanager/all_highlight_banner" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/package.png" alt=""> Manage Home JB</a></div><div class="panel-wrapper menu"><a href="/creatormanager" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/feedback.png" alt=""> Manage Kreator</a></div><div class="panel-wrapper menu"><a href="/pointmanager" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/dollar.png" alt=""> Manage Poin</a></div><div class="panel-wrapper menu"><a href="/frontendmanager/premium_tab_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/application.png" alt=""> Manage Header & Sub Header</a></div><div class="panel-wrapper menu"><a href="/appsmanager" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/house.png" alt=""> Manage Apps</a></div><div class="panel-wrapper menu"><a href="/bannermanager/wap_banner_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/feedback.png" alt=""> Manage Banner</a></div><div class="panel-wrapper menu"><a href="/channelmanager/channel_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/wrench.png" alt=""> Manage Channel</a></div><div class="panel-wrapper menu"><a href="/naamanager/naa_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/star30.png" alt=""> Manage NAA</a></div><div class="panel-wrapper menu"><a href="/silentpushmanager/module_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/load-more.png" alt=""> Silent Push</a></div><div class="panel-wrapper menu"><a href="/threadtoolsmanager/list_disable_index_thread/" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/wrench.png" alt=""> Manage Thread Tools</a></div><div class="panel-wrapper menu"><a href="/threadcollectionmanager/thread_showcase_list" class="fold"><img src="https://s.kaskus.id/themes_3.0/img/icon/feedback.png" alt=""> Manage Hot Topic</a></div></div></div><div class="col grid-13a"><div id="user-profile-main" class="user-main-column"><header class="header"><h2><img src="https://s.kaskus.id/themes_3.0/img/icon/usersetting.png" alt="">Manage Content » <span>Manage Phrase</span></h2><div class="tools-panel dropdown"><div class="dropdown-menu"><select onchange="window.location = ($(this).val())"> </select></div></div></header><div class="user-main-content"><div class="listing-wrapper">
<div id="content-wrapper">
	<div id="main-column" class="pm-wrap" style="min-height:1300px">
		<div id="tab-content">
			<div id="content">
				<div style="display: flex;">
					<input type="checkbox" name="showHideParams" id="showHideParams" value="true" title="Show / Hide Parameters">
					<div style="margin-top: auto; margin-bottom: auto;">&nbsp;Hide Parameters</div>
				</div>
				<div class="transitionForm">
					<form class="form well" method="post">
						<div class="control-group">
							<label class="control-label-left">Preset Query</label>
							<div class="controls-left">
								<select onchange="alert('bakal ngubah parameter dibawah, bakal munculin modal buat set param juga, misal thread id atau channel id');">
									<option>Default</option>
									<option>Obrolan Hangat Home</option>
									<option>Obrolan Hangat Channel</option>
									<option>Set boost Sort by Trending(upvote downvote score)</option>
								</select>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">Request-Handler (qt)</label>
							<div class="controls-left">
								<input type="textbox" id="qt" value="/select" title="Request handler in solrconfig.xml.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left"><b>Common :</b></label>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="The query string.">q</label>
							<div class="controls-left">
								<textarea name="q" id="q" title="The query string.">*:*</textarea>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Filter query.">fq</label>
							<div class="controls-left">
								<input type="textbox" id="fq" name="fq" title="Filter query.">
								<a class="removeFq" onclick="removeFilter(this)"><span>-</span></a>
								<a class="addFq" onclick="addFilter(this)"><span>+</span></a>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Sort field or function with asc|desc.">sort</label>
							<div class="controls-left">
								<input type="textbox" id="sort" name="sort" title="Sort field or function with asc|desc.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Number of leading documents to skip and number of documents to return after 'start'. (Integers)">start, rows</label>
							<div class="controls-left">
								<div style="width: 210px;">
									<input type="textbox" style="width: 49%;" name="start" id="start" placeholder="0" pattern="[0-9]+" title="Number of leading documents to skip. (Integer)">
									<input type="textbox" style="width: 49%;" id="rows" name="rows" placeholder="10" pattern="[0-9]+" title="Number of documents to return after 'start'. (Integer)">
								</div>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">Raw Query Parameters</label>
							<div class="controls-left">
								<input type="textbox" name="start" id="custom_parameters" value="" placeholder="key1=val1&amp;key2=val2">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">Debug</label>
							<div class="controls-left">
								<div style="display: flex;">
									<input type="checkbox" name="debugQuery" id="debugQuery" value="true" title="Show timing and diagnostics.">
									<div style="margin-top: auto; margin-bottom: auto;">&nbsp;debugQuery</div>
								</div>
								<div style="display: flex;">
									<input type="checkbox" name="debug.explain.structured" id="debug_explain_structured" value="true" disabled="disabled" title="Show Score explanations as nested structures.">
									<div style="margin-top: auto; margin-bottom: auto;">&nbsp;debug.explain.structured</div>
								</div>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left"><b>Edismax :</b></label>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Alternate query when 'q' is absent.">q.alt</label>
							<div class="controls-left">
								<input type="textbox" name="q.alt" id="edismax_q_alt" title="Alternate query when 'q' is absent.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Query fields with optional boosts.">qf</label>
							<div class="controls-left">
								<input type="textbox" name="qf" id="edismax_qf" title="Query fields with optional boosts.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Min-should-match expression.">mm</label>
							<div class="controls-left">
								<input type="textbox" name="mm" id="edismax_mm" title="Min-should-match expression.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Phrase boosted fields.">pf</label>
							<div class="controls-left">
								<input type="textbox" name="pf" id="edismax_pf" title="Phrase boosted fields.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Phrase boost slop.">ps</label>
							<div class="controls-left">
								<input type="textbox" name="ps" id="edismax_ps" title="Phrase boost slop.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Query string phrase slop.">qs</label>
							<div class="controls-left">
								<input type="textbox" name="qs" id="edismax_qs" title="Query string phrase slop.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Score tie-breaker. Try 0.1.">tie</label>
							<div class="controls-left">
								<input type="textbox" name="tie" id="edismax_tie" title="Score tie-breaker. Try 0.1.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Boost query.">bq</label>
							<div class="controls-left">
								<input type="textbox" name="bq" id="edismax_bq" title="Boost query.">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Boost function (added).">bf</label>
							<div class="controls-left">
								<input type="textbox" name="bf" id="edismax_bf" title="Boost function (added).">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="User Fields">uf</label>
							<div class="controls-left">
								<input type="textbox" name="uf" id="edismax_uf" title="User Fields">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="bigram phrase boost fields">pf2</label>
							<div class="controls-left">
								<input type="textbox" name="pf2" id="edismax_pf2" title="bigram phrase boost fields">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="trigram phrase boost fields">pf3</label>
							<div class="controls-left">
								<input type="textbox" name="pf3" id="edismax_pf3" title="trigram phrase boost fields">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="phrase slop for bigram phrases">ps2</label>
							<div class="controls-left">
								<input type="textbox" name="ps2" id="edismax_ps2" title="phrase slop for bigram phrases">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="phrase slop for trigram phrases">ps3</label>
							<div class="controls-left">
								<input type="textbox" name="ps3" id="edismax_ps3" title="phrase slop for trigram phrases">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="multiplicative boost function">boost</label>
							<div class="controls-left">
								<textarea name="boost" id="edismax_boost" title="multiplicative boost function"></textarea>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left"><b>Facet :</b></label>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Enable faceting.">Enable</label>
							<div class="controls-left">
								<input type="checkbox" name="enable_facet" id="enable_facet" value="true">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">facet.query</label>
							<div class="controls-left">
								<textarea name="facet.query" id="facet_query"></textarea>
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">facet.field</label>
							<div class="controls-left">
								<input type="textbox" name="facet.field" id="facet_field">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">facet.prefix</label>
							<div class="controls-left">
								<input type="textbox" name="facet.prefix" id="facet_prefix">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left"><b>Spellcheck :</b></label>
						</div>
						<div class="control-group">
							<label class="control-label-left" title="Enable spellchecking.">Enable</label>
							<div class="controls-left">
								<input type="checkbox" name="enable_spellcheck" id="enable_spellcheck" value="true">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.q</label>
							<div class="controls-left">
								<input type="textbox" name="spellcheck.q" id="spellcheck_q">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.count</label>
							<div class="controls-left">
								<input type="textbox" name="spellcheck.count" id="spellcheck_count">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.onlyMorePopular</label>
							<div class="controls-left">
								<input type="checkbox" name="spellcheck.onlyMorePopular" id="spellcheck_onlyMorePopular" value="true">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.extendedResults</label>
							<div class="controls-left">
								<input type="checkbox" name="spellcheck.extendedResults" id="spellcheck_extendedResults" value="true">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.collate</label>
							<div class="controls-left">
								<input type="checkbox" name="spellcheck.collate" id="spellcheck_collate" value="true">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.maxCollations</label>
							<div class="controls-left">
								<input type="textbox" name="spellcheck.maxCollations" id="spellcheck_maxCollations">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.maxCollationTries</label>
							<div class="controls-left">
								<input type="textbox" name="spellcheck.maxCollationTries" id="spellcheck_maxCollationTries">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label-left">spellcheck.accuracy</label>
							<div class="controls-left">
								<input type="textbox" name="spellcheck.accuracy" id="spellcheck_accuracy">
							</div>
						</div>
					</form>
				</div>
				<div class="form well">
					<div class="form-action">
						<!-- doQuery() -->
						<input type="submit" class="button medium blue" id="btn-add" value="Execute Query">
					</div>
				</div>
				<div class="form well">
					<label style="text-align: left; padding-left: 8px;">Generated Query : </label>
					<div class="form-action" style="padding: 8px;">
						<textarea style="width: 100%;" readonly="readonly">http://solr8-staging.kaskus.co.id/solr/forum/select?debug.explain.structured=true&debugQuery=on&defType=edismax&q=*:*&stopwords=tru</textarea>
					</div>
				</div>
				<div class="form well">
					<label style="text-align: left; padding-left: 8px;">Raw Result : </label>
					<div class="form-action" style="padding: 8px;">
						<textarea style="width: 100%;" readonly="readonly">{
  "responseHeader":{
    "zkConnected":true,
    "status":0,
    "QTime":19,
    "params":{
      "q":"*:*",
      "defType":"edismax",
      "debug.explain.structured":"true",
      "debugQuery":"on",
      "stopwords":"true"}},
  "response":{"numFound":377,"start":0,"maxScore":1.0,"docs":[
      {
        "post_id":"000000000000000409830601",
        "thread_id":"000000000000000008066383",
        "forum_id":60,
        "_version_":1655852749392183296},
      {
        "post_id":"5e1e8e6cbb5ceb431f491475",
        "thread_id":"5e1e8e6cbb5ceb431f491474",
        "forum_id":10,
        "_version_":1655852749468729344},
      {
        "post_id":"5e35b349bb5ceb329a1c154e",
        "thread_id":"5e35b349bb5ceb329a1c154f",
        "forum_id":882,
        "_version_":1657355749457657856},
      {
        "post_id":"5e35b34bbb5ceb3037217851",
        "thread_id":"5e35b34bbb5ceb3037217852",
        "forum_id":882,
        "_version_":1657355751639744512},
      {
        "post_id":"5e36f20cbb5ceb329a1c1555",
        "thread_id":"5e36f20cbb5ceb329a1c1556",
        "forum_id":882,
        "_version_":1657441315943612416},
      {
        "post_id":"5e36f20fbb5ceb3037217858",
        "thread_id":"5e36f20fbb5ceb3037217859",
        "forum_id":882,
        "_version_":1657441318960365568},
      {
        "post_id":"5e36f6b8bb5ceb329a1c1558",
        "thread_id":"5e36f6b8bb5ceb329a1c1559",
        "forum_id":882,
        "_version_":1657442569690284032},
      {
        "post_id":"5dc0fc2bbb5ceb417f4b6724",
        "thread_id":"5dc0fc2bbb5ceb417f4b6723",
        "forum_id":34,
        "_version_":1657503230646550528},
      {
        "post_id":"5dedcde2bb5ceb2ec618151d",
        "thread_id":"5dedcde2bb5ceb2ec618151e",
        "forum_id":882,
        "_version_":1658079259971813376},
      {
        "post_id":"5e426d1fbb5ceb46633c53e5",
        "thread_id":"5e426d1fbb5ceb46633c53e6",
        "forum_id":882,
        "_version_":1658230267529134080}]
  },
  "debug":{
    "track":{
      "rid":"kk-solr-staging-172node1-forum_shard1_replica_n2-1589250501374-0",
      "EXECUTE_QUERY":{
        "http://kk-solr-staging-174node1:8983/solr/forum_shard2_replica_n4/|http://kk-solr-staging-173node2:8984/solr/forum_shard2_replica_n6/":{
          "QTime":"0",
          "ElapsedTime":"8",
          "RequestPurpose":"GET_TOP_IDS,SET_TERM_STATS",
          "NumFound":"187",
          "Response":"{responseHeader={zkConnected=true,status=0,QTime=0,params={df=title2,distrib=false,debug=[false, timing, track],fl=[thread_id, score],shards.purpose=16388,start=0,fsv=true,shard.url=http://kk-solr-staging-174node1:8983/solr/forum_shard2_replica_n4/|http://kk-solr-staging-173node2:8984/solr/forum_shard2_replica_n6/,rows=10,rid=kk-solr-staging-172node1-forum_shard1_replica_n2-1589250501374-0,debug.explain.structured=true,version=2,q=*:*,defType=edismax,omitHeader=false,requestPurpose=GET_TOP_IDS,SET_TERM_STATS,NOW=1589250501374,isShard=true,shards.preference=replica.location:local,wt=javabin,debugQuery=false,stopwords=true}},response={numFound=187,start=0,maxScore=1.0,docs=[SolrDocument{thread_id=53319778bfcb17fe568b46ec, score=1.0}, SolrDocument{thread_id=5e143bd5bb5ceb5498677249, score=1.0}, SolrDocument{thread_id=5c6cd739bb5ceb08cd2d1de9, score=1.0}, SolrDocument{thread_id=5de0956ebb5ceb496c6e5f3d, score=1.0}, SolrDocument{thread_id=5e35b347bb5ceb46b23c758e, score=1.0}, SolrDocument{thread_id=5e35b34ebb5ceb5f9629dabf, score=1.0}, SolrDocument{thread_id=5e425353bb5ceb50a83f4242, score=1.0}, SolrDocument{thread_id=5e4e32fec761eb6fb3395acf, score=1.0}, SolrDocument{thread_id=57eacf69dcd7708f478b4567, score=1.0}, SolrDocument{thread_id=5e4fc658c761eb166675e58e, score=1.0}]},sort_values={},debug={timing={time=0.0,prepare={time=0.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=0.0}},process={time=0.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=0.0}}}}}"},
        "http://kk-solr-staging-172node1:8983/solr/forum_shard1_replica_n2/|http://kk-solr-staging-171node2:8984/solr/forum_shard1_replica_n1/":{
          "QTime":"0",
          "ElapsedTime":"10",
          "RequestPurpose":"GET_TOP_IDS,SET_TERM_STATS",
          "NumFound":"190",
          "Response":"{responseHeader={zkConnected=true,status=0,QTime=0,params={df=title2,distrib=false,debug=[false, timing, track],fl=[thread_id, score],shards.purpose=16388,start=0,fsv=true,shard.url=http://kk-solr-staging-172node1:8983/solr/forum_shard1_replica_n2/|http://kk-solr-staging-171node2:8984/solr/forum_shard1_replica_n1/,rows=10,rid=kk-solr-staging-172node1-forum_shard1_replica_n2-1589250501374-0,debug.explain.structured=true,version=2,q=*:*,defType=edismax,omitHeader=false,requestPurpose=GET_TOP_IDS,SET_TERM_STATS,NOW=1589250501374,isShard=true,shards.preference=replica.location:local,wt=javabin,debugQuery=false,stopwords=true}},response={numFound=190,start=0,maxScore=1.0,docs=[SolrDocument{thread_id=000000000000000008066383, score=1.0}, SolrDocument{thread_id=5e1e8e6cbb5ceb431f491474, score=1.0}, SolrDocument{thread_id=5e35b349bb5ceb329a1c154f, score=1.0}, SolrDocument{thread_id=5e35b34bbb5ceb3037217852, score=1.0}, SolrDocument{thread_id=5e36f20cbb5ceb329a1c1556, score=1.0}, SolrDocument{thread_id=5e36f20fbb5ceb3037217859, score=1.0}, SolrDocument{thread_id=5e36f6b8bb5ceb329a1c1559, score=1.0}, SolrDocument{thread_id=5dc0fc2bbb5ceb417f4b6723, score=1.0}, SolrDocument{thread_id=5dedcde2bb5ceb2ec618151e, score=1.0}, SolrDocument{thread_id=5e426d1fbb5ceb46633c53e6, score=1.0}]},sort_values={},debug={timing={time=0.0,prepare={time=0.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=0.0}},process={time=0.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=0.0}}}}}"}},
      "GET_FIELDS":{
        "http://kk-solr-staging-172node1:8983/solr/forum_shard1_replica_n2/|http://kk-solr-staging-171node2:8984/solr/forum_shard1_replica_n1/":{
          "QTime":"1",
          "ElapsedTime":"3",
          "RequestPurpose":"GET_FIELDS,GET_DEBUG,SET_TERM_STATS",
          "NumFound":"10",
          "Response":"{responseHeader={zkConnected=true,status=0,QTime=1,params={df=title2,distrib=false,debug=[timing, track],shards.purpose=16704,shard.url=http://kk-solr-staging-172node1:8983/solr/forum_shard1_replica_n2/|http://kk-solr-staging-171node2:8984/solr/forum_shard1_replica_n1/,rows=10,rid=kk-solr-staging-172node1-forum_shard1_replica_n2-1589250501374-0,debug.explain.structured=true,version=2,q=*:*,defType=edismax,omitHeader=false,requestPurpose=GET_FIELDS,GET_DEBUG,SET_TERM_STATS,NOW=1589250501374,ids=5e1e8e6cbb5ceb431f491474,000000000000000008066383,5e35b349bb5ceb329a1c154f,5dedcde2bb5ceb2ec618151e,5dc0fc2bbb5ceb417f4b6723,5e36f20cbb5ceb329a1c1556,5e36f6b8bb5ceb329a1c1559,5e36f20fbb5ceb3037217859,5e426d1fbb5ceb46633c53e6,5e35b34bbb5ceb3037217852,isShard=true,shards.preference=replica.location:local,wt=javabin,debugQuery=true,stopwords=true}},response={numFound=10,start=0,docs=[SolrDocument{post_id=5e1e8e6cbb5ceb431f491475, thread_id=5e1e8e6cbb5ceb431f491474, forum_id=10, _version_=1655852749468729344}, SolrDocument{post_id=000000000000000409830601, thread_id=000000000000000008066383, forum_id=60, _version_=1655852749392183296}, SolrDocument{post_id=5e35b349bb5ceb329a1c154e, thread_id=5e35b349bb5ceb329a1c154f, forum_id=882, _version_=1657355749457657856}, SolrDocument{post_id=5dedcde2bb5ceb2ec618151d, thread_id=5dedcde2bb5ceb2ec618151e, forum_id=882, _version_=1658079259971813376}, SolrDocument{post_id=5dc0fc2bbb5ceb417f4b6724, thread_id=5dc0fc2bbb5ceb417f4b6723, forum_id=34, _version_=1657503230646550528}, SolrDocument{post_id=5e36f20cbb5ceb329a1c1555, thread_id=5e36f20cbb5ceb329a1c1556, forum_id=882, _version_=1657441315943612416}, SolrDocument{post_id=5e36f6b8bb5ceb329a1c1558, thread_id=5e36f6b8bb5ceb329a1c1559, forum_id=882, _version_=1657442569690284032}, SolrDocument{post_id=5e36f20fbb5ceb3037217858, thread_id=5e36f20fbb5ceb3037217859, forum_id=882, _version_=1657441318960365568}, SolrDocument{post_id=5e426d1fbb5ceb46633c53e5, thread_id=5e426d1fbb5ceb46633c53e6, forum_id=882, _version_=1658230267529134080}, SolrDocument{post_id=5e35b34bbb5ceb3037217851, thread_id=5e35b34bbb5ceb3037217852, forum_id=882, _version_=1657355751639744512}]},debug={rawquerystring=*:*,querystring=*:*,parsedquery=+MatchAllDocsQuery(*:*),parsedquery_toString=+*:*,explain={5e1e8e6cbb5ceb431f491474={match=true,value=1.0,description=*:*},000000000000000008066383={match=true,value=1.0,description=*:*},5e35b349bb5ceb329a1c154f={match=true,value=1.0,description=*:*},5dedcde2bb5ceb2ec618151e={match=true,value=1.0,description=*:*},5dc0fc2bbb5ceb417f4b6723={match=true,value=1.0,description=*:*},5e36f20cbb5ceb329a1c1556={match=true,value=1.0,description=*:*},5e36f6b8bb5ceb329a1c1559={match=true,value=1.0,description=*:*},5e36f20fbb5ceb3037217859={match=true,value=1.0,description=*:*},5e426d1fbb5ceb46633c53e6={match=true,value=1.0,description=*:*},5e35b34bbb5ceb3037217852={match=true,value=1.0,description=*:*}},QParser=ExtendedDismaxQParser,altquerystring=null,boost_queries=null,parsed_boost_queries=[],boostfuncs=null,timing={time=1.0,prepare={time=0.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=0.0}},process={time=1.0,query={time=0.0},facet={time=0.0},facet_module={time=0.0},mlt={time=0.0},highlight={time=0.0},stats={time=0.0},expand={time=0.0},terms={time=0.0},spellcheck={time=0.0},debug={time=1.0}}}}}"}}},
    "timing":{
      "time":1.0,
      "prepare":{
        "time":0.0,
        "query":{
          "time":0.0},
        "facet":{
          "time":0.0},
        "facet_module":{
          "time":0.0},
        "mlt":{
          "time":0.0},
        "highlight":{
          "time":0.0},
        "stats":{
          "time":0.0},
        "expand":{
          "time":0.0},
        "terms":{
          "time":0.0},
        "spellcheck":{
          "time":0.0},
        "debug":{
          "time":0.0}},
      "process":{
        "time":1.0,
        "query":{
          "time":0.0},
        "facet":{
          "time":0.0},
        "facet_module":{
          "time":0.0},
        "mlt":{
          "time":0.0},
        "highlight":{
          "time":0.0},
        "stats":{
          "time":0.0},
        "expand":{
          "time":0.0},
        "terms":{
          "time":0.0},
        "spellcheck":{
          "time":0.0},
        "debug":{
          "time":1.0}}},
    "rawquerystring":"*:*",
    "querystring":"*:*",
    "parsedquery":"+MatchAllDocsQuery(*:*)",
    "parsedquery_toString":"+*:*",
    "QParser":"ExtendedDismaxQParser",
    "altquerystring":null,
    "boost_queries":null,
    "parsed_boost_queries":[],
    "boostfuncs":null,
    "explain":{
      "000000000000000008066383":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e1e8e6cbb5ceb431f491474":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e35b349bb5ceb329a1c154f":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e35b34bbb5ceb3037217852":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e36f20cbb5ceb329a1c1556":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e36f20fbb5ceb3037217859":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e36f6b8bb5ceb329a1c1559":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5dc0fc2bbb5ceb417f4b6723":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5dedcde2bb5ceb2ec618151e":{
        "match":true,
        "value":1.0,
        "description":"*:*"},
      "5e426d1fbb5ceb46633c53e6":{
        "match":true,
        "value":1.0,
        "description":"*:*"}}}}
</textarea>
					</div>
				</div>

				<div>
					<table class="table zebra">
						<thead>
							<tr>
								<th>Title</th>
								<th>Views</th>
								<th>Posts</th>
								<th>Share</th>
							</tr>
						</thead>
						<tbody> </tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>





</div></div></div></div></div></div></div></div></div><script>
	$(document).ready(function() {
		$('#showHideParams').prop('checked', '');
		$('#showHideParams').on('click', function(e) {
			if ($(this).prop('checked')) {
				$('.transitionForm').addClass('closedForm');
			} else {
				$('.transitionForm').removeClass('closedForm');
			}
		});
		$('.frm-delete').on('submit', function(e) {
			if (!confirm("Are you sure you want to delete?")) {
				e.preventDefault();
			}
		});
		$('#searchFilterForm').on('submit', function(e) {
			e.preventDefault();
			alert('ganti url');
		});

		$('#slb-tag-id').on('change', function(e){
			location.href = '/channelmanager/forum_mapping/' + $(this).val();
		});

		$('#forum_id').select2({
			ajax: {
			url: '/misc/get_community_dropdown/',
			dataType: 'json',
			delay: 250,
			data: function (params) {
				return {
					q: params.term // search term
				};
			},
			processResults: function (data) {
				// parse the results into the format expected by Select2.
				// since we are using custom formatting functions we do not need to
				// alter the remote JSON data
				return {
					results: data
				};
			},
			cache: false
		  },
		  minimumInputLength: 2
		});
	});
</script><footer id="site-footer" role="contentinfo"><div class="row"><div class="col grid-11"><div class="row"><div class="col grid-4"><div class="row"><div class="col grid-2"><h3>Navigation</h3><div class="bar10"><ul> <li><a href="/home">Home</a></li> <li><a href="/forum">Forum</a></li> <li><a href="/fjb">Jual Beli</a></li> <li><a href="/group">Groupee</a></li> <li><a href="http://www.kaskusradio.com" target="_blank">Radio</a></li> <li><a href="WAP_KASKUS_BETA_URL/contentmanager/phrase_list" target="_blank">Mobile site</a></li> <li><a href="http://archive.kaskus.co.id" target="_blank">Archive</a></li> </ul></div></div><div class="col grid-2"><h3>KASKUS Guide</h3><div class="bar10"><ul> <li><a href="http://support.kaskus.co.id" target="_blank">Help Center</a></li> <li><a href="http://support.kaskus.co.id/about/about_kaskus.html" target="_blank">About Us</a></li> <li><a href="http://advertise.kaskus.co.id/" target="_blank">Advertise With Us</a></li> <li><a href="http://cs.kaskus.co.id/ask/index/beta tester/916848" target="_blank">Contact Us</a></li> <li><a href="/about/jobs">Careers</a></li> <li><a href="/about/general_rules">General Rules</a></li> <li><a href="/about/terms_of_use">Term of Services</a></li> </ul></div></div></div></div><div class="col grid-2"><h3>Find Us</h3><div class="bar10"><ul> <li><a href="https://twitter.com/kaskus" target="_blank">Twitter</a></li> <li><a href="http://www.facebook.com/officialkaskus" target="_blank">Facebook</a></li> <li><a href="http://www.youtube.com/user/kaskusnetworks" target="_blank">Youtube</a></li> <li><a href="https://plus.google.com/+kaskus" target="_blank">Google+</a></li> </ul> <a href="/user/feedback" target="_blank" rel="tooltip" data-title="Gimana pendapat Agan tentang KASKUS baru? Komentar dan Laporkan Bug disini Gan!" data-content="Gimana pendapat Agan tentang KASKUS baru? Komentar dan Laporkan Bug disini Gan!" data-placement="top" style="display: block;position: absolute;bottom:40px;left:50%;margin-left:-85px;" data-original-title=""><img src="https://s.kaskus.id/themes_3.0/images/layout/feedback-label.png" alt="Give Feedback" style="display:block;"></a></div></div><div class="col grid-5"><h3 class="h-footer-disclaimer">Disclaimer</h3><div class="footer-disclaimer"><p>KASKUS is providing freedom of speech. By using KASKUS , you agree to the following conditions ; User expressly agrees that use of KASKUS is at the user's sole risk and it is not the risk of the owner or the webhost. User specifically acknowledges KASKUS is not liable for the defamatory, offensive or illegal conduct of other user or third-parties in cases including but not limited to any interactive communication on or through the site and that the risk from the foregoing, rests entirely with user(s).</p></div></div></div></div></div><div class="sec-footer"><div class="row"><div class="col grid-6"><small class="ncopy">Copyright © 1999–2020 Kaskus Networks All Right Reserved</small> <a id="back-to-top" href="#site-header">back to top</a> | <a href="/user/feedback" target="_blank">Feedback</a>
</div>
</div>
</div></footer><script type="text/javascript">
$(document).ready(function() {


    if ($('#div_hl_sd1').length > 0) {
	$('#div_hl_sd1').addClass('Mb(15px)');
     }
    if ($('#div_pl_sb1').length > 0) {
	$('#div_pl_sb1').addClass('Mb(15px)');
     }
    
    $('#menu-right #btn-whatsnew').hide();
    $('.kaskus-ads.postlist').parents('td').css('padding', '0'); 
    // $('#push_notification_radio_0').length && $('#push_notification_radio_0').prop('checked', true);
});

$(window).on("load", function (e) {
   if($('.sidebar-wrap').length > 0){
   
   setTimeout(function(){ 
      $('.sidebar-wrap').css('position','static');
      heightright = $('.sidebar-wrap > div:last-child').offset().top; 
}, 500);
}

    
});
</script><script type="text/javascript">
window.addEventListener('message', function(e) {
    try
    {
        var origin = e.origin || e.originalEvent.origin;
        if (origin === MICROSITE_URL)
        {
            var data = JSON.parse(e.data);
            if (data.location == 'get') {
                if (!navigator.geolocation) {
                    console.log('geolocation is not supported');
                    return;
                }
                navigator.permissions && navigator.permissions.query({name: 'geolocation'}).then(function(permission) {
                    var iframe_src = $('#iframe_' + data.div_id).get(0).contentWindow;
                    if(permission.state == 'denied')
                    {
                        var message = {
                            'status' : permission.state,
                            'longitude' : '',
                            'latitude' : '',
                            'type' : data.type
                        }
                        iframe_src.postMessage(myMessage.value, "*");
                    }
                    else
                    {
                        navigator.geolocation.getCurrentPosition(
                            function(position) {
                                var message = {
                                    'status' : permission.state,
                                    'longitude' : position.coords.longitude,
                                    'latitude' : position.coords.latitude,
                                    'type' : data.type
                                }
                                iframe_src.postMessage(message, "*");
                            },
                            function() {
                                var message = {
                                    'status' : 'error',
                                    'longitude' : '',
                                    'latitude' : '',
                                    'type' : data.type
                                }
                                iframe_src.postMessage(message, "*");
                                console.log('Unable to retrieve your location');
                            }
                        );
                    }
                });
            }
        }
    }
    catch(err)
    {}
}, false);
  $(document).ready(function () {
  $('<div id="floating-cendol"><a target="_blank" href="https://cendolin.kaskus.co.id/home/index/?utm_source=kaskus-forum&utm_medium=gelas-cendol-web"><div class="cendolSticky"></div></a></div>').appendTo('body');
});
</script><script>
$(document).ready(function() {
function tippyJS(text){
  tippy('.jsHeaderLogo', {
    animation: 'shift-away',
    duration: 300,
    content: '🙏 <span style="font-size:13px!important;">' + text + '</span> 🙏',
    arrow: true,
    theme: "light",
    size: "large"
  })
  tippy('.jsHeaderIcon', {
    animation: 'shift-away',
    duration: 300,
    content: '🙏 <span style="font-size:13px!important;">' + text + '</span> 🙏',
    arrow: true,
    theme: "light",
    size: "large"
  });
  
  $('<div id="floating-cendol"><a href="https://cendolin.kaskus.co.id"><div class="cendolSticky"></div></a></div>').appendTo('body');
  
}

function seasonalHeaderLogo(url, duration, text) {
  var booleanImgLogoLoaded = false;
  var imgLogoWidth;
  var imgLogoHeight;
  var imgLogo = new Image;
  imgLogo.src = url;
  imgLogo.onload = function() {
    imgLogoWidth = imgLogo.width;
    imgLogoHeight = imgLogo.height;
    booleanImgLogoLoaded = true;
  }

  var seasonalHeaderLooper = setInterval(seasonalHeaderChecker, 10);
  function seasonalHeaderChecker() {
    if (booleanImgLogoLoaded) {
      clearInterval(seasonalHeaderLooper);
      var css = "<style>@keyframes play2{100%{background-position:-" + imgLogoWidth + "px}}.jsHeaderLogo{animation:play2 "+ duration +"s steps(" + imgLogoWidth / 169 + ", end) infinite;background-size:initial;background-position:initial;height:" + imgLogoHeight + "px;transform:scale(1);width:169px;margin-right:10px;background-image:url("+ url +")}</style>";      
      $(css).appendTo("head");
    }
  }
  tippyJS(text);
}

function seasonalHeaderIcon(url, duration, text) {
  var booleanImgIconLoaded = false;
  var imgIconWidth;
  var imgIcon = new Image;
  imgIcon.src = url;
  imgIcon.onload = function() {
    imgIconWidth = imgIcon.width;
    booleanImgIconLoaded = true;
  }

  var seasonalHeaderLooper = setInterval(seasonalHeaderChecker, 10);
  function seasonalHeaderChecker() {
    if (booleanImgIconLoaded) {
      clearInterval(seasonalHeaderLooper);
      var css = "<style>@keyframes play{100%{background-position:-" + imgIconWidth + "px}}.jsHeaderIcon{animation:play "+ duration +"s steps(" + imgIconWidth / 35 + ", end) 5;background-size:initial;background-position:initial;height:35px;transform:scale(.9);width:35px;background-image:url("+ url +")}</style>";
      $(css).appendTo("head");
    }
  }
  tippyJS(text);
}

if(typeof tippy === "function") { seasonalHeaderLogo("https://s.kaskus.id/img/seasonal/april2020/header_fci5hffm9yt7.png", 2, 'Selamat Puasa!'); seasonalHeaderIcon("https://s.kaskus.id/img/seasonal/april2020/header_fci59qqx5m73.png", 2, 'Selamat Puasa!');
}

});
</script><script type="text/javascript">if(window.addEventListener){var kkeys=[],mantra="65,83,68,65,83,68,70";window.addEventListener("keydown",function(a){kkeys.push(a.keyCode);if(kkeys.toString().indexOf(mantra)>=0){$("html").addClass("mantra");}},true);}</script></body></html>