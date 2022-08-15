// https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

/**
 *  Calculate the area of a rectangle.
 *
 *  length: The length of the rectangle.
 *  width: The width of the rectangle.
 *   
 *  Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    let area;
    area = Number(length) * Number(width)
    
    return area;
}

/**
 *  Calculate the perimeter of a rectangle.
 *	
 *	length: The length of the rectangle.
 *  width: The width of the rectangle.
 *   
 *  Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (Number(length) + Number(width))
    
    return perimeter;
}