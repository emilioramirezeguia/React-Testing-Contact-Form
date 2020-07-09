import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Contact form accepts inputs and adds info to screen", () => {
    render(<ContactForm />)
})