$(document).ready(function(){

    $('.noDebt, .tipsNoDebt').hide(); //to hide noDebt class

    // This function to swipe right if user choose YES
    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Yes!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

    // This is function if user swipe left to choose NO
   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">No!</div>');

    // To give the answer at the first option card if user answer all questions 
    // with NO (swipe left)
    if ( $(this).is(':first-child') ) {
     $('.buddy:nth-child(0)').removeClass ('rotate-left rotate-right').fadeIn(300); // child has to be 0 otherwise if its 1 it will still show the previous pictures
      $('.noDebt, .tipsNoDebt').show();
      $('.tips, .total_income, .total_debt, .house').removeClass();
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeOut(400);
    } 

    // This is if user say YES to first answer but NO to others. 
    // It will give the alert pop-up at the last option card if user answer 
    // all questions with NO (swipe left)
    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Your choose NO to this question, you need to talk to Lloyd! He will help you. No worries...');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});