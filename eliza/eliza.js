// Initialize the conversation history
const chatHistory = document.getElementById('chat-history');

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user's message
    displayMessage('User', userInput);

    // Generate ELIZA's response
    const elizaResponse = generateElizaResponse(userInput);

    // Display ELIZA's response
    displayMessage('ELIZA', elizaResponse);

    // Clear the input field
    document.getElementById('user-input').value = '';
}

// Function to display a message in the chat history
function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Function to generate ELIZA's response
function generateElizaResponse(input) {
    // Simple response logic for demonstration purposes
    if (input.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (input.toLowerCase().includes('how are you')) {
        return 'I am just a program, but I am functioning as expected.';
    } else {
        return 'Tell me more about that.';
    }
}