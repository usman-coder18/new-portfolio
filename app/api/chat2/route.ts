// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
// import { Pinecone } from "@pinecone-database/pinecone";
// import { PineconeStore } from "@langchain/pinecone";
// import { v4 as uuidv4 } from "uuid";
// import { NextResponse } from "next/server";

// // Memory to store conversation context based on threadId
// const conversationMemory: Record<string, string[]> = {};

// interface RequestBody {
//   message: string;
//   threadId?: string;
// }

// export async function POST(request: Request): Promise<NextResponse> {
//   try {
//     const { message, threadId }: RequestBody = await request.json();

//     // If no threadId is passed, generate a new one
//     const currentThreadId = threadId || uuidv4();

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

//     // Initialize Embeddings
//     const embeddings = new GoogleGenerativeAIEmbeddings({
//       apiKey: process.env.GEMINI_API_KEY as string,
//       modelName: "embedding-001",
//     });

//     // Initialize Pinecone Store
//     const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
//       pineconeIndex,
//       textKey: "text",
//       namespace: "portfolio-data",
//     });

//     // Retrieve previous conversation context
//     const previousContext = conversationMemory[currentThreadId] || [];

//     // Perform similarity search
//     const results = await vectorStore.similaritySearch(message, 3);
//     console.log("Results:", results);

//     // Initialize the model
//     const model = new ChatGoogleGenerativeAI({
//       apiKey: process.env.GEMINI_API_KEY as string,
//       temperature: 0.5,
//       modelName: "gemini-1.5-flash",
//     });

//     const prompt = `   
// Role: You are a helpful and friendly assistant specializing in providing information about Muhammad Usman.

// Guidelines:

// If the user greets you, respond with a friendly greeting.
// Pronouns like "he" or "his" refer to Muhammad Usman.
// If the user asks for contact information, provide more than one way to contact Muhammad Usman.
// If the user asks "How can you help me?", respond:
// "I am a helpful assistant. I can help you find information about Muhammad Usman and his work."
// Maintain a professional, cautious, and human-like tone when discussing Muhammad Usman.
// You are knowledgeable about Muhammad Usman’s background, skills, and work.
// You can retrieve relevant details from a database.
// If sufficient information is unavailable, provide his contact details and suggest reaching out to him directly.
// Muhammad Usman’s Basic Information:

// Full Name: Muhammad Usman
// Age: 22 years (Born: November 24, 2002)
// Height: 5'11" feet
// Weight: 70 kg
// Skin Tone: Brown
// Primary Contact: +92 336 6056254
// Previous conversation context:  
// ${previousContext.join("\n")}  

// Also, check additional resources if necessary:  
// Answer this question: ${message}  

// If you do not have enough information, state that clearly.  
// `;

//     console.log("invoke model");

//     const response = await model.invoke(prompt);

//     // Store both user and assistant messages for future context
//     conversationMemory[currentThreadId] = [
//       ...previousContext,
//       `User: ${message}`,
//       `Assistant: ${response}`,
//     ];

//     console.log("response / ", response.content);

//     // Return the response
//     return NextResponse.json({
//       success: true,
//       threadId: currentThreadId,
//       response: response.content,
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

//     // Handle any unknown error type
//     return NextResponse.json(
//       {
//         success: false,
//         error: "An unknown error occurred",
//       },
//       { status: 500 }
//     );
//   }
// }
