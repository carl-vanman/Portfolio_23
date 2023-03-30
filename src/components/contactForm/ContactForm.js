import React from "react";
import Section from "../section/Section";

import utils from "../../styles/utils.module.css";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
    return (
        <Section id={"contact"} style={{ display: "grid", placeItems: "center" }}>
            <div className={styles.wrapper}>
                <h2 className={`${utils.xl_heading}`}>Contact</h2>
                <p className={utils.body_text}>
                    If you'd like to get in touch with me, please feel free to
                    use the form below. Have a awesome day!
                </p>
                <form
                    className={styles.container}
                    target="_blank"
                    action="https://formsubmit.co/vanman.carl@gmail.com"
                    method="POST"
                >
                    <input
                        type="text"
                        name="name"
                        className={`${utils.body_text_light} ${styles.form_control} ${styles.input}`}
                        placeholder="Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        className={`${utils.body_text_light} ${styles.form_control} ${styles.input}`}
                        placeholder="Email"
                        required
                    />

                    <textarea
                        placeholder="Message"
                        className={`${utils.body_text_light} ${styles.form_control} ${styles.input_area}`}
                        name="message"
                        rows="10"
                        spellCheck="true"
                        required
                    />
                    <button
                        type="submit"
                        className={`${utils.body_text} ${styles.submit_button}`}
                    >
                        Send
                    </button>
                    {/* Possibility to redirect user after submit with line below */}
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                </form>
            </div>
        </Section>
    );
};

export default ContactForm;
