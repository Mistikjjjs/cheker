#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const faker = require('@faker-js/faker');
const readline = require('readline');

// Limpia la pantalla (compatible con Linux)
console.clear();

// Encabezado visual
console.log(`
\33[96m
  ꧁🅲🅾🅼🅱🅾 🅼🅰🅺🅴🆁 & 🅼3🆄 🆂🅲🅰🅽🅽🅴🆁꧂                
           ꧁️☠️PERCIA☠️꧂       
\33[31m
`);
console.log(`
\33[0m\33[32m
COMBO OPTIONS:                      

1) NOMBRE:NOMBRE (Mix)
2) Nombres (Mayúsculas, Minúsculas)
Ejemplo:
Juan
juan
0) PARA SALIR A SCANEAR
\33[33m
`);

// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para preguntar al usuario
function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, answer => {
            resolve(answer);
        });
    });
}

// Directorio donde se guardarán los combos
const comboDir = path.join(__dirname, 'combo'); // Cambia esto si prefieres otro directorio

// Crear el directorio si no existe
if (!fs.existsSync(comboDir)) {
    fs.mkdirSync(comboDir, { recursive: true });
}

(async () => {
    const menu = await askQuestion("Enter Option: ");

    if (menu === "1") {
        // Opción 1: Generar combos mixtos
        const filename = await askQuestion("\nNombre de tu Combo (.txt): ");
        const numLines = parseInt(await askQuestion("¿Cuántas líneas deseas generar?: "), 10);

        // Ruta completa del archivo
        const filePath = path.join(comboDir, `${filename}.txt`);

        let content = "";

        for (let i = 0; i < numLines; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const randomNum = Math.floor(Math.random() * 100000) + 1;

            const combinations = [
                `${firstName}${randomNum}:${firstName}${randomNum}`,
                `${lastName}${randomNum}:${lastName}${randomNum}`,
                `${firstName}2022:${firstName}2022`,
                `${lastName}2022:${lastName}2022`,
                `${firstName}2023:${firstName}2023`,
                `${lastName}2023:${lastName}2023`,
                `${firstName}:${firstName}`,
                `${lastName}:${lastName}`,
                `${firstName}123:${firstName}123`,
                `${lastName}123:${lastName}123`,
                `${randomNum}:${randomNum}`
            ];

            // Agregar combinaciones al contenido
            content += combinations.join("\n") + "\n";
        }

        // Escribir el contenido en el archivo
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`\33[1;37;33m\n¡Combo generado exitosamente! Archivo guardado en: ${filePath}\n`);

    } else if (menu === "2") {
        // Opción 2: Generar nombres en diferentes formatos
        const filename = await askQuestion("\nNombre de tu Combo (.txt): ");
        const numLines = parseInt(await askQuestion("Número de líneas (x2): "), 10);

        // Ruta completa del archivo
        const filePath = path.join(comboDir, `${filename}.txt`);

        let content = "";

        for (let i = 0; i < numLines; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            const combinations = [
                `${firstName} ${lastName}`,
                `${firstName.toLowerCase()} ${lastName.toLowerCase()}`,
                `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
            ];

            // Agregar combinaciones al contenido
            content += combinations.join("\n") + "\n";
        }

        // Escribir el contenido en el archivo
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`\33[1;37;33m\n¡Combo generado exitosamente! Archivo guardado en: ${filePath}\n`);

    } else if (menu === "0") {
        // Salir
        console.log("\33[1;37;33m\nSaliendo...\n");
        rl.close();
        process.exit(0);

    } else {
        // Opción inválida
        console.log("\33[1;31m\nOpción no válida. Inténtalo de nuevo.\n");
        rl.close();
    }
})();
