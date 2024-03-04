import { program } from "commander";
// import * as reactDocgen from "react-docgen-typescript";
import {
  createSourceFile,
  ScriptTarget,
  isTypeAliasDeclaration,
  forEachChild,
  isImportDeclaration,
  isInterfaceDeclaration,
  resolveModuleName,
  isStringLiteral,
  sys,
  createProgram,
} from "typescript";
import { readFileSync } from "fs";

// Parse the command line arguments
program.parse(process.argv);

// Access the arguments directly
const [componentName, componentPath] = program.args;

// export const generateProps = async () => {
//   // const result = reactDocgen.parse(componentPath);
//   // console.log(result[0].props.content.declarations, "propTypeResults");
//   // // console.log(`name: ${componentName}, path: ${componentPath}`);
//   // const sourceFile = ts.createSourceFile(
//   //   componentName,
//   //   readFileSync(componentPath, "utf8"),
//   //   ts.ScriptTarget.Latest
//   // );

//   // // @ts-ignore
//   // console.log("sourceFile: ", sourceFile);

//   // if (
//   //   ts.isInterfaceDeclaration(sourceFile) ||
//   //   ts.isTypeAliasDeclaration(sourceFile)
//   // ) {
//   //   console.log("Declared type: ", sourceFile);
//   //   // You can do more processing based on the type information if needed
//   // }
// };
// function parseTypescriptFile(
//   filePath: string
//   // parsedFiles = new Set()
// ) {
//   // Check if the file has already been parsed to avoid infinite loops for circular dependencies
//   // if (parsedFiles.has(filePath)) {
//   //   return [];
//   // }

//   // parsedFiles.add(filePath);

//   const fileContent = readFileSync(filePath, "utf8");

//   const sourceFile = createSourceFile(
//     filePath,
//     fileContent,
//     ScriptTarget.Latest,
//     true
//   );

//   console.log(sourceFile, "sourceFile");

//   const typeDefinitions: any = [];

//   function visit(node: any) {
//     // if (isImportDeclaration(node) && isStringLiteral(node.moduleSpecifier)) {
//       // const importFilePath = getImportedFilePath(
//       //   node.moduleSpecifier.text,
//       //   filePath
//       // );

//       // if (!importFilePath) {
//       //   const importedTypeDefinitions = parseTypescriptFile(
//       //     // @ts-ignore
//       //     importFilePath,
//       //     parsedFiles
//       //   );
//       //   typeDefinitions.push(...importedTypeDefinitions);
//       // }
//     // }

//     // if (isTypeAliasDeclaration(node)) {
//     //   typeDefinitions.push({
//     //     name: node.name.escapedText,
//     //     type: node.type.getText(),
//     //   });
//     // }

//     // forEachChild(node, visit);
//   }

//   // function getImportedFilePath(moduleSpecifier: any, currentFilePath: any) {
//   //   const resolvedModule = resolveModuleName(
//   //     moduleSpecifier,
//   //     currentFilePath,
//   //     {},
//   //     sys
//   //   ).resolvedModule;

//   //   // Check if resolvedModule is defined and has a resolvedFileName
//   //   return (resolvedModule && resolvedModule.resolvedFileName) || null;
//   // }

//   visit(sourceFile);

//   console.log(typeDefinitions, "typeDefinitions");
//   return typeDefinitions;
// }

function scanFile(componentPath: string) {
  const fileContent = readFileSync(componentPath, "utf8");
  const sourceFile = createSourceFile(
    componentPath,
    fileContent,
    ScriptTarget.Latest,
    true
  );
  // console.log(sourceFile, "sourceFile");
  // @ts-ignore
  console.log(sourceFile.name.escapedText, "sourceFile?.fileName.getText()");

  const typeMap = new Map();

  function visit(node: any) {
    if (isTypeAliasDeclaration(node) || isInterfaceDeclaration(node)) {
      // typeMap.set(node.name.getText(), node);
    }

    forEachChild(node, visit);
  }

  visit(sourceFile);

  // console.log(typeMap, "typeMap");
  return typeMap;
}

scanFile(componentPath);
