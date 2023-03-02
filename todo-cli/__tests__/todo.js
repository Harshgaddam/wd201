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
  beforeAll(() => {
    add({
      title: "Submit assignment",
      dueDate: yesterday,
      completed: false,
    });
    add({ title: "Pay rent", dueDate: today, completed: false });
    add({ title: "Service Vehicle", dueDate: today, completed: false });
    add({ title: "File taxes", dueDate: tomorrow, completed: false });
    add({
      title: "Pay electric bill",
      dueDate: tomorrow,
      completed: false,
    });
  });

  test("Adding new Todo", () => {
    const todoListLength = all.length;
    add({
      title: "Adding File tax",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all.length).toBe(todoListLength + 1);
  });

  test("Marking todo as complete", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("Retrieval of Over Due items", () => {
    const overDue = overdue();
    expect(overDue[0].length).toBe(overDue[1]);
  });

  test("Retrieval of Due Today items", () => {
    const duetoday = dueToday();
    expect(duetoday[0].length).toBe(duetoday[1]);
  });

  test("Retrieval of Due Later items", () => {
    const duelater = dueLater();
    expect(duelater[0].length).toBe(duelater[1]);
  });
});
