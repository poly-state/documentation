---
id: advanced-uses
title: Advanced Uses
slug: /advanced-uses
sidebar_label: Advanced Uses
---

# Advanced Uses

Here is an example store of todo items and it is written in OOP style. We strongly recommend to use TypeScript to write the code.

### Example

```tsx
import { getStoreClass } from '@poly-state/poly-state';
import { useStore } from '@poly-state/react';

type Todo = {
	id: string;
	text: string;
	completed: 'incomplete' | 'complete';
};

type TodoStoreState = {
	count: number;
	todos: Todo[];
};

const initialState: TodoStoreState = {
	count: 0,
	todos: [],
};

class TodoStore extends getStoreClass<TodoStoreState>() {
	addTodo(todo: Todo) {
		this.setState((state) => ({
			...state,
			todos: [...state.todos, todo],
			count: state.count + 1,
		}));
	}

	removeTodo(id: string) {
		this.setState((state) => ({
			...state,
			todos: state.todos.filter((todo) => todo.id !== id),
			count: state.count - 1,
		}));
	}

	toggleTodo(id: string) {
		this.setState((state) => ({
			...state,
			todos: state.todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed:
							todo.completed === 'incomplete' ? 'complete' : 'incomplete',
					};
				}

				return todo;
			}),
		}));
	}
}

export const todoStore = new TodoStore(initialState);
export const useTodoStore = () => useStore(todoStore);
```

### Asynchronous Logic

```tsx
class TodoStore extends getStoreClass<TodoStoreState>() {
	async addAsyncTodo(text: string) {
		const response = await fetch('/api/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text }),
		});
		const todo = (await response.json()) as Todo;

		if (response.status === 200) {
			this.setState((state) => ({
				...state,
				todos: [...state.todos, todo],
				count: state.count + 1,
			}));
		}
	}

	///////////////////////////////////////
}
```

### UI and React

```tsx
import { FC, ChangeEvent, KeyboardEvent, useState } from 'react';
import { todoStore } from './todo-store';

export const AddTodo: FC = () => {
	const [text, setText] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		const trimmedText = e.target.value.trim();
		// If the user pressed the Enter key:
		if (e.key === 'Enter' && trimmedText) {
			// Add the todo to the store with a async call:
			todoStore.addAsyncTodo(trimmedText);
			// And clear out the text input
			setText('');
		}
	};

	return (
		<input
			type='text'
			placeholder='What needs to be done?'
			autoFocus={true}
			value={text}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	);
};
```
