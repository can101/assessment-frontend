import React, { useState } from "react";
import "./App.css";
import Button from "./components/_atoms/buttons/button";
import Avatar from "./components/_atoms/avatar";
import AvatarGroup from "./components/_atoms/avatar/groups";
import { FaPlay, FaPlusCircle } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import Checkbox from "./components/_atoms/checkbox";
import ButtonGroup from "./components/_atoms/buttons/button/groups";
import Toggle from "./components/_atoms/buttons/toogle";
import Chip from "./components/_atoms/chip";
import { IoIosAttach, IoMdPerson } from "react-icons/io";
import Tag from "./components/_atoms/tag";
import { AiFillAlert } from "react-icons/ai";
import Input from "./components/_atoms/input";
import Textarea from "./components/_atoms/textarea";
import Link from "./components/_atoms/link";

const App: React.FC = () => {
	const list = [
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			title: "aa",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
		{
			src: "https://avatars.githubusercontent.com/u/103632571?v=4",
			alt: "test",
		},
	];
	const [state, setState] = useState<string>("");
	return (
		<div className='App'>
			{/* Main Page */}
			<div>
				{/* <Button*/}
				{/*	size={"xl"}*/}
				{/*	variant={"tertiary"}*/}
				{/*	iconLeft={<FaPlay />}*/}
				{/*	iconRight={<FaPlusCircle />}*/}
				{/*	title='hello world'*/}
				{/*	onClick={function (): void {*/}
				{/*		alert("hello");*/}
				{/*	}}*/}
				{/*	isDisable={false}*/}
				{/*/>*/}
				{/* <Avatar*/}
				{/*	active={true}*/}
				{/*	badgeIcon={<VscVerifiedFilled />}*/}
				{/*	border*/}
				{/*	round*/}
				{/*	size='lg'*/}
				{/*	src={*/}
				{/*		"https://imgs.search.brave.com/NX9i9GYDF9nU7jW7Jew8C_dJ-Cyq2Vwrg3dyQ_mnGIQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL2hpZ2hs/aW5ld2VzdC5jb20v/d3Avd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDEvcHJvZmVz/c2lvbmFsLWxpbmtl/ZGluLXByb2ZpbGUt/cGhvdG9zLXZhbmNv/dXZlci1iYy1rZW5u/eS5qcGc"*/}
				{/*	}*/}
				{/*	alt={"profile"}*/}
				{/*/> */}
				{/*<AvatarGroup items={list} size={"xs"} border />*/}
				{/*<ButtonGroup>*/}
				{/*	<Button*/}
				{/*		size={"xs"}*/}
				{/*		variant={"quaternary"}*/}
				{/*		title='hello world'*/}
				{/*		onClick={function (): void {*/}
				{/*			alert("hello");*/}
				{/*		}}*/}
				{/*		isDisable={false}*/}
				{/*	/>*/}
				{/*	<Button*/}
				{/*		size={"xs"}*/}
				{/*		variant={"quaternary"}*/}
				{/*		title='hello world'*/}
				{/*		onClick={function (): void {*/}
				{/*			alert("hello");*/}
				{/*		}}*/}
				{/*		isDisable={false}*/}
				{/*	/>*/}
				{/*	<Button*/}
				{/*		size={"xs"}*/}
				{/*		variant={"quaternary"}*/}
				{/*		title='hello world'*/}
				{/*		onClick={function (): void {*/}
				{/*			alert("hello");*/}
				{/*		}}*/}
				{/*		isDisable={false}*/}
				{/*	/>*/}
				{/*	<Button*/}
				{/*		size={"xs"}*/}
				{/*		variant={"quaternary"}*/}
				{/*		title='hello world'*/}
				{/*		onClick={function (): void {*/}
				{/*			alert("hello");*/}
				{/*		}}*/}
				{/*		isDisable={false}*/}
				{/*	/>*/}
				{/*</ButtonGroup>*/}
				{/*<Checkbox variant={"square"} label={"sfadsg"} disable={false} />*/}
				{/* <Chip
					size={"xs"}
					border
					// disable
					title={"Hello"}
					icon={<IoIosAttach/>}
					deleteClick={() => alert("fds")}/> */}
				{/* <Toogle size={"xl"}  /> */}
				 <Tag  deleteClick={()=>{alert("alert hi");}} icon={<AiFillAlert size={"1.3em"} />} title='tag'  variant='secondary'/>
				{/*<Input*/}
				{/*	value={state}*/}
				{/*	leftIcon={<IoMdPerson />}*/}
				{/*	handleChange={setState}*/}
				{/*	placeholder='write state'*/}
				{/*	size='xl'*/}
				{/*	label='Heloo'*/}
				{/*	status='success'*/}
				{/*	hintText='sdfdsg'*/}
				{/*	// disable*/}
				{/*/>*/}
				<Textarea
					value={state}
					handleChange={setState}
					placeholder='write state'
					size='md'
					label='Heloo'
					widthSize='default'
					disable
				/>
				{/*<Link  handleClick={() => alert("dsfg")} title='zaa' />*/}
			</div>
		</div>
	);
};

export default App;
