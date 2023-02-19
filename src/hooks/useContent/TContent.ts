export type TExperience = {
	start: string;
	end: string;
	title: string;
	company: string;
	description: string;
	icon?: string;
};

export type TIntro = {
	title: string;
	pillar: string;
	description: string;
};

export type THeader = {
	intro: TIntro;
};

export type TCv = {
	intro: TIntro;
	experiences: TExperience[];
};

export type TContent = {
	header: THeader;
	cv: TCv;
};
