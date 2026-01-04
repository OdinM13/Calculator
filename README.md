# Simple JavaScript Calculator

A functional, web-based calculator built as a learning project to master DOM manipulation, JavaScript logic, and CSS Flexbox layouts.

## Project Description

This project demonstrates the implementation of a classic calculator interface. It focuses on solving typical programming challenges such as state management for mathematical operations, handling data types between the UI and logic, and creating a structured layout using only Flexbox.

## Features

* Basic Arithmetic: Supports addition, subtraction, multiplication, and division.
* Chain Calculations: Handles continuous operations (e.g., 3 + 4 * 2) by managing primary and secondary operators.
* Dynamic Display: Real-time updates of input values and results using the DOM.
* Clear Function (AC): A dedicated reset function to clear all variables and the display.
* Flexbox Grid Layout: A structured 3-column number grid and a separate operator block built without CSS Grid.

## Technologies Used

* HTML5: Semantic structure for the calculator interface.
* CSS3: Advanced layout techniques using Flexbox, including grouping and spacing (gap).
* JavaScript (ES6+): 
    * Event Delegation and Listeners for user interaction.
    * Variable state management for first/second numbers and operators.
    * Type conversion logic to handle string inputs and numerical calculations.

## File Structure

* index.html: Defines the calculator's structure and button hierarchy.
* styles.css: Contains the Flexbox layout logic and visual styling.
* main.js: Contains the core calculation logic and DOM manipulation.

## Technical Implementation Details

### Logic and State Management
The calculator captures multi-digit inputs as strings (helpingNumber) before converting them to actual numbers. This approach ensures that the number "0" and empty inputs are handled correctly without triggering logic errors during operations.

### Flexbox Layout Logic
The layout is organized into two main blocks:
1. Numbers Block: Uses flex-wrap and a fixed width to force a 3-column keypad.
2. Functions Block: Organized into two vertical columns for operators and system actions (Equal/AC).
Visual separation between these blocks is achieved through a deliberate hierarchy of gap properties.

## How to Run

1. Clone or download the project files.
2. Open the index.html file in any modern web browser.
3. Use the on-screen buttons to perform calculations.

## Planned Improvements

* Implementation of a decimal point (.) with logic to prevent multiple entries.
* Keyboard support for numeric and operator keys.
* A backspace function to delete the last entered digit.
* Enhanced mobile responsiveness.
