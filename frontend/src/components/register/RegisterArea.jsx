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
import { useState } from "react";

const RegisterArea = ({ title, onSubmit }) => {
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

export default RegisterArea;
