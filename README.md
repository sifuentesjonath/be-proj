# Be Ad Front End

## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Folder structure

### `app/`
All that has to do with Next routing goes here, note that there are two folders with parenthesis in their names.
These are called grouped routes and makes it easier to share `layout.tsx` files between routes.

- `(site)/`
	All normal routes that does not require user access are placed here.

- `(app)/`
	All user routes that should be private and only accessed by a Logged User are placed here.

### `auth/`
User Access and User Authentication related code is placed in this folder.

### `components/`
All the `React components` are placed here.

- `block/`
	All the Block components are placed here, complex components that require more logic and still being reusable are placed here.

- `element/`
	Components that are made for using them as custom elements are placed here.

- `form/`
	Form components are placed here, these components include their own custom useForm hook of  `react-hook-form`.

### `hooks/`
All the `React custom hooks` are placed here.

### `screens/`
All the `React components` that represent a screen of a page.


## Next is not relying on `devDependencies` in `package.json`

You may found this odd, but I searched for this and found this 
[answer on StackOverflow](https://stackoverflow.com/a/75416993)
which cites an issue made in Next repository about this. 

It appears this is expected and now Next does the minification itself now.