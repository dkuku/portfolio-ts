import * as React from 'react'

const Techlist = ({technology}: {technology: string[]}) => {
    const techlist= technology.map((tech, index) => (
        <li key={index} >{tech}</li>
    ));
    return (
        <div>
            <ul>
            {techlist}
        </ul>
    </div>
    )
}

export default Techlist;
