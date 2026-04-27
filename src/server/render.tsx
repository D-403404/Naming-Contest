import ReactDOMServer from "react-dom/server";

import { App } from "../client/App.tsx";
import { getContests } from "../client/api-client.ts";
// import "./global.css";

const serverRender = async () => {
  try {
    const contests = await getContests();
    const initialMarkup = ReactDOMServer.renderToString(
      <App initialData={contests} />,
    );
    return { initialMarkup, initialData: contests };
  } catch (error) {
    console.error("Error fetching contests:", error);
    // Return empty data to prevent server crash
    const initialMarkup = ReactDOMServer.renderToString(
      <App initialData={[]} />,
    );
    return { initialMarkup, initialData: [] };
  }
};

export default serverRender;
