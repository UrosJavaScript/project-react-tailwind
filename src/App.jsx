import { Route, Routes } from "react-router-dom";

import Layout from "./component/Layout";
import Home from "./component/Home";
import News from "./component/News";
import Gadgest from "./component/Gadgest";
import Videos from "./component/Videos";
import Reviews from "./component/Reviews";
import Contact from "./component/Contact";
import DisplayNews from "./component/DisplayNews";
import NotFound from "./component/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/gadgest" element={<Gadgest />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-list/:id" element={<DisplayNews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
