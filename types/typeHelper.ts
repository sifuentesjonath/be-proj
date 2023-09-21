export const objectKeys = <Obj extends Object>(obj: Obj): (keyof Obj)[] =>
	Object.keys(obj) as (keyof Obj)[];
