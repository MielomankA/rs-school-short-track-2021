/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  /* throw new Error('Not implemented'); */

  // Разбиваем объект email на массив строк и вводим 2 переменные со значением строка

  const arr = email.split('');
  let domain = '';
  let sliced = '';
  // Проходим по массиву, проверяя является ли текущий элемент @
  // Если текущий элемент - @, извлекаем часть строки после @ методом slice
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) === 64) {
      sliced = arr.slice(i + 1);
    }
  }

  // Превращаем массив, содержащий информацию о домене, обратно в строку
  domain = sliced.join('');
  return domain;
}

module.exports = getEmailDomain;
