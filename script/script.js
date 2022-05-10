(function($, window){
  var Orange = {
      init:function(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.goTop();
      },

      header:function(){
        const mainBtn = $('.main-btn');
        const sub = $('.sub');
        const nav = $('#nav');
        const subBtn = $('.sub-btn');
        const subSub = $('.subSub');

      mainBtn.on({
        mouseenter(){
          const $this = $(this);

          sub.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
        },

        focusin(){
          const $this = $(this);

          sub.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
          }
        });

      nav.on({
        mouseleave(){
          sub.stop().fadeOut(300);
          subSub.stop().fadeOut(300)
        }
      });

      subBtn.on({
        mouseenter(){
          const $this = $(this);

          subSub.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
        },
        focusin(){
          const $this = $(this);

          subSub.stop().fadeOut(0);
          $this.next().stop().fadeIn(300);
        }
      });
    },

    section1:function(){
      var cnt = 0;
      var setId = null;
      const slideWrap = $('.slide-wrap');
      let winW = $(window).innerWidth();

      resizefn();
      function resizefn(){
        return winW = $(window).innerWidth();

      }
      $(window).resize(function(){
        resizefn();
      });

      function mainSlide(){
        slideWrap.stop().animate({left:-100*cnt + '%'}, 1000, 'easeInOutExpo',function(){
          if(cnt>4){cnt=0}
        slideWrap.stop().animate({left:-100*cnt + '%'}, 0);
        });
      }

      function nextCount(){
        cnt++;
        mainSlide();
      }

      function autoTimer(){
        setId = setInterval(nextCount, 3000);
      }

      autoTimer();
    },
  
    section2:function(){
     const goDownBtn = $('.go-down-btn');
     goDownBtn.on({
       click:function(){
         $('html, body').stop().animate({scrollTop:850},600);
       }
     });
    },

    section3:function(){
      var cnt = 0;
      const slide2Wrap = $('.slide2-view');

      function mainSlide(){
        slide2Wrap.stop().animate({left:-321*cnt}, 600,'easeInOutExpo', function(){
          if(cnt>6){cnt=0}
        slide2Wrap.stop().animate({left:-321*cnt}, 0);
        
          });
      }

      function nextCount(){
        cnt++;
        mainSlide();
      }

      setInterval(nextCount, 4000);

    //색 변경 이벤트
      $(window).scroll(function(){
      if($(window).scrollTop() < 599 ){
        $('#section3').removeClass('addColor');
      }
      if($(window).scrollTop() > 1500 ){
        $('#section3').removeClass('addColor');
      }
      if($(window).scrollTop() > 600 ){
        $('#section3').addClass('addColor');
      }

      if($(window).scrollTop()  < 599 ){
        $('#section1').removeClass('addColor');
      }
      if($(window).scrollTop() > 600 ){
        $('#section1').addClass('addColor');
      }
    
      if($(window).scrollTop()  < 599 ){
        $('#section2').removeClass('addColor');
      }
      if($(window).scrollTop() > 600 ){
        $('#section2').addClass('addColor');
      }
      
      if($(window).scrollTop()  < 599 ){
        $('#section4').removeClass('addColor');
      }
      if($(window).scrollTop() > 600 ){
        $('#section4').addClass('addColor');
      }
      if($(window).scrollTop() > 1500 ){
        $('#section4').removeClass('addColor');
      }

      if($(window).scrollTop()  < 599 ){
        $('#header').removeClass('addColor');
      }
      if($(window).scrollTop() > 600 ){
        $('#header').addClass('addColor');
      }
      if($(window).scrollTop() > 1500 ){
        $('#header').removeClass('addColor');
      }
      });
    },
    goTop:function(){
      const goTop = $('.go-top');
    
      goTop.stop().fadeOut(1000);

        $(window).scroll(function(){
            if( $(window).scrollTop() >= 100 ){
              goTop.stop().fadeIn(1000);
            }
            else{
              goTop.stop().fadeOut(1000);
            }
        });
    }
}
  
Orange.init();
})(jQuery,window);