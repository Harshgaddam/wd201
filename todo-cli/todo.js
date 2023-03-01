/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = () => {
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

  all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    overDue = [];
    for (let i = 0; i < all.length; i++) {
      if (Date.parse(all[i].dueDate) < Date.parse(today)) overDue.push(all[i]);
    }
    return overDue;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    duetoday = [];
    for (let i = 0; i < all.length; i++) {
      if (Date.parse(all[i].dueDate) === Date.parse(today))
        duetoday.push(all[i]);
    }
    return duetoday;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    duelater = [];
    for (let i = 0; i < all.length; i++) {
      if (Date.parse(all[i].dueDate) > Date.parse(today)) duelater.push(all[i]);
    }
    return duelater;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    let s = "";
    let size = list.length;
    for (let i = 0; i < size; i++) {
      if (list[i].completed === true) s += "[x]";
      else s += "[ ]";
      s += ` ${list[i].title}`;
      if (Number(list[i].dueDate.substr(8, 10)) !== today)
        s += ` ${list[i].dueDate}`;
      if (i !== size - 1) s += "\n";
    }
    return s;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
