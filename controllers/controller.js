//  Get all questions
export const getQuestions = async (req, res) => {
  res.json("questions api GET request");
};

//  Insert all questions
export const insertQuestions = async (req, res) => {
  res.json("questions API POST request");
};

// Delete all questions
export const dropQuestions = async (req, res) => {
  res.json("API Delete questions request");
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
