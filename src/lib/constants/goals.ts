import type { Goal } from '$lib/interfaces/goal';
import { m } from '../../paraglide/messages';

export const goals: Goal[] = [
	{
		term: 'short-term',
		goals: [m.goal_short_term_1(), m.goal_short_term_2(), m.goal_short_term_3()],
		borderColor: 'border-secondary-400',
		textColor: 'text-secondary-600'
	},
	{
		term: 'medium-term',
		goals: [m.goal_medium_term_1(), m.goal_medium_term_2(), m.goal_medium_term_3()],
		borderColor: 'border-primary-500',
		textColor: 'text-primary-600'
	},
	{
		term: 'long-term',
		goals: [m.goal_long_term_1(), m.goal_long_term_2()],
		borderColor: 'border-primary-700',
		textColor: 'text-primary-800'
	}
] as const;

export const missionVision: {
	mission: string;
	vision: string;
} = {
	mission: m.mission_description(),
	vision: m.vision_description()
} as const;
