"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { handleLogin } from "@/utils/authHandler";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { roleAtom } from "@/atoms/authAtom";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const { login } = useLogin();
  // const setRole = useSetAtom(roleAtom);

  const onSubmit = (e) => handleLogin(e, login, setRole, router);

  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">ログイン</CardTitle>
          <CardDescription>アカウントにログインしてください。</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="employee">社員番号</Label>
                <Input id="employee" type="text" placeholder="00000" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">パスワード</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                ログイン
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
