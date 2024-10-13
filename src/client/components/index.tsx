import "@styles/body.scss";

import { Sidebar } from "./sidebar";
import { MainPage } from "./main-page";

export const EntryPoint = () => {

  return (
    <div className="page-container">
      <Sidebar />
      <MainPage />
    </div>
  );
}

