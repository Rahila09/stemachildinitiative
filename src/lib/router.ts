import { useEffect, useState } from "react";

export type Route = "home" | "about" | "programmes" | "impact" | "teams" | "contact";

const routeMap: Record<string, Route> = {
  "": "home",
  "/": "home",
  "/about": "about",
  "/programmes": "programmes",
  "/impact": "impact",
  "/teams": "teams",
  "/contact": "contact",
};

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, "").split("?")[0];
  return routeMap[hash] ?? "home";
}

export function getHashParam(name: string): string {
  const q = window.location.hash.split("?")[1] ?? "";
  return new URLSearchParams(q).get(name) ?? "";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash());
  useEffect(() => {
    const onChange = () => {
      const next = parseHash();
      setRoute((prev) => {
        if (prev !== next) {
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        }
        return next;
      });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function useHashParam(name: string): string {
  const [value, setValue] = useState<string>(() => getHashParam(name));
  useEffect(() => {
    const onChange = () => setValue(getHashParam(name));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, [name]);
  return value;
}

export const routeHrefs: Record<Route, string> = {
  home: "#/",
  about: "#/about",
  programmes: "#/programmes",
  impact: "#/impact",
  teams: "#/teams",
  contact: "#/contact",
};
