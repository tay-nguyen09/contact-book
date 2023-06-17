import { UserContactsModel } from "../models/UserContactsModel";

const firstSeeder = async () => {
  await UserContactsModel.create();
};
