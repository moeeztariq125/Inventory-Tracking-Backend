import { ModelStatic, FindOptions, UpdateOptions, CreateOptions, Model, FindAttributeOptions, DestroyOptions, CountOptions } from 'sequelize'


abstract class BaseRepository<T extends Model> {
    private model:ModelStatic<any>;
    constructor(model:ModelStatic<any>){
        this.model = model
    }
    async findById(id: string, attributes?: FindAttributeOptions): Promise<T | null> {
        return await this.model.findByPk(id, { attributes });
    }
    async findByFilter(filterOptions:FindOptions):Promise<T[]|null>{
        return await this.model.findAll(filterOptions)
    }
    async findOne(filter:FindOptions):Promise<T>{
        return await this.model.findOne(filter)
    }
    async create(createObj: Partial<T>, createOptions?: CreateOptions): Promise<T | null> {
        try {
            return await this.model.create(createObj, createOptions);
        } catch (error) {
            console.error('Error creating entity:', error);
            return null;
        }
    }

    async bulkCreate(createObjs:Partial<T>[], createOptions:CreateOptions):Promise<T[]|null>{
        try{
            const res = await this.model.bulkCreate(createObjs,{...createOptions,})
            return res

        }catch(err:any){
            console.error('Error in bulk Create ',err)
            throw new Error(err)
        }
    }

    async updateOne(updateObj: Partial<T>, filter: UpdateOptions): Promise<T | null> {
        try {
            const [numOfRowsUpdated,[updatedDoc]] = await this.model.update(updateObj, {...filter,returning:true});

            if (numOfRowsUpdated === 0 || !updatedDoc) {
                // If no rows were updated or no document was returned, the document was not found
                return null;
            }

            return updatedDoc;
        } catch (err:any) {
            throw new Error(err)
        }
    }

    async deleteById(id:string):Promise<Boolean>{
        const numRowsDeleted = await this.model.destroy({
            where:{id}
        })
        return numRowsDeleted > 0
    }

    async deleteByFilter(filter: DestroyOptions):Promise<Boolean>{
        const numOfRowsDeleted = await this.model.destroy(filter)
        return numOfRowsDeleted>0
    }

    async count(filter: CountOptions):Promise<number>{
        return await this.model.count(filter)
    }
}

export default BaseRepository