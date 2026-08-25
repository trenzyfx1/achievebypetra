document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  var key = e.key;
  var blocked =
    key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (key === 'I' || key === 'i')) ||
    (e.ctrlKey && e.shiftKey && (key === 'J' || key === 'j')) ||
    (e.ctrlKey && e.shiftKey && (key === 'C' || key === 'c')) ||
    (e.ctrlKey && (key === 'U' || key === 'u')) ||
    (e.metaKey && e.altKey && (key === 'I' || key === 'i')) ||
    (e.metaKey && e.altKey && (key === 'J' || key === 'j')) ||
    (e.metaKey && e.altKey && (key === 'C' || key === 'c'));

  if (blocked) {
    e.preventDefault();
    e.stopPropagation();
  }
});