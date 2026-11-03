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
screenshoot
POST
<img width="1917" height="1078" alt="Screenshot 2026-11-03 095247" src="https://github.com/user-attachments/assets/b6415b57-3e9c-44f5-811e-29c9c0299b27" />
PUT
<img width="1917" height="1078" alt="Screenshot 2026-11-03 095434" src="https://github.com/user-attachments/assets/a9d7fc64-88c4-453e-9032-f0089c444572" />
GET
<img width="1916" height="1078" alt="Screenshot 2026-11-03 095910" src="https://github.com/user-attachments/assets/ab7c6f3a-df50-4272-979f-381976a094e7" />
DELETE
<img width="1917" height="1078" alt="Screenshot 2026-11-03 100042" src="https://github.com/user-attachments/assets/f2b6d92c-5846-46df-9ace-12595b582c1b" />



