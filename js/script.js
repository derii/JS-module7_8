$(function () {

  var $tabs = $('.menu-item-link');
  var $content = $('.tab-content');
  var $inputs = $('.input-field');
  var $tooltips = $('.show-tooltip');
  var $tipsBtn = $('.form-btn');

  $tabs.on('click', function (e) {
    var index = $tabs.index(this);
    e.preventDefault();

    $('.menu-item-link_active').removeClass('menu-item-link_active');
    $(this).addClass('menu-item-link_active');

    $content.removeClass('tab-content_active');
    $($content[index]).addClass('tab-content_active');
  });
  
//tooltips with animation
  $inputs.hover(function () {
    var index = $inputs.index(this);
    $($tooltips[index]).fadeIn(500);
  },
  function () {
    var index = $inputs.index(this);
    $($tooltips[index]).fadeOut(500);
  });

  $($tipsBtn).on('click', function (e) {
    e.preventDefault();
    $($tooltips).fadeIn(500);
  });

});