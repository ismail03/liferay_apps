// Global Error message start
function globalErr() {
    if ($('.global-error').is(':visible')) {
        $('.application-section header').css({
            top: '44px'
        });
        $('.application-section').css({
            paddingTop: '130px'
        });
    } else {
        $('.application-section header').css({
            top: '0px'
        });
        $('.application-section').css({
            paddingTop: '100px'
        });
    }
}
// Global Error message end

// fluid window full width section function start
function outContainerWidth() {
    var winheg = $(window).height();
    var winWid = $(window).width();
    var conWid = $('.container').innerWidth();
    var middleWid = $('.blog-detail-wapper .middle-content').innerWidth();
    var calWids = (winWid - conWid) / 2;
    var halfWid = (conWid - middleWid) /2;
    var totWid = calWids + halfWid;
    var footerHeight = $('footer').innerHeight();
    var headerHeight = $('header').innerHeight();
    $('.fluid-window').css("margin-left", -(totWid));
    $('.fluid-window').css("margin-right", -(totWid));
    $('.content-move').css("margin-left", -(halfWid));
    $('.content-move').css("margin-right", -(halfWid));
    // console.log(calWids);
    // validation wrapper
    $('.validation-wrapper').css({
        minHeight: winheg
    });

    $('.blockquote-banner').css({
        minHeight: winheg - headerHeight
    });
}
// fluid window full width section function end

// authorname show only on mobile view function start
function authorname() {
    var winWidth = $(window).width();
    if (winWidth < 479) {
        $('.authorname-dashboard').insertBefore($('.breadcrumb'));
    }
}
// authorname show only on mobile view function end

