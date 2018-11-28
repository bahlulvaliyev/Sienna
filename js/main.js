$(document).ready(function () {
    $('.first-header').mousemove(function () { 
       $('.first-head-svg-2').slideDown(800);
       $('.first-head-svg-3').slideDown(900);
       $('.first-head-svg-4').slideDown(1200);
    });
    $('.first-section').mousemove(function () { 
        $('.first-head-svg-2').slideDown(800);
        $('.first-head-svg-3').fadeIn(800);
        $('.first-head-svg-4').fadeIn(1200);
     });
     $('.twice-section').mousemove(function () { 
        $('.first-head-svg-2').slideDown(800);
        $('.first-head-svg-3').fadeIn(800);
        $('.first-head-svg-4').fadeIn(1200);
     });
     $('.thrice-section').mousemove(function () { 
        
        $('.first-head-svg-3').fadeIn(800);
        $('.first-head-svg-4').fadeIn(1200);
     });
     $('.four-section').mousemove(function () { 
        $('.sec-hide-1').show(800);
        $('.sec-hide-2').show(800);
     });
     $('.five-section').mousemove(function () { 
        $('.sec-hide-1').show(850);
        $('.sec-hide-2').show(700);
        $('.sec-hide-3').show(800);
     });
     $('.six-section').mousemove(function () { 
        $('.sec-hide-1').show(900);
        $('.sec-hide-2').show(800);
        $('.sec-hide-3').show(700);
     });
     $('.first-main').mousemove(()=>{
         $('.frs-mn-mrg-lft-1').slideDown(700);
         $('.frs-mn-mrg-lft-2').slideDown(760);
         $('.frs-mn-mrg-lft-3').slideDown(730);
     })

     $('.twice-main').mousemove(()=>{
        $('.col-md-6').slideDown(700);
     });
    $('.thr-mn-1').on('click', ()=>{ 
        $('.thr-mn-1-p').slideToggle();
        $('.i-class').toggle();
        $('.i-hide1').toggle();
    });
    $('.thr-mn-2').on('click', ()=>{ 
        $('.thr-mn-2-p').slideToggle();
        $('.i-class-1').toggle();
        $('.i-hide2').toggle();
    });
    $('.thr-mn-3').on('click', ()=>{ 
        $('.thr-mn-3-p').slideToggle();
        $('.i-class-2').toggle();
        $('.i-hide3').toggle();
    });
    $('.thr-mn-4').on('click', ()=>{ 
        $('.thr-mn-4-p').slideToggle();
        $('.i-class-3').toggle();
        $('.i-hide4').toggle();
    });
});