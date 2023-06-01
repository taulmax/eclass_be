import React from "react";
import "./assets/css/reset.css";
import "./assets/css/styles.css";
import "react-quill/dist/quill.snow.css";
import Header from "./components/Header";
import GnuIndex from "./components/GnuIndex";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div id="app">
      {/* Header UI */}
      <Header />

      {/* 교육현황, 커뮤니티, 소개 UI */}
      <GnuIndex />

      {/* 일정 컴포넌트(기능 구현은 여기에 다 담겨있음) */}
      <Schedule />

      {/* Footer UI */}
      <Footer />

      {/* Toast Library */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
