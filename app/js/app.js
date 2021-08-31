import $ from 'jquery'
import { tns } from 'tiny-slider/src/tiny-slider';
import masonry from 'masonry-layout/dist/masonry.pkgd.min';

const jQueryBridget = require('jquery-bridget/jquery-bridget');
const Masonry = require('masonry-layout');
$.bridget('masonry', Masonry, $);

$(document).ready(function () {

    const $sliderWrapper = $('.slider-wrapper');
    if ($sliderWrapper.length > 0) {
        const slider = tns({
            container: '.slider-wrapper .slider',
            items: 1,
            slideBy: 'page',
            autoplay: false,
            autoplayButton: false,
            nav: false,
            controls: false
        });

        $sliderWrapper.find('.slider-control.prev').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            slider.goTo('prev');
        });

        $sliderWrapper.find('.slider-control.next').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            slider.goTo('next');
        });
    }

    const $letterBlocks = $('.letter-blocks');
    if ($letterBlocks.length > 0) {
        initMasonry($letterBlocks, '.letter-block');
    }

    $('header .actions .search').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('header .search-wrapper').addClass('active');
    });

    $('header .search-wrapper .close').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('header .search-wrapper').removeClass('active');
    });

    $('header .actions .menu').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('header .menu-wrapper').addClass('active')
    });

    $('header .menu-wrapper .close').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('header .menu-wrapper').removeClass('active');
    });

    $('.banner .wrapper .image-part video').mouseover(function(){
        $(this).get(0).play();
    }).mouseout(function(){
        $(this).get(0).pause();
    })
});

function initMasonry(selector, itemSelector) {
    selector.masonry({
        itemSelector,
        gutter: 20
    });
}