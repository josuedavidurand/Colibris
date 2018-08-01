import { SerieModele } from './seriemodele';

export interface EditionModele {
    title: string,
    author: string,
    publisher: number,
    collection: number,
    language: string,
    publishedDate: string,
    pages: number,
    cover: string,
    ISBN: number,
    series?: Array<SerieModele>
}
