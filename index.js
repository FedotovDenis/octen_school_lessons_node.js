// Продолжение домашней работы на этой странице: march 2024 nodejs hw-2
const path = require('node:path');
const fs = require('node:fs/promises');

const foo = async () => {
    try {
        const pathToDir = path.join(__dirname, 'baseFolder');
        await fs.mkdir(pathToDir, { recursive: true });

        const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];
        const fileName = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
        await Promise.all(folderNames.map(async (folder, index) => {
            const folderPath = path.join(pathToDir, folder);
            await fs.mkdir(folderPath, { recursive: true })

            await Promise.all(fileName.map(async (file) => {
                const filePath = path.join(folderPath, file);
                await fs.writeFile(filePath, 'Hello World!');
            }));
        }));
    } catch (error) {
        console.log(error.message);
    }
}

void foo();
