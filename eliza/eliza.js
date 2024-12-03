// Initialize the conversation history
const chatHistory = document.getElementById('chat-history');

//send the message when the button is clicked or the enter key is pressed
//btn.addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    //check if the message is empty
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

// Dictionary of predefined responses with multiple options
const responses = {
    'hello|hi|hey': [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    'you remind me of (.*)': [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?"
    ],
    'mother|father|family|parent (.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    'I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    'I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    'I feel (.*)': [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?"
    ],
    '(.*) sorry|apologize (.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again."
    ],
    'sad|unhappy|depressed': [
        "I'm sorry you feel that way.",
        "It's okay to feel sad sometimes. Do you want to talk about it?",
        "I'm here for you. What's making you feel this way?"
    ],
    '(.*)': [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on."
    ]
};

const transformations = {
    'i am': 'you are',
    'i was': 'you were',
    'i': 'you',
    'me': 'you',
    'my': 'your',
    'am i': 'are you',
    'are you': 'am I',
    'you are': 'I am',
    'you were': 'I was',
    'your': 'my',
    'yours': 'mine',
    'you': 'me'
};

// Function to generate ELIZA's response
function generateElizaResponse(input) {
    const lowerInput = input.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
        const regex = new RegExp(key, 'i');
        const match = regex.exec(lowerInput);
        if (match) {
            const responsesArray = value;
            const randomIndex = Math.floor(Math.random() * responsesArray.length);
            let response = responsesArray[randomIndex];
            match.slice(1).forEach((group, index) => {
                const transformedGroup = transformInput(group);
                response = response.replace(`{${index}}`, transformedGroup);
            });
            return response;
        }
    }
    return transformInput(input);
}

// Function to transform input for pronouns and tense
function transformInput(input) {
    let transformedInput = input;

    for (const [key, value] of Object.entries(transformations)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        transformedInput = transformedInput.replace(regex, value);
    }

    return `Why do you say ${transformedInput}?`;
}