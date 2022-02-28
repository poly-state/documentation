---
id: react-quick-start
title: Quick Start
slug: /react-quick-start
sidebar_label: Quick Start
---

# ReactJS Quick Start

Add the poly-state packages to your **ReactJS / Next.js** project:

```shell
yarn add @poly-state/poly-state @poly-state/react
```

### Create a store

```jsx
import { createStore } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

const counterStore = createStore({ count: 0 });
const useCounterStore = () => useStore(counterStore);
```

### Use store and update

```jsx
export const MyCounter = () => {
	const { count } = useCounterStore();

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					counterStore.setCount((prev) => {
						if (prev === 0) return prev;
						return prev - 1;
					});
				}}
			>
				Decrement
			</button>
			<button onClick={() => counterStore.setCount((prev) => prev + 1)}>
				Increment
			</button>
		</div>
	);
};
```
