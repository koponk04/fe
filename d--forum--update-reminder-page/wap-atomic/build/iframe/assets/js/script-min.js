$(document).ready(function(){var s;if($(".jsMore").click(function(){var s=$(".c-episodes__list").length;$(this).siblings(".c-episodes__container").toggleClass("jsReveal"),$(this).toggleClass("Clicked"),$(this).hasClass("Clicked")?($(this).find(".jsLessText").show(),$(this).find(".jsMoreText").hide(),$(".jsEpList").find(".hide").addClass("reveal"),s<3&&$(".jsReveal").css("height","auto")):($(this).find(".jsLessText").hide(),$(this).find(".jsMoreText").show(),$(".jsEpList").find(".hide.reveal").removeClass("reveal"),s<3&&$(".jsWapCont").css("height","0"))}),$(".jsBtnShare").click(function(s){s.stopPropagation(),$(".jsContentShare").toggleClass("is-show")}),$(document).on("click",function(s){$(s.target).closest(".jsContentShare").length||$(".jsContentShare").removeClass("is-show")}),$(".c-episodes__list").length<3&&$(".jsEpList").css("height","auto"),$(document).on("click",".jsPodcastWidgetButtonExpand",function(){$(this).find("i").toggleClass("fa-chevron-down fa-chevron-up"),$(".jsPodcastWidgetEpisodeList").slideToggle()}),0<$(".jsPodcastWidget").length){var i=$(".jsPodcastWidgetDuration").outerWidth();if($(".jsPodcastWidget").hasClass("is-web"))var e=$(".jsPodcastWidget").outerWidth()-45-35-30;else if($(".jsPodcastWidget").hasClass("is-wap"))var e=$(".jsPodcastWidget").outerWidth()-40-40;$(".jsPodcastWidgetFlex").css("width",e+"px");var t=$(".jsAudioTitle")[0].scrollWidth,o;(o=$(".jsAudioContainer").width())<t&&($(".jsAudioContainer").addClass("is-running"),$(".jsAudioLink").clone().prependTo(".jsAudioTitle")),alert("woy");var d=e-i;$(".jsPodcastWidgetTitleEllipsis").css("width",d-5+"px")}if(0<$(".l-wrap").find(".c-inpost").length&&0<$(".jsAudioTitle").lenth){var t=$(".jsAudioTitle")[0].scrollWidth,o;(o=$(".jsAudioWrap").width())<t&&($(".jsAudioWrap").addClass("marquee"),$(".jsAudioLink").clone().prependTo(".jsAudioTitle"))}});