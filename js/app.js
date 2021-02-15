// DOM element
const sidebar = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const collapseLink = document.querySelectorAll('.collapse-link');
const content = document.querySelector('.chat-content');
const userName = document.querySelectorAll('.user-name');
const user = document.querySelectorAll('.user');
const talks = document.querySelectorAll('.talks');
const headers = document.querySelectorAll('.conversation-header');

// Event listener
navToggle.addEventListener('click', showMenu);
navLink.forEach(link => link.addEventListener('click', colorLink));
collapseLink.forEach(cL => cL.addEventListener('click', showCollapse));
user.forEach(user => user.addEventListener('click', selectItems));

// Show Menu
function showMenu() {
  sidebar.classList.toggle('expander-menu');

  if(sidebar.classList.contains('expander-menu')) {
    content.style.width = 'calc(100% - calc(92px + 6.2rem))';
    userName.forEach(user => user.style.marginLeft = '.700rem');
  } else {
    content.style.width = 'calc(100% - 92px)';
    userName.forEach(user => user.style.marginLeft = '0rem');
  }

  content.style.transition = '0.5s';
}

// Set active link
function colorLink() {
  navLink.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
}

// Collapse Menu
function showCollapse() {
  const collapseMenu = this.nextElementSibling;
  collapseMenu.classList.toggle('showCollapse');

  // Set rotate
  const rotate = collapseMenu.previousElementSibling;
  rotate.classList.toggle('rotate');
}

// Select Show
function selectItems() {
  removeShowTalk();

  // Add show for User active
  user.forEach(user => user.classList.remove('show'));
  this.classList.add('show');

  // Grab content item from DOM
  const talk = document.querySelector(`#${this.id}-content`);
  talk.classList.add('showTalk');

  // Header
  const header = document.querySelector(`#${this.id}-header`);
  header.classList.add('showHeader');
}

// Remove showTalk class from all content items
function removeShowTalk() {
  talks.forEach(item => item.classList.remove('showTalk'));
  headers.forEach(header => header.classList.remove('showHeader'));
}