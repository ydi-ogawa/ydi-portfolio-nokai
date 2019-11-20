$(function () {

    $('.index-btn').click(function () {
        var indexNo = $('.index-btn').index($(this));
        $('.index-active').removeClass('index-active');
        $('.active').removeClass('active').hide();
        $(this).addClass('index-active');
        $('.slide').eq(indexNo).fadeIn(700).css('display', 'flex').addClass('active');
    });

    $('.next-btn').click(function () {
        var slideindex = $('.slide').index($('.active'));
        $('.active').hide().removeClass('active');
        $('.index-active').removeClass('index-active');
        if (slideindex == 4) {
            $('.slide').eq(0).fadeIn(700).css('display', 'flex').addClass('active');
            $('.index-btn').eq(0).fadeIn(700).addClass('index-active');
        } else {
            $('.slide').eq(slideindex).next().fadeIn(700).css('display', 'flex').addClass('active');
            $('.index-btn').eq(slideindex).next().fadeIn(700).addClass('index-active');
        }
    });


    $('.prev-btn').click(function () {
        var slideindex = $('.slide').index($('.active'));
        $('.active').hide().removeClass('active');
        $('.index-active').removeClass('index-active');
        if (slideindex == 0) {
            $('.slide').eq(4).fadeIn(700).css('display', 'flex').addClass('active');
            $('.index-btn').eq(4).fadeIn(700).addClass('index-active');
        } else {
            $('.slide').eq(slideindex).prev().fadeIn(700).css('display', 'flex').addClass('active');
            $('.index-btn').eq(slideindex).prev().fadeIn(700).addClass('index-active');
        }

    });

    // $('.prefecture').click(function(){
    //     $(this).nextAll().eq(3).slideToggle(20);
    //     $(this).find('i').toggleClass('fa-rotate-180');
    //     $('.prefecture-item').not($(this).nextAll().eq(3)).slideUp(20);
    //     $('.prefecture').find('i').not($(this).find('i')).removeClass('fa-rotate-180');

    // })

    // 学校を探す
    $('.prefecture').click(function () {
        var prefectureI = $(this).find('i');
        $(this).nextAll().eq(3).slideToggle(20);
        prefectureI.toggleClass('fa-rotate-180');
        $('.prefecture-item').not($(this).nextAll().eq(3)).slideUp(20);
        $('.prefecture').find('i').not(prefectureI).removeClass('fa-rotate-180');
    })



    // QAアコーディオン
    $('.QA-contentQ').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('on');
    })

    // ページトップボタン
    var pageTop = $('.page-top');
    pageTop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });


    pageTop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;

    });

    // ハンバーガーメニュー
    var hamburger = $('.hamburger-tab');
    hamburger.hide();

    hamburger.on('click', function () {
        $(this).toggleClass('on');
        $('.hamburger-contents').toggleClass('slidein');
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            hamburger.fadeIn();
            $('.hamburger-contents').fadeIn();
        } else {
            hamburger.fadeOut();
            $('.hamburger-contents').fadeOut();
        }
    });
















});
