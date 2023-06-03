import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as ejs from 'ejs';
// ...

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDirectory = path.join(__dirname, '../templates');

// Generate Model file
function generateModelFile(modelName: string, attributes: IField[]) {
    const templatePath = path.join(templatesDirectory, 'model.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const modelContent = ejs.render(template, { modelName, attributes });
    fs.writeFileSync(`./${modelName}/${modelName}.model.ts`, modelContent);
}

// Generate Type file
function generateTypeFile(modelName: string, attributes: IField[]) {
    const templatePath = path.join(templatesDirectory, 'type.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const typeContent = ejs.render(template, { modelName, attributes });
    fs.writeFileSync(`./${modelName}/${modelName}.type.ts`, typeContent);
}

// Generate Route file
function generateRouteFile(modelName: string) {
    const templatePath = path.join(templatesDirectory, 'route.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const routeContent = ejs.render(template, { modelName });

    fs.writeFileSync(`./${modelName}/${modelName}.route.ts`, routeContent);
}

// Generate Controller file
function generateControllerFile(modelName: string, attributes: IField[]) {
    const templatePath = path.join(templatesDirectory, 'controller.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const controllerContent = ejs.render(template, { modelName, attributes });
    fs.writeFileSync(`./${modelName}/${modelName}.controller.ts`, controllerContent);
}

// Generate Manager file
function generateManagerFile(modelName: string) {
    const templatePath = path.join(templatesDirectory, 'manager.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const managerContent = ejs.render(template, { modelName });
    fs.writeFileSync(`./${modelName}/${modelName}.manager.ts`, managerContent);
}

// Generate Dto file
function generateDtoFile(modelName: string) {
    const templatePath = path.join(templatesDirectory, 'dto.ejs');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const dtoContent = ejs.render(template, { modelName });
    fs.writeFileSync(`./${modelName}/${modelName}.dto.ts`, dtoContent);
}

export default function (modelName: string, attributes: IField[]) {
    fs.mkdirSync(`./${modelName}`, { recursive: true });
    // Generate boilerplate code
    generateModelFile(modelName, attributes);
    generateTypeFile(modelName, attributes);
    generateRouteFile(modelName);
    generateControllerFile(modelName, attributes);
    generateManagerFile(modelName);
    generateDtoFile(modelName);
}
