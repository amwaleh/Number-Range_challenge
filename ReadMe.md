

HOW TO RUN THIS PROJECT:

you will need node on your machine :P


install node packages by running

`npm install`

once the packages are installed run

`npm run dev`


Insert Numbers separated by space and click submit!!!!









________________________________________
It's difficult to spot what's missing in a long list of numbers if they are just listed one after the other. The idea is to organize the numbers into ranges.

Write a script that does the following:

1. Show a form with a text input and submit button.

2. Process a set of space-separated numbers on from the form. The numbers will

always be arranged from highest to lowest. No need to validate that the input has

numbers.

3. Print out a set of ranges on another page formatted according to the following rules

I. Numbers which appear sequentially in the input should be grouped with the

first number and last number in the sequence separated by a hyphen.

II. Numbers which appear in the input on their own should not be collapsed into

a range.

III. Ranges and single numbers in your output should be separated by a comma

and a space (", "), and the list of ranges should end with a full-stop (".")

Examples

1. "1 2 3" => "1-3."

2. "1 2 3 5 7 8" => "1-3, 5, 7-8."

3. "1 3 4 5 7" => "1, 3-5, 7."