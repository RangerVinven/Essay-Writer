import './App.css';
import { useState } from 'react';
import Draft from './pagesAndComponents/pages/draft/Draft';
import Outline from './pagesAndComponents/pages/outline/Outline';

function App() {

	const [outlines, setOutlines] = useState<Object[]>([
        {
            id: 0,
            title: "Hello",
            drafts: [""]
        },
        {
            id: 1,
            title: "Test",
            drafts: [""]
        },
        {
            id: 2,
            title: "Aberham Lincon",
            drafts: [""]
        },
        {
            id: 1,
            title: "WWII",
            drafts: [""]
        }
    ]);

	return <Draft />	
}

export default App;
