import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { useState } from "react";

const RegisterAreaStore = ({ title, onSubmit }) => {
  const [areaName, setAreaName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name: areaName });
    setAreaName("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}登録</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
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
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{title}名</Label>
              <Input
                id="name"
                placeholder={`${title}名を入力して下さい`}
                value={areaName}
                onChange={(e) => setAreaName(e.target.value)}
                required
              />
            </div>
            <Button>登録</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterAreaStore;
