# Type Inference

    - Variable Declaration: Telling our program we have a new declaration.
    - Variable Initalization: Assigning a value to a variable for the first time.

    - const color = "red"

    - Variable Declaration: const color
    - Variable Initialization: "red"

    - If we do our declaration and initialization on the same line, TypeScript will figure out the type of 'color' for us.

## Example

    - const apples
    - apples = 5;

    - apples will have type: any 
    - We did not declare and initalize the variable at the same time so TypeScript does not know what type it is.