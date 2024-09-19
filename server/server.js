import express from 'express';
import cors from 'cors';
import pool from './db.js';  

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());  

// Маршрут для регистрации
app.post('/register', async (req, res) => {
  const { email, phone, password, name, image } = req.body;
  console.log("Received data:", { email, phone, password, name, image });

  try {
    const result = await pool.query(
      "INSERT INTO users(nameuser, email, login, passworduser, image) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, email, phone, password, image]
    );
    console.log("Insert result:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
});


app.get('/test', async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Server error");
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND passworduser = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      // Пользователь найден
      res.status(200).json(result.rows[0]);
    } else {
      // Пользователь не найден
      res.status(401).send("Неверные учетные данные");
    }
  } catch (err) {
    console.error("Ошибка выполнения запроса:", err);
    res.status(500).send("Ошибка сервера");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
