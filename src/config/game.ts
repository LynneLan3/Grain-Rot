export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
}

export type AnalyticsProvider = 'ga4';

export interface GameAnalyticsConfig {
	enabled: true;
	provider: AnalyticsProvider;
	measurementId: string;
	trackOutbound: boolean;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
	analytics?: GameAnalyticsConfig;
}

export const game: GameConfig = {
	name: 'GRAIN ROT',
	shortName: 'GRAIN ROT',
	description:
		'A source-led player guide to GRAIN ROT, its confirmed launch information, online co-op, platform, and PC requirement details.',
	tagline: 'Confirmed game information, player guides, and launch details.',
	siteUrl: 'https://grainrot.vercel.app/',
	hubPath: '/grain-rot/',
	hubTitle: 'GRAIN ROT Guide & Wiki',
	releaseDate: '2026-08-07',
	developer: 'Beck & Branch Games',
	publisher: 'Neem',
	platforms: ['Windows PC via Steam'],
	accentColor: '#9a3412',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam screenshot for GRAIN ROT',
	heroPosition: 'center 45%',
	portal: {
		popularQuestions: [
			{ label: 'What is GRAIN ROT?', href: '/grain-rot/game/' },
			{ label: 'When did it release?', href: '/grain-rot/release-date/' },
			{ label: 'Which platforms are confirmed?', href: '/grain-rot/platforms/' },
			{ label: 'How does online co-op work?', href: '/grain-rot/multiplayer/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
	},
	analytics: {
		enabled: true,
		provider: 'ga4',
		measurementId: 'G-6XGRN3QF1N',
		trackOutbound: true,
	},
	categories: [
		{
			id: 'gameplay',
			label: 'Gameplay',
			description: 'Confirmed descriptions of the extraction-horror gameplay loop.',
			icon: 'puzzle',
			order: 1,
		},
		{
			id: 'co-op',
			label: 'Multiplayer',
			description: 'What the available launch evidence confirms about online co-op.',
			icon: 'open-book',
			order: 2,
		},
		{
			id: 'game-info',
			label: 'Game Info',
			description: 'Release date, launch status, developer, publisher, and price.',
			icon: 'information',
			order: 3,
		},
		{
			id: 'platform-support',
			label: 'Platforms',
			description: 'Confirmed PC availability and currently listed requirements.',
			icon: 'laptop',
			order: 4,
		},
	],
};
