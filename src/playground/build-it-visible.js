let visibility = false;

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
renderApp();