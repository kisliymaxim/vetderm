import $ from 'jquery'
import {getSlider} from 'simple-slider/dist/simpleslider.min';

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
        initMasonry();
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

function initMasonry() {
    let mainId = 'masonry-effect';
    let itemIdentifier = '#masonry-effect .item';

    document.addEventListener('DOMContentLoaded', function (e) {
        // Programmatically get the column width
        let item = document.querySelector(itemIdentifier);
        let parentWidth = item.parentNode.getBoundingClientRect().width;
        let itemWidth = item.getBoundingClientRect().width + parseFloat(getComputedStyle(item).marginLeft) + parseFloat(getComputedStyle(item).marginRight);
        let columnWidth = Math.round((1 / (itemWidth / parentWidth)));

        // We need this line since JS nodes are dumb
        let arrayOfItems = Array.prototype.slice.call(document.querySelectorAll(itemIdentifier));
        let trackHeights = {};
        arrayOfItems.forEach(function (item) {
            // Get index of item
            let thisIndex = arrayOfItems.indexOf(item);
            // Get column this and set width
            let thisColumn = thisIndex % columnWidth;
            if (typeof trackHeights[thisColumn] == "undefined") {
                trackHeights[thisColumn] = 0;
            }
            trackHeights[thisColumn] += item.getBoundingClientRect().height + parseFloat(getComputedStyle(item).marginBottom);
            // If the item has an item above it, then move it to fill the gap
            if (thisIndex - columnWidth >= 0) {
                let getItemAbove = document.querySelector(`${itemIdentifier}:nth-of-type(${thisIndex - columnWidth + 1})`);
                let previousBottom = getItemAbove.getBoundingClientRect().bottom;
                let currentTop = item.getBoundingClientRect().top - parseFloat(getComputedStyle(item).marginBottom);
                item.style.top = `-${currentTop - previousBottom}px`;
            }
        });
        let max = Math.max(...Object.values(trackHeights));
        document.getElementById(mainId).style.height = `${max}px`;
    });
}