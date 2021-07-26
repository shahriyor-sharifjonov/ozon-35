CKEDITOR.replace('editor1', {
  height: 'none',
  baseFloatZIndex: 10005,
  toolbarGroups: [
  {
    "name": "document",
    "groups": ["mode"]
  },
  {
    "name": "links",
    "groups": ["links"]
  },
  {
    "name": "basicstyles",
    "groups": ["basicstyles"]
  },
  {
    "name": "paragraph",
    "groups": ["list", "blocks"]
  },
  {
    "name": "insert",
    "groups": ["insert"]
  },
  {
    "name": "styles",
    "groups": ["styles"]
  },
  {
    "name": "about",
    "groups": ["about"]
  }
],
// Remove the redundant buttons from toolbar groups defined above.
removeButtons: 'Specialchar'
});


const tag = document.querySelectorAll('.asmuchasyoulike');

tag.forEach(el => {
  el.addEventListener('click', ()=>{
    el.classList.toggle('current');
  })
})

$(function() {
  $('.limited').click(function() {
    $('.limited').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

const zagolovok = document.querySelector('#zagalovok').value;
const zagolovokres = document.querySelector('#zagalovokres');
const title = document.querySelector('#title').value;
const titleres = document.querySelector('#titleres');
const desc = document.querySelector('#desc').value;
const descres = document.querySelector('#descres');
const ks = document.querySelector('#ks').value;
const ksres = document.querySelector('#ksres');
const contentTextres = document.querySelector('#contentTextres');

let interval = setInterval(() => {
  const zagolovok = document.querySelector('#zagalovok').value;
  const title = document.querySelector('#title').value;
  const desc = document.querySelector('#desc').value;
  const ks = document.querySelector('#ks').value;
  const contentText = CKEDITOR.instances['editor1'].getData();

  
  contentTextres.innerHTML = contentText.length + " из 4789";
  zagolovokres.innerHTML = zagolovok.length + " из <span class=\"green\">80</span>";
  titleres.innerHTML = title.length + " из <span class=\"green\">80</span>";
  descres.innerHTML = desc.length + " из <span class=\"green\">80</span>";
  ksres.innerHTML = ks.length + " из <span class=\"green\">80</span>";
}, 100);

