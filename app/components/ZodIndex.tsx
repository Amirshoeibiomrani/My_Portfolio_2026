"use client";

import { useState } from "react";
import { z } from "zod";//فراخوانی Zod برای ساخت schema


//تعریف مدل داده و قاعده‌های اعتبارسنجی
const formSchema = z.object({
  name: z.string().nonempty("نام الزامی است"),
  email: z.string().email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز باید حداقل ۶ کاراکتر باشد"),
});

// از روی schema، نوع TypeScript خودکار ساخته می‌شود
type FormData = z.infer<typeof formSchema>;

export default function ZodIndex() {
    //نگهداری وضعیت ورودی‌ها (نام، ایمیل، رمز)
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //داده را بر اساس schema بررسی می‌کند، خطا یا موفقیت برمی‌گرداند
    const result = formSchema.safeParse(data);

    if (!result.success) {
      const newErrors: { [k: string]: string } = {};
    //   لیست خطاها (مثلاً “رمز باید حداقل ۶ کاراکتر باشد”)
      result.error.errors.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    //   اگر همه داده‌ها معتبر باشند پیام موفقیت نشان می‌دهد
      alert("✅ فرم با موفقیت ارسال شد!");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-8 pt-6 pb-8 rounded w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">فرم ثبت‌نام</h1>

        <label className="block mb-2 font-semibold">نام</label>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <label className="block mt-4 mb-2 font-semibold">ایمیل</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <label className="block mt-4 mb-2 font-semibold">رمز عبور</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3 mb-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white w-full mt-6 py-2 rounded hover:bg-blue-600"
        >
          ارسال
        </button>
      </form>
    </main>
  );
}


