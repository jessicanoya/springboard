# **some/every**

## Goals

- Understand what some and every do
- Write your own version of s
## Goals

- Understand what some and every do
- Write your own version of some and every

## **some**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true for at least one single value, return true
- Otherwise, return false
- the result of the callback will always be a boolean

### **An Example**

```jsx
let numbers = [1,2,3];

numbers.some(function(value, index, array){
  return value < 3;
});

// true

let numbers = [1,2,3];

numbers.some(function(value, index, array){
  return value > 10;
});

// false
```

### **How Does It Work?**

```jsx
function some(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return true;
    }
  }
  return false;
}
```

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true for at least one single value, return true
- Otherwise, return false

### **Using Some In A Function**

```jsx
function hasAdmin(arr){
  return arr.some(function(value){
    return value.admin
  });
}

hasAdmin([
  {name: "Colt", admin: true},
  {name: "Poppy", admin: false}
]); // true

hasAdmin([{name: "Colt"}, {name: "Poppy", admin: false}]); // false
```

```jsx
function hasQuestionMark(str){
  return str.split('').some(function(value){
    return value === '?';
  });
}

hasQuestionMark('How are you feeling'); // false
hasQuestionMark('How are you feeling now?'); // true
```

### **When You Would Use Some**

- You need to determine if at least one value in an array exists and you have to determine this by using a callback (not includes/indexOf)
- A simple alternative to using filter and seeing if the array contains at least one element

## **every**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns false for any single value, return false
- Otherwise, return true
- the result of the callback will always be a boolean

### **An Example**

```jsx
let numbers = [1,2,3];

numbers.every(function(value, index, array){
  return value > 0;
});

// true
let numbers = [1,2,3];

numbers.every(function(value, index, array){
  return value > 2;
});

// false
```

### **How Does It Work?**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns false for any single value, return false
- Otherwise, return true

```jsx
function every(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === false){
      return false;
    }
  }
  return true;
}
```

### **Using Every In A Function**

```jsx
function allVowels(str){
return str.split('').every(function(value){
return "aeiou".includes(value)
  });
}

allVowels('awesome')// false
eallVowels('aiaieoeoiu')// true
function allIntegers(arr){
return arr.every(Number.isInteger);
}

allIntegers([1,2,3,4,4,4,4])// true
allIntegers([5,1,4,3,2.2])// false
```

### **When You Would Use Every**

- You need to determine if every value in an array exists and you have to determine this by using a callback
- A simple alternative to using filter and seeing if the filtered array is of the same length as the original array

### **Recap**

- some iterates through an array and runs a callback on each value,
- if the callback for at least one value returns true, some returns true, otherwise false
- every iterates through an array and runs a callback on each value,
- if the callback at any time returns false, every returns false

# **find/findIndex**

## Goals

- Understand what find and findIndex do
- Write your own version of find and findIndex

## **Find**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true at any point, return the value in the array that we’re iterating over
- Otherwise, return undefined

### **An Example**

```jsx
let arr = [1,2,3];

arr.find(function(value, index, array){
  return value === 2;
});

// 2
let arr = [1,2,3];

arr.find(function(value, index, array){
  return value < 1;
});

// undefined
```

### **How Does It Work?**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true at any point, return the value we’re iterating over
- Otherwise, return undefined

```jsx
function find(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return array[i]
    }
  }
}
```

### **Using Find In A Function**

```jsx
function findOddNumber(arr){
  return arr.find(function(value){
    return value % 2 !== 0
  });
}

findOddNumber([2,3,4,5]) // 3
findOddNumber([4,6,8,10]) // undefined
```

```jsx
function ensureNoSubArrays(arr){
  return arr.find(Array.isArray) === undefined
}

ensureNoSubArrays([1, 2, [3,4]]); // false
ensureNoSubArrays([1,2,3,4]); // true
```

### **When You Would Use Find**

- You need to determine if a value in an array exists and you have to determine this by using a callback
- A simple alternative to using filter and accessing the first element of the filtered array

## **findIndex**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true for any single value, return the index at which that value is found
- Otherwise, return -1

### **An Example**

```jsx
let arr = [1,2,3];

arr.findIndex(function(value, index, array){
  return value < 2;
}); // 0

let arr = [1,2,3];

arr.findIndex(function(value, index, array){
  return value > 3;
}); // -1
```

### **How Does It Work?**

- Iterates through an array
- Runs a callback on each value in the array
- If the callback returns true for any single value, return the index at which that value is found
- Otherwise, return -1

```jsx
function findIndex(array, callback){
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array) === true){
      return i;
    }
  }
  return -1;
}
```

### **Using Findindex In A Function**

```jsx
function findPositionOfBoolean(list){
  return list.findIndex(function(value, index, array){
    return typeof value === "boolean"
  });
}

findPositionOfBoolean([1,3,false,true]) // 2
findPositionOfBoolean(["no booleans", "around", "these parts"]) // -1
```

### **When You Would Use Findindex**

- You need to determine the index of a value in an array if it exists and you have to determine this by using a callback
- A better version of indexOf to be used when a callback is necessary

### **Recap**

- find and findIndex iterate through an array and runs a callback on each value
- if the callback at any time returns true, find returns the value or undefined if not found
- if the callback at any time returns true, findIndex returns the index or -1 if not found