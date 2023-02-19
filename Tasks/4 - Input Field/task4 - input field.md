# Working Days Calculator

A working days calculator is an application that helps you to determine the number of working days in a given year, taking into account the number of holidays and the number of vacation days. In this task, you will create a simple HTML + JavaScript app that implements this functionality

## HTML Code

The HTML code defines the structure of the application and contains three [input fields](https://www.w3schools.com/tags/tag_input.asp) and one [readonly](https://www.w3schools.com/tags/att_input_readonly.asp) field. The three input fields are:

1. Days in Year: a number input field that represents the number of days in the year
2. Holidays: a number input field that represents the number of holidays in the year
3. Vacation: a number input field that represents the number of vacation days in the year

The readonly field is:

4. Working Days: a text input field that shows the calculated number of working days

## JavaScript Code

The JavaScript code implements the logic to calculate the working days. The logic is straightforward: the number of working days is equal to the number of days in the year minus the number of holidays and the number of vacation days.

In the JavaScript code, you need to create a function that takes the values of the three input fields and updates the value of the read-only field accordingly. You also need to call this function whenever the user changes the values of the input fields.

## Steps to Create the Code

1. Create an HTML file with the following structure:
   - A script tag that [links](https://www.w3schools.com/tags/att_script_src.asp) to a separate JavaScript file
   - Three input fields (`daysInYear`, `holidays`, and `vacation`) with labels and `id` attributes
   - 
   - One read-only field (`workingDays`) with a label and `id` attribute

2. Create a separate JavaScript file with the following contents:
   - A function that calculates the working days based on the values of the input fields (use [getElementById](https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById) function and [value](https://www.w3schools.com/jsref/prop_text_value.asp) property for this)
   - A call to the function that is triggered whenever the values of the input fields change (use [oninput](https://www.w3schools.com/jsref/event_oninput.asp) attribute for this)

3. Test the application to make sure that the working days field updates automatically whenever the values of the input fields change.
