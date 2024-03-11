console.log(React);
console.log(ReactDOM);

const Component = () => React.createElement('h1', {}, 'Hello, React');
console.log(elem);

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(React.createElement(Component));

/*
Parent -> Child - props

<Parent>
    <Child prop="value"/>
<Parent>


Child -> Parent - callback
child -> parent.callback() -> Parent.setState()


Child1 -> Child2 - child1 -> parent.callback() -> parent.setState() -> child2.proprs

// Композиція компонент
Parent1 -> Parent2 -> Parent3 -> Child.props

Parent2 
    <Parent3>   -> Child попадає в пропс children
        <Child >
    </Parent3>
*/


/*
Управління станом

1. Локальний стан компоненти
2. Контекст
3. Redux


*/

/*
- useState,
- useEffect
- useContext
- useMemo
- useCallback
- useReducer
*/