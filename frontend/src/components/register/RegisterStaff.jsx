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

const RegisterStaff = ({ title, onSubmit, stores }) => {
  const [selectedStoreName, setSelectedStoreName] = useState("");
  const [staffName, setStaffName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedStore = stores.find(
      (store) => store.name === selectedStoreName
    );
    const selectedStoreId = selectedStore.id;

    const payload = {
      name: staffName,
      employee_number: Number(employeeNumber),
      password: password,
      store_id: selectedStoreId,
    };

    if (title === "店長") {
      payload.is_manager = true;
    }

    onSubmit(payload);
    setStaffName("");
    setSelectedStoreName("");
    setEmployeeNumber("");
    setPassword("");
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
            {title === "スタッフ" && <></>}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="store">店舗選択</Label>
              <Select
                value={selectedStoreName}
                onValueChange={(value) => setSelectedStoreName(value)}
              >
                <SelectTrigger id="store">
                  <SelectValue placeholder="選択して下さい" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {stores.map((store) => (
                    <SelectItem key={store.id} value={store.name}>
                      {store.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{title}名</Label>
              <Input
                id="name"
                placeholder={`${title}名を入力して下さい`}
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="employeeNumber">社員番号</Label>
              <Input
                id="employeeNumber"
                placeholder="社員番号を登録して下さい"
                value={employeeNumber}
                onChange={(e) => setEmployeeNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="text"
                placeholder="パスワードを入力して下さい"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <Button>登録</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterStaff;
