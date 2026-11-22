# توت فرنگی موبایل | TootFarangi Mobile

نسخهٔ موبایل برنامهٔ «توت فرنگی» (فایل تکی `index.html`).

## راه‌اندازی روی گیت‌هاب (یک بار)
1. در GitHub یک مخزن **Public** بساز (مثلاً `tootfarangi`).
2. **همهٔ** فایل‌های داخل زیپ را در ریشهٔ مخزن آپلود کن: `index.html`، `manifest.json`، `sw.js` و هر سه فایل آیکن `.png` (Add file ← Upload files). اگر `manifest.json` یا `sw.js` یا آیکن‌ها نباشند، «افزودن به صفحهٔ اصلی» کار نمی‌کند.
3. Settings ← Pages ← Source: **Deploy from a branch** ← Branch: `main` / `(root)` ← Save.
4. بعد از یک دقیقه آدرس برنامه این است: `https://USERNAME.github.io/REPO/`
5. در Appwrite (Console ← پروژه ← Overview ← Platforms ← Add Web platform) مقدار `USERNAME.github.io` را اضافه کن تا ورود و ذخیره کار کند.
6. آدرس را در Safari گوشی (نه داخل برنامهٔ دیگر) باز کن ← Share ← Add to Home Screen. در اندروید: Chrome ← منوی ⋮ ← Install app.

## به‌روزرسانی
- فقط فایل `index.html` را در مخزن با نسخهٔ جدید جایگزین کن (Commit).
- برنامه خودش از آدرس github.io نام مخزن و فایل را پیدا می‌کند؛ لازم نیست لینکی وارد شود.
- گوشی بعد از باز شدن (حداکثر هر ۶ ساعت) یا با دکمهٔ «بیشتر ← به‌روزرسانی برنامه» بررسی می‌کند، تأیید می‌گیرد و نسخهٔ جدید را می‌گیرد.
