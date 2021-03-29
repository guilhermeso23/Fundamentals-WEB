const complement = (fullName) => {
  const emailName = fullName.toLowerCase().split(' ').join('_');
  return {
    name: fullName,
    email: `${emailName}@trybe.com`,
  }
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(complement));