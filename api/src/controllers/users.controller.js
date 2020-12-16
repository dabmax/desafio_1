const db = require("../config/database");

// ==> Método responsável por cadastrar uma nova 'Pessoa':

exports.createUsers = async (req, res) => {
  const { firstname, lastname, age } = req.body;
  const { rows } = await db.query(
    "INSERT INTO pessoas (firstname, lastname, age) VALUES ($1, $2, $3)",
    [firstname, lastname, age]
  );

  res.status(201).send({
    message: "People added successfully!",
    body: {
      people: { firstname, lastname, age }
    },
  });
};

// ==> Método responsável por listar todos os 'Pessoas':
exports.listAllUsers = async (req, res) => {
  const response = await db.query('SELECT * FROM pessoas ORDER BY pessoaid ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Pessoas' pelo 'Id':
exports.findUsersById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM pessoas WHERE pessoaid = $1', [userId]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Pessoa' pelo 'Id':
exports.updateUsersById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { firstname, lastname, age } = req.body;

  const response = await db.query(
    "UPDATE pessoas SET firstname = $1, lastname = $2, age = $3 WHERE pessoaid = $4",
    [firstname, lastname, age, userId]
  );

  res.status(200).send({ message: "People Updated Successfully!" });
};

// ==> Método responsável por excluir uma 'Pessoa' pelo 'Id':
exports.deleteUsersById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query('DELETE FROM pessoas WHERE pessoaid = $1', [
    userId
  ]);

  res.status(200).send({ message: 'People deleted successfully!', userId });
};
