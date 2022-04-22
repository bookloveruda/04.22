'use strict';



// window.onscroll = scrollFunction;

// function scrollFunction(){
//   if(document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
//     document.getElementById("menu_white").style.color="#000";
//   }else{
//     document.getElementById("menu_white").style.color="#fff";
//   }
// };



////////////////////////////////////////////////////////
// span.topArrow  (TOP버튼(누르면 최상단으로 가는..))
// .scrollTop()
// fadeIn / fadeOut / animate


// $('window') // -> 콘솔에 적으면 아래와 같이 나옴
// // S.fn.init [prevObject: S.fn.init(1)]

// $('window').scrollTop() // -> 콘솔에 적으면 아래와 같이 나옴
// // undefined

// // 스크롤 높이 = scrollTop

// 작은따옴표('') 생략 가능
$(window).on('scroll',function(e){

  // 스크롤 Top을 알 수 있따!!!><
  const sTop = $(window).scrollTop();
  console.log(sTop);

  // Q1 : = 
  // 그럼 이걸로 어떤 지점을 넘어서면 
  // .topArrow(누르면 최상단으로 가는..Top버튼)이 나타나도록 할 수 있다.
  // 제이쿼리로 구현해봐라

  // A1 : = 
  if(sTop>300){
    // $('.topArrow').show();
    // $('.topArrow').show(200);
    // 버튼 나타나면 콘솔에 'dd'나타나도록.. 이런것도 있다..그냥..
    // $('.topArrow').show(200,function(){
    //   console.log('dd');
    // });
    
    // 그 자리에서 우아하게 사악 나타남
    $('.topArrow').fadeIn(200);
  }else{
    // $('.topArrow').hide();
    $('.topArrow').fadeOut(200);
  }
});