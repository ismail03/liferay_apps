$(document).ready(function() {

    // Afford afford
    $('.afford-final-step').click(function() {

        var formVal = 0;

        if (!$('#employmenttype').parent('.drop-down').hasClass('active')) {
            $('.employmenttyperow').find('.error-message').show();
            $('.employmenttyperow').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }
        var whodo = $('#whodo').val();
        if (whodo == 0) {
            $('#whodo').parents('.form-row').find('.error-message').show();
            $('#whodo').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#whodo').parents('.form-row').find('.error-message').hide();
            $('#whodo').parents('.form-inner-field').removeClass('addRed');
        }
        var whatrole = $('#what-role').val();
        if (whatrole.length == 0) {
            $('#what-role').parents('.form-row').find('.error-message').show();
            $('#what-role').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#what-role').parents('.form-row').find('.error-message').hide();
            $('#what-role').parents('.form-inner-field').removeClass('addRed');
        }

        var shifttype = $('input[name="shift"]').is(':checked');
        if (shifttype) {
            $('input[name="shift"]').parents('.form-row').find('.error-message').slideUp();
            $('input[name="shift"]').parents('.form-inner-field').removeClass('addRed');
            formVal += 1;
        } else {
            $('input[name="shift"]').parents('.form-row').find('.error-message').slideDown();
            $('input[name="shift"]').parents('.form-inner-field').addClass('addRed');
        }
        var ddemployment = $('#ddemployment').val();
        var ddemployment = $('#ddemployment').val();
        if (ddemployment == 0 || ddemployment == 0) {
            $('#employmentlength').find('.error-message').slideDown();
            $('#employmentlength').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#employmentlength').find('.error-message').slideUp();
            $('#employmentlength').find('.form-inner-field').removeClass('addRed');
        }
        var monthlyincome = $('#monthlyincome').val();
        if (monthlyincome == 0) {
            $('#monthlyincome').parents('.form-row').find('.error-message').slideDown();
            $('#monthlyincome').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#monthlyincome').parents('.form-row').find('.error-message').slideUp();
            $('#monthlyincome').parents('.form-inner-field').removeClass('addRed');
        }
        var worktelephone = $('#worktelephone').val();
        if (worktelephone == 0) {
            $('#worktelephone').parents('.form-row').find('.error-message').slideDown();
            $('#worktelephone').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#worktelephone').parents('.form-row').find('.error-message').slideUp();
            $('#worktelephone').parents('.form-inner-field').removeClass('addRed');
        }
        var dateGetPaid = $('#datepaid').val();
        if (dateGetPaid.length == 0) {
            $('#datepaid').parents('.form-row').find('.error-message').slideDown();
            $('#datepaid').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#datepaid').parents('.form-row').find('.error-message').slideUp();
            $('#datepaid').parents('.form-inner-field').removeClass('addRed');
        }
        var dateGetPaid = $('#datePaid1').val();
        if (dateGetPaid.length == 0) {
            $('#datePaid1').parents('.form-row').find('.error-message').slideDown();
            $('#datePaid1').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#datePaid1').parents('.form-row').find('.error-message').slideUp();
            $('#datePaid1').parents('.form-inner-field').removeClass('addRed');
        }
    });

    // Global Error
    $('.final-valid').click(function() {
        // var e = $('.emailonly').val();           

        var formVal = 0;

        if (!$('#purpose-of').parent('.drop-down').hasClass('active')) {
            $('.purpose-of-row').find('.error-message').show();
            $('.purpose-of-row').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        if (!$('#title-gender').parent('.drop-down').hasClass('active')) {
            $('.title-gender-row').find('.error-message').show();
            $('.title-gender-row').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var fname = $('#firstname').val();
        if (fname.length == 0) {
            $('#firstname').parents('.form-row').find('.error-message').show();
            $('#firstname').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#firstname').parents('.form-row').find('.error-message').hide();
            $('#firstname').parents('.form-inner-field').removeClass('addRed');
        }

        var femail = $('#femail').val();
        if (!emailVal(femail)) {
            $('#femail').parents('.form-row').find('.error-message').show();
            $('#femail').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#femail').parents('.form-row').find('.error-message').hide();
            $('#femail').parents('.form-inner-field').removeClass('addRed');
        }


        var remail = $('#remail').val();
        if (!emailVal(remail)) {
            $('#remail').parents('.form-row').find('.error-message').show();
            $('#remail').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#remail').parents('.form-row').find('.error-message').hide();
            $('#remail').parents('.form-inner-field').removeClass('addRed');
        }

        if (!$('#marital-status').parent('.drop-down').hasClass('active')) {
            $('.marital-status-row').find('.error-message').show();
            $('.marital-status-row').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var numDep = $('#nodep').val();
        if (numDep.length == 0 || numDep == "0") {
            $('#nodep').parents('.form-row').find('.error-message').show();
            $('#nodep').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#nodep').parents('.form-row').find('.error-message').hide();
            $('#nodep').parents('.form-inner-field').removeClass('addRed');
        }

        var mobilenumber = $('#mobilenumber').val();
        if (mobilenumber.length == 0) {
            $('#mobilenumber').parents('.form-row').find('.error-message').show();
            $('#mobilenumber').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#mobilenumber').parents('.form-row').find('.error-message').hide();
            $('#mobilenumber').parents('.form-inner-field').removeClass('addRed');
        }

        if (!$('#squestion').parent('.drop-down').hasClass('active')) {
            $('.squestionrow').find('.error-message').show();
            $('.squestionrow').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var ansNm = $('#answer-question').val();
        if (ansNm.length == 0) {
            $('#answer-question').parents('.form-row').find('.error-message').show();
            $('#answer-question').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#answer-question').parents('.form-row').find('.error-message').hide();
            $('#answer-question').parents('.form-inner-field').removeClass('addRed');
        }
        var formcheck = $('.formcheck').is(':checked');
        if (formcheck) {
            $('.formcheck').parents('.form-row').find('.error-message').hide();
            $('.formcheck').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.formcheck').parents('.form-row').find('.error-message').show();
            $('.formcheck').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }
        var postcode = $('#postcode').val();
        if (postcode.length == 0) {
            $('#postcode').parents('.form-row').find('.error-message').show();
            $('#postcode').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#postcode').parents('.form-row').find('.error-message').hide();
            $('#postcode').parents('.form-inner-field').removeClass('addRed');
        }
        var housenumber = $('#housenumber').val();
        if (housenumber.length == 0) {
            $('#housenumber').parents('.form-row').find('.error-message').show();
            $('#housenumber').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#housenumber').parents('.form-row').find('.error-message').hide();
            $('#housenumber').parents('.form-inner-field').removeClass('addRed');
        }
        var street = $('#street').val();
        if (street.length == 0) {
            $('#street').parents('.form-row').find('.error-message').show();
            $('#street').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#street').parents('.form-row').find('.error-message').hide();
            $('#street').parents('.form-inner-field').removeClass('addRed');
        }
        var county = $('#county').val();
        if (county.length == 0) {
            $('#county').parents('.form-row').find('.error-message').show();
            $('#county').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#county').parents('.form-row').find('.error-message').hide();
            $('#county').parents('.form-inner-field').removeClass('addRed');
        }
        var time1 = $('#time1').val();
        var time2 = $('#time2').val();
        if (time1.length == 0) {
            $('#time1').parents('.form-row').find('.error-message').show();
            $('#time1').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#time1').parents('.form-row').find('.error-message').hide();
            $('#time1').parents('.form-inner-field').removeClass('addRed');
        }

        if (time2.length == 0) {
            $('#time2').parents('.form-row').find('.error-message').show();
            $('#time2').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#time2').parents('.form-row').find('.error-message').hide();
            $('#time2').parents('.form-inner-field').removeClass('addRed');
        }

        var checkOwn = $('.radioown').is(':checked');
        if (checkOwn) {
            $('.radioown').parents('.form-row').find('.error-message').hide();
            $('.radioown').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.radioown').parents('.form-row').find('.error-message').show();
            $('.radioown').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var bankname = $('#bankname').val();
        if (bankname.length == 0) {
            $('#bankname').parents('.form-row').find('.error-message').show();
            $('#bankname').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#bankname').parents('.form-row').find('.error-message').hide();
            $('#bankname').parents('.form-inner-field').removeClass('addRed');
        }
        var sort1 = $('#sort1').val();
        var sort2 = $('#sort2').val();
        var sort3 = $('#sort3').val();
        if (sort1.length == 0 || sort2.length == 0 || sort3.length == 0) {
            $('#sort1').parents('.form-row').find('.error-message').show();
            $('#sort1').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#sort1').parents('.form-row').find('.error-message').hide();
            $('#sort1').parents('.form-inner-field').removeClass('addRed');
        }
        var accountnumber = $('#accountnumber').val();
        if (accountnumber.length == 0) {
            $('#accountnumber').parents('.form-row').find('.error-message').show();
            $('#accountnumber').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#accountnumber').parents('.form-row').find('.error-message').hide();
            $('#accountnumber').parents('.form-inner-field').removeClass('addRed');
        }
        // Global Message 
        if (formVal == 0) {
            globalErr();
            $('.global-error').hide(function() {
                globalErr();
            });
        } else {
            if ($('.form-second-row').is(':visible')) {
                $('.form-second-row').find('.error-message').hide();
                $('.form-second-row').find('.form-inner-field').removeClass('addRed');
            }
            $('.global-error').show(function() {
                globalErr();
            });
        }
    });


    /* Each form input validation */
    $('.aboutyou').bind('keyup change', function() {
        /* var e = $('.emailonly').val(); */
        var formVal = 0;
        $("#purpose-of").selectmenu({
            change: function(event, ui) {
                if ($('#purpose-of option:selected').val() == 0) {
                    formVal += 1;
                }
            }
        });

        $("#title-gender").selectmenu({
            change: function(event, ui) {
                if ($('#title-gender option:selected').val() == 0) {
                    formVal += 1;
                }
            }
        });

        var fname = $('#firstname').val();
        if (fname.length == 0) {
            formVal += 1;
        }

        var femail = $('#femail').val();
        if (!emailVal(femail)) {
            formVal += 1;
        }

        var remail = $('#remail').val();
        if (!emailVal(remail)) {
            formVal += 1;
        }

        $("#marital-status").selectmenu({
            change: function(event, ui) {
                if ($('#marital-status option:selected').val() == 0) {
                    formVal += 1;
                }
            }
        });

        var numDep = $('#nodep').val();
        if (numDep.length == 0 || numDep == "0") {
            formVal += 1;
        }


        var mobilenumber = $('#mobilenumber').val();
        if (mobilenumber.length == 0) {
            formVal += 1;
        }

        $("#squestion").selectmenu({
            change: function() {
                $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                $(this).parents('.form-inner-field').removeClass('addRed');
                $(this).parents('.form-row').find('.error-message').hide();
            }
        });

        var postcode = $('#postcode').val();
        if ((postcode.length == 0)) {
            formVal += 1;
        }
        var housenumber = $('#housenumber').val();
        if (housenumber.length == 0) {
            formVal += 1;
        }
        var street = $('#street').val();
        if (street.length == 0) {
            formVal += 1;
        }
        var county = $('#county').val();
        if (county.length == 0) {
            formVal += 1;
        }
        var time1 = $('#time1').val();
        var time2 = $('#time2').val();
        if (time1.length == 0) {
            formVal += 1;
        }

        if (time2.length == 0) {
            formVal += 1;
        }

        var bankname = $('#bankname').val();
        if (bankname.length == 0) {
            formVal += 1;
        }
        var sort1 = $('#sort1').val();
        var sort2 = $('#sort2').val();
        var sort3 = $('#sort3').val();
        if (sort1.length == 0 || sort2.length == 0 || sort3.length == 0) {
            formVal += 1;
        }
        var accountnumber = $('#accountnumber').val();
        if (accountnumber.length == 0) {
            formVal += 1;
        }
        // console.log(formVal);
        /* Global Message */
        if (formVal == 0) {
            globalErr();
            $('.global-error').slideUp(function() {
                globalErr();
            });
            $('.next-pages').removeClass('grey-button');
        } else {
            /*console.log(formVal);
         if($('.form-second-row').is(':visible'))
         {
         $('.form-second-row').find('.error-message').hide();
         $('.form-second-row').find('.form-inner-field').removeClass('addRed');
         } else if($('.form-third').is(':visible')) {
         $('.form-third').find('.error-message').hide(); 
         $('.form-third').find('.form-inner-field').removeClass('addRed');
         } else {
         $('.global-error').show(function(){ globalErr(); }); 
         }*/
        }
    });

    //28 day-buy-back vaildation

    $('.personal-vaild').click(function() {
        // var e = $('.emailonly').val();           

        var formVal = 0;

        if (!$('#personal-gender').parent('.drop-down').hasClass('active')) {
            $('.personal-gender').find('.error-message').show();
            $('.personal-gender').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var fname = $('#personal-name').val();
        if (fname.length == 0) {
            $('#personal-name').parents('.form-row').find('.error-message').show();
            $('#personal-name').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#personal-name').parents('.form-row').find('.error-message').hide();
            $('#personal-name').parents('.form-inner-field').removeClass('addRed');
        }

        var femail = $('#personal-email').val();
        if (!emailVal(femail)) {
            $('#personal-email').parents('.form-row').find('.error-message').show();
            $('#personal-email').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#personal-email').parents('.form-row').find('.error-message').hide();
            $('#personal-email').parents('.form-inner-field').removeClass('addRed');
        }

        var fmobile = $('#personal-mobile').val();
        if (fmobile.length == 0) {
            $('#personal-mobile').parents('.form-row').find('.error-message').show();
            $('#personal-mobile').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#personal-mobile').parents('.form-row').find('.error-message').hide();
            $('#personal-mobile').parents('.form-inner-field').removeClass('addRed');
        }

        var checkOwn = $('.are-you').is(':checked');
        if (checkOwn) {
            $('.are-you').parents('.form-row').find('.error-message').hide();
            $('.are-you').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.are-you').parents('.form-row').find('.error-message').show();
            $('.are-you').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var postcode = $('#postcode').val();
        if (postcode.length == 0) {
            $('#postcode').parents('.form-row').find('.error-message').show();
            $('#postcode').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#postcode').parents('.form-row').find('.error-message').hide();
            $('#postcode').parents('.form-inner-field').removeClass('addRed');
        }
        var housenumber = $('#housenumber').val();
        if (housenumber.length == 0) {
            $('#housenumber').parents('.form-row').find('.error-message').show();
            $('#housenumber').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#housenumber').parents('.form-row').find('.error-message').hide();
            $('#housenumber').parents('.form-inner-field').removeClass('addRed');
        }
        var street = $('#street').val();
        if (street.length == 0) {
            $('#street').parents('.form-row').find('.error-message').show();
            $('#street').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#street').parents('.form-row').find('.error-message').hide();
            $('#street').parents('.form-inner-field').removeClass('addRed');
        }
        var county = $('#county').val();
        if (county.length == 0) {
            $('#county').parents('.form-row').find('.error-message').show();
            $('#county').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#county').parents('.form-row').find('.error-message').hide();
            $('#county').parents('.form-inner-field').removeClass('addRed');
        }

        var upload = $('.uploadFile .file-upload-input').val();
        if (upload.length == 0) {
            $('.uploadFile .file-upload-input').parents('.form-row').find('.error-message').show();
            $('.uploadFile .file-upload-input').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('.uploadFile .file-upload-input').parents('.form-row').find('.error-message').hide();
            $('.uploadFile .file-upload-input').parents('.form-inner-field').removeClass('addRed');
        }

        var itemdown = $('.item-condition').is(':checked');
        if (itemdown) {
            $('.item-condition').parents('.form-row').find('.error-message').hide();
            $('.item-condition').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.item-condition').parents('.form-row').find('.error-message').show();
            $('.item-condition').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var ageitem = $('#age-of-item').val();
        if (ageitem.length == 0) {
            $('#age-of-item').parents('.form-row').find('.error-message').show();
            $('.age-of-item').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        } else {
            $('#age-of-item').parents('.form-row').find('.error-message').hide();
            $('#age-of-item').parents('.form-inner-field').removeClass('addRed');
        }

        if (!$('#personal-type').parent('.drop-down').hasClass('active')) {
            $('.personal-type').find('.error-message').show();
            $('.personal-type').find('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var owner = $('.owner').is(':checked');
        if (owner) {
            $('.owner').parents('.form-row').find('.error-message').hide();
            $('.owner').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.owner').parents('.form-row').find('.error-message').show();
            $('.owner').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var itembox = $('.item-boxed').is(':checked');
        if (itembox) {
            $('.item-boxed').parents('.form-row').find('.error-message').hide();
            $('.item-boxed').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.item-boxed').parents('.form-row').find('.error-message').show();
            $('.item-boxed').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        var instructions = $('.instructions').is(':checked');
        if (instructions) {
            $('.instructions').parents('.form-row').find('.error-message').hide();
            $('.instructions').parents('.form-inner-field').removeClass('addRed');
        } else {
            $('.instructions').parents('.form-row').find('.error-message').show();
            $('.instructions').parents('.form-inner-field').addClass('addRed');
            formVal += 1;
        }

        // Global Message 
        if (formVal == 0) {
            globalErr();
            $('.global-error').hide(function() {
                globalErr();
            });
        } else {
            $('.global-error').show(function() {
                globalErr();
            });
        }
    });

    //28 day-buy-back vaildation end

    // 28 day-buy-back

    $('.personal-form-row').bind('keyup change', function() {
        /* var e = $('.emailonly').val(); */
        var formVal = 0;
        $("#personal-gender").selectmenu({
            change: function(event, ui) {
                if ($('#personal-gender option:selected').val() == 0) {
                    formVal += 1;
                }
            }
        });

        var fname = $('#personal-name').val();
        if (fname.length == 0) {
            formVal += 1;
        }

        var femail = $('#personal-email').val();
        if (!emailVal(femail)) {
            formVal += 1;
        }

        var mobilenumber = $('#personal-mobile').val();
        if (mobilenumber.length == 0) {
            formVal += 1;
        }

        var postcode = $('#postcode').val();
        if ((postcode.length == 0)) {
            formVal += 1;
        }
        var housenumber = $('#housenumber').val();
        if (housenumber.length == 0) {
            formVal += 1;
        }
        var street = $('#street').val();
        if (street.length == 0) {
            formVal += 1;
        }
        var county = $('#county').val();
        if (county.length == 0) {
            formVal += 1;
        }

        var fage = $('#age-of-item').val();
        if (fage.length == 0) {
            formVal += 1;
        }

        $("#personal-type").selectmenu({
            change: function(event, ui) {
                if ($('#personal-type option:selected').val() == 0) {
                    formVal += 1;
                }
            }
        });

        if (formVal == 0) {
            globalErr();
            $('.global-error').slideUp(function() {
                globalErr();
            });
            $('.next-pages').removeClass('grey-button');
        } else {

        }

    });

    // 28 day-buy-back end

    $('.text-box').focusin(function() {
        $(this).parents('.form-row').find('.help-message').slideDown();
    });

    $('.text-box').bind('keyup', function() {
        var valdi = $(this).val();
        if (valdi.length > 0 || valdi != 0) {
            $(this).parents('.form-row').find('.help-message').slideUp(800);
        } else {
            $(this).parents('.form-row').find('.help-message').slideDown(800);
        }
    });

    // small-box input
    $('.small-box input').bind("input", function() {
        var $this = $(this);
        var maxv = $this.attr('maxlength');
        if ($this.val().length >= maxv) {
            $this.parent().next('.small-box').find('input').focus();
        } else if ($this.val().length === 0) {
            $this.parent().prev('.small-box').find('input').focus();
        }
    });

    $('.radioblock input[type="radio"]').change(function() {
        $('.radioblock').find('.error-message').hide();
        $('.radioblock').find('.form-inner-field').removeClass('addRed');
        $('.radioblock').removeClass('redRow');
    });

    /* Focusout check all input */
    $('.aboutyou input').bind('blur', function() {
        var elmt = $(this);
        if (elmt.hasClass('text-box')) {
            var vald = $(this).val();
            if ((!elmt.hasClass('emailonly')) && (!elmt.hasClass('dobIn1')) && (!elmt.hasClass('dobIn2')) && (!elmt.hasClass('dobIn3'))) {
                if (vald.length != 0 || vald != 0) {
                    $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                } else {
                    $(this).parents('.form-row').find('.fa-check').remove();
                }
            } else {
                if (elmt.hasClass('emailonly')) {
                    if (emailVal(vald)) {
                        $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                    } else {
                        $(this).parents('.form-row').find('.fa-check').remove();
                    }
                } else {
                    /* dob */
                    //console.log("dggfg");
                }
            }
        }
        validIndivi(elmt);
    });

    $('.personal-form-row input').bind('blur', function() {
        var elmt = $(this);
        if (elmt.hasClass('text-box')) {
            var vald = $(this).val();
            if ((!elmt.hasClass('emailonly'))) {
                if (vald.length != 0 || vald != 0) {
                    $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                } else {
                    $(this).parents('.form-row').find('.fa-check').remove();
                }
            } else {
                if (elmt.hasClass('emailonly')) {
                    if (emailVal(vald)) {
                        $(this).parents('.form-row').append('<i class="fa fa-check"></i>');
                    } else {
                        $(this).parents('.form-row').find('.fa-check').remove();
                    }
                } else {
                    /* dob */
                    //console.log("dggfg");
                }
            }
        }
        personaVaild(elmt);
    });

    $('.formReviews input').bind('input', function() {
        var vald = $(this).val();
        var formd;
        if (vald.length == 0) {
            $(this).parents('.form-row').find('.error-message').show();
            $(this).parents('.form-inner-field').addClass('addRed');
        } else {
            $(this).parents('.form-row').find('.error-message').hide();
            $(this).parents('.form-inner-field').removeClass('addRed');
            $(this).parents('.form-row').removeClass('redRow');
        }
    });

    $('.first-form input').bind('input', function() {
        var a = $('#firstname').val();
        var i = $('#femail').val();
        var j = $('#remail').val();
        var pa = $('#password').val();
        var ans = $('#answer-question').val();
        var d = $('#nodep').val();
        var h = $('#mobilenumber').val();
        var sC = $('#smscode').val();
        if ((a.length != 0) && ((i.length != 0) && (emailVal(i))) && (pa.length != 0) && (ans.length != 0) && (d.length != 0) && (h.length != 0) && (sC.length != 0)) {
            $('.form-second-common > div').slideDown(function() {
                setSidebarHeight();
                $('.form-second-common').removeClass('form-second-row');
            });
            $('.error-message').hide();
        } else {
            $('.form-second-common > div').slideUp(function() {
                setSidebarHeight();
                $('.form-second-common').addClass('form-second-row');
            });
        }
    });

    $('.form-second-common input').bind('input', function() {
        var j = $('#postcode').val();
        var k = $('#housenumber').val();
        var l = $('#street').val();
        var m = $('#county').val();
        var n = $('#time1').val();
        var p = $('#time2').val();
        // var jj = $('#postC1').val();
        // var kk = $('#houseNum1').val();
        // var ll = $('#strt1').val();
        // var mm = $('#county1').val();
        // var nn = $('#time3').val();
        // var pp = $('#time4').val();
        if ((j.length != 0) && (k.length != 0) && (l.length != 0) && (m.length != 0) && (n.length != 0) && (p.length != 0)) {
            $('.form-third-common > div').slideDown(function() {
                $('.form-third-common').removeClass('form-third');
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 125
                }, 1500);
            });
            $('.error-message').hide();
        } else {
            $('.form-third-common > div').slideUp(function() {
                $('.form-third-common').addClass('form-third');
            });
        }
    });

    /* Common Validate function */
    function validIndivi(fname) {
        var valElement = fname.val();
        if (valElement.length == 0) {
            fname.parents('.form-row').find('.error-message').show();
            fname.parents('.form-inner-field').addClass('addRed');
        } else {
            fname.parents('.form-row').find('.error-message').hide();
            fname.parents('.form-inner-field').removeClass('addRed');
            fname.parents('.form-row').removeClass('redRow');
        }

        var emailid = fname.attr('id');
        if (emailid == "femail") {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(valElement)) {
                fname.parents('.form-row').find('.error-message').show();
                fname.parents('.form-inner-field').addClass('addRed');
            } else {
                fname.parents('.form-row').find('.error-message').hide();
                fname.parents('.form-inner-field').removeClass('addRed');
                fname.parents('.form-row').removeClass('redRow');
            }
        }

        if (emailid == "remail") {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(valElement)) {
                fname.parents('.form-row').find('.error-message').show();
                fname.parents('.form-inner-field').addClass('addRed');
            } else {
                fname.parents('.form-row').find('.error-message').hide();
                fname.parents('.form-inner-field').removeClass('addRed');
                fname.parents('.form-row').removeClass('redRow');
            }
        }

        if (emailid == "homenumber") {
            fname.parents('.form-row').find('.error-message').hide();
            fname.parents('.form-inner-field').removeClass('addRed');
            fname.parents('.form-row').removeClass('redRow');
        }
        if (emailid == "Lname") {
            fname.parents('.form-row').find('.error-message').hide();
            fname.parents('.form-inner-field').removeClass('addRed');
            fname.parents('.form-row').removeClass('redRow');
        }
        var dobid1 = fname.hasClass('dobIn1');
        if (dobid1) {
            var x = $('#dob1').val();
            if ((x.length == 0)) {
                $('#dob1').parents('.form-row').find('.error-message').show();
                $('#dob1').parents('.form-inner-field').addClass('addRed');
            } else {
                $('#dob1').parents('.form-row').find('.error-message').hide();
                $('#dob1').parents('.form-inner-field').removeClass('addRed');
                $('#dob1').parents('.form-row').removeClass('redRow');
            }
        }
        var dobid2 = fname.hasClass('dobIn2');
        if (dobid2) {
            var x = $('#dob2').val();
            if ((x.length == 0)) {
                $('#dob2').parents('.form-row').find('.error-message').show();
                $('#dob2').parents('.form-inner-field').addClass('addRed');
            } else {
                $('#dob2').parents('.form-row').find('.error-message').hide();
                $('#dob2').parents('.form-inner-field').removeClass('addRed');
                $('#dob2').parents('.form-row').removeClass('redRow');
            }
        }
        var dobid3 = fname.hasClass('dobIn3');
        if (dobid3) {
            var x = $('#dob3').val();
            if ((x.length == 0)) {
                $('#dob3').parents('.form-row').find('.error-message').show();
                $('#dob3').parents('.form-inner-field').addClass('addRed');
            } else {
                $('#dob3').parents('.form-row').find('.error-message').hide();
                $('#dob3').parents('.form-inner-field').removeClass('addRed');
                $('#dob3').parents('.form-row').removeClass('redRow');
            }
        }
    }

    function personaVaild(fname) {
        var valElement = fname.val();
        if (valElement.length == 0) {
            fname.parents('.form-row').find('.error-message').show();
            fname.parents('.form-inner-field').addClass('addRed');
        } else {
            fname.parents('.form-row').find('.error-message').hide();
            fname.parents('.form-inner-field').removeClass('addRed');
            fname.parents('.form-row').removeClass('redRow');
        }
        var emailid = fname.attr('id');
        if (emailid == "personal-email") {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(valElement)) {
                fname.parents('.form-row').find('.error-message').show();
                fname.parents('.form-inner-field').addClass('addRed');
            } else {
                fname.parents('.form-row').find('.error-message').hide();
                fname.parents('.form-inner-field').removeClass('addRed');
                fname.parents('.form-row').removeClass('redRow');
            }
        }
    }

    /* Repayment Date */
    $('.dayDown label')
    $('.dayDown input').change(function(e) {
        var weekly_day = $(this).next('label').find('.ui-button-text span').text();
        if ($(this).is(':checked')) {
            $('#yes_agree').prop('checked', false);
            $('#yes_agree').next('label').attr('aria-pressed', false).removeClass('ui-state-active');
            $('.repay-next-div').parents('.btmFourty').toggleClass('titleHead');
            $('.repay-next-div').slideDown(function() {
                setSidebarHeight();
            });
            $('#repaymentDate p').html('Your first weekly repayment date will now be ' + weekly_day + ', ' + $(this).next('label').data('date') + 'th May');
            $('#repaymentDate').fadeIn();
            $('#weekly-due-date').html(weekly_day);
            $('html, body').animate({
                scrollTop: $('.repay-next-div').offset().top - $('#stepCarousel').innerHeight()
            }, 1000);
        }
    });

    $('#yes_agree').change(function(e) {
        $('.repay-next-div').parents('.btmFourty').toggleClass('titleHead');
        $('.dayDown input').prop('checked', false);
        $('.dayDown input').next('label').attr('aria-pressed', false).removeClass('ui-state-active')
        $('.repay-next-div').slideDown(function() {
            setSidebarHeight();
            $('html, body').animate({
                scrollTop: $('.repay-next-div').offset().top - $('#stepCarousel').innerHeight()
            }, 1000);
        });

    });
});