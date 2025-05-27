// "use client"
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi';

// // Define the message structure
// interface Message {
//   text: string;
//   isBot: boolean;
// }

// const ChatBot = () => {
//   const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const chatEndRef = useRef<HTMLDivElement | null>(null);

//   // Function to handle sending a message
//   const sendMessage = async (): Promise<void> => {
//     if (!inputMessage.trim()) return;

//     // Add user's message to state
//     setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);
//     setInputMessage('');
//     setLoading(true);

//     try {
//       const response = await axios.post<{ response: string }>('/api/chat2', { message: inputMessage });

//       // Add bot's response or fallback error message
//       if (response?.data?.response) {
//         setMessages((prev) => [...prev, { text: response.data.response, isBot: true }]);
//       } else {
//         setMessages((prev) => [...prev, { text: "Sorry, I couldn't understand that.", isBot: true }]);
//       }
//     } catch (error) {
//       setMessages((prev) => [...prev, { text: "Error contacting chatbot. Please try again.", isBot: true }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Scroll to bottom of chat whenever messages update
//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div>
//       <div className="fixed bottom-6 right-6">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsChatOpen(!isChatOpen)}
//           className="bg-blue-600 p-4 rounded-full shadow-lg"
//         >
//           {isChatOpen ? <FiX /> : <FiMessageSquare />}
//         </motion.button>

//         <AnimatePresence>
//           {isChatOpen && (
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0, opacity: 0 }}
//               className="absolute bottom-20 right-0 w-80 bg-gray-800 rounded-lg shadow-xl h-96 flex flex-col"
//             >
//               <div className="p-4 bg-gray-700 flex justify-between items-center">
//                 <h3 className="text-lg font-bold">Chatbot</h3>
//                 <FiX className="cursor-pointer" onClick={() => setIsChatOpen(false)} />
//               </div>

//               <div className="flex-1 overflow-y-auto p-4 space-y-3">
//                 {messages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`p-3 rounded-lg max-w-xs ${
//                       msg.isBot ? 'bg-blue-500 self-start' : 'bg-gray-600 self-end'
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 ))}
//                 {loading && (
//                   <div className="text-gray-400">
//                     <span className="animate-pulse">Bot is typing...</span>
//                   </div>
//                 )}
//                 <div ref={chatEndRef}></div>
//               </div>

//               <div className="p-3 bg-gray-700 flex">
//                 <input
//                   type="text"
//                   className="flex-1 bg-transparent outline-none text-white"
//                   placeholder="Type a message..."
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//                 />
//                 <motion.button whileTap={{ scale: 0.9 }} onClick={sendMessage}>
//                   <FiSend className="text-xl text-blue-400" />
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
