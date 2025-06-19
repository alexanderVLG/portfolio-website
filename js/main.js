new Glide('.glide', {
  type: 'carousel',  // 'slider' (не зацикленный) или 'carousel' (бесконечный)
  startAt: 0,        // Начинать с первого слайда
  perView: 2,        // Сколько слайдов показывать одновременно
  autoplay: 2000,    // Автопрокрутка (мс)
  hoverpause: true,  // Пауза при наведении
}).mount();
