const colors = {
	yellow_brown: '#dcbe68',
	yellow_mustard: '#cb9544',
	yellow_mustard_dark: '#B6863D',
	yellow_mustard_darker: '#83602b',
	yellow_light: '#fff7ec',
	blue_desaturated: '#2b3847',
	blue_desaturated_transparent: 'rgba(43,56,71, 0.5)',
	
	green: '#2cc154',

	white: 'white',
	black: 'black',
	gray: '#777a7f',
	lightGray: '#f4f4f4',
	darkGray: '#a7a7a7',
}
// TODO: Add something like this to the main theme object to accurately keep track of our use of shadows along the project
// TODO: make a 'colors' property in theme just like before, so we can create another 'shadows' property to work like colors, this way we have separated colors and shadows in a single mainTheme object.
// const shadows = {
// 	shadow1 : 'box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;'
// }
const mainTheme = {
	// Color palette
	primaryBackground: colors.blue_desaturated,
	primaryBackgroundTransparent: colors.blue_desaturated_transparent,
	secondaryBackground: colors.yellow_light,
	// Headings
	headingPrimary: colors.yellow_brown,
	headingPrimaryDark: colors.yellow_mustard,
	headingSecondary: colors.white,
	headingSecondaryDark: colors.black,
	// Text
	textPrimary: colors.white,
	textSecondary: colors.gray,
	textTertiary: colors.black,
	// Card
	cardBackground: colors.white,
	citeCardBackground: colors.yellow_mustard,
	// Bars
	progressBarBackgroundColor: colors.lightGray,
	progressBarColor: colors.green,
	// Borders
	primaryBorder: colors.darkGray,
	secondaryBorder: colors.lightGray,
	// Text - border
	textBorderPrimary: colors.yellow_brown,
	// Button
	buttonPrimary: colors.yellow_mustard,
	buttonPrimaryHover: colors.yellow_mustard_dark,
	buttonPrimaryDisabled: colors.yellow_mustard_darker,
	buttonNavigate: colors.white,
	buttonNavigateHover: colors.lightGray
}

export default mainTheme;