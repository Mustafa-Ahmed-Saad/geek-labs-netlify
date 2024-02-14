import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRouters from "./routers";

const App = () => <RouterProvider router={appRouters} />;

export default App;
