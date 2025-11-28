// small JS: theme toggle, typing-like phrase cycle, simple contact form handler
const themeBtn = document.getElementById('theme-toggle');
const yearEl = document.getElementById('year');
const typedEl = document.getElementById('typed');
yearEl.textContent = new Date().getFullYear();

const phrases = [
  'I build cloud-native apps, automate infra, and ship code.',
  'AWS • Docker • Terraform • Ansible',
  'Open to Cloud internships & DevOps roles'
];
let pi = 0;
let char = 0;
let forward = true;

function typeLoop() {
  const text = phrases[pi];
  typedEl.textContent = text.slice(0, char);
  if (forward) {
    char++;
    if (char > text.length) { forward = false; setTimeout(typeLoop, 1200); return; }
  } else {
    char--;
    if (char < 0) { forward = true; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(typeLoop, forward ? 60 : 30);
}
typeLoop();

themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  if (!root.style.getPropertyValue('--bg') || root.style.getPropertyValue('--bg') === '#0f1724') {
    // light-ish theme
    root.style.setProperty('--bg', '#f6fafb');
    root.style.setProperty('--card', '#ffffff');
    root.style.setProperty('--text', '#071428');
    root.style.setProperty('--muted', '#6b7280');
    root.style.setProperty('--accent', '#3b82f6');
  } else {
    // dark theme
    root.style.setProperty('--bg', '#0f1724');
    root.style.setProperty('--card', '#0b1220');
    root.style.setProperty('--text', '#e6eef8');
    root.style.setProperty('--muted', '#9fb2c8');
    root.style.setProperty('--accent', '#6dd3b3');
  }
});

function handleForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks — message simulated (no backend).';
  setTimeout(()=> status.textContent = '', 4000);
}

