/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = () => {
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
    const today = new Date().getDate();
    overDue = [];
    for (let i = 0; i < all.length; i++) {
      if (Number(all[i].dueDate.substr(8, 10)) < today) overDue.push(all[i]);
    }
    console.log(overDue);
    return overDue;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    const today = new Date().getDate();
    duetoday = [];
    for (let i = 0; i < all.length; i++) {
      if (Number(all[i].dueDate.substr(8, 10)) === today) duetoday.push(all[i]);
    }
    return duetoday;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    const today = new Date().getDate();
    duelater = [];
    for (let i = 0; i < all.length; i++) {
      if (Number(all[i].dueDate.substr(8, 10)) > today) duelater.push(all[i]);
    }
    return duelater;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    const today = new Date().getDate();
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
