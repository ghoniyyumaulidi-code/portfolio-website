# Portfolio Ghoniyyu Maulidi

Website portfolio (Astro) dengan CMS (Sanity) untuk menambah **Selected Case** dan **Works** tanpa menyentuh kode.

Sebelum CMS disambungkan, website tetap jalan dengan konten contoh (kotak abu-abu).

---

## Langkah 1. Simpan kode ke GitHub (lewat browser)

1. Buka https://github.com/signup dan buat akun gratis (kalau belum punya).
2. Buka https://github.com/new
   - Repository name: `portfolio-website`
   - Pilih **Private** (atau Public, bebas)
   - Klik **Create repository**.
3. Di halaman berikutnya, klik link **uploading an existing file**.
4. Buka folder `portfolio-website` di Finder, pilih **semua isinya** (Cmd + A), lalu seret ke halaman GitHub.
   Seret isinya, bukan folder `portfolio-website`-nya sendiri.
5. Tunggu sampai semua file terunggah, lalu klik **Commit changes**.

## Langkah 2. Online-kan dengan Vercel

1. Buka https://vercel.com dan pilih **Sign up › Continue with GitHub**.
2. Klik **Add New… › Project**, pilih repository `portfolio-website`, lalu **Deploy**.
3. Tunggu 1 sampai 2 menit. Website kamu online di alamat seperti `portfolio-website-xxx.vercel.app`.
   Alamat ini gratis dan tetap hidup walaupun nanti domain sendiri tidak diperpanjang.

## Langkah 3. Sambungkan CMS (Sanity)

1. Buka https://www.sanity.io/manage dan daftar (bisa pakai Google atau GitHub).
2. Klik **Create new project**. Nama: `portfolio`. Dataset: `production`.
3. Salin **Project ID** (contoh: `ab12cd34`).
4. Masih di halaman project Sanity: **API › CORS origins › Add CORS origin**:
   - `https://NAMA-WEBSITE-KAMU.vercel.app`, centang **Allow credentials**
   - `http://localhost:4321`, centang **Allow credentials**
5. Di Vercel: buka project › **Settings › Environment Variables**, tambahkan:
   - `PUBLIC_SANITY_PROJECT_ID` = Project ID tadi
   - `PUBLIC_SANITY_DATASET` = `production`
6. Di Vercel: **Deployments ›** titik tiga pada deploy terakhir **› Redeploy**.
7. Buka `https://NAMA-WEBSITE-KAMU.vercel.app/studio`. Itu dashboard CMS kamu.

## Langkah 4. Website update otomatis saat kamu publish di CMS

1. Di Vercel: **Settings › Git › Deploy Hooks**. Nama: `sanity`, branch: `main`, lalu **Create Hook**. Salin URL-nya.
2. Di https://www.sanity.io/manage: project › **API › Webhooks › Create webhook**.
   - URL: tempel URL dari Vercel
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Simpan.

Sekarang setiap kali kamu klik **Publish** di `/studio`, website ikut ter-update dalam 1 sampai 2 menit.

---

## Menambah konten

Buka `/studio` di website kamu.

**Selected Case**: isi Title, Company, Summary (satu kalimat, hasil di depan), Role, Year, Platform, Team (maks 3 nama), Cover (paling bagus 16:10, 1600×1000). Di **Content**, pakai gaya **Section heading** untuk tiap bagian (Overview, The problem, My role, Process, Key decisions, Outcome). Heading itu otomatis jadi link loncat di kanan. Gambar bisa satu, atau **Two images side by side**.

**Works**: isi Title, Category, Client, Year, Background, Cover (rasio apa saja). Di **Gallery** tambahkan gambar, dua gambar berdampingan, atau video.

**Order**: angka kecil tampil duluan.

### Format aset
- Gambar: upload PNG/JPG resolusi besar (lebar minimal 1600px). Website otomatis mengubahnya jadi WebP/AVIF yang ringan.
- Animasi: pakai **MP4** (bukan GIF), tanpa suara, 5 sampai 15 detik, maksimal sekitar 5 MB. Tambahkan poster (gambar frame pertama).

## Yang masih perlu kamu isi
- `public/resume.pdf`: taruh file PDF resume kamu di folder `public` dengan nama `resume.pdf`.
- `src/lib/site.ts`: ganti link Behance dengan link profil kamu.
- Video collage di About: taruh `about.mp4` di folder `public`, lalu kabari Claude untuk dipasang.

## Domain sendiri (nanti)
Beli domain, lalu di Vercel: **Settings › Domains › Add**. Ikuti petunjuk DNS-nya. Kalau domain tidak diperpanjang, website tetap bisa dibuka di alamat `.vercel.app`.
