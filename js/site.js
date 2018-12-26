$(document).ready(function(){
	 $("#owl").owlCarousel({	 
		items : 2,
		navigation : true,
		pagination: false
	 });
	 
	p = $('.popup__overlay')
	$('#popup__toggle, .mycity .city-name').click(function() {
		p.css('display', 'block');
		$('.mycity .city-name').addClass('city-popup');
	})
	p.click(function(event) {
		e = event || window.event
		if (e.target == this) {
			$(p).css('display', 'none');
			$('.mycity .city-name').removeClass('city-popup');
		}
	})
	$('.popup__close').click(function() {
		p.css('display', 'none');
		$('.mycity .city-name').removeClass('city-popup');
	});
	var mapWidth = $('.map-contacts').width();
	$('.big-map .map-contacts').css('margin-left', '-'+mapWidth/2+'px');
});
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [53.202766,50.148541],
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark([53.202766,50.148541], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Россия, Самара, Московское шоссе, 3",
            
        });
		myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });
  		myMap.geoObjects.add(myPlacemark);

    
    
}
