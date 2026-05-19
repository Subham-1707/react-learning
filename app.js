const heading1 = React.createElement(
    'h1',
    {
        className: 'main-title',
        style: {
            color: 'black',
            backgroundColor: 'green',
            fontFamily: 'Arial'
        }
    },
    'Hello, React! from React code 1'
)

const heading2 = React.createElement(
    'h2',
    {
        className: 'main-title',
        style: {
            color: 'black',
            backgroundColor: 'red',
            fontFamily: 'Arial'
        }
    },
    'Hello, React! from React code 2'
)

const container = React.createElement(
    'div',
    {
        id: 'container',
        style: {
            backgroundColor: 'blue',
            padding: '10px',
            borderRadius: '10px'
        }
    },
    [heading1, heading2]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)