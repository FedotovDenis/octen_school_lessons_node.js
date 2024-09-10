const fs = require('fs').promises; // Используем промисы для асинхронных операций
const path = require('path'); // Модуль для работы с путями к файлам

const filePath = path.join(__dirname, 'users.json'); // Путь к файлу с данными


// Функция для чтения данных из файла
async function read(){
    try {
        const data = await fs.readFile(filePath, 'utf-8'); // Читаем файл
        return data ? JSON.parse(data) : []; // Если файл существует, парсим JSON, иначе возвращаем пустой массив
    } catch (err) {
        console.error('Ошибка чтения файла', err.message); // Выводим ошибку в консоль
        return []; // Возвращаем пустой массив
    }
}


// Функция для записи данных в файл
async function write(users){
    try {
        await fs.writeFile(filePath, JSON.stringify(users, null, 2)); // Записываем данные в файл в формате JSON
    } catch (err) {
        console.error('Ошибка записи файла', err.message); // Выводим ошибку в консоль'
    }
}

// Экспортируем функции для использования в других файлах
module.exports = {
    read,
    write
};