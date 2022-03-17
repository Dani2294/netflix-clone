import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
	Background,
	Wrapper,
	Group,
	Logo,
	TextLink,
	Profile,
	ProfilePicture,
	DropDown,
	DropDownText,
	ButtonLink,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureButtons,
	FeatureButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...props }) {
	return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Wrapper = function HeaderWrapper({ children, ...props }) {
	return <Wrapper {...props}>{children}</Wrapper>;
};

Header.Group = function HeaderGroup({ children, ...props }) {
	return <Group {...props}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...props} />
		</ReactRouterLink>
	);
};

Header.TextLink = function HeaderTextLink({ children, ...props }) {
	return <TextLink {...props}>{children}</TextLink>;
};

Header.Profile = function HeaderProfile({ children, ...props }) {
	return <Profile {...props}>{children}</Profile>;
};

Header.ProfilePicture = function HeaderProfilePicture({ ...props }) {
	return <ProfilePicture {...props} />;
};

Header.DropDown = function HeaderDropDown({ children, ...props }) {
	return <DropDown {...props}>{children}</DropDown>;
};

Header.DropDownText = function HeaderDropDownText({ children, ...props }) {
	return <DropDownText {...props}>{children}</DropDownText>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...props }) {
	return (
		<ReactRouterLink to={to}>
			<ButtonLink {...props}>{children}</ButtonLink>
		</ReactRouterLink>
	);
};

Header.Feature = function HeaderFeature({ children, ...props }) {
	return <Feature {...props}>{children}</Feature>;
};

Header.FeatureTitle = function HeaderFeatureTitle({ children, ...props }) {
	return <FeatureTitle {...props}>{children}</FeatureTitle>;
};

Header.FeatureText = function HeaderFeatureText({ children, ...props }) {
	return <FeatureText {...props}>{children}</FeatureText>;
};

Header.FeatureButtons = function HeaderFeatureButtons({ children, ...props }) {
	return <FeatureButtons {...props}>{children}</FeatureButtons>;
};

Header.FeatureButton = function HeaderFeatureButton({ children, ...props }) {
	return <FeatureButton {...props}>{children}</FeatureButton>;
};
