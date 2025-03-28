import type { Term } from '$lib/types/terms';

export interface Goal {
	term: Term;
	goals: string[];
	borderColor: string;
	textColor: string;
}
