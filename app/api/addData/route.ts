import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { readTextFile } from "@/utils/fileLoader";
import path from "path";
import { NextResponse } from "next/server";

// Define the structure for the response data
interface ResponseData {
  success: boolean;
  message?: string;
  error?: string;
}

export async function POST(): Promise<NextResponse<ResponseData>> {
  try {
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY as string,
    });

    const indexName = process.env.PINECONE_INDEX as string; 
    const pineconeIndex = pinecone.Index(indexName);

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GEMINI_API_KEY as string,
      modelName: "embedding-001",
    });

    const [textData] = await Promise.all([
      readTextFile(path.join(process.cwd(), "public/data/about-me.txt")),
    ]);

    const combinedData = `
      PORTFOLIO_TEXT: ${textData}
    `;

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const docs = await textSplitter.createDocuments([combinedData]);

    const vectorStore = await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex,
      textKey: "text",
      namespace: "portfolio-data",
    });

    return NextResponse.json({
      success: true,
      message: "Data stored successfully in Pinecone",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Pinecone Error:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }
    // If error is not an instance of Error
    return NextResponse.json(
      {
        success: false,
        error: "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
