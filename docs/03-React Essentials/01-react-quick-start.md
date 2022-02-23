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

### Use store

```jsx
export const MyCounter = () => {
	const { count } = useCounterStore();

	const handleIncrement = useCallback(() => {
		counterStore.setCount((prevCount) => prevCount + 1);
	}, []);

	const handleDecrement = useCallback(() => {
		counterStore.setCount((prevCount) => prevCount - 1);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};
```
