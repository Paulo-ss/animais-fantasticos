export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const dataOutside = 'data-outside';

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      events.forEach((i) => {
        html.removeEventListener(i, handleOutsideClick);
      });

      element.removeAttribute(dataOutside);
      callback();
    }
  }

  if (!element.hasAttribute(dataOutside)) {
    events.forEach((i) => {
      setTimeout(() => {
        html.addEventListener(i, handleOutsideClick);
      });
    });

    element.setAttribute(dataOutside, '');
  }
}
