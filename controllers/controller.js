import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";

import questions, { answers } from "../database/data.js";
import resultSchema from "../models/resultSchema.js";

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
  try {
    const r = await Result.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
};

// Post all result
export const storeResult = async (req, res) => {
  try {
    const { username, result, attepmts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data not provided");

    resultSchema.create(
      { username, result, attepmts, points, achived },
      (err, data) => {
        res.json({ msg: "Result Saved Successfully" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
};

// Delete all result
export const dropResult = async (req, res) => {
  try {
    await Result.deleteMany();
    res.json({ msg: "Results Deleted Successfully" });
  } catch (error) {
    res.json({ error });
  }
};
