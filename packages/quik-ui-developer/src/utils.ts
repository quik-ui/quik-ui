import { lazy } from "react";

function loadComponents(...args: string[]) {
  return args.map((name) => {
    return lazy(() => import(name));
  });
}
