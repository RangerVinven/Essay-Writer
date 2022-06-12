import './App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

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
        }
    ]);
    const [currentOutline, setCurrentOutline] = useState(""); // For the outline the user is currently entering

    const addOutline = () => {
        setOutlines([...outlines, {
			id: outlines.length-1,
			title: currentOutline,
			drafts: [""]
		}]);
        setCurrentOutline("");
    }

	return (
		<Router>
			<Routes>
				<Route path="/outline" element={<Outline outlines={outlines} addOutline={addOutline} currentOutline={currentOutline} setCurrentOutline={setCurrentOutline} />} />
				<Route path="/draft" element={<Draft />} />
				<Route path="/" element={<Draft />} />
			</Routes>
			
		</Router>
	)
}

export default App;
