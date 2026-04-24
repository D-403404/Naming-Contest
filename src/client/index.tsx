import { createRoot } from 'react-dom/client';

export const App = () => {
    return (
        <div>Hello World</div>
    )
}

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App />)
}
else {
    throw new Error('React DOM: No root directory');
}