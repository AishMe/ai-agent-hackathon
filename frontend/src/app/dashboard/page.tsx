import ChatHelp from "@/components/ChatHelp";
import ChatInput from "@/components/ChatInput";

export default function Dashboard() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center px-2">
        <div className="mx-auto flex flex-col items-center gap-5 w-full">
          <h2 className="text-xl md:text-3xl font-semibold text-white px-4">
            What can I help you with?
          </h2>
          <ChatInput />
          <ChatHelp />
        </div>
      </main>
  )
}
