function generateRandomEmail() {
  const firstNames = ['john', 'mark', 'paul', 'luke', 'mike'];
  const lastNames = ['smith', 'johnson', 'williams', 'brown', 'jones'];
  const domains = ['gmail.com', 'yahoo.com', 'outlook.com'];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomNumber = Math.floor(10 + Math.random() * 90);
  const domain = domains[Math.floor(Math.random() * domains.length)];

  return `${firstName}.${lastName}${randomNumber}@${domain}`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const email = generateRandomEmail();
  const li = document.createElement('li');
  li.textContent = email;

  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Copy';
  copyBtn.className = 'copyBtn';

  copyBtn.onclick = () => {
    navigator.clipboard.writeText(email);
    copyBtn.textContent = '✅ Copied!';
    setTimeout(() => copyBtn.textContent = '📋 Copy', 1500);
  };

  li.appendChild(copyBtn);
  document.getElementById('emailList').appendChild(li);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  document.getElementById('emailList').innerHTML = '';
});

document.getElementById('toggleModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
