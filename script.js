
const typingElement = document.querySelector('.typing');
const words = ['Java Full Stack Developer', 'Backend Developer', 'Problem Solver'];
let i = 0;
let j = 0;
let current = '';
let isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    typingElement.innerText = current;

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 60 : 100);
    }
  }
}
document.addEventListener('DOMContentLoaded', type);
