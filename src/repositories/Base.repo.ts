import { ModelStatic, FindOptions } from 'sequelize'


abstract class BaseRepository<T extends {}> {
    private model:ModelStatic<any>;
    constructor(model:ModelStatic<any>){
        this.model = model
    }
    async findById(id: string, options: Record<string, any> = {}): Promise<T|null> {
        return await this.model.findByPk(id)
    }
    async findByFilter(filterOptions:FindOptions):Promise<T[]|null>{
        return await this.model.findAll(filterOptions)
    }
}

export default BaseRepository