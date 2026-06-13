// Configuration file for Mercury Core. Hover over a property to see its description!
// If you're running in production, you'll need to rebuild Mercury Core to apply changes.

export default {
	Name: "Missable",
	Domain: "mis.testingsweb.com",
	DomainInsecure: "www.mercs.dev",
	RCCServiceProxyURL: "http://localhost:64990",
	LauncherURI: "missable:",
	CurrencySymbol: "屌",
	Pages: ["Statistics", "Forum", "Groups"],

	Database: {
		AutoStart: true,
		Domain: "localhost:8000",
	},

	Economy: {
		AutoStart: true,
	},

	Orbiter: {
		PrivateURL: "http://localhost:64991",
		PublicURL: "http://localhost:64992",
	},

	// 'noob' colours
	DefaultBodyColors: {
		Head: 24,
		LeftArm: 24,
		LeftLeg: 119,
		RightArm: 24,
		RightLeg: 119,
		Torso: 23,
	},

	Logging: {
		Requests: true,
		FormattedErrors: false,
		Time: true,
	},

	Branding: {
		Favicon: "Branding/Favicon.svg",
		Icon: "Branding/Icon.svg",
		Tagline: "Insert a Stupid Tagline for a revival here",
		Descriptions: {
			"Create games, for free this time":
				"No stupid corporation trying to explode you!",
			"Friend and play together":
				"Bring friends to play your games or other people's games!",
			"Be the economy":
				"Earn currency and buy new fits for your avatar!"
		},
	},

	Images: {
		DefaultPlaceIcons: ["Images/DefaultIcon1.avif"],
		DefaultPlaceThumbnails: [
			"Images/DefaultThumbnail1.avif",
			"Images/DefaultThumbnail2.avif",
			"Images/DefaultThumbnail3.avif",
		],
	},

	Themes: [
		{
			Name: "Standard",
			Path: "Themes/Standard.css",
		},
	],

	Filtering: {
		FilteredWords: [],
		ReplaceWith: "#",
		ReplaceType: "Character",
	},

	Registration: {
		Keys: {
			Enabled: true,
			Prefix: "missable-",
		},
		Emails: true,
	},

	Email: {
		Host: "smtp.example.com",
		Port: 465,
		Secure: true,
		Username: "username",
	},

	Gameservers: {
		Hosting: "Both",
	},
} satisfies import("./Assets/schema.ts").Config
