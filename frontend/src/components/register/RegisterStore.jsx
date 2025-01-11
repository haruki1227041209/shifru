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

const RegisterStore = ({ title, onSubmit, areas }) => {
  const [selectedAreaName, setSelectedAreaName] = useState("");
  const [titleName, setTitleName] = useState("");
  const [storeNumber, setStoreNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedArea = areas.find((area) => area.name === selectedAreaName);
    const selectedAreaId = selectedArea.id;

    const payload = {
      name: titleName,
      store_number: Number(storeNumber),
      area_id: selectedAreaId,
    };

    onSubmit(payload);
    setTitleName("");
    setSelectedAreaName("");
    setStoreNumber("");
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
                <Select
                  value={selectedAreaName}
                  onValueChange={(value) => setSelectedAreaName(value)}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="選択して下さい" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {areas.map((area) => (
                      <SelectItem key={area.id} value={area.name}>
                        {area.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Label htmlFor="storeNumber">店舗番号</Label>
                <Input
                  id="storeNumber"
                  placeholder={`店舗番号を入力して下さい`}
                  value={storeNumber}
                  onChange={(e) => setStoreNumber(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{title}名</Label>
              <Input
                id="name"
                placeholder={`${title}名を入力して下さい`}
                value={titleName}
                onChange={(e) => setTitleName(e.target.value)}
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

export default RegisterStore;
