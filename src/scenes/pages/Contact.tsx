"use client";
import Banner from "@/components/UI/Banner";
import TitleDescription from "@/components/UI/TitleDescription";
import React, { useState } from "react";

import dynamic from "next/dynamic";

import * as Yup from "yup";

import { withFormik, FormikProps, FormikErrors, Form } from "formik";

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

import { Mail, Pin } from "lucide-react";
import { MapPin } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Building2 } from "lucide-react";
import Button from "@/components/UI/Button";
import FAQ from "@/components/UI/FAQ";
import Input from "@/components/UI/Input";

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
        path="Home/contact"
        title="contact us"
        description="Although, final stages of the internal network gives a complete experience of The Parameter of Speculative Environment "
      ></Banner>
      <ContactWithoutBanner></ContactWithoutBanner>

      <FAQ></FAQ>
    </section>
  );
};

export default Contact;

export const ContactWithoutBanner = () => {
  const InnerForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;

    return (
      <Form className="flex flex-col gap-4 flex-1/2 order-1 md:order-2">
        {/* fullname */}

        <Input type="fullname" name="fullname" placeholder="name"></Input>

        {/* email*/}

        <Input type="email" name="email" placeholder="email"></Input>

        {/* subject*/}

        <Input type="subject" placeholder="subject" name="subject"></Input>

        {/* message */}

        <Input
          type="message"
          name="message"
          inputType="textarea"
          rows={8} // Optional: controls height
          placeholder="Your message..."
        ></Input>

        <div className="self-center mt-4">
          <Button text="Submit" type="submit" disabled={isSubmitting}></Button>
        </div>
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
      .required("Full name is required")
      .min(3, "Full name must be at least 3 characters"),
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
        title="contact us for Any Questions "
        subtitle="contact "
        des="As a matter of fact the unification of the coherent software provides a strict control over The Accomplishment of Intended Estimation "
      ></TitleDescription>

      <div className="flex flex-col  justify-between md:flex-row capitalize gap-8 ">
        <div className="flex flex-col items-start gap-6 flex-1/2 order-2 md:order-1 ">
          <h1 className="text-2xl text-dark-gray font-bold mb-2">
            contact info :{" "}
          </h1>

          <div className="flex items-center gap-4">
            <Mail size={36} className="text-primary"></Mail>
            <p className="font-bold text-lg">example@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Smartphone size={36} className="text-primary"></Smartphone>
            <p className="font-bold text-lg">+213 456 6789</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin size={36} className="text-primary"></MapPin>
            <p className="font-bold text-lg">
              A108 Adam Street, New York, NY 535022
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Building2 size={36} className="text-primary"></Building2>
            <p className="font-bold text-lg">techida-company</p>
          </div>

          <MyMap></MyMap>
        </div>
        <MyForm />
      </div>
    </section>
  );
};

export function MyMap() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      className="shadow-md rounded-2xl"
      onMouseLeave={() => setHovered(false)}
      style={{
        height: "250px",
        width: "100%",
        filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
        transition: "filter 0.3s ease",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          width: "100%",
          height: "100%", // fills the wrapper
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Hello from Leaflet!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
