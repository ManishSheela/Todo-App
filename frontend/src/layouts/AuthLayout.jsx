import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
	const accessToken = localStorage.getItem("accessToken");
	if (accessToken) {
		return <Navigate to={"/dashboard"} replace />;
	}
	return (
		<>
			<Outlet />
		</>
	);
};

export default AuthLayout;
