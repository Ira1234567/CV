import React from "react"

const Contacts = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.phoneTitle}<a href='tel:+380676461393'>{props.phoneNumber}</a></p>
            <p>{props.emailTitle}<a href='mailto:iryna.smyrnova12@gmail.com'>{props.email}</a></p>
        </div>
    )
}

export default Contacts