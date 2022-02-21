---
sidebar_position: 3
---

# ReactJS Quick Start

Add the poly-state packages to your **ReactJS / Next.js** project:

```shell
yarn add @poly-state/poly-state @poly-state/react
```

### Create a store

```jsx
import { createStore } from '@poly-state/poly-state';
import { createHooks } from '@poly-state/react';

const counterStore = createStore({ count: 0 });

const [useCounterStore, useCounterStoreSelector] = createHooks(counterStore);
```

### Use store on your components

```jsx
export const MyCounter = () => {
	const count = useCounterStoreSelector('count');
	// or const { count } = useCounterStore();

	const handleIncrement = useCallback(() => {
		counterStore.setCount((prevCount) => prevCount + 1);
		// or counterStore.setCount(count + 1);
		// or counterStore.setState({ count: count + 1 });
		// or counterStore.setState((state) => {
		//	return {...state, count: state.count + 1};
		//}));
	}, [counterStore]);

	const handleDecrement = useCallback(
		() => counterStore.setCount((prevCount) => prevCount - 1),
		[counterStore]
	);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
		</div>
	);
};
```
