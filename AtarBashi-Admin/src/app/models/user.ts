import { Photo } from './photo';
import { Prescription } from './prescription';

export interface  User {
    id: string;
    name: string;
    userName: string;
    phoneNumber: string;
    address: string;
    gender: boolean;
    age: number;
    lastActive: Date;
    city: string;
    photoUrl: string;
    username: string;
    phonenumber: string;
    lastactive: Date;
    photourl: string;
    photo?: Photo[];
    prescription?: Prescription[];
}
