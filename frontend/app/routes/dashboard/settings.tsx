import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const COLOR_OPTIONS = [
  { name: "Blue", value: "#2563eb" },
  { name: "Green", value: "#22c55e" },
  { name: "Orange", value: "#f59e42" },
  { name: "Purple", value: "#a21caf" },
  { name: "Gray", value: "#64748b" },
  { name: "Red", value: "#ef4444" },
];

export default function SettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("My Workspace");
  const [description, setDescription] = useState("My Personal workspace");
  const [color, setColor] = useState(COLOR_OPTIONS[0].value);

  return (
    <div className="container mx-auto max-w-2xl p-4 md:p-8 grid gap-8">
      {/* Main Settings Card */}
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle>Workspace Settings</CardTitle>
          <CardDescription>Update your workspace details and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="workspace-name">Workspace Name</Label>
            <Input
              id="workspace-name"
              value={workspaceName}
              onChange={e => setWorkspaceName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="workspace-desc">Description</Label>
            <Textarea
              id="workspace-desc"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>
          <div className="grid gap-2">
            <Label>Workspace Color</Label>
            <div className="flex gap-3 flex-wrap">
              {COLOR_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  aria-label={opt.name}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none ${
                    color === opt.value
                      ? "ring-2 ring-offset-2 ring-blue-500 border-blue-500"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: opt.value }}
                  onClick={() => setColor(opt.value)}
                >
                  {color === opt.value && (
                    <span className="block w-3 h-3 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="button" variant="default" className="px-6">
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      {/* Transfer Workspace Section */}
      <div className="bg-muted/40 border rounded-xl shadow-sm p-6 flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Transfer Workspace</h2>
        <p className="text-sm text-muted-foreground">Transfer this workspace to another owner. This action is reversible.</p>
        <Button variant="secondary" className="w-fit">Transfer Workspace</Button>
      </div>

      {/* Danger Zone Section */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl shadow-sm p-6 flex flex-col gap-3">
        <h2 className="font-semibold text-lg text-destructive">Danger Zone</h2>
        <p className="text-sm text-destructive">Deleting your workspace is irreversible. All data will be lost.</p>
        <Button variant="destructive" className="w-fit">Delete Workspace</Button>
      </div>
    </div>
  );
}