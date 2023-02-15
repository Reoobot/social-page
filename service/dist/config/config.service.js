"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getTypeOrmConfig() {
        return {
            type: 'mysql',
            host: this.getValue('RECETTE_HOST'),
            port: parseInt(this.getValue('RECETTE_PORT')),
            username: this.getValue('RECETTE_USER'),
            password: this.getValue('RECETTE_PASSWORD'),
            database: this.getValue('RECETTE_DATABASE'),
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    'RECETTE_HOST',
    'RECETTE_PORT',
    'RECETTE_USER',
    'RECETTE_PASSWORD',
    'RECETTE_DATABASE',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map