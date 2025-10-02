import Gradient_Button from "@/shared/components/ui/Gradient_Button";
import TextInput from "@/components/ui/TextInput";
import DateInput from "@/components/ui/DateInput";
export default function Page() {
  return (
    <main style={{ padding: "40px" }}>
         <div className="flex flex-col gap-4 p-8">

          <Gradient_Button size="large">SIGN IN</Gradient_Button>
        </div>

      {/* Text Input */}
      <TextInput label="First Name" placeholder="Enter your first name" />

      <br />

      {/* Date Input */}
      <DateInput label="Birthday" />
    </main>
  );
}




