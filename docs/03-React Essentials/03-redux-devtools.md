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

We have a middleware to enable Redux DevTools on your store. Your store should be wrapped with `withDevTools`, otherwise the it will not work as expected. Here `Counter Store` is a store identifier for the Redux DevTools.

```jsx {5}
import { createStore, withDevTools } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

const counterStore = createStore({ count: 0 });
withDevTools(counterStore, 'Counter Store');

const useCounterStore = () => useStore(counterStore);
```

## Conditionally enable

```jsx {5-7}
import { createStore, withDevTools } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

const counterStore = createStore({ count: 0 });
if (process.env.NODE_ENV === 'development') {
	withDevTools(counterStore, 'Counter Store');
}

const useCounterStore = () => useStore(counterStore);
```
