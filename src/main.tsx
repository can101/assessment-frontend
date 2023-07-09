import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.scss";
import HomeView from './home';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<HomeView />
	</React.StrictMode>,
);
