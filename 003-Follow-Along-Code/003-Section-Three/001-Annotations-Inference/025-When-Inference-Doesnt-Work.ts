// Variable whose type cannot be inferred correctly.

const numbers: number[] = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i: number = 0; i < numbers.length; i++)
{
    if (numbers[i] > 0)
    {
        numberAboveZero = numbers[i];
    }
}