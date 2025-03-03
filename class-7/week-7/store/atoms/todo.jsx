import { atom, selector } from 'recoil';

// Atom for the todo list
export const todoListState = atom({
  key: 'todoListState',
  default: [], // Default value: an empty array
});

// Atom for the filter state
export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All', // Default filter
});

// Selector for the filtered todo list
export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// Selector for the stats
export const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});