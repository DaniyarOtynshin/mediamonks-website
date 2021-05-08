import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';

const Contact = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
    })

    return (
        <section className="contact">
            <h2 className="contact__title">contact</h2>
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
            <ContactItem
                name="hilversum"
                description="Located just twenty minutes away from Amsterdam Central Station, our Hilversum office is where we produce the majority of our work. We’ve been here ever since 2001, growing from a 3-Monk basement to 86,000 square feet of multimedia muscle."
                address="Oude Amersfoortseweg 125 1212AA Hilversum The Netherlands"
                mail="hilversum@mediamonks.com +31 35 621 21 50"
                dataInfo="hilversum@mediamonks.com +31 35 621 21 50"
            />
        </section>
    )
};

export default Contact;

