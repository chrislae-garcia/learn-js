# Guest List Exercise

In this exercise, create a program that takes a list of names stored in an array and put them into a guest list. Reject Phil and Lola in because they are greedy and rude, and always eat all the food! The exercise has provided two lists: one for guests to admit, and one for guests to refuse.

Specifically, the exercise wants for me to:

- Write a loop that will iterate through the `people` array.
- During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
  - If it is, concatenate the array item to the end of the `refused` paragraph's `textContent`, followed by a comma and a space.
  - If it isn't, concatenate the array item to the end of the `admitted` paragraph's `textContent`, followed by a comma and a space.

The exercise has already provided me with:

- `refused.textContent +=` — the beginnings of a line that will concatenate something on to the end of `refused.textContent`.
- `admitted.textContent +=` — the beginnings of a line that will concatenate something on to the end of `admitted.textContent`.

Extra bonus question — after completing the above tasks successfully, I will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#active_learning_filling_in_a_guest_list)