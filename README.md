# Emerging-Technologies

## Tasks
### What this section is about and what does it do:

The Trigrams.ipynb File is a file containing Python code to create trigrams from books in the Books folder.

There were 3 tasks to be completed:
- Task 1: Third-order letter approximation model
  - This task counts the number of times each sequence of three characters (that is, each trigram) appears in a text.
  - For example, the sentence: ``It is what it is``. would become ``IT IS WHAT IT IS``. This will give a model like ``{'IT ': 2, 'T I': 3, ' IS': 2, 'IS ': 1, ...}``.
    
- Task 2: Third-order letter approximation generation
  - This task used the Model from Task 1 to generate a String of 10,000 characters. Starting with the String ``TH`` it generates each next character by looking at the previous two characters.
  - It finds the trigrams in the model that start with those two characters. Randomly selects one of the third letters of those trigrams, using the counts as weights.

- Task 3: Analyze your model
  - Using ``Words.txt`` and the code from the previous tasks, it determines the precentage of how many of the 10,000 characters are actually english words and outputs the precentage along with the number of valid words and the total word count.

After these tasks were completed, There is a JSON file outputted that has all of the markdown along with the code in the JSON format.

### How to get started with this project:

If you have a Github Codespace or even Visual Studio Code available you can immediate open the repository and run the Python code in the Trigrams.ipynb file.

This file contains Markdown explaining each task and what needs to be done along with comments inside the code cells that explain what the code does.

## Eliza Chatbot Project
### Link to Github Pages:
[Github Pages For Eliza Chatbot](https://leventekalman02.github.io/Emerging-Technologies-Tasks/)

### What this section is about and what does it do:

The Eliza Chatbot is a copy of the original Eliza Chatbot created in the mid 1960s. 

It has preset responses to the messages entered by the user. It does this by searching for key words in the message and then responding correctly.

For example, If you say ``Hi`` it will respond with a random selection from a group of possible answers such as ``Hi, How are you?``, or if you say ``I feel Happy`` it will recognise that and respond with again a random answer from a selection such as ``How long have you been feeling Happy?``.

It removes punctuation from sentences, so if you say ``I feel Happy?``, the ``?`` will be removed so it doesnt detect it and send it back with it's response.

### How to get started with this project:

If you ``Click`` the Github Pages link above, it should take you to the Eliza Chatbot chat where you can start chatting with the bot immediately. 

Some of the prompts include: 
- Hello
- I need ...
- I feel ...
- I am ...
- Goodbye
  
(The "..." represents any word that you can input so for example, ``I feel Happy``).

[Give it a try here!!](https://leventekalman02.github.io/Emerging-Technologies-Tasks/)