// Email ID  validation function start
function emailVal(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
// Email ID  validation function end

$(function() {
    // Banner cover image call javascript function start
    $('.cover-image').each(function() {
        var imgUrl = $(this).find('.image-hide').attr('src');
        $(this).css('background-image', 'url(' + imgUrl + ')');
    });
    // Banner cover image call javascript function end

    // Match Height start
    $('.product-block, .service-block .grid-4, .howItWork-blk .grid-4, .product-blk h3, .equal-height, .payment-mode ul li, .dashboard-menu ul li').matchHeight();
    $('.eqc').matchHeight();
    $('.latest-post .grid-4 h5').matchHeight();
    $('.latest-news .grid-4 p').matchHeight();
    // Match Height end

    // slider installation start
    $('.product-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // slider installation end

    /* Generic Slide */
    $('.genericslide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="trianglearrow slick-prev"><img src="images/triangleRight.png"/></div>',
        nextArrow: '<div class="trianglearrow slick-next"><img src="images/triangleLeft.png"/></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // FAQ accordion function start
    $('.accordion-block h5').on('click', function() {
        if ($(this).hasClass('active') == false) {
            $('.accordion-block h5').removeClass('active');
            $('.accordion-content').slideUp(500);
            $(this).addClass('active');
            $(this).next('.accordion-content').slideDown(500);
        } else {
            $('.accordion-block h5').removeClass('active');
            $('.accordion-content').slideUp('fast');
        }
    });
    // FAQ accordion function end

    /*tab-1*/
    // Borrow calculation function start
    function sliderBrResult(brCurrentValue) {
        var brCurrentValue = $("#slider-range").slider("option", "value"),
            monthlyValue = Math.abs((brCurrentValue * 10) / 100).toFixed(2),
            totalRepayable = (brCurrentValue * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        $('#monthly_payment span').html(monthlyValue);
        $('#total_payable span').html(totalRepayable);
    }
    // Borrow calculation function end

    // slider range start
    $("#slider-range").slider({
        range: "min",
        value: 600,
        min: 200,
        max: 850,
        slide: function(event, ui) {
            sliderBrResult(ui.value);
            $("#borrow_field").val(ui.value);
        },
        change: function(event, ui) {
            sliderBrResult(ui.value);
        }
    });
    // slider range end

    // borrow field calculation start
    $("#borrow_field").change(function() {
        var brCurrentValue = $(this).val();
        if (brCurrentValue > 850) {
            $(this).val(850);
        } else if (brCurrentValue < 200) {
            $(this).val(200);
        } else {
            $("#slider-range").slider("value", brCurrentValue);
        }
    });
    // borrow field calculation end

    // slider range function start
    $('#brMinus').click(function(e) {
        var brCurrentValue = $("#slider-range").slider('option', 'value');
        $("#slider-range").slider("value", brCurrentValue - 50);
        $("#borrow_field").val(brCurrentValue);
    });
    $('#brPlus').click(function(e) {
        var brCurrentValue = $("#slider-range").slider('option', 'value');
        $("#slider-range").slider("value", brCurrentValue + 50);
        $("#borrow_field").val(brCurrentValue);
    });
    // slider range function end

    /* Month Calculation start */
    /* commented by ismail $('#month_field').html('<span>5</span> <strong>Months</strong>');*/

    function sliderMonthResult(currentValue) {
        months = Math.floor(value / 31);
        days = value % 31 /* value modulus of 31 gives remainder */

        if (months > 5) {
            /* month is found */
            monthString = 'months';
        } else {
            /* no months yet */
            monthString = 'months';
        }

        if (days > 1 && days != 0) {
            /* more than 1 day found */
            dayString = 'months';
        } else {
            /* only 1 day found */
            dayString = 'months';
        }
        /* format output */
        if (months == 0) {
            /* no months shown */
            sliderVal = '<span>' + days + '</span>' + ' <strong>' + dayString + '</strong>';
        } else {
            if (days == 0) {
                /* no days shown */
                sliderVal = '<span>' + months + '</span>' + ' <strong>' + monthString + '</strong>';
            } else {
                sliderVal = '<span>' + months + '</span>' + ' <strong>' + monthString + '</strong>';
            }
        }
        /* update the value */
        $('#month_field').html(sliderVal);
    }
    /* Month Calculation end */

    /*slider month choice loan start*/
    $("#slider-month").slider({
        animate: true,
        range: "min",
        value: 160,
        min: 160,
        max: 300,
        /* 9 months */
        sliderVal: '5 Months',
        step: 1,
        slide: function(event, ui) {
            value = ui.value;
            sliderMonthResult();
        },
        change: function(event, ui) {
            value = ui.value;
            sliderMonthResult();
        }
    });
    /*slider month choice loan end*/

    /* Increase month choice loan start*/
    $('#mnMinus').click(function(e) {
        var brCurrentValue = $("#slider-month").slider('option', 'value');
        $("#slider-month").slider("value", brCurrentValue - 2);
    });

    /* Decrease month choice loan start*/
    $('#mnPlus').click(function(e) {
        var brCurrentValue = $("#slider-month").slider('option', 'value');
        $("#slider-month").slider("value", brCurrentValue + 2);
    });

    /*tab-2*/
    /* Borrow calculation tab-2*/
    function sliderBrResult1(brCurrentValue) {
        var brCurrentValue1 = $("#slider-range1").slider("option", "value"),
            monthlyValue1 = Math.abs((brCurrentValue1 * 10) / 100).toFixed(2),
            totalRepayable1 = (brCurrentValue1 * 1.5).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        $('#monthly_payment1 span').html(monthlyValue1);
        $('#total_payable1 span').html(totalRepayable1);
    }
    /* Borrow calculation */

    // slider range start tab-2
    $("#slider-range1").slider({
        range: "min",
        value: 1500,
        min: 1000,
        max: 5000,
        slide: function(event, ui) {
            sliderBrResult1(ui.value);
            $("#borrow_field1").val(ui.value);
        },
        change: function(event, ui) {
            sliderBrResult1(ui.value);
        }
    });
    // slider range end tab-2

    // borrow field calculation start tab-2
    $("#borrow_field1").change(function() {
        var brCurrentValue1 = $(this).val();
        if (brCurrentValue1 > 5000) {
            $(this).val(5000);
        } else if (brCurrentValue1 < 1000) {
            $(this).val(1000);
        } else {
            $("#slider-range1").slider("value", brCurrentValue1);
        }
    });
    // borrow field calculation end tab-2

    // slider range function start tab-2
    $('#brMinus1').click(function(e) {
        var brCurrentValue1 = $("#slider-range1").slider('option', 'value');
        $("#slider-range1").slider("value", brCurrentValue1 - 50);
        $("#borrow_field1").val(brCurrentValue1);
    });

    $('#brPlus1').click(function(e) {
        var brCurrentValue1 = $("#slider-range1").slider('option', 'value');
        $("#slider-range1").slider("value", brCurrentValue1 + 50);
        $("#borrow_field1").val(brCurrentValue1);
    });
    // slider range function end tab-2 

    /* Month Calculation tab-2 start*/
  /* commented by ismail  $('#month_field1').html('<span>5</span> <strong>Months</strong>');*/

    function sliderMonthResult1(currentValue) {
        months = Math.floor(value / 31);
        days = value % 31 /* value modulus of 31 gives remainder */

        if (months > 1) {
            /* month is found */
            monthString = 'months';
        } else {
            /* no months yet */
            monthString = 'months';
        }

        if (days > 1 && days != 0) {
            /* more than 1 day found */
            dayString = 'months';
        } else {
            /* only 1 day found */
            dayString = 'months';
        }
        /* format output */
        if (months == 0) {
            /* no months shown */
            sliderVal = '<span>' + days + '</span>' + ' <strong>' + dayString + '</strong>';
        } else {
            if (days == 0) {
                /* no days shown */
                sliderVal = '<span>' + months + '</span>' + ' <strong>' + monthString + '</strong>';
            } else {
                sliderVal = '<span>' + months + '</span>' + ' <strong>' + monthString + '</strong>';
            }
        }
        /* update the value */
        $('#month_field1').html(sliderVal);
    }
    /* Month Calculation tab-2 end*/

    /*slider month choice loan start tab-2*/
    $("#slider-month1").slider({
        animate: true,
        range: "min",
        value: 160,
        min: 160,
        max: 1140,
        /* 36 months */
        sliderVal: '5 Months',
        step: 1,
        slide: function(event, ui) {
            value = ui.value;
            sliderMonthResult1();
        },
        change: function(event, ui) {
            value = ui.value;
            sliderMonthResult1();
        }
    });
    /*slider month choice loan end tab-2*/

    /* Increase month start tab-2*/
    $('#mnMinus1').click(function(e) {
        var brCurrentValue1 = $("#slider-month1").slider('option', 'value');
        $("#slider-month1").slider("value", brCurrentValue1 - 2);
    });
    /* Increase month end tab-2*/

    /* Decrease month start tab-2*/
    $('#mnPlus1').click(function(e) {
        var brCurrentValue1 = $("#slider-month1").slider('option', 'value');
        $("#slider-month1").slider("value", brCurrentValue1 + 2);
    });
    /* Decrease month end tab-2*/

    /* Step carousel start*/
    var currentIndex = $('#step-carousel ul.slides li.flex-active-slide').index();
    $('#step-carousel').flexslider({
        animation: "slide",
        slideshow: false,
        animationLoop: false,
        itemWidth: 205,
        directionNav: false,
        controlNav: false,
        startAt: currentIndex
    });
    /* Step carousel start*/

    /*jquery ui selectbox placeholder start*/
    $.widget('app.selectmenu', $.ui.selectmenu, {
        _drawButton: function() {
            this._super();
            var selected = this.element.find('[selected]').length,
                placeholder = this.options.placeholder;
            if (!selected && placeholder) {
                this.buttonText.text(placeholder);
            }
        }
    });
    /*jquery ui selectbox placeholder end*/

    /*jquery ui selectbox common start*/
    $('.select-drop-down').each(function() {
        var $placeholder = $(this).data('placeholder');
        $(this).selectmenu({
            placeholder: $placeholder
        });
    });
    /*jquery ui selectbox common end*/

    /*Application page drop down start*/
    $("#purpose-of").selectmenu({
        change: function(event, ui) {
            if (!$(this).parent('.drop-down').hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent('.drop-down').addClass('active');
            }

            if ($('#purpose-of option:selected').val() != 0) {
                $('.purpose-of-row').find('.error-message').hide();
                $('.purpose-of-row').find('.form-inner-field').removeClass('addRed');
            }
        }
    });

    $('#purpose-of').on('selectmenuchange', function(e, ui) {
        if (ui.item.value == "Other") {
            $('#others').slideDown();
            $('.form-first-row').slideUp();
        } else {
            $('#others').slideUp();
            $('.form-first-row').slideDown(function() {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 125
                }, 1500);
            });
        }
    });


    $('#others').change(function() {
        if ($(this).val() == '') {
            $('.form-first-row').slideDown(function() {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 125
                }, 1500);
            });
        } else {
            $('.form-first-row').slideUp(function() {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);
            });
        }
    });

    $('#apply-valid').on('click', function(){
        $('#valid-address').fadeIn();
        $('.valid-preloader').delay(500).fadeOut();
        $('#valid-address .alert-message').delay(500).animate({opacity:1});
    });


    $("#title-gender").selectmenu({
        change: function(event, ui) {
            if (!$(this).parent('.drop-down').hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent('.drop-down').addClass('active');
            }

            if ($('#title-gender option:selected').val() != 0) {
                $('.title-gender-row').find('.error-message').hide();
                $('.title-gender-row').find('.form-inner-field').removeClass('addRed');
            }
        }
    });

    $('#marital-status').selectmenu({
        change: function(event, ui) {
            
            if (!$(this).parent('.drop-down').hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent('.drop-down').addClass('active');
            }

            if ($('#marital-status option:selected').val() != 0) {
                $('.marital-status-row').find('.error-message').hide();
                $('.marital-status-row').find('.form-inner-field').removeClass('addRed');
                $('.marital-status-row').find('.form-inner-field').removeClass('redRow');
            }
        }
    });

    $('#squestion').selectmenu({
        change: function() {
            if (!$(this).parent().hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent().addClass('active');
            }

            if ($('#squestion option:selected').val() != 0) {
                $('.squestionrow').find('.error-message').hide();
                $('.squestionrow').find('.form-inner-field').removeClass('addRed');
                $('.squestionrow').find('.form-inner-field').removeClass('redRow');
            }
        }
    });

    /*Application page drop down end*/

    // 28 day buy back
    // 28 day buy back drop down start

    $("#personal-gender").selectmenu({
        change: function(event, ui) {
            if (!$(this).parent('.drop-down').hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent('.drop-down').addClass('active');
            }

            if ($('#personal-gender option:selected').val() != 0) {
                $('.personal-gender').find('.error-message').hide();
                $('.personal-gender').find('.form-inner-field').removeClass('addRed');
            }
        }
    });

    $("#personal-type").selectmenu({
        change: function(event, ui) {
            if (!$(this).parent('.drop-down').hasClass('active')) {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parent('.drop-down').addClass('active');
            }

            if ($('#personal-type option:selected').val() != 0) {
                $('.personal-type').find('.error-message').hide();
                $('.personal-type').find('.form-inner-field').removeClass('addRed');
            }
        }
    });

    // 28 day buy back drop down end

    /*28 day buy back radio button start*/
    $('.carat-button').on('click', function() {
        if ($(this).is(':checked')) {
            $(this).parents('.form-row').addClass('remove-check');
            // $(this).parents('.form-row').find('.text-box').attr('disabled', true);
            $(this).parents('.form-row').find('.text-box').val('');
        }
    });

    $('#carat').on('keyup', function () {
        $(this).parents('.form-row').find('.radio input').prop( "checked", false );
        $(this).parents('.form-row').find('.radio label').removeClass('ui-state-active');
    });

    $('#weight').on('keyup', function () {
        $(this).parents('.form-row').find('.radio input').prop( "checked", false );
        $(this).parents('.form-row').find('.radio label').removeClass('ui-state-active');
    });
    /*28 day buy back radio button start*/

    // 28 day buy end

    // radio and checkbox button initialization start
    $('.radiobutton').buttonset();
    $(".checkBox").buttonset();
    // radio and checkbox button initialization end

    /* Testimonial slider start*/
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-author'
    });

    $('.testimonial-author').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonial-slider',
        dots: false,
        centerMode: true,
        centerPadding: 0,
        responsive: [{
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }]
    });

    /* Testimonial slider blog*/
    $('.testimonial-wrap').slick({
        arrows: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        autoplay: true
    });

    /* Testimonial slider end*/

    /*video trigger button start*/
    /*video*/
    var videoUrl = $('.video-frame iframe').attr('src');
    $('#playvideo').on('click', function(){
        $('.video-container').fadeOut();
        $('.video-frame iframe').attr('src',videoUrl+'?autoplay=1');
    });
    
    $('.video-close').on('click', function(){
        $('.video-frame').fadeOut();
        $('.video-container').fadeIn();
        $('.video-frame iframe').attr('src',videoUrl+'?autoplay=0');
    });

    /*video trigger button start*/

    // $('.banner-patch .location-trigger').on('click', function() {
    //     $(this).parents('.row-blk').find('.offerPercent').hide();
    //     $(this).parents('.row-blk').find('.txtBox-full').show();
    // });

    /*choice loan tab start*/

    $('.tab-header li:first-child').addClass('active');
    $('.tab-section .tab-content-blk:first').show();
    $('.tab-header ul li').click(function(event) {
        if ($(this).hasClass('active')) return false;
        var name = $(this).attr('class');
        var $visible = $('.tab-section .tab-content-blk:visible');
        $('.tab-header ul li').removeClass('active');
        $(this).addClass('active');
        if ($visible.length == 0) showContent(name);
        else $visible.fadeOut(500, function() {
            showContent(name);
        });
    });

    function showContent(name) {
        $("#" + name).fadeIn(500);
    }

    /*home page input trigger start*/
    $('#tab-select').on('click', function() {
        var $borrowValue = $('#borrow-amount').val();
        if ($borrowValue <= 850) {
            localStorage.setItem('currentTabName', 'tab-1');
        } else {
            // console.log('less than 800');
            localStorage.setItem('currentTabName', 'tab-2');
        }
        window.location.href = 'choice-loan?borrow='+$borrowValue+','+$('#borrow-month').val();
    });

    var getCurrentTab = localStorage.getItem('currentTabName');
    if (getCurrentTab !== null) {
        $('.tab-header ul li').removeClass('active');
        $('.tab-section .tab-content-blk:first').hide();
        $('.' + getCurrentTab).addClass('active');
        $('#' + getCurrentTab).fadeIn(500);
    }
    /*home page input trigger end*/
    /*choice loan tab end*/

    /* mobile range slider tab-1 start */
    $(document).on('click', '#set_range .slider-tab a', function() {
        $('html, body').animate({
            scrollTop: $('#quote_glance').offset().top - 52
        }, 800);
        var slider_attr = $(this).attr('href');
        if (!$(this).hasClass('active')) {
            $('#set_range .slider-tab a').removeClass('active').addClass('open-state');
            $('#set_range .sliderRowWrap').hide();
            $(this).addClass('active');
            $(slider_attr).fadeIn(1000);
        } else {
            $('#set_range .slider-tab a').removeClass('active open-state');
            $('#set_range .sliderRowWrap').hide();
        }
        return false;
    });
    /* mobile range slider tab-1 end */

    /* mobile range slider tab-2 start */
    $(document).on('click', '#set_range1 .slider-tab a', function() {
        $('html, body').animate({
            scrollTop: $('#quote_glance1').offset().top - 52
        }, 800);
        var slider_attr = $(this).attr('href');
        if (!$(this).hasClass('active')) {
            $('#set_range1 .slider-tab a').removeClass('active').addClass('open-state');
            $('#set_range1 .sliderRowWrap').hide();
            $(this).addClass('active');
            $(slider_attr).fadeIn(1000);
        } else {
            $('#set_range1 .slider-tab a').removeClass('active open-state');
            $('#set_range1 .sliderRowWrap').hide();
        }
        return false;
    });
    /* mobile range slider tab-2 end */

    /* Mobile choice loan tab-1 */
    $('a.quote-tab-1').click(function(event) {
        event.preventDefault();
        $($(this).attr('href')).addClass('active-state');
        $('html').addClass('body-hidden');
        $('#set_range').addClass('glance-open');
        $('#brSlider').addClass('current');
    });
    $('a#galnce-close').click(function(event) {
        event.preventDefault();
        $('#glance-table').removeClass('active-state');
        $('html').removeClass('body-hidden');
        $('#set_range').removeClass('glance-open');
        $('#brSlider').removeClass('current');
        $('#rep-example').slideUp();
    });
    $('a.rep-ex-tab-1').click(function(event) {
        event.preventDefault();
        $('#rep-example').slideDown();
    });
    $('#rep-close').click(function(event) {
        event.preventDefault();
        $('#rep-example').slideUp();
    });
    /* Mobile choice loan tab-1 end*/

    // tab-2
    /* Mobile choice loan tab-2 */
    $('a.quote-tab-2').click(function(event) {
        event.preventDefault();
        $($(this).attr('href')).addClass('active-state');
        $('html').addClass('body-hidden');
        $('#set_range1').addClass('glance-open');
        $('#brSlider1').addClass('current');
    });
    $('a#galnce-close1').click(function(event) {
        event.preventDefault();
        $('#glance-table1').removeClass('active-state');
        $('html').removeClass('body-hidden');
        $('#set_range1').removeClass('glance-open');
        $('#brSlider1').removeClass('current');
        $('#rep-example1').slideUp();
    });
    $('a.rep-ex-tab-2').click(function(event) {
        event.preventDefault();
        $('#rep-example1').slideDown();
    });
    $('#rep-close1').click(function(event) {
        event.preventDefault();
        $('#rep-example1').slideUp();
    });
    /* Mobile choice loan tab-2 end */

    /*file upload start*/
    $('#fileupload').customFile();
    $('.file-upload-input').addClass('text-box').attr('placeholder', 'Upload a photo');
    $('.file-upload-button').addClass('btn-form');
    /*file upload end*/

    //side bar our-products start
    $('.our-products > ul > li > a').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.our-products ul li a').removeClass('active');
            $('.slide-content').slideUp();
            $(this).addClass('active');
            $(this).parent().find('.slide-content').slideDown();
        } else {
            $('.our-products ul li a').removeClass('active');
            $('.slide-content').slideUp();
        }
        return false;
    });
    //side bar our-products end

    /*common validation start*/
    /* numeric value */
    $('.number').keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    /* alphabets value */
    $('.alphabetonly').keypress(function(e) {
        if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123) || event.keyCode == 8 || event.keyCode == 32) {
            return true;
        } else {
            return false;
        }
    });
    /*common validation end*/

    /*hero banner desc start*/
    var bannerPatchHeg = $('.banner-tool').innerHeight();
    var bantxt = $('.banner-brief').height();
    var totalHe = bannerPatchHeg + bantxt;
    $('.banner-brief').css({
        marginTop: -(totalHe / 2)
    });
    /*hero banner desc end*/

    /*scroll-button start*/
    $('.scroll-button').click(function(event) {
        event.preventDefault();
        var headHeg = $('header').innerHeight();
        $('html, body').animate({
            scrollTop: $('#personal-info').offset().top - headHeg
        }, 1000);
    });
    /*scroll-button end*/

    /*address location finder*/
    $('#addressbutton').attr('disabled', true);
    $('#findAddress').keyup(function() {
        if ($(this).val().length != 0) {
            $('#addressbutton').attr('disabled', false);
        } else {
            $('#addressbutton').attr('disabled', true);
        }
    });

    $('#postcode').keyup(function() {
        if ($(this).val().length != 0) {
            $('#addressbutton').attr('disabled', false);
        } else {
            $('#addressbutton').attr('disabled', true);
        }
    });

    $('#address-list').niceScroll('#address-list-inner', {
        cursorborder: "none",
        cursorcolor: "#e50647",
        boxzoom: false
    });

    $('#addressbutton').on('click', function() {
        $('.preloader').fadeIn(500, function() {
            $(this).fadeOut(500, function() {
                $('#choose-address').fadeIn(500);
            });
        });
    });

    $('#confirmbutton').attr('disabled', true);
    $('#address-list-inner li').bind('click', function(e) {
        $('#address-list-inner li').removeClass('selected');
        $(this).addClass('selected');
        $('#confirmbutton').removeAttr('disabled');
    });

    $('#confirmbutton').on('click', function() {
        $('#choosed-address').html('');
        $('#choose-address').fadeOut(function() {
            var homeNo = $('#address-list-inner .selected .door-number').text();
            var streetname = $('#address-list-inner .selected .street-name').text();
            var countryName = $('#address-list-inner .selected .countryName').text();
            $('#choosed-address').html(homeNo+'<br />'+streetname+'<br />'+countryName);
            // $('input#housenumber').val(homeNo);
            // $('input#street').val(streetname);
            // $('input#county').val(countryName);

        });
    });

    $('#confirmbutton').on('click', function() {
        $('#housenumber, #street, #county').parents('.form-row').append('<i class="fa fa-check"></i>');
        $('#housenumber, #street, #county').parents('.form-inner-field').removeClass('addRed');
        $('#housenumber, #street, #county').parents('.form-inner-field').removeClass('redRow');
        $('#housenumber, #street, #county').parents('.form-row').find('.error-message').hide();
    });

    /*address location finder end*/

    // review page
    $('.loan-content-box:first').slideDown();
    $('.loan-offer').on('click', function(){
        if ($(this).is(':checked')){
            $(this).parents('.repay-next-div').find('.loan-content-box').slideUp(500, function(){
                 $(this).parents('.repay-next-div').find('.repay-title').append('<span class="add-check"></span>');
            });
            $(this).parents('.repay-next-div').next('.repay-next-div').find('.loan-content-box').slideDown(500, function(){
                var headerHe = $('header').innerHeight() + 170;
                $('html, body').animate({
                    scrollTop: $(this).offset().top - headerHe
                }, 800);
                $("#loan-scroll-block").getNiceScroll().resize();
                $("#loan-scroll-payment").getNiceScroll().resize();
            });
            $(this).parents('.repay-next-div').next('.repay-next-div').find('.repay-title').addClass('selected');
        }
    });

    $('.repay-title').on('click', function(){
        if($(this).hasClass('selected')){
            $(this).toggleClass('open');
            $(this).parent().find('.loan-content-box').slideToggle();
        }
        $("#loan-scroll-block").getNiceScroll().resize();
        $("#loan-scroll-payment").getNiceScroll().resize();
    });

    $("#loan-scroll-block").getNiceScroll().resize();
    $("#loan-scroll-payment").getNiceScroll().resize();

    /* loan-terms-row Scroll */
    $('#loan-information').button('disable');
    var niceScroll = $('#loan-scroll-block').niceScroll('#loan-inner-details', {
        cursorborder: "none",
        cursorcolor: "#e50647",
        cursorwidth: "5px",
        railpadding: {right: 5},
        autohidemode: false,
        boxzoom: false
    });

    niceScroll.onscrollstart = function(data) {
        if (data.end.y > (this.page.maxh - 800)) {
            $('#loan-information').attr('disabled', false);
            $('#loan-information').removeClass('ui-button-disabled ui-state-disabled');
            $("#loan-information").button('refresh');
        }
    };

    niceScroll.onscrollend = function(data) {
        if (data.end.y > (this.page.maxh - 800)) {
            $('#loan-information').attr('disabled', false);
            $('#loan-information').removeClass('ui-button-disabled ui-state-disabled');
            $("#loan-information").button('refresh');
        }
    };

    if(Modernizr.touch) {
        niceScroll.onscrollstart = function(data) {
            $('html, body').animate({
                 scrollTop: $('#loan-scroll-block').parents('.loan-content-box').find('.gray-bg').offset().top - 299
             }, 800);
        }
    }

    $('#explanations').button('disable');
     var niceScrollpayment = $('#loan-scroll-payment').niceScroll('#loan-inner-payment', {
        cursorborder: "none",
        cursorcolor: "#e50647",
        cursorwidth: "5px",
        railpadding: {right: 5},
        autohidemode: false,
        boxzoom: false
    });
    
    niceScrollpayment.onscrollstart = function(data) {
        if (data.end.y > (this.page.maxh - 800)) {
            $('#explanations').attr('disabled', false);
            $('#explanations').removeClass('ui-button-disabled ui-state-disabled');
            $("#explanations").button('refresh');
        }
    };

    niceScrollpayment.onscrollend = function(data) {
        if (data.end.y > (this.page.maxh - 800)) {
            $('#explanations').attr('disabled', false);
            $('#explanations').removeClass('ui-button-disabled ui-state-disabled');
            $("#explanations").button('refresh');
        }
    };

    if(Modernizr.touch) {
        niceScrollpayment.onscrollstart = function(data) {
            $('html, body').animate({
                 scrollTop: $('#loan-scroll-payment').parents('.loan-content-box').find('.gray-bg').offset().top - 225
             }, 800);
        }
    }


    /* loan-terms-row Scroll end*/

    /*reviews page terms start*/
    $('#loan-account').on('click', function() {
        if ($(this).is(':checked')) {
            $('#loan-accept').slideDown();
            $('.next-pages').removeClass('grey-button');
        } else {
            $('#loan-accept').slideUp();
            $('.next-pages').addClass('grey-button');
        }
    });
    /*reviews page terms end*/

    /*mobile menu start*/
    /* sub menu */
    $('nav ul li ul').each(function() {
        $(this).parent('li').addClass('subMenu');
    });

    $('li.subMenu').append('<span class="sub-trigger"></span>');

    $('.sub-trigger').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.sub-trigger').removeClass('active');
            $('li.subMenu ul').slideUp();
            $(this).addClass('active');
            $(this).parent().find('ul').slideDown();
        } else {
            $('.sub-trigger').removeClass('active');
            $('li.subMenu ul').slideUp();
        }
    });

    $('#mobile-trigger').on('click', function() {
        $('body').toggleClass('open');
    });
    /*mobile menu end*/

    /*Application page sidebar start*/
    $('.details a').on('click', function() {
        setSidebarHeight();
        var text = $(this).text();
        if ($(this).hasClass('active') == false) {
            $('.details a').removeClass('active');
            $('.total-details').slideUp(function() {
                $(this).parent().find('.change-loan').fadeIn();
                $('.details a').text('DETAILS');
            });
            $(this).addClass('active');
            $('.total-details').slideDown(function() {
                $(this).parent().find('.change-loan').fadeOut();
                $('.details a').text('LESS DETAILS');
            });
        } else {
            $('.details a').removeClass('active');
            $('.total-details').slideUp(function() {
                $(this).parent().find('.change-loan').fadeIn();
                $('.details a').text('DETAILS');
            });
        }
        return false;
    });
    /*Application page sidebar end*/

    /* dots looping */
    setInterval(dotsRunning, 800);

    /*mobile Application sidebar start*/
    if (Modernizr.touch) {
        $(window).scroll(function() {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('.sub-page-wrapper .sticky-table').fadeOut();
            } else {
                $('.sub-page-wrapper .sticky-table').fadeIn();
            }
        });
    }
    /*mobile Application sidebar end*/

    setSidebarHeight();

    /*personal details Eligible start*/
    $('#eligible').change(function(e) {
        var $eligible_main = $('#eligibility_main'),
            $eligible_content = $('#eligibility_info');
        if ($(this).is(':checked')) {
            $('.next-pages').removeClass('grey-button');
            $eligible_main.removeClass('disabled_block');
            $eligible_content.slideDown(function() {
                $('html, body').animate({
                    scrollTop: $('#eligibility_info').offset().top - 92
                }, 1500);
                setSidebarHeight();
            });
        } else {
            $('.next-pages').addClass('grey-button');
            $eligible_main.addClass('disabled_block');
            $eligible_content.stop(true, true).slideUp(function() {
                $('html, body').animate({
                    scrollTop: $('#eligibility_info').offset().top - 125
                }, 1500);
                setSidebarHeight();
            });
        }

    });
    /*personal details Eligible end*/

    /*global-error start*/
    $('.next-pages').on('click', function() {
        if ($(this).hasClass('grey-button')) {
            $('.global-error').slideDown(function() {
                globalErr();
            });
        } else {
            var linkto = $(this).attr('data-link');
            window.location.href = linkto;
        }
    });

    $('.global-error a').click(function() {
        $(this).parents('.global-error').slideUp();
        $('.sub-page-wrapper header').css({
            top: '0px'
        });
        $('.sub-page-wrapper').css({
            paddingTop: '100px'
        });
        return false;
    });
    /*global-error end*/

    /*sign start*/
    $('.sign-in-link a').on('click', function() {
        $('html').addClass('hidden');
        $('.form-popup').addClass('show');
        return false;
    });

    $('.sign-in-mobile-link a').on('click', function() {
        $('html').addClass('hidden');
        $('.form-popup').fadeIn();
        return false;
    });
    /*sign end*/

    /*sign popup start*/

    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $(".form-popup").fadeOut();
            $('html').removeClass('hidden');
        }
    });

    $('.popupclose').on('click', function() {
        $('html').removeClass('hidden');
        $(this).closest('.overlay').removeClass('show');
        return false;
    });

    /*sign popup end*/

    /*help block*/
    $('.help-icon').click(function() {
        $(this).toggleClass('active');
        $(this).parents('.form-row').find('.help-message').slideToggle();
    });

    $('.text-box').bind('keyup focusout', function(e) {
        $('.addRed').each(function(index, element) {
            $(this).parent('.form-row').addClass('redRow');
        });
    });

    $('.text-box').on('change', function(e) {
        var thisVal = $(this).val();
        if (thisVal !== 0) {
            //console.log('1');
            $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
        } else {
            //console.log('2');
            $(this).parents('.form-row').find('.fa-check').remove();
        }
    });

    /* affordability */
    $("#employmenttype").selectmenu({
        change: function(event, ui) {
            $(this).parents('.form-row').append('<i class="fa fa-check"></i>');

            if ($('#employmenttype option:selected').val() != 0) {
                $('.employmenttyperow').find('.error-message').hide();
                $('.employmenttyperow').find('.form-inner-field').removeClass('addRed');
                $('.employmenttyperow').find('.form-inner-field').removeClass('redRow');
            }
            if ($('#employmenttype option:selected').val() == "Not working at the moment"){
                $('#jobless-message').slideDown();
            } else {
                $('#jobless-message').stop(true, true).slideUp();
            }
        }
    });

    /* More job append */
    $('.other-job').on('change', function(){
        if($('#partime-job-yes').is(':checked')) {
            $.ajax({
                url:'more-job.html',
                type: "GET",
                dataType: "html"
            }).done(function(data){
                $('#more-job-wrapper').html('');
                $('#more-job-wrapper').html(data);
            });
        } else {
            $('#more-job-wrapper').html('');
        }
    });

    var $otherIncome = $('#otherincome'),
        $expanseblk = $(".expanseblk");
    $('#otherpayment input[type="radio"]').on('click', function() {
        if ($("#otheryes").is(':checked')) {
            $otherIncome.slideDown(function() {
                setSidebarHeight();
                $('html, body').animate({
                    scrollTop: $('.otherincomehide').offset().top - 92
                }, 1500);
            });
            $expanseblk.hide();
            affordError();
            return false;
        }
    });

    $otherIncome.on('keyup', function() {
        if ($(this).val() == '') {
            $expanseblk.slideDown(function() {
                $('html, body').animate({
                    scrollTop: $expanseblk.offset().top - 92
                }, 1500);
            });
            $('.incometable-blk').slideDown();
        } else {
            $expanseblk.slideUp(function() {
                $('html, body').animate({
                    scrollTop: $('#otherpayment').offset().top - 92
                }, 1500);
            });
            $('.incometable-blk').slideUp();
        }
    });


    $('#otherpayment input[type="radio"]').on('click', function() {
        if ($("#otherno").is(':checked')) {
            $("#otherincome").hide();
            affordError();
            $('.expanseblk').slideDown(function() {
                $('html, body').animate({
                    scrollTop: $('#expenseTitle').offset().top - 92
                }, 1500);
            });
            $('.incometable-blk').slideDown();
            $('#expenseTitle').removeClass('disable');
            return false;
        }
    });

    $('.radioblock input[type="radio"]').change(function() {
        $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
    });

    $('.chkLast input[type="checkbox"]').change(function() {
        $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
    });

    $('.total-income').on('keyup', function(e) {
        var income1 = $('#monthlyincome').val(),
            income2 = $('#otherincome-textbox').val(),
            $perMonth = $('#perMonth'),
            totalIcome = parseInt(income1) + parseInt(income2);

        if (income1 == '' && income2 == '') {
            $perMonth.html(0);
        } else if (!isNaN(income1 == '') && income2 == '') {
            $perMonth.html('&pound;' + parseInt(income1));
            $('#totalIncom').html('&pound;' + parseInt(income1));
        } else if (!isNaN(income2 == '') && income1 == '') {
            $perMonth.html('&pound;' + parseInt(income2));
            $('#totalIncom').html('&pound;' + parseInt(income2));
        } else {
            $perMonth.html('&pound;' + totalIcome);
            $('#totalIncom').html('&pound;' + totalIcome);
        }
    });

    $('#monthlyincome').bind('input', function() {
        var income = $(this).val();
        if (income > 0) {
            $('#monthlyincome').parents('.form-row').removeClass('redRow');
            $('#monthlyincome').parents().removeClass('addRed');
            $('#monthlyincome').parents('.form-row').find('.error-message').hide();
            $('#monthlyincome').parents('.form-row').find('.help-message').hide();
        } else {
            $('#monthlyincome').parents('.form-row').addClass('redRow');
        }
    });

    $('#worktelephone').bind('input', function() {
        var income = $(this).val();
        if (income > 0) {
            $('#worktelephone').parents('.form-row').removeClass('redRow');
            $('#worktelephone').parents().removeClass('addRed');
            $('#worktelephone').parents('.form-row').find('.error-message').hide();
            $('#worktelephone').parents('.form-row').find('.help-message').hide();
        } else {
            $('#worktelephone').parents('.form-row').addClass('redRow');
        }
    });

    // $('#otherIncome').bind('input',function(e) {
    //        var income = $(this).val();
    //  $('#otherIncome').html('&pound;'+income);
    //  if(income>0){
    //  $('#otherIncome').parents('.form-row').removeClass('redRow');
    //  $('#otherIncome').parents().removeClass('addRed');      
    //  $('#otherIncome').parents('.form-row').find('.error-message').hide();
    //  $('#otherIncome').parents('.form-row').find('.help-message').hide();        
    //  } else {
    //  $('#otherIncome').parents('.form-row').addClass('redRow');
    //  }
    //    });

    $('#ddemployment, #mmemployment').bind('input', function() {
        var ddEmploy = $('#ddemployment').val();
        var mmEmploy = $('#mmemployment').val();
        if ((mmEmploy.length != 0) && (ddEmploy.length != 0)) {
            $('#ddemployment').parents('.form-row').removeClass('redRow');
            $('#ddemployment').parents().removeClass('addRed');
        } else {
            $('#ddemployment').parents('.form-row').addClass('redRow');
        }
    });

    $('#datepaid').bind('input', function() {
        var datepaid = $('#datepaid').val();
        if (datepaid.length != 0) {
            $('#datepaid').parents('.form-row').removeClass('redRow');
            $('#datepaid').parents('.form-row').find('.error-message').hide();
            $('#datepaid').parents('.form-row').find('.help-message').hide();
            $('#datepaid').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('#datepaid').parents('.form-row').addClass('redRow');
        }
    });

    $('#employmentlength input').keyup(function(e) {
        var ddemployment = $('#ddemployment').val();
        var ddemployment = $('#ddemployment').val();
        if (ddemployment > 0 | ddemployment > 0) {
            $('#employmentlength').find('.error-message').slideUp();
        }
    });

    $('.expanseblk .text-box').keyup(function(e) {
        /* calculation */
        var sum = 0;
        $('.expanseblk .text-box').each(function(index, element) {
            sum += Number(($(this).val()));
        });
        $('#totalExpense').html('&pound;' + sum);
        $('.next-pages').removeClass('grey-button');
    });

    $('.stepPage').click(function() {
        affordError();
    });

    $('.expanseblk').bind('keyup', function(e) {
        var income_per_mn = $('#perMonth').text().replace(/[^\d.]/g, ''),
            mn_expense = $('#totalExpense').text().replace(/[^\d.]/g, ''),
            total = (parseInt(income_per_mn)) - parseInt(mn_expense);
        // console.log(income_per_mn);
        // console.log(mn_expense);
        // console.log(total);
        $('#totalIncom').html('&pound;' + total);
    });

    $('.last-input').on('blur', function() {
        if ($(this).val() != '') {
            $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
        } else {
            $(this).parents('.form-row').find('.fa-check').remove();
        }
    });

    /* affordability end*/

    /*sms alert*/
    $('.noverify').on('click', function() {
        $('.smsalert').fadeIn(500, function() {
            $(this).fadeOut(1800, function() {
                $('#smsverfiy').slideDown('fast', function() {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 300
                    }, 1500);
                });
                $('.resend').fadeIn();
            });
        });
    });

    $('input#smscode').bind('change', function() {
        if ($(this).val() != "") {
            $('html, body').animate({
                scrollTop: $('.form-second-common').offset().top - 125
            }, 1500);
        }
    });
    /*sms end*/

    /*mobile sidebar start*/
    if (Modernizr.touch) {
        $('.calcResults > h2').on('click', function() {
            $('.borrowDetails, .problem-block').slideToggle();
            $(this).toggleClass('active');
        });
    }
    /*mobile sidebar end*/

    /*mobile scroll block start*/

    if (!Modernizr.touch) {
        $('.left-column input[type="text"]').on('focus', function() {
            var thisOffset = $(this).offset().top
            var removeHit = ($('header').innerHeight() + $('.steps-row').innerHeight());
            $('html, body').animate({
                scrollTop: thisOffset - removeHit
            }, 800);
        });
    }

    if (!Modernizr.touch) {
        $('.personal-info input[type="text"]').on('focus', function() {
            var thisOffset = $(this).offset().top
            var removeHit = ($('header').innerHeight() + 50);
            $('html, body').animate({
                scrollTop: thisOffset - removeHit
            }, 800);
        });
    }
    /*mobile scroll block start*/
    /*search start*/ 
    $(document).on("click", function() { 
        $('.search-block').fadeOut(); 
    });

    $('.searchtrigger').on('click', function(){
        $('.search-block').slideToggle();
        return false;
    });

    $('#search-button').attr('disabled', true);
    $('#search-text').on('keyup', function(){
        $('#search-button').attr('disabled', false);
    });

    /*search end*/ 

    commonFun();
    globalErr();

    /*currency rate*/
    if ($('#currency-rate').length > 0) {
        $('#currency-rate').carouFredSel({
            width: '100%',
            items: {
                visible: 'odd+2'
            },
            scroll: {
                pauseOnHover: true,
                onBefore: function() {
                    $(this).children().removeClass('hover');
                }
            },
            auto: {
                items: 1,
                easing: 'linear',
                duration: 3000,
                timeoutDuration: 0
            }
        });
    }

    // currency conversion
    $('input#exchange-text-box').on('keyup', function() {
        var currentVal = $(this).val();
        var exFrom = $('#exchange-from :selected').val();
        var exTo = $('#exchange-to :selected').val();
        var conTotal = exFrom * exTo;
        var toTalCur = currentVal * conTotal;
        $('.exchanged-box').text(toTalCur);
    });

    $("#exchange-from").selectmenu({
        change: function(event, ui) {
            $('#ex-from').val($('#exchange-from :selected').val());
        }
    });

    $("#exchange-to").selectmenu({
        change: function(event, ui) {
            var currentTo = $('#exchange-to :selected').val()
            var addTo = $('#ex-to').val(currentTo);
            var currentFrom = $('#ex-from').val();
            var exAmount = $('#exchange-text-box').val();
            var covToal = currentFrom * currentTo;
            var toTalCur = exAmount * covToal;
            $('.exchanged-box').text(toTalCur);
        }
    });

    // mobile swap
    if ($(window).width() <= 1024) {
        $('.today-selling').insertAfter('.caroufredsel_wrapper');
    } else {
        $('.today-selling').insertAfter('.currency-exchange');
    }

    // more payment
    $('.view-payment a').on('click', function(e) {
        e.preventDefault();
        $('.more-payment').toggle('slow');
    });

    // my account errormsg close
    $('.my-acoount-close').on('click', function() {
        $(this).parents('.my-account-errormsg').slideUp();
        $('.next-box-error').slideUp();
    });

    //message remove
    $('.message-delete').on('click', function() {
        $('.message-popup').fadeIn();
        return false;
    });
    $('.message-back').on('click', function() {
        $('.message-popup').fadeOut();
        return false;
    });

    //change mobile no 
    $('.change-number').on('click', function() {
        $('.mobile-verify-block').slideDown();
    });
    $('.verify-cancel').on('click', function() {
        $('.mobile-verify-block').slideUp();
        return false;
    });

    $('.verify-button').on('click', function() {
        $('#verfiy-alert').slideDown();
    });

    $('#miles').selectmenu();

    $('.close-button-valid').on('click', function(){
        $('.validate-main').fadeOut();
        return false;
    });
    outContainerWidth();

    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('.enquiry-fixed').addClass('unfixed');
        } else {
            $('.enquiry-fixed').removeClass('unfixed');
        }
    });

});

