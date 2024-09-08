import { defineConfig, loadEnv } from "vite";
import fs from "fs";
import path from "path";

// Функция для обработки включений в HTML
const replaceIncludes = (html, filename) => {
  const includeRegex = /<include src="(.+?)"><\/include>/g;
  return html.replace(includeRegex, (_, src) => {
    const filePath = path.resolve(path.dirname(filename), src);
    try {
      let fileContent = fs.readFileSync(filePath, "utf-8");
      fileContent = replaceIncludes(fileContent, filePath);
      return fileContent;
    } catch (err) {
      console.error(`Error including file ${filePath}: ${err}`);
      return "";
    }
  });
};

// Плагин для обработки включений в HTML
function htmlIncludePlugin() {
  return {
    name: "html-include-plugin",
    enforce: "pre",
    transformIndexHtml(html, { filename }) {
      return replaceIncludes(html, filename);
    },
  };
}

// Загрузка переменных окружения
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_URL || "/",
    build: {
      outDir: "build",
    },
    plugins: [htmlIncludePlugin()],
  };
});
