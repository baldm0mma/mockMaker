import { program } from "commander";
// import ts from "typescript";
// import { readFileSync } from "fs";
// import { parse } from "react-docgen";
// const reactDocgen = import("react-docgen");
import * as reactDocgen from "react-docgen-typescript";

// Parse the command line arguments
program.parse(process.argv);

// Access the arguments directly
const [componentName, componentPath] = program.args;

export const generateProps = async () => {
  // Read component file
  // const fileContent = readFileSync(componentPath, "utf8");
  // console.log(fileContent, "fileContent");

  const parser = reactDocgen.parse;
  const result = parser(componentPath);
  console.log(result[0].props, "propTypeResults");

  // console.log(`name: ${componentName}, path: ${componentPath}`);
};

generateProps();
