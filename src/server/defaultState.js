export const defaultState = {
  js: [
    {
      title: 'Overriding “toString()” function of JavaScript objects',
      id: 'j1',
      details:
        "Understanding and Overriding the “toString()” method of Objects…\nThe “toString()” method represents the string representation of Object… Every Object has a “toString()” method which is called automatically when the Object has to be represented as some text value or in the case when the string is expected out of it. The simplest example of this is:\nIn the above example, we are enclosing the Object inside a “console.log” and “alert” function, which expects the output to be “string” value. Once there is an expectation to get the string value of an object, the following output is generated…\nThe value that is displayed in the alert box for “userDetails” seems to be unexpected. When we are trying to get the string representation of an object, it returns us the value “[object Object]”. Now, let's drill deeper to understand this output.\nThe objects that we create in JavaScript are inherited by “Object” which contains this property “toString()”. Following the prototype chain, this function is always available to all other objects.\nFor a simple Object “userDetails”, the “__proto__” object contains this function “toString()”. __proto__ represents the inheritance chain of the JavaScript Object. “toString” is available to each object since it points to JavaScript’s “Object” as a parent serving as a base for all the variables…\nIf the “toString()” method is not overridden in the custom object, it returns the output in the following form:\n“[object type]” where “type” represents object type… therefore “type” is replaced by “Object” in case of the above example.\nOverriding the “toString()” method is simple, we need to define the function “toString()” in the object that we are creating. Let's look below for clarification…\nIn the above example, we have overridden the function “toString()” and the output which is now available when we alert the object is “User Details”\nAlways override to “toString()” function in an object if you think that there is a requirement to represent the Object in string form.\nI hope you liked the article.\nWritten by\n",
      summary:
        'The “toString()” method represents the string representation of Object… Every Object has a “toString()” method which is called automatically when the Object has to be represented as some text value or in the case when the string is expected out of it.',
      author_name: 'Malkeet Singh',
      timeStamp: 'October 14, 2019',
      avatar:
        'https://media.licdn.com/dms/image/C4E03AQHgN8Z8cUSyjQ/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=xcE3RDiksDicHF84WmB8A_OkulI8GK4gbHHrqlnjrEg',
      profile_link: 'https://www.linkedin.com/in/malkeet-singh'
    },
    {
      title: 'Higher-order functions in JavaScript',
      id: 'j2',
      details:
        "Understanding and Overriding the “toString()” method of Objects…\n\nThe “toString()” method represents the string representation of Object… Every Object has a “toString()” method which is called automatically when the Object has to be represented as some text value or in the case when the string is expected out of it. The simplest example of this is:\n\nIn the above example, we are enclosing the Object inside a “console.log” and “alert” function, which expects the output to be “string” value. Once there is an expectation to get the string value of an object, the following output is generated…\n\nThe value that is displayed in the alert box for “userDetails” seems to be unexpected. When we are trying to get the string representation of an object, it returns us the value “[object Object]”. Now, let's drill deeper to understand this output.\n\nThe objects that we create in JavaScript are inherited by “Object” which contains this property “toString()”. Following the prototype chain, this function is always available to all other objects.\n\nFor a simple Object “userDetails”, the “__proto__” object contains this function “toString()”. __proto__ represents the inheritance chain of the JavaScript Object. “toString” is available to each object since it points to JavaScript’s “Object” as a parent serving as a base for all the variables…\n\nIf the “toString()” method is not overridden in the custom object, it returns the output in the following form:\n\n“[object type]” where “type” represents object type… therefore “type” is replaced by “Object” in case of the above example.\n\nOverriding the “toString()” method is simple, we need to define the function “toString()” in the object that we are creating. Let's look below for clarification…\n\nIn the above example, we have overridden the function “toString()” and the output which is now available when we alert the object is “User Details”\n\nAlways override to “toString()” function in an object if you think that there is a requirement to represent the Object in string form.\n\nI hope you liked the article.\n\nWritten by\n\n",
      summary:
        'A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. — MDN web docs',
      author_name: 'Malkeet Singh',
      timeStamp: 'October 14, 2019',
      avatar:
        'https://media.licdn.com/dms/image/C4E03AQHgN8Z8cUSyjQ/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=xcE3RDiksDicHF84WmB8A_OkulI8GK4gbHHrqlnjrEg',
      profile_link: 'https://www.linkedin.com/in/malkeet-singh'
    }
  ],

  css: [
    {
      title: 'understanding flex',
      id: 'c1'
    }
  ]
};
