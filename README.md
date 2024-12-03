# Emerging-Technologies

## Tasks
### What this section is about and what does it do:

The Trigrams.ipynb File is a file containing Python Code to create Trigrams from books in the Books folder. 
There were 3 Tasks to be completed:
- Task 1: Third-order letter approximation model
  - This Task counts the number of times each sequence of three characters (that is, each trigram) appears in a text.
  - For example, the sentence: It is what it is. would become IT IS WHAT IT IS. This will give a model like ``{'IT ': 2, 'T I': 3, ' IS': 2, 'IS ': 1, ...}``.
    
- Task 2: Third-order letter approximation generation
  - This Task used the Model from Task 1 to generate a String of 10,000 characters. Starting with the String ``TH`` it generates each next character by looking at the previous two characters.
  - It finds the trigrams in the model that start with those two characters. Randomly selects one of the third letters of those trigrams, using the counts as weights.

- Task 3: Analyze your model
  - Using ``Words.txt``, it determines how many of the 10,000 characters are actually english words.

After these tasks were completed, There is a JSON file outputted that has all of the markdown along with the code in the JSON format.

## Eliza Chatbot Project
### Link to Github Pages:
https://leventekalman02.github.io/Emerging-Technologies-Tasks/

### What this section is about and what does it do:

The Eliza Chatbot is a copy of the original Eliza Chatbot created in the mid 1960s. 

It has preset responses to the messages entered by the user. 
It does this by searching for key words in the message and then responding correctly.
For example, If you say ``Hi`` it will respond with a random selection from a group of possible answers such as ``Hi, How are you?``, or if you say ``I feel Happy`` it will recognise that and respond with again a random answer from a selection such as ``How long have you been feeling Happy?``.

It removes punctuation from sentences, so if you say ``I feel Happy?``, the ``?`` will be removed so it doesnt detect it and send it back with it's response.
