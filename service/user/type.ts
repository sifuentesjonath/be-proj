export interface ICreateUser {
	FirstName: string;
	LastName: string;
	Email: string;
	PhoneNumber: string;
	FirebaseAuthId: string;
}

export interface User {
	Id: number;
	FirebaseAuthId: string;
	Email: string;
	CreatedAt: Date;
	UpdatedAt: Date;
}