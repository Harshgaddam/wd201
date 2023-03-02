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
  let overDueCnt = 0;
  let dueTodayCnt = 0;
  let dueLaterCnt = 0;

  const add = (todoItem) => {
    all.push(todoItem);
    if (todoItem.dueDate < today) overDueCnt++;
    else if (todoItem.dueDate === today) dueTodayCnt++;
    else dueLaterCnt++;
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    console.log(overDueCnt);
    return [all.filter((item) => item.dueDate < today), overDueCnt];
  };

  const dueToday = () => {
    return [all.filter((item) => item.dueDate === today), dueTodayCnt];
  };

  const dueLater = () => {
    return [all.filter((item) => item.dueDate > today), dueLaterCnt];
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (item) =>
          `${item.completed ? "[x]" : "[ ]"} ${item.title} ${
            item.dueDate === new Date().toLocaleDateString("en-CA")
              ? " "
              : item.dueDate
          }`
      )
      .join("\n");
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

module.exports = todoList;
