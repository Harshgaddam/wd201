/* eslint-disable curly */
/* eslint-disable comma-dangle */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable no-undef */
let h = 1;
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Testing Todo CLI",
      completed: false,
      dueDate: new Date().toISOString(),
    });
  });

  test("Adding new Todo", () => {
    const todoListLength = all.length;
    add({
      title: "Testing Todo CLI",
      completed: false,
      dueDate: new Date().toISOString(),
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Marking todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
