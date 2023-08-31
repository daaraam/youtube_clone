import React, { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { useAuthContext } from './Context/AuthContext';
import UserIcon from './UserIcon';
import UserInfo from './UserInfo';

export default function User() {
	const { user, login, logout } = useAuthContext();
	const [info, setInfo] = useState(false);

	const userInfoOpen = e => {
		setInfo(prevState => !prevState);
		document.body.style.overflow = 'hidden';
	};

	const userInfoClose = e => {
		setInfo(false);
		document.body.style.overflow = 'unset';
	};

	return (
		<>
			<div>
				{user ? (
					<UserIcon onClick={userInfoOpen} user={user} />
				) : (
					<RxAvatar onClick={login} className="cursor-pointer" size={30} />
				)}
			</div>

			<div>{info && <UserInfo logout={logout} userInfoClose={userInfoClose} />}</div>
		</>
	);
}
