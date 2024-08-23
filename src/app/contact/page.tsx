import ContactSection from "@/components/ContactUs/Cards/cards";
import Map from "@/components/ContactUs/Map/map";
import SubHeader from "@/components/ContactUs/SubHeader/startingView";
import data from "@/components/ContactUs/data.json";
import { Form } from "@/components/Form";


export default function ContactUs() {
  return (
    <div>
      <SubHeader data={data} />
      <ContactSection data={data.contactData} />
      <div id="overlay"></div>
      {/* <Map src={data.maps} /> */}
      <Form />
    </div>
  );
}
