import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd(), "")};
  // import.meta.env.YinYang -> process.env.YinYang

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
  });
};
