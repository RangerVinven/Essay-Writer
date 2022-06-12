import './App.css';
import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Draft from './pagesAndComponents/pages/draft/Draft';
import Outline from './pagesAndComponents/pages/outline/Outline';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/outline" element={<Outline />} />
				<Route path="/draft" element={<Draft />} />
				<Route path="/" element={<Draft />} />
			</Routes>
			
		</Router>
	)
}

export default App;
