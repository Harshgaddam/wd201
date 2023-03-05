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
  test("Adding overDue item", () => {
    const todoListLength = all.length;
    expect(overdue.length).toBe(0);
    add({
      title: "Submit Assignment",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Retrieving overDue items", () => {
    expect(overdue().length).toBe(1);
  });

  test("Marking overDue Item as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Adding dueToday Item", () => {
    const todoListLength = all.length;
    expect(dueToday.length).toBe(0);
    add({
      title: "Pay Rent",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoListLength + 1); // verifying item added into all
  });

  test("Retrieving dueToday items", () => {
    expect(dueToday().length).toBe(1);
  });

  test("Adding dueLater Item", () => {
    const todoListLength = all.length;
    expect(dueLater.length).toBe(0);
    add({
      title: "Adding File tax",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Retrieving dueLater items", () => {
    expect(dueLater().length).toBe(1);
  });
});
