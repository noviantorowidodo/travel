// event pada saat link di klik
$ ('.page-scroll').on('click', function(e){

	// amnbil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap element ybs
	var elemenTujuan = $(tujuan);
	
	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');

	e.preventDefault();
 

});