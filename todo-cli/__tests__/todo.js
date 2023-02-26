/* eslint-disable no-unused-vars */
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
