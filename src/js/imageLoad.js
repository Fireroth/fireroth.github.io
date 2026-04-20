document.querySelectorAll('.project-image-placeholder img').forEach(img => {
  const placeholder = img.parentElement;

  const onLoad = () => {
    img.classList.add('loaded');
    placeholder.classList.add('img-loaded');
  };

  if (img.complete && img.naturalWidth > 0) {
    onLoad();
  } else {
    img.addEventListener('load', onLoad);
    img.addEventListener('error', () => {
      placeholder.classList.add('img-loaded');
    });
  }
});