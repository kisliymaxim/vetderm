import $ from 'jquery'
import {getSlider} from 'simple-slider/dist/simpleslider.min';
import masonry from 'masonry-layout/dist/masonry.pkgd.min';

const jQueryBridget = require('jquery-bridget/jquery-bridget');
const Masonry = require('masonry-layout');
$.bridget( 'masonry', Masonry, $ );

$(document).ready(function () {

    const $sliderWrapper = $('.slider-wrapper');
    if ($sliderWrapper.length > 0) {
        const slider = getSlider({
            duration: 1,
            delay: 5000
        });

        $sliderWrapper.find('.slider-control.prev').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            slider.prev();
        });

        $sliderWrapper.find('.slider-control.next').click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            slider.next();
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
});

function initMasonry(selector, itemSelector) {
    selector.masonry({
        itemSelector,
        gutter: 20
    });}