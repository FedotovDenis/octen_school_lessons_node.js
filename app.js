const express = require('express');
const { read, write } = require('./db'); // Импортируем функции из db.js
const path = require('node:path');

const app = express();
const PORT = 5000;

app.use(express.json()); // Для обработки JSON в запросах




// Получение всех пользователей
app.get('/usersname', async (req, res) => {
    try {
        const users = await read(); // Используем функцию read() для чтения данных из файла
        res.json(users); // Отправляем пользователей в ответе
    } catch (error) {
        res.status(500).send('Error reading users from file'); // Отправляем ошибку, если чтение из файла не удалось
    }
});


// Добавление нового пользователя
app.post('/usersname', async (req, res) => {
    try {
        const newUser = req.body; // Получаем данные нового пользователя из запроса
        const users = await read(); // Используем функцию read() для чтения данных из файла
        users.push(newUser); // Добавляем нового пользователя в массив пользователей
        await write(users); // Используем функцию write() для записи данных в файл
        res.status(201).send('User created successfully'); // Отправляем ответ, что пользователь был успешно создан
    } catch (error) {
        res.status(500).send('Error creating user'); // Отправляем ошибку, если создание пользователя не удалось)
    }
});




// Сервер
app.get('/', (req, res) => {
    res.send('Hello World!'); // Отправляем ответ "Hello World!" при запросе на корневой путь
});

app.listen(PORT, () => { // Запускаем сервер на указанном порту
    console.log(`Server is running on port ${PORT}`); // Выводим сообщение в консоль, что сервер запущен
})