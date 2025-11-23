const request = require('supertest');
describe('Pruebas Básicas del Proyecto', () => {

    test('Prueba de matemáticas simple (Sanity Check)', () => {
        expect(1 + 1).toBe(2);
    });

    test('Verificar que existe el archivo index.html', () => {
        const fs = require('fs');
        const path = require('path');
        const indexPath = path.join(__dirname, '../public/index.html');
        expect(fs.existsSync(indexPath)).toBe(true);
    });

});