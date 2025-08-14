"use client";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { Icon } from "leaflet";
import * as Yup from "yup";
import { withFormik, FormikProps } from "formik";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
import "leaflet/dist/leaflet.css";

import Button from "@/components/UI/Button";
import FAQ from "@/components/UI/FAQ";
import Input from "@/components/UI/Input";

import { motion } from "motion/react";
import Form from "@/components/UI/Form";
import { slideFromLeft } from "@/lib/variants";
import { TContactItemProps } from "@/lib/types";
import { contactInfoData } from "@/lib/contants";

// Shape of form values

interface FormValues {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  return (
    <section>
      <Banner
        path="Home / Contact"
        title="Contact Us"
        description="Get in touch with our team for inquiries, support, or custom IT solutions tailored to your business needs."
      />
      <ContactWithoutBanner></ContactWithoutBanner>

      <FAQ></FAQ>
    </section>
  );
};

export default Contact;

export const ContactWithoutBanner = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { isSubmitting } = props;

    return (
      <Form className="">
        {/* fullname */}

        <Input
          type="input"
          name="fullname"
          placeholder="name"
          label="name"
          customClass="md:col-span-1"
        ></Input>

        {/* email*/}

        <Input
          type="email"
          name="email"
          placeholder="email"
          customClass="md:col-span-1"
        ></Input>

        {/* subject*/}

        <Input
          type="input"
          placeholder="subject"
          name="subject"
          customClass="md:col-span-2"
        ></Input>

        {/* message */}

        <Input
          type="input"
          name="message"
          inputType="textarea"
          customClass="md:col-span-2"
          rows={8} // Optional: controls height
          placeholder="Your message..."
        ></Input>

        <Button
          text="Submit"
          type="submit"
          disabled={isSubmitting}
          customClass="self-center mt-4 md:col-span-2"
        ></Button>
      </Form>
    );
  };

  interface MyFormProps {
    initialEmail?: string;
    initialfullname?: string;
    initialMessage?: string;
    initialSubject?: string;
  }

  const ContactSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string()
      .required("Subject is required")
      .min(5, "Subject must be at least 5 characters"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
  });

  const MyForm = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values

    mapPropsToValues: (props) => {
      return {
        email: props.initialEmail || "",
        fullname: props.initialfullname || "",
        message: props.initialMessage || "",
        subject: props.initialSubject || "",
      };
    },

    validationSchema: ContactSchema,
    handleSubmit: (values) => {
      console.log("values:", values);
      // do submitting things
    },
  })(InnerForm);
  return (
    <section className="container">
      <TitleDescription
        title="Contact us for any Questions "
        subtitle="Contact "
        des="We’re here to provide the answers you need. Our team ensures clear communication and reliable support to help you achieve your goals with confidence."
      ></TitleDescription>

      <motion.div className="flex flex-col gap-8  justify-between md:flex-row ">
        <motion.div
          variants={slideFromLeft}
          initial="initial"
          whileInView="animate"
          animate="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start gap-6  flex-1/2"
        >
          <h1 className=" text-2xl md:text-3xl text-dark-gray font-bold mb-2">
            contact info :{" "}
          </h1>

          {contactInfoData.map((x) => (
            <ContactItem key={x.id} {...x}></ContactItem>
          ))}
        </motion.div>
        <MyForm />
      </motion.div>
      <MyMap></MyMap>
    </section>
  );
};

const ContactItem = ({ icon: Icon, info = "" }: TContactItemProps) => {
  return (
    <div className="flex items-center gap-4 text-dark-gray ">
      <Icon className="text-primary contact-icon"></Icon>
      <p className="font-bold text-md md:text-lg">{info}</p>
    </div>
  );
};

export function MyMap() {
  const [hovered, setHovered] = useState(false);
  const [customIcon, setCustomIcon] = useState<Icon | null>(null);

  // Custom icon for better visual appearance
  useEffect(() => {
    (async () => {
      const L = await import("leaflet");
      const icon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        shadowSize: [41, 41],
      });
      setCustomIcon(icon);
    })();
  }, []);

  if (!customIcon) return null;
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="shadow-md rounded-2xl mt-8 overflow-hidden"
      style={{
        height: "350px",
        width: "100%",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: hovered ? "grayscale(0%)" : "grayscale(80%)",
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: { duration: 0.6, ease: "backOut" },
        filter: { duration: 0.5, ease: "easeInOut" },
      }}
      whileHover={{
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.3s ease",
          transform: hovered ? "scale(1.01)" : "scale(1)",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker
          position={[51.505, -0.09]}
          icon={customIcon}
          eventHandlers={{
            mouseover: (e) => e.target.openPopup(),
            mouseout: (e) => e.target.closePopup(),
          }}
        >
          <Popup className="font-sans">
            <div className="text-sm font-medium">
              Hello from <span className="text-blue-600">Leaflet!</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}
