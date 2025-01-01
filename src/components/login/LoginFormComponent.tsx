"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const LoginFormComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowAndHidePassword = () => {
    setShowPassword((state: boolean) => !state);
  };

  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Please enter your email."
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Please enter your password."
                required
              />
              {showPassword ? (
                <EyeOff
                  style={{ cursor: "pointer" }}
                  onClick={toggleShowAndHidePassword}
                />
              ) : (
                <Eye
                  style={{ cursor: "pointer" }}
                  onClick={toggleShowAndHidePassword}
                />
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginFormComponent;
