---
id: redux-devtools
title: Redux DevTools
slug: /redux-devtools
sidebar_label: Redux DevTools
---

# Redux DevTools

It is possible to debug store changes using the Redux DevTools. It can be used as a browser extension (for Chrome, Edge and Firefox), as a standalone app or as a React component integrated in the client app.

Install [**redux-devtools**](https://github.com/reduxjs/redux-devtools/tree/main/extension#installation)

## Enable DevTools

```jsx
import { createStore } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

const counterStore = createStore(
	{ count: 0 },
	{
		enableDevTools: true,
		storeIdentifier: 'counterStore',
	}
);
const useCounterStore = () => useStore(counterStore);
```
