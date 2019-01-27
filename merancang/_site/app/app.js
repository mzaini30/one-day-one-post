$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

$('.acak').click(function(){
	$('.list-group-item').shuffle()
})

$('.urut').click(function(){
	els = $('.list-group-item').get()
	els.sort(function(el1, el2){
	    return $(el1).text().trim().localeCompare($(el2).text().trim())
	})
	$('.list-group').append(els)
})

// save page position
// simpan ke database setiap acak dan urut