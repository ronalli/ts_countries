import { Region } from './region';


type Name = {
	common: string,
	official: string,
	nativeName: {
		cat: {
			official: string,
			common: string
		}
	}
}

type Currency = {
	[key: string]: {
		name: string,
		symbol: string
	}
}

type Language = {
	[key: string]: string
}

export type Country = {
	name: Name,
	tld: string[],
	capital: string[],
	region: Region,
	suberegion: string,
	languages: Language,
	borders: string[],
	population: number,
	flags: {
		png: string,
		svg: string,
		alt: string
	},
	currencies: Currency
}