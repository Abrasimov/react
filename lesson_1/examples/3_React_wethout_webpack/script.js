// Example 1 (NO JSX)

const rootElement = document.getElementById("root");

const noJsxReactElement = React.createElement(
    'h1',
    {className: 'greeting'},
    'NO JSX React Element'
);

ReactDOM.render(noJsxReactElement, rootElement);



// Example 2 (JSX)

const rootElement1 = document.getElementById("root1");

const jsxReactElement = <h1 className={'greeting'}>JSX React Element</h1>

ReactDOM.render(jsxReactElement, rootElement1);



// Example 3 (compare DOM Element and React Element)

const DOMElement = document.createElement('h1');
DOMElement.innerText = 'DOM Element';
DOMElement.classList.add('greeting');

// Compare
console.log('noJsxReactElement => ', noJsxReactElement);
console.log('jsxReactElement => ', jsxReactElement);
console.log('DOMElement => ', DOMElement);

// Statement below will throw an error
// ReactDOM.render(DOMElement, rootElement1);



// Example 4 - Correct way to initialise app for React 17+

// Correct way to initialise app for React 17+
// const root = ReactDOM.createRoot(rootElement);
// root.render(<h1>Create root example</h1>);
