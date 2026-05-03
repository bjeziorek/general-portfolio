import type { JSX } from "react";

export const pageCache = new Map<string, JSX.Element>();

export const snippetCache = new Map<string, JSX.Element[]>()