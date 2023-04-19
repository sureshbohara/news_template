var $ = jQuery;
jQuery('#menu-item>a').on('click', function() {
        var audio = document.getElementById("stream");
        audio.play();
});
jQuery('#audio-pause').on('click', function() {
        var audio = document.getElementById("stream");
        audio.pause();
});
jQuery('#search-icon').on('click', () => {
        jQuery('.search-box-wrap').toggle();
        if ((jQuery('#search-icon i').attr('class')).includes('fa-times')) {
                jQuery('#search-icon i').removeClass('fa-times');
        } else {
                jQuery('#search-icon i').addClass('fa-times');
        }
});
jQuery('#issues-list li').on('click', function(e) {
        e.preventDefault();
        let ilink = jQuery(this).find('a').attr('href');
        let ititle = jQuery(this).find('a').text();
        jQuery('#issues-input').val(ititle);
        jQuery('#issue-search-btn').attr('href', ilink);
        jQuery('#issues-list').css("display", "none");
});
jQuery("#issues-input").focus(function() {
        jQuery(".search-box-issue ul").css({
                "display": "block"
        });
});
jQuery('.single-post #primary, .single-post #secondary').theiaStickySidebar();


function toggleMainFunction() {
        var element = document.querySelector('.menu-menu-1-container');
        element.classList.toggle("menu_show");
}
jQuery('#nav-toggle').on('click', function() {
        jQuery(this).toggle();
        jQuery('#nav-toggle-close').toggle();
        jQuery('.main-navigation li').css('display', 'block');
});
jQuery('#nav-toggle-close').on('click', function() {
        jQuery(this).toggle();
        jQuery('#nav-toggle').toggle();
        jQuery('.main-navigation li').css('display', 'none');
});
jQuery('.menu-item-has-children').on('click', function() {
        jQuery(this).find('.sub-menu').toggle();
});
jQuery('#menu-bar a').on('click', function() {
        jQuery('#side-navigation').css('left', '0');
});
jQuery('#second-nav-close').on('click', function() {
        jQuery('#side-navigation').css('left', '-1000px');
});
jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 500) {
                jQuery('#myBtn').show();
        } else {
                jQuery('#myBtn').hide();
        }
});
jQuery('#myBtn').on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({
                scrollTop: 0
        }, '500');
});
jQuery('.side-titles h2 a').on('click', function() {
        jQuery('.side-titles h2').each(function() {
                jQuery(this).find('a').removeClass('active');
        });
        jQuery(this).addClass('active');
        jQuery('.tab-news-area .tab-news-wrap').each(function() {
                jQuery(this).hide();
        });
        var pclass = jQuery(this).attr('data-target');
        jQuery('.' + pclass).css('display', 'grid');
});
$(document).ready(function() {
        $("#issues-input").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#issues-list li").filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
        });
});
var modal = document.getElementById("radioModal");
var btn = document.getElementById("menu-item");
var span = document.getElementsByClassName("rd-close")[0];
btn.onclick = function() {
        modal.style.display = "block";
}
span.onclick = function() {
        modal.style.display = "none";
}
window.onclick = function(event) {
        if (event.target == modal) {
                modal.style.display = "none";
        }
}