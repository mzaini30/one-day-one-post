---
---

if (localStorage.getItem('list blog {{ site.time }}') != null){
	$('.list-group').html(localStorage.getItem('list blog {{ site.time }}'))
}

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

$('.acak').click(function(){
	$('.list-group-item').shuffle()
	localStorage.setItem('list blog {{ site.time }}', $('.list-group').html())
})

$('.urut').click(function(){
	els = $('.list-group-item').get()
	els.sort(function(el1, el2){
	    return $(el1).text().trim().localeCompare($(el2).text().trim())
	})
	$('.list-group').append(els)
	localStorage.setItem('list blog {{ site.time }}', $('.list-group').html())
})

// save page position

posisi_scroll = localStorage.getItem('one day one post')
$('html, body').animate({
	scrollTop: posisi_scroll
}, 700)
$(window).scroll(function(){
	localStorage.setItem('one day one post', $(window).scrollTop())
})

// simpan ke database setiap acak dan urut