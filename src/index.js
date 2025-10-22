import Resolver from "@forge/resolver";
import { asApp, assumeTrustedRoute } from "@forge/api";

const resolver = new Resolver();

resolver.define("getText", async (req) => {
  try {
    const response = await asApp().requestConfluence(
      assumeTrustedRoute("/api/v2/pages")
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
});

export const handler = resolver.getDefinitions();
