// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.
function century(year) {
    let firstHalf = Math.floor(year / 100) //get first 2 digits, in case the result gives decimal numbers like 17.05 or 0.8, use Math.floor to get the integer numbers
    let lastHalf = year % 100 // get last 2 digits
    if(lastHalf === 0 ){
      return(firstHalf)
    } else {
      return(firstHalf +=1)
    }
}