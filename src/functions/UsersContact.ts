import mongoose from "mongoose";
import { UserContactsModel } from "../models";
import { Request, Response, NextFunction } from "express";
import { messeges } from "../utils/constants";

const getListContacts = async (req: Request, res: Response) => {
  try {
    const resuft = await UserContactsModel.find({});
    res.status(200).send(resuft);
  } catch (error) {
    res.send(messeges.fail);
    throw error;
  }
};

const getContactById = async (req: Request, res: Response) => {
  try {
    const resuft = await UserContactsModel.findById(req.body.id);
    res.status(200).send(resuft);
  } catch (error) {
    res.send(messeges.fail);
    throw error;
  }
};

const addContact = async (req: Request, res: Response) => {
  try {
    const postData = await UserContactsModel.create(req.body);
    res.status(200).json(postData);
  } catch (error) {
    res.send(messeges.fail);
    throw error;
  }
};

const updateContactInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await UserContactsModel.findByIdAndUpdate(id, req.body);
    if (contact) {
      const resuft = await UserContactsModel.findById(id);
      res.status(200).send(resuft);
    } else {
      res.status(404).send(messeges.notFound);
    }
  } catch (error) {
    res.send(messeges.fail);
    throw error;
  }
};

const removeContacts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contact = await UserContactsModel.findByIdAndDelete(id, req.body);
    if (contact) {
      res.status(200).send(messeges.success);
    } else {
      res.status(404).send(messeges.notFound);
    }
  } catch (error) {
    res.send(messeges.fail);
    throw error;
  }
};
export {
  getListContacts,
  getContactById,
  addContact,
  removeContacts,
  updateContactInfo,
};
