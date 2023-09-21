import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

/**
 * About react-redux-toolkit & react-redux
 *
 * react-redux-toolkit
 * 	As it's name says, it's a toolkit that helps setting react-redux in a more easier way.
 *
 * Concepts:
 * 	Slice: a Slice is a single reducer that handles it's own state and actions, this
 * 		helps to create separated files of each thing we want to be part of redux so we
 * 		can control it along the whole website.
 * 	Store: This is where the slices need to be provided so they are recognized by redux-toolkit
 * 		and start working.
 * 	Provider: This comes from the react-redux core, basic concept, a provider is needed to provide
 * 		the whole store to all the website.
 * 	Hooks: this file, read more below.
 *
 * React redux toolkit recommends this usage combined with react-redux
 * what it is doing here is aliasing the *dispatch* and the *selector*
 * that react-redux has but providing it the typings that redux-toolkit
 * makes you create.
 *
 * This allows a good TypeScript typing and auto completion.
 *
 * Use these hooks when you want to use redux
 *
 * source:
 * 	https://youtu.be/9zySeP5vH9c
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
