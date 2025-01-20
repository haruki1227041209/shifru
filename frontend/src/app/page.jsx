import { redirect } from "next/navigation";

export default function Home() {
  // ルートにアクセスしたら /login にリダイレクト
  redirect("/login");
}
