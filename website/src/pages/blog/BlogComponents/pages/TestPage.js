import React from 'react'
import BlogPage from '../BlogPage/BlogPage';
import CodeBlock from '../CodeBlock/CodeBlock'
import MathsBlock from '../MathsBlock/MathsBlock';

import decimal_to_n_ary from './utilities';

import '../BlogPage/BlogPage.css';

const general_code = `
def convert_decimal_to_n_ary(decimal: int, base:int) -> str:
    """Converts from decimal numbers to n-arry so long as n <= 9.
    We could add a dictionary detailing extra characters to go to as high a base as we like.

    Parameters
    ----------
    decimal : int
        Any decimal number

    Returns
    -------
    str
        The binary output
    """
    n_string = ''
    while decimal // base != 0:
        n_string += str(decimal % base)
        decimal  = decimal // base
    n_string += str(decimal)
    # Return reversed binary string
    return n_string[::-1]

# Run checks
bases = list(range(2,10))
nums = [80,90,1,0,2332]

for base in bases:
    for num in nums:
        converted_num = convert_decimal_to_n_ary(num,base)
        print(f"""
        N-ary conversion
        ==================================
        base                     : {base}
        decimal number           : {num}
        n-ary representation     : {converted_num}
        ==================================
        """)
        assert int(converted_num,base) == num
`

export default function TestPage() {
  return (
    <div className='page-div'>
        <BlogPage
        title = "Turning decimal to n-arry numbers 🤓"
        content= {<h2>Introduction</h2>}
        ></BlogPage>
        <p>
            In this blog post we explore the question of converting from decimal numbers to any other number system!     
        </p>
        <h2>An introduction to n-array numbers: binary numbers</h2>
        <p>
            We are used to decimal numbers like the number 10, in binary numbers 10 is expressed as 1010.
            But how does this work?
        </p>
        <p>
            It is first important to look at decimal numbers and how they are written, consider the number 144, 
            this number can be broken up into 1's, 10's and 100's, so if we display it like a sum:
            <MathsBlock content={`$144 = 100(1) + 10(4) +1(4)$`}></MathsBlock> We can see here that the digits
            are simply the multipliers of powers of 10! the first digit is 10^0 (1) the second is 10^1 (10) and 
            the third is 10^2 (100). This is how we represent decimal numbers, and binary numbers arent too different.
        </p>
        <p>
            As you may have guessed, binary numbers use a base of 2 instead of 10, meaning that in each digits place a
            power of 2 is represented. So the binary number: <MathsBlock content={`$1011 = 2^3(1)+2^2(0)+2^1(1)+2^0(0) = 11$`}></MathsBlock>
            Note that on the left we have the binary numebr 1011 and on the right we have the decimal number 11. So, how do we 
            convert between the two? Is there a programatic way?
        </p>
        <p>
            To look into this we look at dividing by powers of two, say we have the number 10, 10 divided by 2 has a remainder of 0
            meaning that there is no factor of one in the binary representation of 10, thus the final digit must be 0. 10 divided 
        </p>
        <br></br>
        <CodeBlock
            code = {general_code}
        ></CodeBlock>
       
    </div>
  )
}
