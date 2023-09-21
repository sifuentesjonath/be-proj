export interface ICreateProfile {
	FirstName: string;
	LastName: string;
	BirthDate: Date;
	PhoneNumber: string;
	RFC: string;
}

export interface IUpdateStep {
  ProfileId: string;
  Step: string;
}