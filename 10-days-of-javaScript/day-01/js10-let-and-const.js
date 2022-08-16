// https://www.hackerrank.com/challenges/js10-let-and-const/problem

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const radius = readLine()
    
    // Print the area of the circle:
    console.log(PI * (radius ** 2))
    
    // Print the perimeter of the circle:
    console.log(2 * (PI * radius))
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}