import { rubik, notoSans } from "@/lib/fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="ru" className={`${rubik.variable} ${notoSans.variable}`}>
      <body className="min-h-dvh bg-bg text-text flex items-center justify-center p-8">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-bold">Такой страницы нет</h1>
          <p>Вернитесь на главную.</p>
          <Link href="/ru" className="underline underline-offset-2">
            На главную
          </Link>
        </div>
      </body>
    </html>
  );
}
