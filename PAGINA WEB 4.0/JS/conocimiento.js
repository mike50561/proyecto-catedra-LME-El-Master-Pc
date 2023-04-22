const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Si el elemento está activo, desactívalo
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.maxHeight = null;
    }
    // Si el elemento no está activo, activa este y desactiva todos los demás
    else {
      accordionItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
      });

      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

