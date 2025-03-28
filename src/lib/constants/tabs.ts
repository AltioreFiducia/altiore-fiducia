import { m } from '../../paraglide/messages';

export const ABOUT_US_TABS = [
	{ id: 'short-term', label: m.about_us_tabs_short_term() },
	{ id: 'medium-term', label: m.about_us_tabs_medium_term() },
	{ id: 'long-term', label: m.about_us_tabs_long_term() }
] as const;
