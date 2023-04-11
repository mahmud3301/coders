import React from 'react';

const Blogs = () => {
    return (
        <div className='p-14 gap-6'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    When should you use context API?
                </div>
                <div className="collapse-content">
                    <p>Context API is useful when you have data or state that needs to be accessed by multiple components at different levels of the component tree or when you need to pass down functions or methods to your child components without passing them as props down through all the levels.</p>
                </div>
            </div><br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a custom hook?
                </div>
                <div className="collapse-content">
                    <p>Custom hooks are a powerful tool in the React developer's toolkit, and can help to simplify complex code and improve the maintainability of your applications.</p>
                </div>
            </div><br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useRef?
                </div>
                <div className="collapse-content">
                    <p>useRef is a powerful tool that allows you to work with mutable values and interact with the DOM in a more efficient way.</p>
                </div>
            </div><br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is useMemo?
                </div>
                <div className="collapse-content">
                    <p>The hook returns the memoized value, which can be used in your component just like any other value. It's important to note that useMemo is not a silver bullet for performance optimization and should be used judiciously in conjunction with other tools like useCallback and React.memo to achieve the best performance results.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;