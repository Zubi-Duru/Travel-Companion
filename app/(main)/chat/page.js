"use client";
// import DMChat from "@/app/components/chat/DMChat";
import dynamic from 'next/dynamic';
const DMChatWithNoSSR = dynamic(() => import('@/app/components/chat/DMChat'), {
  ssr: false
});

export default function Chat() {


  return (
    <div>
      <DMChatWithNoSSR />
    </div>
  );
}
