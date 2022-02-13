export function setResultUrls(data) {
  if (data.keys.includes('file')) {
    const file = document.getElementById('file');
    file.setAttribute('href', data.file);
    file.innerText = 'File';
  } else {
    const thumb = document.getElementById('thumb');
    const medium = document.getElementById('medium');
    const large = document.getElementById('large');

    thumb.setAttribute('href', data.thumb);
    thumb.innerText = 'Thumb';
    medium.setAttribute('href', data.medium);
    medium.innerText = 'Medium';
    large.setAttribute('href', data.large);
    large.innerText = 'Large';
  }
}

export function cleanResult() {
  const file = document.getElementById('file');
  const thumb = document.getElementById('thumb');
  const medium = document.getElementById('medium');
  const large = document.getElementById('large');

  file.setAttribute('href', '');
  file.innerText = '';
  thumb.setAttribute('href', '');
  thumb.innerText = '';
  medium.setAttribute('href', '');
  medium.innerText = '';
  large.setAttribute('href', '');
  large.innerText = '';

}
