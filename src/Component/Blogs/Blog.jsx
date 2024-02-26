import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div>
            <h3 className='text-3xl'>
                Q.1 When Should used Context Api?
            </h3>
           <p>The Context API in React is used when you need to share state or behavior between multiple components that are not directly related in the component tree. It provides a way to pass data through the component tree without having to pass props
             down manually at every level.</p>
            </div>
            <div>
                <h3 className='text-3xl'>Q.1 What is Custom Hook?</h3>
                <p>A custom hook in React is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks are a way to extract and share logic among components in a clean and reusable manner. They are not part of the React component lifecycle but are a convention that allows you to organize and reuse logic in a modular way.</p>
            </div>
            <div>
            <h3 className='text-3xl'>Q.1 What is Custom Hook?</h3>
            <p>In React, the useRef hook is used to create a mutable object that has a current property. The current property can be assigned a value, and it will persist across renders. useRef is often used for accessing or interacting with the DOM directly, managing focus, or storing mutable values without triggering a re-render.</p>
            </div>
            <div>
            <h3 className='text-3xl'>Q.1 What is useMemo?</h3>
                <p>In React, the useMemo hook is used to memoize the result of a computation. It helps optimize performance by preventing unnecessary recalculations of a value when the dependencies haven't changed. useMemo is particularly useful when dealing with expensive calculations or operations that are not related to rendering.

Here's the basic syntax of useMemo</p>
            </div>
            

        </div>
    );
};

export default Blog;