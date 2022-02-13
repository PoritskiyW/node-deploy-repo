import { cleanResult, setResultUrls } from './utils';
import './styles/styles.scss';

function addListener(id: string, event: string, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(event, callback);
    return true;
  }
  return false;
}

function getImageFromNode(id) {
  const node = document.getElementById(id);
  if (node) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return node.files[0];
  }
  return false;
}

function formHandler(event) {
  event.preventDefault();
  const image = getImageFromNode('imageInput');
  const fileName = image.name;
  const file = new File([image], fileName);
  const data = new FormData();
  data.append('file', file);

  fetch(`/${fileName}`, {
    method: 'POST',
    body: data,
  }).then((res) => {
    res.json().then((result) => {
      cleanResult();
      setResultUrls(JSON.parse(result));
    });
  });
}

function init() {
  addListener('imageForm', 'submit', formHandler);
}

init();
