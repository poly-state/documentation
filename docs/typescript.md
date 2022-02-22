---
sidebar_position: 6
---

# TypeScript Support

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. `poly-state` is written in TypeScript and provides first-class TypeScript support.

```tsx
/**
 * counter.ts
 * TypeScript example for React
 */
import { createStore } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

type Item = {
	id: number;
	name: string;
};

type CartStore = {
	count: number;
	items: Item[];
};

const initialState: CartStore = {
	count: 0,
	items: [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
	],
};

export const cartStore = createStore(initialState);
export const useCartStore = () => useStore(cartStore);

export const cartActions = {
	countIncBy(value: CartStore['count']) {
		cartStore.setCount((prev) => prev + value);
	},
	addItem(item: Item) {
		cartStore.setItems((prev) => [...prev, item]);
	},
	updateStore(newCount: CartStore['count'], item: Item) {
		cartStore.setState((prev) => ({
			count: prev.count + newCount,
			items: [...prev.items, item],
		}));
	},
};
```
