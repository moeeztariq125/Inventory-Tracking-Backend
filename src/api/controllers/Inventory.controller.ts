import { Request, Response } from "express";
import { inventoryServiceClass } from "../services";

class inventoryControllerClass {
  private inventoryService: inventoryServiceClass;
  constructor(inventoryService: inventoryServiceClass) {
    this.inventoryService = inventoryService;
  }
  async getUser(req: Request, res: Response) {
    res.send("user details");
  }
  async updateUser(req: Request, res: Response) {
    res.send("user updated");
  }
  async createUser(req: Request, res: Response) {
    res.send("user Created");
  }
  async deleteUser(req: Request, res: Response) {
    res.send("user deleted");
  }
}

export default inventoryControllerClass;
