const ContactItem = (props) => {
    return (
        <div className="contact-item">
            <h3 className="contact-item__name">{props.name}</h3>
            <div className="contact-item__data">
                <p className="contact-item__description">{props.description}</p>
                <p className="contact-item__address">{props.address}</p>
                <a href="#" className="contact-item__mail">{props.mail}</a>
                <h4 className="contact-item__subtitle">contact</h4>
                <a href="#" className="contact-item__data-info">{props.dataInfo}</a>
            </div>
    </div>
    )
}

export default ContactItem;