/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const todoList = require("../todo");
const {
  all,
  markAsComplete,
  add,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

describe("TodoList Test Suite", () => {
  test("Adding new Todo", () => {
    expect(overdue.length).toBe(0);
    const todoListLength = all.length;
    add({
      title: "Submit Assignment",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Marking todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Adding new Todo", () => {
    expect(dueToday.length).toBe(0);
    const todoListLength = all.length;
    add({
      title: "Pay Rent",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Adding new Todo", () => {
    expect(dueLater.length).toBe(0);
    const todoListLength = all.length;
    add({
      title: "Adding File tax",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoListLength + 1);
  });
});
