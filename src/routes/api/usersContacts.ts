import {
  addContact,
  getContactById,
  getListContacts,
  removeContacts,
  updateContactInfo,
} from "../../functions/UsersContact";
import express, {
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
export const usersContractRoutes = (router: Router) => {
  router.get("/contact/:id", getContactById);
  router.get("/list-contacts", getListContacts);

  router.post("/add-contact", addContact);

  router.put("/update/:id", updateContactInfo);

  router.delete("/delete/:id", removeContacts);

  return router;
};
