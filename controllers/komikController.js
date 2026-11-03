const Komik = require('../models/komik');

// POST /komik - tambah komik baru
exports.createKomik = async (req, res) => {
  try {
    const { title, description, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: 'title dan author wajib diisi' });
    }

    const komik = await Komik.create({ title, description, author });
    res.status(201).json({ message: 'Komik berhasil ditambahkan', data: komik });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /komik - ambil semua komik
exports.getAllKomik = async (req, res) => {
  try {
    const komik = await Komik.findAll({ order: [['id', 'ASC']] });
    res.status(200).json({ message: 'Data komik berhasil diambil', data: komik });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /komik/:id - ambil satu komik berdasarkan id
exports.getKomikById = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);

    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }

    res.status(200).json({ message: 'Data komik berhasil diambil', data: komik });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /komik/:id - ubah data komik
exports.updateKomik = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);

    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }

    const { title, description, author } = req.body;
    await komik.update({
      title: title ?? komik.title,
      description: description ?? komik.description,
      author: author ?? komik.author,
    });

    res.status(200).json({ message: 'Komik berhasil diubah', data: komik });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /komik/:id - hapus komik
exports.deleteKomik = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);

    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan' });
    }

    await komik.destroy();
    res.status(200).json({ message: 'Komik berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
