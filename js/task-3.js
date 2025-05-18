function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();

  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}
