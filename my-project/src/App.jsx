import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

function App() {
  return (
    <div>
      <div className="w-screen p-7 bg-green-500 font-bold text-white text-3xl">
        Todo list
      </div>
      <div className="w-72 p-10">
        <div className="grid gap-2">
          <Label>Search</Label>
          <Input type="text" id="name" placeholder="Searching..." />
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="bg-green-500 hover:bg-green-700"
              >
                Add new
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4 ">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="">
                    Name
                  </Label>
                  <Input id="name" className="col-span-10" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="descripton" className="">
                    Descripton
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    className="col-span-full"
                  />
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="">
                      Date
                    </Label>
                    <Input id="date" type="date" className="col-span-10" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Done
                    </label>
                  </div>
                  <div>
                  <Button
                    variant="default"
                    className="bg-green-500 text-white"
                    onClick={() => {
                      toast({
                        description: "Add new",
                      });
                    }}
                  >
                    Save
                  </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default App;
