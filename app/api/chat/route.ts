// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
// import { Pinecone } from "@pinecone-database/pinecone";
// import { PineconeStore } from "@langchain/pinecone";
// import { NextResponse } from "next/server";

// // TypeScript Interface for Request Body
// interface RequestBody {
//   message: string;
// }

// export async function POST(request: Request): Promise<NextResponse> {
//   try {
//     const { message }: RequestBody = await request.json();

//     if (!message) {
//       return NextResponse.json(
//         { success: false, error: "Message is required" },
//         { status: 400 }
//       );
//     }

//     // Initialize Pinecone
//     const pinecone = new Pinecone({
//       apiKey: process.env.PINECONE_API_KEY as string,
//     });
//     const indexName = process.env.PINECONE_INDEX as string;
//     const pineconeIndex = pinecone.Index(indexName);

//     // Google Embeddings
//     const embeddings = new GoogleGenerativeAIEmbeddings({
//       apiKey: process.env.GEMINI_API_KEY as string,
//       modelName: "embedding-001",
//     });

//     // Create vector store using Pinecone
//     const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
//       pineconeIndex,
//       textKey: "text",
//       namespace: "portfolio-data",
//     });

//     // Perform similarity search
//     const results = await vectorStore.similaritySearch(message, 3);
//     console.log("Results:", results);

//     // Create Chat model with dynamic modelName (default to 'gemini-1.5-flash' if 'gemini-pro' is not available)
//     const model = new ChatGoogleGenerativeAI({
//       apiKey: process.env.GEMINI_API_KEY as string,
//       temperature: 0.3,
//       modelName: process.env.GEMINI_MODEL_NAME || "gemini-1.5-flash", // Use default if modelName not found
//     });

//     // Prepare prompt for response
//     const prompt = `
// Be a helpful and friendly assistant.
// If the user asks for contact information, provide more than one way to contact Muhammad Usman.
// If the user asks "How can you help me?", answer this way: "I am a helpful assistant. I can help you find information about Usman and his work."
// You are a helpful assistant. You can help in finding information about Usman and his work.
// You will answer the queries about Usman very humanly, professionally, and cautiously.
// You are a knowledgeable assistant about Usman and his work.
// You can retrieve relevant information from a database and scrape data as needed.
// If you do not have enough information, provide contact info and suggest contacting Usman directly.

// Please respond to the following message in a concise and professional manner:

// Based on the following context:
// ${results.map(r => r.pageContent).join("\n")}
// Usman learned web development and coding from Gamica Cloud (GAMICA Initiative for Artificial Intelligence & Computing (GIAIC) by Sir Khurram Raheel).

// Also, check additional resources if necessary:
// Answer this question: ${message}

// If you do not have enough information, state that clearly.
// `;

//     // Get response from the model
//     const response = await model.invoke(prompt);

//     return NextResponse.json({
//       success: true,
//       response: response,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Chat Error:", error.message);
//       return NextResponse.json(
//         {
//           success: false,
//           error: error.message,
//         },
//         { status: 500 }
//       );
//     }
//     return NextResponse.json(
//       {
//         success: false,
//         error: "An unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }
