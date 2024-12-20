const share = document.getElementById('share');

share.addEventListener('click', () => {

  const social = document.getElementById('social');

  if (social.style.display === 'none') {
    social.style.display = 'block';
    social.style.display = "flex";
  } else {
    social.style.display = 'none';
  }
});