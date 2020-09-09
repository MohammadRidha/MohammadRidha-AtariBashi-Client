import { Photo } from './photo';
import { Prescription } from './prescription';

export interface  User {
    id: string;
    name: string;
    username: string;
    phonenumber: string;
    address: string;
    gender: boolean;
    age: number;
    lastactive: Date;
    city: string;
    photourl: string;
    photo?: Photo[];
    prescription?: Prescription[];
}
