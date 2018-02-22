
# Shakuro test trial function optimization

- Run `yarn install` to install the dependencies
- Run `yarn lint && yarn test` to test the code


## The Original Task

Посмотрите на код:

```javascript
function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1;
	}
	
	var i = s.length -1;
	var aIndex =     -1;
	var bIndex =     -1;
	
	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i +1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i +1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}
	
	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}
	
	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}
```

Что можно улучшить? Как бы вы его переписали?


## A Solution

Please see [the source code](./src/get-char-last-index.js).


## An Explanation

1. The first step in solving this task was to understand what the function
   was actually doing. After a brief investigation it looked like the function
   was calculating an index of the last occurrence of one of the specified characters.
   On this step, I've renamed the function from incomprehensible `func` to
   `getLastIndexOfChars` to make it's purpose more clear.
   
2. During the second step, I've covered the function with unit tests in order to make
   refactoring task easier and more deterministic and to prevent unexpected degradation.
   In order to do so, I have had to find possible edge cases by examining the
   function implementation and behavior. An odd behavior, or possibly a bug was found
   during this step: the original function was not taking the first character of the string
   into account. If single-length string would be passed to it, it would always return `-1`.
   I've added a `@todo` instruction to the code to investigate this issue further
   after refactoring.
   
3. On third step, I've finally refactored the function by gradually simplifying some
   constructs and removing extraneous ones. I've also used strict comparison operators
   and added strict input type checking. Ineffective constructs were also replaced by
   more optimized ones. Overall, the loop break was added to the function to prevent
   unnecessary loop iterations and the loop itself was converted from conditional one to
   a simple for loop.
   
   In the end, I've managed to reduce almost all logic by calling a native
   function `String.lastIndexOf()` which is much more optimal. 
   
   These modifications should not only significantly simplify the
   code, but also improve the performance. I've also introduced the comments and JSDOc
   documentation.

4. On fourth step, I've replaced two character arguments with a single rest parameter.
   This change will preserve backward-compatibility, but at the same time will allow
   more use cases therefore widening the function practical application.
   For example, it's now possible to specify more than 2 search characters.
   Even a single character is now could be used.


# Author

**Slava Fomin II**

- [slava@fomin.io](mailto:slava@fomin.io)
- [http://slava.fomin.io](http://slava.fomin.io)
