---
sidebar_position: 4
---

# Redux DevTools

It is possible to debug store changes using the Redux DevTools. It can be used as a browser extension (for Chrome, Edge and Firefox), as a standalone app or as a React component integrated in the client app.

Install [**redux-devtools**](https://github.com/reduxjs/redux-devtools/tree/main/extension#installation)

## Enable DevTools

```jsx
import { createStore } from '@poly-state/poly-state';
import { createHooks } from '@poly-state/react';

const counterStore = createStore(
	{ count: 0 },
	{
		enableDevTools: true,
		storeIdentifier: 'counterStore',
	}
);

const [useCounterStore, useCounterStoreSelector] = createHooks(counterStore);
```
