import { readFile } from "fs/promises";

// Define the function signature with type annotations
export const readTextFile = async (filePath: string): Promise<string> => {
  try {
    return await readFile(filePath, "utf8");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("File Error:", error.message);
    } else {
      console.error("Unknown error occurred while reading the file.");
    }
    return "";
  }
};
