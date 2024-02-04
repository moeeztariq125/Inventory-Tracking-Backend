import { InventoryRepository, UserRepository } from "../repositories";
import { UserController, InventoryController } from "../api/controllers";
import {usersServiceClass, inventoryServiceClass} from "../api/services";


//----------Defining Repos--------------------//
const userRepo = new UserRepository();
const inventoryRepo = new InventoryRepository();

const repos = {
    userRepo,
    inventoryRepo
}
//----------Defining Services--------------------//
const userService = new usersServiceClass(userRepo);
const inventoryService = new inventoryServiceClass(inventoryRepo);
const services = {
    userService,
    inventoryService
}

//-----------Defining Controllers-------------------//
const userController = new UserController(userService)
const inventoryController = new InventoryController(inventoryService)
const controllers = {
    userController,
    inventoryController
}

export {repos, services, controllers}