const getLargestNNumbersLessThanM = (n:number, m:number)=>{
    let largestNNumbers=[]
    let x = m
    while(largestNNumbers.length<n && x>0){
            largestNNumbers.push(x--)
    }
    return largestNNumbers
}
const getSmallestNNumbersLargerThanM = (n:number, m:number,limit:number)=>{
    const noSmalestNNumbers = Math.min(Math.min(limit-m,n), n)
    let smallestNumbers= []
    let x = m 
    while (smallestNumbers.length<noSmalestNNumbers)
        smallestNumbers.unshift(++x)

    return smallestNumbers
}
export {getLargestNNumbersLessThanM, getSmallestNNumbersLargerThanM}

// getLargestNNumbersLessThanM(4,1) should be []
// getLargestNNumbersLessThanM(4,2) should be [1]
// getLargestNNumbersLessThanM(4,3) should be [1,2]
// getLargestNNumbersLessThanM(4,4) should be [1,2,3]
// getLargestNNumbersLessThanM(4,5) should be [1,2,3,4]
// getLargestNNumbersLessThanM(4,6) should be [2,3,4,5]
// getLargestNNumbersLessThanM(4,7) should be [3,4,5,6]
// getLargestNNumbersLessThanM(4,8) should be [4,5,6,7]
// getLargestNNumbersLessThanM(4,20) should be [16,17,18,19]