function affordError() {
    var jobtype = $('input[name="jobtype"]').is(':checked');
    if (jobtype) {
        $('input[name="jobtype"]').parents('.form-row').find('.error-message').slideUp();
        $('input[name="jobtype"]').parents('.form-inner-field').removeClass('addRed');
    } else {
        $('input[name="jobtype"]').parents('.form-row').find('.error-message').slideDown();
        $('input[name="jobtype"]').parents('.form-inner-field').addClass('addRed');
    }
    var ddemployment = $('#ddemployment').val();
    var ddemployment = $('#ddemployment').val();
    if (ddemployment == 0 || ddemployment == 0) {
        $('#employmentlength').find('.error-message').slideDown();
        $('#employmentlength').find('.form-inner-field').addClass('addRed');
    } else {
        $('#employmentlength').find('.error-message').slideUp();
        $('#employmentlength').find('.form-inner-field').removeClass('addRed');
    }
    var monthlyincome = $('#monthlyincome').val();
    if (monthlyincome == 0) {
        $('#monthlyincome').parents('.form-row').find('.error-message').slideDown();
        $('#monthlyincome').parents('.form-inner-field').addClass('addRed');
    } else {
        $('#monthlyincome').parents('.form-row').find('.error-message').slideUp();
        $('#monthlyincome').parents('.form-inner-field').removeClass('addRed');
    }
    var worktelephone = $('#worktelephone').val();
    if (worktelephone == 0) {
        $('#worktelephone').parents('.form-row').find('.error-message').slideDown();
        $('#worktelephone').parents('.form-inner-field').addClass('addRed');
    } else {
        $('#worktelephone').parents('.form-row').find('.error-message').slideUp();
        $('#worktelephone').parents('.form-inner-field').removeClass('addRed');
    }

    var dateGetPaid = $('#datepaid').val();
    if (dateGetPaid.length == 0) {
        $('#datepaid').parents('.form-row').find('.error-message').slideDown();
        $('#datepaid').parents('.form-inner-field').addClass('addRed');
    } else {
        $('#datepaid').parents('.form-row').find('.error-message').slideUp();
        $('#datepaid').parents('.form-inner-field').removeClass('addRed');
    }
}

