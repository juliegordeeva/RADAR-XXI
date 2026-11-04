import { registerHooks } from "node:module";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(
        pathToFileURL(resolve(specifier.slice(2) + ".ts")).href,
        context,
      );
    }
    return nextResolve(specifier, context);
  },
});
