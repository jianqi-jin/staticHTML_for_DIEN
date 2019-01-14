
$(document).ready(function(){
	$('.ft-carousel').FtCarousel({
		index:1,
		auto:true
	});




  $("#btn_school").hover(function(){
      $(".title_box_info_ch").attr('style','display:block');
      
      $(".title_box_info").hover(function(){
      	$(".title_box_info_ch").attr('style','display:block');
      	
      },function(){
      	$(".title_box_info_ch").attr('style','display:none');
      })
  },function(){
  	$(".title_box_info_ch").css('display','none');
  });
});




