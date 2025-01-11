export const calculateAge = (birthDate: string): number => {
    const birthDateParts = birthDate.split('.');
    const birthYear = parseInt(birthDateParts[2], 10);
    const birthMonth = parseInt(birthDateParts[1], 10) - 1; // Месяцы индексируются с 0
    const birthDay = parseInt(birthDateParts[0], 10);

    const today = new Date();
    let age = today.getFullYear() - birthYear;
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }

    return age;
  };