<script>
  const thankBtn = document.getElementById('thankBtn');
  const helpBtn = document.getElementById('helpBtn');
  const messageForm = document.getElementById('messageForm');
  const contactLinks = document.getElementById('contactLinks');
  const sendBtn = document.getElementById('sendBtn');
  const userMessage = document.getElementById('userMessage');
  const userName = document.getElementById('userName');
  const userContact = document.getElementById('userContact');
  const response = document.getElementById('response');
  const messagesDisplay = document.getElementById('messagesDisplay');
  const messagesList = document.getElementById('messagesList');

  // Array to store messages
  let messages = [];

  thankBtn.addEventListener('click', () => {
    messageForm.style.display = 'block';
    contactLinks.style.display = 'none';
    response.style.display = 'none';
  });

  helpBtn.addEventListener('click', () => {
    contactLinks.style.display = 'block';
    messageForm.style.display =
