# 217_EnvORM

REST API CRUD **komik** menggunakan **Express JS**, **Sequelize** (ORM) dan **PostgreSQL**.
Konfigurasi database disimpan di file `.env`.

## Struktur Tabel `komik`

| Kolom       | Tipe    | Keterangan                   |
|-------------|---------|------------------------------|
| id          | INTEGER | Primary key, auto increment  |
| title       | STRING  | Judul komik (wajib)          |
| description | TEXT    | Deskripsi komik              |
| author      | STRING  | Pengarang komik (wajib)      |

## Cara Menjalankan

1. Clone repository lalu install dependency
   ```bash
   npm install
   ```
2. Salin `.env.example` menjadi `.env`, lalu isi password PostgreSQL
   ```bash
   cp .env.example .env
   ```
3. Jalankan server (database dan tabel `komik` dibuat otomatis lewat Sequelize)
   ```bash
   npm start
   ```
   Atau mode development: `npm run dev`

## Endpoint

| Method | URL           | Keterangan              |
|--------|---------------|-------------------------|
| GET    | `/komik`      | Ambil semua komik       |
| GET    | `/komik/:id`  | Ambil komik berdasarkan id |
| POST   | `/komik`      | Tambah komik baru       |
| PUT    | `/komik/:id`  | Ubah data komik         |
| DELETE | `/komik/:id`  | Hapus komik             |

Contoh body (JSON) untuk POST dan PUT:

```json
{
  "title": "One Piece",
  "description": "Petualangan Monkey D. Luffy mencari harta karun One Piece",
  "author": "Eiichiro Oda"
}
```