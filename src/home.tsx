import { FC, ReactElement } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card/index";

const HomeView: FC = (): ReactElement => (
	<>
		<Navbar />
		<Card />
		<h1>Footer</h1>
	</>
);

export default HomeView;
