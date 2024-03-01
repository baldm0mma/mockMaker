// propGenerator.ts
import { writeFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'react-docgen';

function generateMockProps(componentPath: string): void {
  // Load your component file and extract prop types using a tool like react-docgen
  // const componentContent = componentPath
  const componentInfo = parse(componentPath);

  console.log('componentInfo', componentInfo);

  // Generate mock props using TypeScript type information
  // const mockProps = generateMockPropsFromTypes(componentInfo.props);

  // Write mock props to a .ts file
  // const outputFilePath = join(__dirname, 'mockProps.ts');
  // writeFileSync(outputFilePath, `export const mockProps = ${JSON.stringify(mockProps, null, 2)};`);

  // console.log(`Mock props generated successfully and saved to ${outputFilePath}`);
}

// Helper function to generate mock props from TypeScript types
function generateMockPropsFromTypes(types: Record<string, any>): Record<string, any> {
  const mockProps: Record<string, any> = {};

  Object.keys(types).forEach((propName) => {
    const propType = types[propName];

    // Handle different types as needed
    if (propType.name === 'string') {
      mockProps[propName] = 'mockString';
    } else if (propType.name === 'number') {
      mockProps[propName] = 42;
    } else if (propType.name === 'boolean') {
      mockProps[propName] = true;
    } else if (propType.name === 'object') {
      // You may need to recursively generate mock props for nested objects
      mockProps[propName] = generateMockPropsFromTypes(propType.value);
    } else if (propType.name === 'arrayOf') {
      // Handle array types
      mockProps[propName] = [generateMockPropsFromTypes(propType.value)];
    }
    // Add more cases based on your specific types

    // You can also handle required and default values here if needed
  });

  return mockProps;
}

export { generateMockProps };
