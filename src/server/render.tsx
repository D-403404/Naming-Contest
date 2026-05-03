import ReactDOMServer from "react-dom/server";

import { App } from "../client/App.tsx";
import {
  getContests,
  getContestById,
} from "../client/api-client.ts";

const serverRender = async (req: any) => {
  try {
    console.log("Request params:", req.params);
    const { id } = req.params;
    const initialData = id
      ? { currentContest: await getContestById(id) }
      : { contests: await getContests() };

    const initialMarkup = ReactDOMServer.renderToString(
      <App initialData={initialData} />,
    );
    return { initialMarkup, initialData };
  } catch (error) {
    console.error("Error fetching contests:", error);

    // Return empty data to prevent server crash
    const initialMarkup = ReactDOMServer.renderToString(
      <App initialData={null} />,
    );
    return { initialMarkup, initialData: null };
  }
};

export default serverRender;
