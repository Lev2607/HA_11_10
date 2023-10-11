import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputText1 from "@/components/InputText1";
import InputText2 from "@/components/InputText2";
import InputText3 from "@/components/InputText3";

export default function Home() {
  return (
    <div>
      <main>
        <Navigation
          backgroundColor="blue"
          border="1px solid red"
          padding="0.5rem"
          display="flex"
          gap="1rem"
        />
        <h1>Willkommen zu meinem Reiseblog</h1>
        <InputText1 
        border="1px solid red"
        bgColor="yellow"
        color="blue"
        />
        <br />
        <InputText2
        border="1px solid red"
        bgColor="black"
        color="green"
        />
        <br />
        <InputText3
        border="1px solid red"
        bgColor="red"
        color="white"
        />
      </main>
      <br />
      <Footer 
      bgColor="orange" 
      color="green" 
      border="1px solid red"
      />
    </div>
  );
}
