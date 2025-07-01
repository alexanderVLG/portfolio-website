new Glide('.glide', {
  type: 'carousel',  // 'slider' (не зацикленный) или 'carousel' (бесконечный)
  startAt: 0,        // Начинать с первого слайда
  perView: 3,        // Сколько слайдов показывать одновременно
  autoplay: 5000,    // Автопрокрутка (мс)
  hoverpause: true,
  breakpoints: {
     1200: {
		perView: 2,
	 },
     767: {
		perView: 1
	 }
  }  // Пауза при наведении
}).mount();
