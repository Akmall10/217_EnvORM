require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const createDatabase = require('./config/createDatabase');
require('./models/komik');
const komikRoutes = require('./routes/komikRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Komik - EnvORM (Express JS + Sequelize + PostgreSQL)' });
});

app.use('/komik', komikRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await createDatabase();          // 1. buat database baru jika belum ada
    await sequelize.authenticate();  // 2. cek koneksi
    await sequelize.sync();          // 3. buat tabel "komik" lewat sequelize
    console.log('Koneksi database berhasil, tabel komik siap digunakan');

    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Gagal menjalankan server:', error.message);
    process.exit(1);
  }
})();
