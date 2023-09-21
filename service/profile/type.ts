import { User } from '@service/user/type';

export interface Profile {
	Id: number;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	BirthDate: Date;
	RFC: string;
	Step: string;
	CreatedAt: Date;
	UpdatedAt: Date;
	CustomerId: string;
}

export interface IUpdateProfile {
	FirstName: string;
	LastName: string;
	BirthDate: Date;
	PhoneNumber: string;
	RFC: string;
}