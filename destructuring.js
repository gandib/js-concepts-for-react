// array destructuring 
const numbers = [33, 56];
const [num1, num2] = numbers;

function boxify(num3, num4) {
    const nums = [num3, num4];
    return nums;
}

const [num3, num4] = boxify(45, 76);

// object destructuring
const employee = {
    ide: 'vs code',
    profession: 'developer',
    languages: ['html', 'css', 'js'],
    interest: {
        reading: 'book',
        watch: {
            color: 'black',
            brand: 'apple'
        }
    }
};

const [first, second, third] = employee.languages;
// const { brand } = employee.interest.watch;

// use optional chaining, jodi na thake tahole error dibe na
const { brand } = employee?.interest?.watch;