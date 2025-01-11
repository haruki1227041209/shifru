import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterStaff = ({ title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}登録</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            {title === "スタッフ" && <></>}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">店舗選択</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="選択して下さい" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">茅場町</SelectItem>
                  <SelectItem value="sveltekit">八丁堀</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{title}名</Label>
              <Input id="name" placeholder={`${title}名を入力して下さい`} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="employeeNumber">社員番号</Label>
              <Input
                id="employeeNumber"
                placeholder="社員番号を登録して下さい"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">パスワード</Label>
              <Input id="password" placeholder="パスワードを入力して下さい" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>登録</Button>
      </CardFooter>
    </Card>
  );
};

export default RegisterStaff;
