import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";

import questions, { answers } from "../database/data.js";

//  Get all questions
export const getQuestions = async (req, res) => {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
};

//  Insert all questions
export const insertQuestions = async (req, res) => {
  try {
    Questions.insertMany(
      { questions: questions, answers: answers },
      (err, data) => {
        res.json({ msg: "Data Saved Successfully" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
};

// Delete all questions
export const dropQuestions = async (req, res) => {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
};

// Get all result
export const getResult = async (req, res) => {
  res.json("result API GET request");
};

// Post all result
export const storeResult = async (req, res) => {
  res.json("result API POST request");
};

// Delete all result
export const dropResult = async (req, res) => {
  res.json("result API Delete request");
};
