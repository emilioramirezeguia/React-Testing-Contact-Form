import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("Contact form accepts inputs and adds info to screen", async () => {
    act(() => {
        render(<ContactForm />)
    });

    // Grab the text inputs
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

    // Grab the submit input
    const submitButton = screen.getByRole("button", /submit/i);

    act(() => {
        // Fire the change event
        fireEvent.change(firstNameInput, { target: { value: "Emilio" } })
        fireEvent.change(lastNameInput, { target: { value: "Ramirez" } })
        fireEvent.change(email, { target: { value: "e@e.com" } })
        fireEvent.change(message, { target: { value: "Hello, I'm a student at Lambda School" } })

        // Fire the submit event
        fireEvent.submit(submitButton);


    });

    const success = await screen.findByTestId("success");
    expect(success).toBeInTheDocument();

    // expect.objectContaining(expect.anything());
})