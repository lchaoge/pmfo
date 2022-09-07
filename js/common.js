//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
$(function () {
  $(window).scroll(function(){
      if ($(window).scrollTop()>100){
          $("#pmfo-to-top").fadeIn(500);
      }
      else
      {
          $("#pmfo-to-top").fadeOut(500);
      }
  });
  //当点击跳转链接后，回到页面顶部位置
  $("#pmfo-to-top").click(function(){
      $('body,html').animate({scrollTop:0},1000);
      return false;
  });

  
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    var wow = new WOW({
      boxClass: 'wow', // ‘wow’需要执行动画的元素的 class
      animateClass: 'animated', // ‘animated’animation.css 动画的 class
      offset: 0, // 距离可视区域多少开始执行动画
      mobile: true, // 是否在移动设备上执行动画
      live: true // 异步加载的内容是否有效
    });
    wow.init();
  };
});