import { Photo } from './photo';
import { Prescription } from './prescription';

export interface  User {
    id: string;
    name: string;
<<<<<<< HEAD
    userName: string;
    phoneNumber: string;
    address: string;
    gender: boolean;
    age: number;
    lastActive: Date;
    city: string;
    photoUrl: string;
=======
    username: string;
    phonenumber: string;
    address: string;
    gender: boolean;
    age: number;
    lastactive: Date;
    city: string;
    photourl: string;
>>>>>>> 61ce96e98dfbdd0639f97508fac480dd95ebc572
    photo?: Photo[];
    prescription?: Prescription[];
}
