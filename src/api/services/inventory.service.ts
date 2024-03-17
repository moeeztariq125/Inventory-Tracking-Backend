import { InventoryRepository } from "../../repositories";

class inventoryServiceClass {
  private inventoryRepo: InventoryRepository;
  constructor(inventoryRepo: InventoryRepository) {
    this.inventoryRepo = inventoryRepo;
  }
}

export default inventoryServiceClass;
