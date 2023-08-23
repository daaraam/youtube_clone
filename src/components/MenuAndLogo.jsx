// import React, { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { BsYoutube } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import Icon from './Icon';
// import Menu from './Menu';

// export default function MenuAndLogo({ onClick, icon, menuCloseBtn }) {
// 	const [menu, setMenu] = useState(false);
// 	const menuOpenBtn = () => {
// 		setMenu(true);
// 	};

// 	const menuCloseBtn = () => {
// 		setMenu(false);
// 	};

// 	return (
// 		<>
// 			<div className="flex items-center">
// 				<Icon icon={<AiOutlineMenu className="cursor-pointer " size={25} onClick={menuOpenBtn} />} />

// 				{menu && <Menu onClick={menuToggleBtn} />}
// 				<Link to="/" className="flex items-center">
// 					<BsYoutube className="text-4xl text-brand" />
// 					<p className="ml-2 text-xl font-bold">YouTube</p>
// 				</Link>
// 			</div>
// 		</>
// 	);
// }
