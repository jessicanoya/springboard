# **Big-O Notation Practice**

In this exercise, you’ll analyze expressions and code to figure out the time complexity.

## **Step One: Simplifying Expressions**

Simplify the following big O expressions as much as possible:

1. O(n + 10) \
   Constants are usually ignored because they don't affect the overall growth so O(n)

2. O(100 \* n) \
   O(n)

3. O(25) \
   Constant time complexity which does not depend on the size of any input n, therefore, O(1)

4. O(n^2 + n^3) \
   Focus on the dominant term with the highest growth rate, therefore, O(n^3)

5. O(n + n + n + n) \
   Reduce down to O(4n) but since constants dont matter its O(n)

6. O(1000 \* log(n) + n) \
   Logarithmic growth is slower than linear growth. The dominant term is n, therefore, O(n)

7. O(1000 \* n \* log(n) + n) \
   1000 \* n \* log(n) grows faster than n because it has both a linear n and a logarithmic log(n), therefore, O(1000 \* n \* log(n))

8. O(2^n + n^2) \
   O(2^n)

9. O(5 + 3 + 1) \
   O(1)

10. O(n + n^(1/2) + n^2 + n \* log(n)^10) \
    a. n is linear growth \
    b. n^(1/2) is square root growth \
    c. n^2 is quadratic growth \
    d. n \* log(n)^10 is growth influenced by both n and a logarithmic term
    Therefore, O(n \* log(n)^10) because it affects growth rate significantlly due to the exponentiation as n tends to infinity

## **Step Two: Calculating Time Complexity**

Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

```jsx
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

Time Complexity: O(n)

```jsx
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

Time Complexity: O(n) the loop iterates a maximum of 10 times but in terms of time complexity the focus in on n which is the dorminant factor

```jsx
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

Time Complexity: O(1) because the number of iterations does not grow with the size of input n but it is bounded by a constant value of 10

```jsx
function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
```

Time Complexity: O(n) because the operations inside the loop are constant-time. n is the length of the input array which is the number of iterations of the loop

```jsx
function subtotals(array) {
  let subtotalArray = [];
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray.push(subtotal);
  }
  return subtotalArray;
}
```

Time Complexity: O(n^2)

```jsx
function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      if (char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}
```

Time Complexity: O(n) where n is the length of the input string. Again, the number of iterations correlates directly with the size of the input which is the string. The other operations inside the loop are constant-time operations

## **Part 3 - short answer**

Answer the following questions

1. True or false: n^2 + n is O(n^2). \
   True

2. True or false: n^2 \* n is O(n^3). \
   True

3. True or false: n^2 + n is O(n). \
   False

4. What’s the time complexity of the .indexOf array method? \
   O(n) .indexOf array method depends on the size of the array

5. What’s the time complexity of the .includes array method? \
   O(n) .includes array method depends on the size of the array

6. What’s the time complexity of the .forEach array method? \
   O(n) .forEach iterates over each element so n is the number of elements in the array

7. What’s the time complexity of the .sort array method? \
   O(n log n) best case .sort array method depends on the implementation and the sorting algorithm used by JS. Worst case O(n^2) (again this depends on JS engine)

8. What’s the time complexity of the .unshift array method? \
   O(n) .unshift depends on the size of the array

9. What’s the time complexity of the .push array method? \
   O(1) .push array method adds one or more elements to the end of an array and it only performs it once therefore the time complexity remains constant

10. What’s the time complexity of the .splice array method? \
    O(n) .splice array method depends on the number of elements being added or removed as well as position in the array

11. What’s the time complexity of the .pop array method? \
    O(1) .pop array method removes the last elements from an array and it only needs to perform a single operation

12. What’s the time complexity of the Object.keys() function? \
    O(n) where n is the number of enumerable properties in the object

### **BONUS**

13. What’s the space complexity of the Object.keys() function? \
    O(n) space complexity is proportional to the number of enumerable properties in the object because the size of the returned array depends on the number of properties
