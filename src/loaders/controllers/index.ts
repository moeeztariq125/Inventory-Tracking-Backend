import { InventoryRepository, UserRepository } from "../../repositories";
import { UserController, InventoryController } from "../../api/controllers";
import {usersServiceClass, inventoryServiceClass} from "../../api/services";


//----------Defining Repos--------------------//
const userRepo = new UserRepository();
const inventoryRepo = new InventoryRepository();

//----------Defining Services--------------------//
const userService = new usersServiceClass(userRepo);
const inventoryService = new inventoryServiceClass(inventoryRepo);


//-----------Defining Controllers-------------------//
const userController = new UserController(userService)
const inventoryController = new InventoryController(inventoryService)


export {userController, inventoryController}