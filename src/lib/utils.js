module.exports = {
  age(timestamp) {
    const today = new Date();
    const birthDate = new Date(timestamp);
  
    let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const month = today.getUTCMonth() - birthDate.getUTCMonth();
  
    if (month < 0 || month == 0 && today.getUTCDate() <= birthDate.getUTCDate()) {
      age = age -1
    }
  
    return age
  },
  date(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      format: `${day}/${month}/${year}`,
      birthDay: `${day}/${month}`,
      iso:`${year}-${month}-${day}`,
    }
  },
};
