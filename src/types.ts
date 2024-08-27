import { Identifier, RaRecord } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface Grade extends RaRecord {
    term: number,
    name: string,
    description: string,
    grade: String,
    status: string,
    isMajor: number
}

export interface Honour extends RaRecord {
    term: number,
    honour: string,
    description: string,
}

export interface Work extends RaRecord {
    term: number,
    title: string,
    png: string,
    demo: string,
    src: string,
    description: string,
}

export interface Course extends RaRecord {
    time: string,
    course:string,
    room: string,
    description: string,
    teacher: string
}

export interface Things extends RaRecord {
    time: string,
    title:string,
    content: string,
}

