setTimeout(() => {
  messages.push({
    text: "Salom! Bu test xabari. Sayt juda chiroyli bo'libdi!",
    senderName: "Javohir",
    senderContact: "998901234567",
    timestamp: new Date(Date.now() - 120000).toLocaleString('uz-UZ', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }),
    id: Date.now() - 120000
  });
  
  messages.push({
    text: "Rahmat, juda yoqdi!",
    senderName: "Anora",
    senderContact: "anora@email.com",
    timestamp: new Date(Date.now() - 60000).toLocaleString('uz-UZ', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }),
    id: Date.now() - 60000
  });
}, 1000);

