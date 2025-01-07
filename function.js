function IsPrime (number)
{
    for (let i = 2; i <= number**(1/2); i++) 
    {
        if (number % i == 0) 
            return false
    }
    return true
}

function PrimeNumberBetween (x, y)
{
    const larger = Math.max(x,y)
    const smaller = Math.min(x,y)
    for (let num = smaller; num <= larger; num++)
        if (IsPrime(num))
            console.log(num)
}

function Month (number)
{
    if (number < 1 || number > 12 || !Number.isInteger(number))
        return 'Thang khong ton tai!!'
    else 
        return `Thang ${number}`
}

function LongestWord (line)
{
    const line_array = line.split(" ")
    let result = ""
    for (word in line_array)
        if (result.length < line_array[word].length)
            result = line_array[word]
    return result
}

function customTrimFn (line)
{
    let result = ""
    let space = ""
    let first_char = false
    for (i in line)
    {
        if (line[i] != " ")
        {
            if (first_char)
                result += space
            else 
                first_char = true
            result += line[i]
            space = ""
        }
        else 
            space += " "
    }
    return result
}