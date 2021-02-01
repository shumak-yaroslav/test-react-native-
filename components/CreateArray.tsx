export const CreateArray = (apps) => {
  const newData = [];
  console.log(apps);
  for (let i = 0; i < apps.definition.fields.length; i++) {
    if (apps.answers[i].type === 'text') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].text,
      });
    } else if (apps.answers[i].type === 'choice') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].choice.label,
      });
    } else if (apps.answers[i].type === 'choices') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].choices.labels,
      });
    } else if (apps.answers[i].type === 'file_url') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].file_url,
      });
    } else if (apps.answers[i].type === 'phone_number') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].phone_number,
      });
    } else if (apps.answers[i].type === 'email') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].email,
      });
    } else if (apps.answers[i].type === 'date') {
      newData.push({
        que: apps.definition.fields[i].title,
        answers: apps.answers[i].date,
      });
    }
  }

  return newData;
};
