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

const RegisterAreaStore = ({ title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}登録</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          {title === "店舗" && (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">エリア選択</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="選択して下さい" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">茅場町八丁堀</SelectItem>
                  <SelectItem value="sveltekit">どこか</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{title}名</Label>
              <Input id="name" placeholder={`${title}名を入力して下さい`} />
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

export default RegisterAreaStore;