var commonFun = function() {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headerHeight = $('header').innerHeight(),
        containerWidth = $('.container').innerWidth(),
        containerOuterWidth = windowWidth - containerWidth,
        halfWidth = containerOuterWidth / 2,
        winsemiHeight = windowHeight - (Math.floor(windowHeight / 3));

    if (windowWidth > 767) {
        $('#set_range').insertAfter('.calc-tab-1 h2');
    } else {
        $('#set_range').insertAfter('.white-patch-tab-1');
    }

    if (windowWidth > 767) {
        $('#set_range1').insertAfter('.calc-tab-2 h2');
    } else {
        $('#set_range1').insertAfter('.white-patch-tab-2');
    }
}

/* dots looping */
var dots = 0;

function dotsRunning() {
    if (dots < 3) {
        $('.dots').append('.');
        dots++;
    } else {
        $('.dots').html('');
        dots = 0;
    }
}

/* Side bar */
function setSidebarHeight() {
    if ($('#side-bar').length > 0) {
        var wWidth = $(window).width();
        $window = $(window),
            $sidebar = $(".sticky-main"),
            sidebarTop = 253 //$sidebar.position().top,
        sidebarHeight = $('#side-bar').innerHeight(),
            $bottomOffset = $("#stick-offset"),
            bottomOffsetTop = $bottomOffset.position().top - 30,
            leftBarHeight = $('.leftColumn').innerHeight();
        // if(leftBarHeight<sidebarHeight){
        //  $('#sideBar').css({'position':'static'});
        // } else {
        //  $('#side-bar').css({'position':'fixed'});
        // }
        // $window.scroll(function(event) {
        //  scrollTop = $window.scrollTop(),
        //  topPosition = Math.max(72, sidebarTop - scrollTop),
        //  topPosition = Math.min(topPosition, (bottomOffsetTop - scrollTop) - sidebarHeight);
        //  $('#side-bar').css('top', topPosition);
        // });

        $window.scroll(function(event) {
            var parentOffset = $('.sticky-table').offset().top
            var windowTop = $(window).scrollTop();
            var globalError = $('.global-error').innerHeight();
            var headerHeight = $('header').height();
            var totalHeight = globalError + headerHeight;
            $('#side-bar').css({
                'top': totalHeight
            });
            if (windowTop > totalHeight) {
                $('#side-bar').css({
                    'position': 'fixed'
                });
            } else {
                $('#side-bar').css({
                    'position': 'static'
                });
            }
        });
    }
}

/*window load*/

$(window).load(function() {
     $('.validate-main').fadeIn();
    commonFun();
    outContainerWidth();
    authorname();
});

/*modernizer*/
if (!Modernizr.touch) {
    $(window).resize(function() {
        commonFun();
        setSidebarHeight();
    });
}

/*window bind */
$(window).bind('orientationchange', function() {
    commonFun();
    outContainerWidth();
    authorname();
});

/*window resize */
$(window).resize(function() {
    setSidebarHeight();
    outContainerWidth();
    authorname();
});