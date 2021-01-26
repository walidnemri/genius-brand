import { BaseDatabase, BaseResource } from 'admin-bro';
declare class Database extends BaseDatabase {
    private sequelize;
    static isAdapterFor(database: any): boolean;
    constructor(database: any);
    resources(): Array<BaseResource>;
}
export default Database;
