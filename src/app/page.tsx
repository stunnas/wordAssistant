"use client";
import { SetStateAction, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileType2Icon } from "lucide-react";


export default function Home() {
  const [text, setText] = useState('');
  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentenceCount = text.split(/[.!?]+\s*/).filter(Boolean).length;
  const paragraphCount = text.split(/\n\n+/).filter(Boolean).length;


  const handleTextChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setText(e.target.value);
  }


  const handleTextClear = () => {
    setText('');
  }


  

  return (
    
    <div className="w-screen h-screen flex flex-col md:flex-row items-start gap-8 p-6 md:p-8 lg:p-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      
      <div className="w-full md:w-[70%] h-full space-y-4">
        <Textarea className="w-full h-[95%] resize-none" placeholder="Start typing here..." value={text} onChange={handleTextChange}/>
        <div className="h-[5%] w-full flex justify-center md:justify-start ">
          <div className="flex items-center justify-center p-4 border rounded shadow-2xl ">
            <FileType2Icon className="h-6 w-6" />
            <h1 className="text-black text-lg font-semibold ml-2">Word Assistant</h1>
          </div>
          
        </div>
      </div>
      <div className="w-full md:w-[30%] space-y-4">
        <div className="p-6 md:p-8 rounded-lg shadow-lg space-y-4 bg-white dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Text Statistics</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 border rounded-xl">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Characters</p>
              <p className="text-2xl font-bold">{charCount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Words</p>
              <p className="text-2xl font-bold">{wordCount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Sentences</p>
              <p className="text-2xl font-bold">{sentenceCount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Paragraphs</p>
              <p className="text-2xl font-bold">{paragraphCount}</p>
            </div>
          </div>
        </div>
        <div className="space-x-2">
          <Button onClick={handleTextClear}>Clear</Button>
        </div>
      </div>
    </div>
    
  );
}

