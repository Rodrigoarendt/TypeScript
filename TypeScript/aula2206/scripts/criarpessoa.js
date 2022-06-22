"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoanova_1 = __importDefault(require("./pessoanova"));
var jose = new pessoanova_1.default(1, 'Jose da silva', 123, 'jose@gmail.com', 42, 1.50);
jose.imprimeDados();
var maria = new pessoanova_1.default(2, 'maria', 345, 'maria@gmail.com', 48, 1.80);
maria.imprimeDados();
