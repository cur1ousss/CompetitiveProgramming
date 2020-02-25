
//Write to /var/www/html/cached/widgets/aggregates/28938/9781617292231.js
var sa_cached = false;

var sa_filename = '/widgets/aggregates/28938/9781617292231.js';
// Cached 2020-02-17 05:00:02


var html = '<div id=\"sa_grp_9781617292231\" class=\"group-stars\"><span class=\"on\"></span><span class=\"on\"></span><span class=\"on\"></span><span class=\"on\"></span><span class=\"on half\"></span><span class=\"ind_cnt low\"><span class=\"ind_cnt_num\">5</span> <span class=\"ind_cnt_desc\">reviews</span></span></div>';
saJQ('.star_container.9781617292231').html(html);
if (typeof(sa_filled_aggregate) == 'undefined') {
    //var sa_filled_aggregate = {};
	var sa_filled_aggregate = [];
}
sa_filled_aggregate['9781617292231'] = { 'Count':5, 'Average':4.4 };
    


if (typeof(sa_cached) == 'undefined') {
    sa_cached = '1';
}
else {
    sa_cached = (sa_cached) ? '1' : '0';
}
if (typeof(sa_filename) != 'undefined') {
    var sa_this = document.querySelector('script[src*="'+sa_filename+'"]');
    var sa_file = (sa_this) ? sa_this.getAttribute('src'): null;
    if (!sa_file) {
        sa_file = sa_filename;
    }
}

